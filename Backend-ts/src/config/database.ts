import mongoose from "mongoose"

const connectDB = async (): Promise<mongoose.Connection> => {
  if (!process.env.DB_URL) {
    console.error("DB_URL is not defined in your environment variables")
    process.exit(1) // Exit the process with an error code
  }

  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      dbName: "chatify",
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn.connection
  } catch (error) {
    console.error("Failed to connect to MongoDB", error)
    process.exit(1) // Exit the process with an error code
  }
}

export default connectDB
