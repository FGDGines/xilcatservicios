import { io } from 'socket.io-client'
import { jwtDecode, JwtPayload } from 'jwt-decode'

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

export const chat = io('http://localhost:3000', {
  auth: { token, name: decodedPayload?.username, authId: decodedPayload?.id },
  withCredentials: true,
  transports: ['websocket', 'polling'],
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
  autoConnect: false,
})
