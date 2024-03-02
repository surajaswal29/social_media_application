import { Request, Response } from "express"
import userModel from "../models/userModel"
import { UserBody } from "../types/userTypes"
import { GENERATE_LOGIN_TOKEN, VERIFY_PASSWORD } from "../utils/constant"

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name }: UserBody = req.body

    // Check if email & password are provided
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        msg: "Email and password are required",
      })
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        msg: "User already exists",
      })
    }

    // Create user
    const addUser = await userModel.create(req.body)

    if (addUser) {
      return res.status(200).json({
        status: "success",
        msg: "User created successfully",
        data: addUser,
      })
    } else {
      return res.status(500).json({
        status: "fail",
        msg: "User not created",
      })
    }
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({
      status: "fail",
      msg: error.message,
    })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const userData = await userModel.findOne({ email })

    if (userData) {
      const isPasswordMatch: boolean = await VERIFY_PASSWORD(password, userData.password)

      if (isPasswordMatch) {
        if (process.env.JWT_TOKEN_EXPIRY) {
          userData.login_token = await GENERATE_LOGIN_TOKEN(userData.id)
          userData.login_token_expire = Date.now() + parseInt(process.env.JWT_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000

          await userData.save()
        }

        res.status(200).json({
          status: "success",
          msg: "Login successful",
          token: userData.login_token,
        })
      } else {
        res.status(400).json({
          status: "fail",
          msg: "Password does not match",
        })
      }
    } else {
      res.status(400).json({
        status: "fail",
        msg: "Invalid credentials",
      })
    }
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ msg: error.message })
  }
}

export const get_users = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find().select("name email is_active login_token login_token_expire")
    // console.log(users)
    res.status(200).json({ status: "success", data: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" })
  }
}

export const get_single_user = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Single user" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" })
  }
}
