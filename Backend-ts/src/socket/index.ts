import { Server as HttpServer } from "http"
import { Socket, Server as SocketIOServer } from "socket.io"
import { create_chat } from "./socketHandlers/chatSockets"

export const initSocketConfig = async (server: HttpServer): Promise<SocketIOServer> => {
  try {
    const io = new SocketIOServer(server)

    io.on("connection", (socket: Socket) => {
      console.log("a user connected")

      // socket handlers
      create_chat(socket)
    })

    return io
  } catch (error) {
    console.log(error)
    throw new Error("Socket Config Error")
  }
}
