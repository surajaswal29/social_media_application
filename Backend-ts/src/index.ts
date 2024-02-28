import express, { Request, Response } from "express"
import dotenv from "dotenv"
import connectDB from "./config/database"
import User from "./models/userModel"
import { RegisterRequestBody } from "./types/userTypes"
import path from "path"
import router from "./routes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to Database
connectDB()

app.use(express.static(path.join(__dirname, "../views")))

console.log(`1. => ${__dirname}`)
// console.log(path)
// console.log(Request)

app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
  console.log(req)
  res.sendFile(path.join(__dirname, "../views/index.html"))
})

// Adjusted the type for req.body directly
app.post("/register", async (req: Request<{}, { RegisterRequestBody: any }, {}, {}>, res: Response) => {
  try {
    const user_dt = await User.create(req.body)

    if (!user_dt) {
      // Explicitly end the function with 'return' after sending the response
      return res.status(400).json({ message: "User not created" })
    }
    // No need for 'return' here as this is the last line of the try block
    return res.status(200).json({ message: "User registered successfully" })
  } catch (error) {
    console.error(error)
    // Use 'return' to explicitly end the function after sending the response
    return res.status(500).json({ message: "Server Error" })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Preview URL => http://localhost:${PORT}`)
})
