import nodemailer from "nodemailer"
import { UserMail } from "../types/userTypes"
import { EMAIL_VERIFICATION_SUBJECT, OTP_EMAIL_TEMPLATE, GENERATE_OTP } from "./constant"

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST || "smtp.gmail.com", // Provide default values if environment variables are not set
    port: parseInt(process.env.MAIL_PORT || "587"), // Ensure port is parsed as an integer
    secure: false,
    auth: {
      type: "oauth2",
      user: process.env.GOOGLE_EMAIL_ID,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    },
  })
}

export const email_verification_mail = async (data: UserMail): Promise<boolean> => {
  try {
    const transporter = createTransporter() // Create transporter instance
    await transporter.verify() // Verify transporter
    console.log("Ready for sending email")
    console.log(data)

    const info = await transporter.sendMail({
      from: process.env.GOOGLE_EMAIL_ID || "",
      to: data?.to || "",
      subject: EMAIL_VERIFICATION_SUBJECT,
      html: OTP_EMAIL_TEMPLATE({
        bgImage: null,
        appLogo: null,
        userName: data.html?.userName,
        otp: await GENERATE_OTP(),
      }),
    })

    // Send email
    console.log("Email sent:", info)
    return true
  } catch (error) {
    console.error("Error sending email:", error)
    return false
  }
}
