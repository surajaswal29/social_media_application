import { randomUUID } from "crypto"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: "UUID",
      default: () => randomUUID(),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model("User", userSchema, "users")
