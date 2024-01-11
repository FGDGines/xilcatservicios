import { SetStateAction, useEffect, useRef, useState } from 'react';
// import { useAuthProvider } from '../../hooks/useAuthProvider';

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

import { chat, decodedPayloadOrNull } from './../../socket.ts';

export const Chat = () => {
    const [users, setUsers] = useState<{ username: string, id: number }[]>([])
    const [online, setOnline] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessage] = useState<Message[]>([])
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

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

        function onConnect() {
            setOnline(true);
        }

        function onDisconnect() {
            setOnline(false);
        }

        function onAuthChange(data: SetStateAction<{ username: string; id: number; }[]>) {
            console.log(data)
            setUsers(data)
        }

        function onMessage(data: Message[]) {
            console.log(data)
            setMessage(data)
        }

        chat.on('connect', onConnect);
        chat.on('on-auth-change', onAuthChange);
        chat.on('on-message', onMessage);
        chat.on('disconnect', onDisconnect);

        return () => {
            chat.off('connect', onConnect);
            chat.off('disconnect', onDisconnect);
            chat.off('on-auth-change', onAuthChange);
            chat.off('on-message', onMessage);
            // chat.off('disconnect', onDisconnect);
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

    const ChatTemplate: React.FC = () => {
        return (
            <div className="fixed bottom-4 right-4 z-50 text-xs">
                <div className="chat bg-white rounded-lg shadow-xl flex flex-col">
                    <div className="center">
                        <div className="bottom-right">
                            <div className="chat bg-white rounded-lg shadow-xl w-64 h-96 flex flex-col">
                                <div className="contact bar flex items-center p-4 border-b border-gray-200 justify-between">
                                    <div className={`w-2 h-2 rounded-full  ${online ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <div className="name font-semibold ml-3"> {decodedPayloadOrNull?.username}</div>
                                    <button className="bg-red-500 text-white z-100 py-2 px-4 rounded-lg" onClick={toggleChat}>
                                        Cerrar Chat
                                    </button>
                                </div>

                                <div ref={messagesEndRef} className="messages flex-1 p-4 overflow-y-auto">
                                    {messages.map(data =>
                                        <div style={{ alignSelf: "flex-end" }} className={`message ${data.auth.id === decodedPayloadOrNull?.id ? " bg-gray-900 w-32 text-white ml-auto" : "incoming bg-white border w-32 "}  text-gray-700 rounded-lg p-3 mb-4  `}>
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
                                }} className="flex items-center border-t border-gray-200 p-4">
                                    <input

                                        name='message'
                                        placeholder="Escribe tu mensaje aquí"

                                        type="text"
                                        className="flex-1 mr-2 py-2 px-4 border border-gray-300 rounded-lg"
                                    />
                                    <button type='submit' disabled={isLoading} className={`bg-${isLoading ? "red" : "green"}-500 text-white z-100 py-2 px-4 rounded-lg`} >
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ChatLayaout: React.FC = () => {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <div className="chat bg-white rounded-lg shadow-xl flex flex-col">
                    {!isOpen ? (
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={toggleChat}>
                            Abrir Chat
                        </button>
                    ) : (
                        <ChatTemplate />
                    )}
                </div>
            </div>
        );
    };

    return (
        <div>
            <h1>Cliente WebSocket</h1>
            {online ? <div style={{ color: "green" }}>Conectado {decodedPayloadOrNull?.username}</div> : <div style={{ color: "red" }}>Desconectado</div>}
            {/* Contenido del componente */}
            <div className="col-span-1 h-96 border rounded-md overflow-auto">
                <h3 className="px-4 py-2 text-lg font-semibold border-b">Lista de Usuarios</h3>
                <ul className="divide-y divide-gray-200">
                    {users.map(user => <li key={user.username} className="flex items-center px-4 py-2">
                        <a className="ml-4" href="#">
                            {user.username ?? null}
                        </a>
                    </li>)}
                </ul>
            </div>

            <ChatLayaout />
        </div>
    );
};

