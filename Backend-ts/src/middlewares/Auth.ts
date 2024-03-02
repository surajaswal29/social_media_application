import userModel from "../models/userModel"
import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { AuthenticatedRequest } from "../types/userTypes"

export const userAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // checking if authentication token exist or not in header
    if (!req.headers.authorization || !req.headers.authorization?.startsWith("Bearer")) {
      return res.status(401).json({
        status: "fail",
        message: "Missing or malformed Authorization header",
      })
    }

    // verify jwt token
    const token: string = req.headers["authorization"]?.split(" ")[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

    console.log(payload)
    console.log({
      id: payload.id,
      login_token: token,
      login_token_expire: Date.now(),
    })

    const userData = await userModel.findOne({
      _id: payload.id,
      login_token: token,
      login_token_expire: { $gt: Date.now() },
    })
    console.log(userData)
    if (!userData) {
      return res.status(401).json({
        status: "fail",
        message: "Token Expired or Invalid!",
      })
    }

    req.user = userData

    return next()
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({
      status: "fail",
      message: error.message,
    })
  }
}
