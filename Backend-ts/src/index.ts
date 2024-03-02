import express, { Request, Response } from "express"
import dotenv from "dotenv"
import connectDB from "./config/database"
import path from "path"
import router from "./routes"
import { Server, createServer } from "http"
import { initSocketConfig } from "./socket"
import chatModel from "./models/chatModel"
import { chatResponse } from "./types/userTypes"
// import { send_mail_user } from "./utils/mailer"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const httpServer: Server = createServer(app)

// Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --
// connect to Db & socket
;(async function () {
  try {
    await connectDB()
    await initSocketConfig(httpServer).then(
      (d) => {
        // console.log(d)
        console.log("socket is connected")
      },
      (e) => {
        console.log(e)
        throw new Error("Socket Config Error")
      }
    )
  } catch (error) {
    console.log(error)
  }
})()

// serving static files
app.use(express.static(path.join(__dirname, "../views")))

// routes
app.use("/api/v1", router)

app.post("/api/v1/test", async (req: Request, res: Response) => {
  try {
    const chat_dt = await chatModel.create(req.body)

    if (chat_dt) {
      return res.status(200).json({
        status: "success",
        data: chat_dt,
      })
    } else {
      return res.status(400).json({
        status: "fail",
        message: "chat not created",
      })
    }
  } catch (error) {
    console.log(error)
    return {
      status: "fail",
      message: error,
    }
  }
})

// send_mail_user({
//   to: "thesurajaswal@gmail.com",
//   subject: "testing",
//   html: "<h1>hello</h1>",
// })

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Preview URL => http://localhost:${PORT}`)
})
