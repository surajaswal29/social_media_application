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
