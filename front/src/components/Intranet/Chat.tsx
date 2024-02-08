import { useEffect, useRef, useState } from 'react';
import { decodedPayloadOrNull } from './../../socket';
import { toast } from 'react-toastify';
import { Socket, io } from 'socket.io-client';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

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

interface JwtPayloadWithUsername extends JwtPayload {
    readonly username: string
    readonly id: string
  }
  
export const Chat = () => {
    const [chat, setChat] = useState<Socket | null>(null)
    const navigate = useNavigate()
    const isChatLoaded = localStorage.getItem('chat-loaded')
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSocket, setIsLoadingSocket] = useState(true);
    const [messages, setMessage] = useState<Message[]>([])
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const token: string | null = window.localStorage.getItem('auth_token')
    let decodedPayload: JwtPayloadWithUsername | null = null

    if (token) decodedPayload = jwtDecode<JwtPayloadWithUsername>(token)

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (!isChatLoaded) {
            localStorage.setItem('chat-loaded', 'true')
            navigate(0)
        }
    }, [])

    useEffect(() => {
        const socket: Socket = io('http://localhost:3000', {
            auth: { token, name: decodedPayload?.username, authId: decodedPayload?.id },
            withCredentials: true,
            transports: ['websocket', 'polling'],
            extraHeaders: {
              'Access-Control-Allow-Origin': 'http://localhost:5173',
            },
            autoConnect: false,
          })
        
          setChat(socket)
          socket.connect()
          return () => {
            socket.disconnect();
          };
    }, [])

    useEffect(() => {

        function onAuthChange(data: User[]) {
            console.log('in auth before')
            setUsers(data)
            setIsLoadingSocket(false);
            console.log('in auth after')

        }

        function onMessage(data: Message[]) {
            console.log('in mssage before')

            setMessage(data)
            setIsLoadingSocket(false);
            console.log('in mssage after')

        }

        function onError() {
            toast.error("Error Socket")
        }
        if (chat) {
                    chat.on('on-auth-change', onAuthChange);
                    chat.on('on-message', onMessage);
                    chat.on('error-message', onError);
        }

        return () => {
            if (chat) {
                chat.off('on-auth-change', onAuthChange);
                chat.off('on-message', onMessage);
                chat.off('error-message', onError);
            }
        };
    }, [chat]);

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
        <div className="flex flex-col h-full overflow-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:flex-row">
            <main className="md:w-3/4 flex flex-col order-2 md:order-1">
                <header className="p-4 flex bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 items-center">
                    <div className={`w-2 h-2 rounded-full  ${ chat && chat.active ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className="text-2xl font-bold px-3"> {decodedPayloadOrNull?.username}</div>
                </header>
                <div ref={messagesEndRef} className="messages flex-1 p-4 overflow-y-auto">
                    {messages.map(data =>
                        <div key={data.id} style={{ alignSelf: "flex-end" }} className={`message ${data.auth.id === decodedPayloadOrNull?.id ? " bg-gray-900 max-w-[50%] text-white ml-auto" : "incoming bg-white border max-w-[50%] "}  text-gray-700 rounded-lg p-3 mb-4  `}>
                            <p className='font-bold flex gap-2 text-xs'>
                                {data.auth.username}
                                {' '}
                                <p className='text-gray-500 flex text-[10px] italic'> {getRelativeTime(data.created_at)}</p>
                            </p>
                            <p className='font-light'> {data.message}</p>
                            {/* <p className='text-gray-500 flex'> {getRelativeTime(data.created_at)}</p> */}
                        </div>)}
                </div>
                <form onSubmit={e => {
                    e.preventDefault();
                    setIsLoading(true);

                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    
                    chat.timeout(2500).emit('send-message', { auth: decodedPayloadOrNull?.id, message: e.target.message.value }, () => {
                        setIsLoading(false);
                        console.log(e.currentTarget)
                        // e.currentTarget.
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
            <aside className="md:w-1/4 flex flex-col order-1 md:order-2">
                <header className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold">Usuarios Conectados</h2>

                </header>
                <div className="flex-1 overflow-y-auto p-4 m-4">
                        {isLoadingSocket ? (
                            <div className="text-center py-4">
                                Cargando...
                            </div>
                        ) : (
                            users.length > 0 ? (
                                <ul className='flex md:flex-col gap-2'>
                                    {users.map(user => (
                                        <li key={user.id} className="flex items-center justify-between space-x-4">
                                            <div className='flex gap-2'>
                                                {user.imagePath ? (
                                                    <img className="hidden w-10 h-10 rounded-full xl:flex" src={user.imagePath} alt="User" />
                                                    ) : (
                                                        <div className="hidden w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white uppercase xl:flex">
                                                        {user.username.charAt(0)}
                                                    </div>
                                                )}
                                                <div className="flex flex-col">
                                                    <span className="font-semibold inline-flex items-center gap-2">
                                                        {user.username}
                                                        <div className='flex items-center self-start mt-2'>
                                                            <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full  ${ user.online ? 'bg-green-500' : 'bg-red-500'}`} />
                                                        </div>
                                                    </span>
                                                    <span className="text-sm text-gray-600">{UserRole[user.rol]}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-center py-4">
                                    No hay usuarios.
                                </div>
                            )
                        )}
                </div>
            </aside>
        </div>
    );
};

