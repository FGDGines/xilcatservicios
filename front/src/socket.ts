import { io, Socket } from 'socket.io-client'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface JwtPayloadWithUsername extends JwtPayload {
  readonly username: string
  readonly id: string
}

// "undefined" means the URL will be computed from the `window.location` object
// const URL =
//   process.env.NODE_ENV === 'production'
//     ? window.location
//     : 'http://localhost:3000'

const token: string | null = window.localStorage.getItem('auth_token')

let decodedPayload: JwtPayloadWithUsername | null = null

if (token) {
  decodedPayload = jwtDecode<JwtPayloadWithUsername>(token)
}

export const decodedPayloadOrNull: JwtPayloadWithUsername | null =
  decodedPayload

export const chat: Socket = io('http://localhost:3000', {
  auth: { token, name: decodedPayload?.username, authId: decodedPayload?.id },
  withCredentials: true,
  transports: ['websocket', 'polling'],
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
  autoConnect: false,
})

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
  CLIENT = 'Cliente',
  COMMUNITY = 'Comunicadora',
  CONTABILITY = 'Contabilidad'
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

export const useChatIo = () => {
  const [users, setUsers] = useState<User[]>([])
  const [messages, setMessage] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSocket, setIsLoadingSocket] = useState(true);


  const chat: Socket = io('http://localhost:3000', {
  auth: { token, name: decodedPayload?.username, authId: decodedPayload?.id },
  withCredentials: true,
  transports: ['websocket', 'polling'],
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
  autoConnect: true,
})

    useEffect(() => {
        chat.connect()

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

        chat.on('on-auth-change', onAuthChange);
        chat.on('on-message', onMessage);
        chat.on('error-message', onError);

        return () => {
            chat.off('on-auth-change', onAuthChange);
            chat.off('on-message', onMessage);
            chat.off('error-message', onError);
        };
    }, []);

  return {
    chat,
    users,
    messages,
    isLoading,
    isLoadingSocket,
    setIsLoading,
    setIsLoadingSocket
  }
}
