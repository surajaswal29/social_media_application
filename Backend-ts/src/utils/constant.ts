import { ApiResponse, HTMLMailTemplate, MinMaxLen } from "../types/userTypes"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import crypto from "crypto"

export const USER_VALIDATION_MSG = {
  name: () => "Please provide a valid name",
  phone: () => "Please provide a valid phone number",
  email: () => "Please provide a valid email",
  password: () => "Please provide a valid password",
  username: () => "Please provide a valid username",
  date: () => "Please provide a valid date",
  gender: () => "Please provide a valid gender",
  url: () => "Please provide a valid URL",
  lengthMin: (d: MinMaxLen) => `The ${d.field} must be at least ${d.len} characters long`,
  lengthMax: (d: MinMaxLen) => `The ${d.field} must be at most ${d.len} characters long`,
}

export const EMAIL_VERIFICATION_SUBJECT: string = "Your OTP for Email Verification - Uttara"

export const OTP_EMAIL_TEMPLATE = (data: HTMLMailTemplate) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification OTP</title>
    <style>
        /* CSS for responsive layout */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                margin: 0 auto !important;
            }
            .content {
                padding: 20px !important;
            }
        }
    </style>
</head>
<body style="font-family: Arial, sans-serif; background-image: url${data?.bgImage || "https://via.placeholder.com/600x400"}; background-size: cover; background-repeat: no-repeat; background-position: center;">

<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(255, 255, 255, 0.8);">
    <tr>
        <td class="container">
            <table align="center" cellpadding="0" cellspacing="0" border="0" width="600" style="border-collapse: collapse;">
                <tr>
                    <td align="center" bgcolor="#ffffff" style="padding: 40px 0;">
                        <!-- Replace the src attribute with the URL of your logo -->
                        <img src=${data?.appLogo || "https://via.placeholder.com/150"} alt="Uttara Logo" width="150">
                        <h1 style="margin-top: 20px;">Uttara Email Verification OTP</h1>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" class="content" style="padding: 40px;">
                        <p style="font-size: 16px;">Hello ${data.userName},</p>
                        <p style="font-size: 16px;">Your One-Time Password (OTP) for email verification is:</p>
                        <p style="font-size: 24px; font-weight: bold; text-align: center;">${data?.otp}</p>
                        <p style="font-size: 16px;">Please use this OTP to verify your email address. It will expire in 10 minutes.</p>
                        <p style="font-size: 16px;">If you did not request this OTP or have any concerns, please ignore this email.</p>
                        <p style="font-size: 16px;">Thank you,</p>
                        <p style="font-size: 16px;">The Uttara Team</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>
</html>
`

// generate otp
export const GENERATE_OTP = async (): Promise<string> => {
  const otp = Math.floor(100000 + Math.random() * 900000)
  return otp.toString()
}

// generate JWT Token on register/login
export const GENERATE_LOGIN_TOKEN = async (userId: string): Promise<string> => {
  if (process.env.JWT_SECRET && process.env.JWT_TOKEN_EXPIRY) {
    // token expiry (in ms)
    let tokenExpiry: number = parseInt(process.env.JWT_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000

    // generate token
    const jwtToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: tokenExpiry,
    })

    return jwtToken
  } else {
    throw new Error("JWT_SECRET is not defined")
  }
}

// verifying user password on login
export const VERIFY_PASSWORD = async (password: string, hash: string): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(password, hash)
    return isMatch
  } catch (err) {
    console.error(err)
    return false
  }
}

// encrypt data
export const ENCRYPT_DATA = async (data: any): Promise<ApiResponse> => {
  try {
    const encKey = Buffer.from(process.env.ENCRYPTION_KEY as string, "hex")
    const encIV = Buffer.from(process.env.ENCRYPTION_IV as string, "hex")

    const generateEncryptedData = crypto.createCipheriv("aes-256-cbc", encKey, encIV)
    let encryptedData = generateEncryptedData.update(JSON.stringify(data), "utf8", "hex")
    encryptedData += generateEncryptedData.final("hex")

    return {
      status: "success",
      code: 200,
      data: encryptedData,
    }
  } catch (error: any) {
    console.error(error)
    return {
      status: "fail",
      code: 500,
      msg: error.message,
    }
  }
}

// http status code
export const HTTP_STATUS_CODE: { [key: string]: number } = {
  OK: 200,
  Created: 201,
  Accepted: 202,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  InternalServerError: 500,
  ServiceUnavailable: 503,
}
