import { SetStateAction, useEffect, useState } from 'react';
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
    // const messages: Message[] = [
    //     {
    //         name: "", userId: 'John Doe', message: "Hey team, let's have our meeting at 2 PM today."
    //     },
    //     { name: "", userId: 'Jane Smith', message: 'Sounds good to me!' },
    //     // Add more messages here...
    // ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

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
            setMessage(data)
            console.log(data)
        }

        chat.on('handshake', (handshakeData: { name: string; token: string }) => {

            const { name, token } = handshakeData;
            console.log('Información del handshake:', name, token);
        });

        // function onDisconnect() {
        //     setOnline(false);
        // }

        // function onFooEvent(value) {
        //     setFooEvents(previous => [...previous, value]);
        // }

        chat.on('connect', onConnect);
        chat.on('disconnect', onDisconnect);
        chat.on('on-auth-change', onAuthChange);
        chat.on('on-message', onMessage);

        return () => {
            chat.off('connect', onConnect);
            chat.off('disconnect', onDisconnect);
            chat.off('on-auth-change', onAuthChange);
            // chat.off('on-message', onMessage);
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
                                    {/* <div className="seen text-sm text-gray-500 ml-auto">Hoy a las 12:56</div> */}
                                    <button className="bg-red-500 text-white z-100 py-2 px-4 rounded-lg" onClick={toggleChat}>
                                        Cerrar Chat
                                    </button>
                                </div>

                                <div className="messages flex-1 p-4 overflow-y-auto">

                                    {/* <div className="message incoming bg-gray-900 text-white rounded-lg p-3 mb-4">
                                        Mensaje 1
                                    </div>

                                    <div className="message bg-white text-gray-700 rounded-lg p-3 mb-4 ml-auto">
                                        Mensaje 2
                                    </div> */}

                                    {messages.map(data =>
                                        <div className={`message ${data.auth.id === decodedPayloadOrNull?.id ? " bg-gray-900 text-white" : "incoming bg-white"}  text-gray-700 rounded-lg p-3 mb-4 ml-auto `}>
                                            <small className='font-bold'>{data.auth.username}</small>
                                            <p className='font-light'> {data.message}</p>
                                            <p className='text-gray-500 flex'> {getRelativeTime(data.created_at)}</p>
                                        </div>)}

                                    {/* <div className="message stark flex items-center justify-center">
                                        <div className="typing w-2 h-2 bg-gray-400 rounded-full animate-ping mx-1"></div>
                                        <div className="typing w-2 h-2 bg-gray-400 rounded-full animate-ping mx-1"></div>
                                        <div className="typing w-2 h-2 bg-gray-400 rounded-full animate-ping mx-1"></div>
                                    </div> */}
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

                {/* <div className="chat-container">
                    <div className="h-full w-full p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`py-2 ${message.sender === 'John Doe' ? 'sent-message' : 'received-message'}`}
                            >
                                <h4 className="mb-1 text-lg font-medium leading-none text-gray-700">{message.sender}</h4>
                                <p className="text-gray-500">{message.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 grid w-full gap-1.5">
                        <input type="text" id="message-input" placeholder="Type your message here." />
                        <button className="float-right mt-2 bg-blue-500 text-white">Send</button>
                    </div>
                </div> */}
            </div>

            <ChatLayaout />
        </div>
    );
};

