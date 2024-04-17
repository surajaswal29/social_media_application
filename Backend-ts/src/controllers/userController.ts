import { Request, Response } from "express"
import userModel from "../models/userModel"
import * as UserTypes from "../types/userTypes"
import { ENCRYPT_DATA, GENERATE_LOGIN_TOKEN, VERIFY_PASSWORD } from "../utils/constant"
import { uploadToCloudinary } from "../utils/multerStorage"

// Create new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name }: UserTypes.UserBody = req.body

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

// login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    console.log({
      email,
      password
    });

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

// Get user info (private route)
export const getUserInfo = async (req: UserTypes.AuthenticatedRequest, res: Response) => {
  try {
    const userInfoData = await userModel.findById(req.user.id)

    if (!userInfoData) {
      res.status(400).json({ msg: "Invalid credentials" })
    }

    const encryptData = await ENCRYPT_DATA(userInfoData)

    return res.status(200).json(encryptData)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({
      status: "fail",
      msg: error.message,
    })
  }
}

// -----------------
export const getSingleUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Single user" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Internal server error" })
  }
}

// upload files
export const uploadProfileMedia = async (req: Request, res: Response) => {
  try {
    console.log(req.file)
    const upload_file = await uploadToCloudinary(req)

    console.log(upload_file)
    return res.status(200).json(upload_file)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "Internal server error" })
  }
}
