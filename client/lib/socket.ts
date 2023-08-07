import { io } from 'socket.io-client'

const SERVER =
  process.env.NODE_ENV === 'production'
    ? 'https://scribbl-socket-35nbpbwfv-shresth72.vercel.app'
    : 'http://localhost:3001'

export const socket = io(SERVER, { transports: ['websocket'] })
