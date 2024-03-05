import express, { Request, Response } from "express"
import dotenv from "dotenv"
import connectDB from "./config/database"
import path from "path"
import router from "./routes"
import { Server, createServer } from "http"
import { initSocketConfig } from "./socket"
import chatModel from "./models/chatModel"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const httpServer: Server = createServer(app)

// Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to Db & socket
;(async function () {
  try {
    await connectDB()

    await initSocketConfig(httpServer)
    console.log("Socket is connected")
  } catch (error) {
    console.error("Error connecting to DB or setting up socket:", error)
  }
})()

// Serving static files
app.use(express.static(path.join(__dirname, "../views")))

// Routes
app.use("/api/v1", router)

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Preview URL => http://localhost:${PORT}`)
})
