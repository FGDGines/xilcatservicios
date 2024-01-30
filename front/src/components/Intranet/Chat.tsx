import { useEffect, useRef, useState } from 'react';
import { chat, decodedPayloadOrNull } from './../../socket';
import { toast } from 'react-toastify';

interface Message {
    readonly id: string;
    readonly message: string;
    readonly auth: Auth
    readonly created_at: string
    readonly updated_at: string
}

interface Auth {
    readonly id: string;
    readonly username: string;
    readonly created_at: string
    readonly updated_at: string
}

type KeyUserRole = keyof typeof UserRole;
enum UserRole {
    ADMINISTRATOR = 'Administrador',
    LAWYER = 'Abogado',
    ADVISER = 'Asesor',
    CLIENT = 'Cliente'
}

interface User {
    id: number;
    username: string;
    rol: KeyUserRole;
    activo: boolean;
    online: boolean;
    imagePath: string | null;
    created_at: string;
    updated_at: string;
}

// function ConnectionState({ isConnected }) {
//     return <p>State: {'' + isConnected}</p>;
// }

export const Chat = () => {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSocket, setIsLoadingSocket] = useState(true);
    const [messages, setMessage] = useState<Message[]>([])
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        chat.connect()

        function onAuthChange(data: User[]) {
            setUsers(data)
            setIsLoadingSocket(false);
        }

        function onMessage(data: Message[]) {
            setMessage(data)
            setIsLoadingSocket(false);
        }

        function onError() {
            toast.error("Error Socket")
        }

        chat.on('on-auth-change', onAuthChange);
        chat.on('on-message', onMessage);
        chat.on('error-message', onError);

        return () => {
            chat.off('on-auth-change', onAuthChange);
            chat.off('on-message', onMessage);
            chat.off('error-message', onError);
        };
    }, []);

    const getRelativeTime = (createdAt: string): string => {
        const date = new Date(createdAt);
        const now = new Date();

        const diff = now.getTime() - date.getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) return `hace ${years} año${years !== 1 ? 's' : ''}`;
        if (months > 0) return `hace ${months} mes${months !== 1 ? 'es' : ''}`;
        if (days > 0) return `hace ${days} día${days !== 1 ? 's' : ''}`;
        if (hours > 0) return `hace ${hours} hora${hours !== 1 ? 's' : ''}`;
        if (minutes > 0) return `hace ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
        if (seconds > 0) return `hace ${seconds} segundo${seconds !== 1 ? 's' : ''}`;

        return 'justo ahora';
    };

    return (
        <div className="flex h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <main className="w-3/4 flex flex-col">
                <header className="p-4 flex bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 items-center">
                    <div className={`w-2 h-2 rounded-full  ${chat.active ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className="text-2xl font-bold px-3"> {decodedPayloadOrNull?.username}</div>
                </header>
                <div ref={messagesEndRef} className="messages flex-1 p-4 overflow-y-auto">
                    {messages.map(data =>
                        <div key={data.id} style={{ alignSelf: "flex-end" }} className={`message ${data.auth.id === decodedPayloadOrNull?.id ? " bg-gray-900 w-32 text-white ml-auto" : "incoming bg-white border w-32 "}  text-gray-700 rounded-lg p-3 mb-4  `}>
                            <small className='font-bold'>{data.auth.username}</small>
                            <p className='font-light'> {data.message}</p>
                            <p className='text-gray-500 flex'> {getRelativeTime(data.created_at)}</p>
                        </div>)}
                </div>
                <form onSubmit={e => {
                    e.preventDefault();
                    setIsLoading(true);

                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    chat.timeout(2500).emit('send-message', { auth: decodedPayloadOrNull?.id, message: e.target.message.value }, () => {
                        setIsLoading(false);
                    });
                }} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid w-full gap-1.5">
                        <input
                            className="bg-transparent border-2 border-transparent text-white placeholder-gray-300/60 rounded p-2 focus:border-gray-300 hover:border-gray-300"
                            name='message'
                            placeholder="Escribe tu mensaje aquí" />
                        <button type='submit' disabled={isLoading} className={`bg-${isLoading ? "red" : "green"}-500 text-white z-100 py-2 px-4 mt-2 rounded-lg`}>Enviar</button>
                    </div>
                </form>
            </main>
            <aside className="w-1/4 flex flex-col">
                <header className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold">Usuarios Conectados</h2>

                </header>
                <div className="flex-1 overflow-y-auto p-4 m-4">
                    <ul className="space-y-2">
                        {isLoadingSocket ? (
                            <div className="text-center py-4">
                                Cargando...
                            </div>
                        ) : (
                            users.length > 0 ? (
                                <ul>
                                    {users.map(user => (
                                        <li key={user.id} className="flex items-center space-x-4">
                                            {user.imagePath ? (
                                                <img className="w-10 h-10 rounded-full" src={user.imagePath} alt="User" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white uppercase">
                                                    {user.username.charAt(0)}
                                                </div>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="font-semibold">{user.username}</span>
                                                <span className="text-sm text-gray-600">{UserRole[user.rol]}</span>
                                            </div>
                                            <span className={`ml-auto px-2 py-1 rounded text-white ${user.online ? 'bg-green-500' : 'bg-red-500'}`}>
                                                {user.online ? 'Online' : 'Offline'}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-center py-4">
                                    No hay usuarios.
                                </div>
                            )
                        )}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

