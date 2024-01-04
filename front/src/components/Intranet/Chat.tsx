import { useEffect, useState } from 'react';
import io from 'socket.io-client';
// import { useAuthProvider } from '../../hooks/useAuthProvider';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface JwtPayloadWithUsername extends JwtPayload {
    username: string;
}

export const Chat = () => {
    const [users, setUsers] = useState<{ username: string, id: number }[]>([])
    const [online, setOnline] = useState<boolean>(false)
    const token = window.localStorage.getItem('auth_token') as string
    const decodedPayload: JwtPayloadWithUsername = jwtDecode<JwtPayloadWithUsername>(token);

    useEffect(() => {
        const socket = io('http://localhost:3000', {
            auth: { token, name: decodedPayload.username },
            withCredentials: true,
            transports: ['websocket', 'polling'],
            extraHeaders: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
            },
        });

        socket.on('connect', () => {
            setOnline(true);

            socket.emit('clientMessage', 'Hola, servidor!');
        });

        socket.on('on-auth-change', (data) => {
            console.log(data)
            setUsers(data)
        });

        socket.on('handshake', (handshakeData: { name: string; token: string }) => {
            const { name, token } = handshakeData;
            console.log('Información del handshake:', name, token);
        });

        socket.on('disconnect', () => {
            setOnline(false);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Cliente WebSocket</h1>
            {online ? <div style={{ color: "green" }}>Conectado {decodedPayload.username}</div> : <div style={{ color: "red" }}>Desconectado</div>}
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

                <div className="h-full w-full p-4">
                    <div className="py-2">
                        <h4 className="mb-1 text-lg font-medium leading-none text-gray-700">John Doe</h4>
                        <p className="text-gray-500">Hey team, let's have our meeting at 2 PM today.</p>
                    </div>
                    <div className="py-2">
                        <h4 className="mb-1 text-lg font-medium leading-none text-gray-700">Jane Smith</h4>
                        <p className="text-gray-500">Sounds good to me!</p>
                    </div>
                </div>
                <div className="mt-4 grid w-full gap-1.5">
                    <input type='text' id="message-input" placeholder="Type your message here." />
                    <button className="float-right mt-2 bg-blue-500 text-white">Send</button>
                </div>
            </div>

            <div className="col-span-3 h-96 border rounded-md overflow-auto">

            </div>
        </div>
    );
};

