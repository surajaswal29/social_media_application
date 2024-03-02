import { Socket } from "socket.io"
import chatModel from "../../models/chatModel"

export const create_chat = async (socket: Socket) => {
  socket.on("new_chat", async (data) => {
    try {
      const chat = await chatModel.create(data)
      socket.emit("new_chat", chat)
    } catch (error) {
      console.error("Error creating chat:", error)
    }
  })

  return socket
}
