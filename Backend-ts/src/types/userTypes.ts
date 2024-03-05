import { Request } from "express"

export interface UserBody {
  name: string
  email: string
  password: string
}
export interface MinMaxLen {
  field: string
  len: number
}
export interface UserMail {
  from?: string
  to: string
  subject: string
  text?: string
  html: HTMLMailTemplate
}

export interface AuthenticatedRequest extends Request {
  user?: any
}

export interface HTMLMailTemplate {
  bgImage?: string | null
  appLogo?: string | null
  userName: string
  otp: string
}

export interface ChatBody {
  message: string
  sender: string
  receiver: string
}

export interface chatResponse {
  status: string
  data: []
}

export interface ApiResponse {
  status: string
  code?: number
  data?: any
  msg?: string
}

export interface CloudinaryFile extends Express.Multer.File {
  buffer: Buffer
}
