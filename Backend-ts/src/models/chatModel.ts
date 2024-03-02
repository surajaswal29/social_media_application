import mongoose from "mongoose"
import crypto from "crypto"

const chatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      minlength: [1, "Message must have at least 1 character"],
      maxlength: [200, "Message cannot exceed 200 characters"],
    },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "sent",
      enum: {
        values: ["sent", "received", "seen"],
        message: "{VALUE} is not supported",
      },
    },
    media: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
)

chatSchema.pre("save", function (next) {
  if (this.message && !this.message.startsWith("Encrypted:") && process.env.CHAT_ENCRYPTION_KEY) {
    const key = Buffer.from(process.env.CHAT_ENCRYPTION_KEY, "hex")
    const iv = Buffer.alloc(16, "hex")

    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv)

    let enc_msg = cipher.update(this.message, "utf-8", "hex")
    enc_msg += cipher.final("hex")

    this.message = enc_msg
  }
  next()
})

export default mongoose.model("Chat", chatSchema, "chats")
