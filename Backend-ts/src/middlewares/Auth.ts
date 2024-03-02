import userModel from "../models/userModel"
import { NextFunction, Request, Response } from "express"

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req)

    next()
  } catch (error: any) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    })
    console.log(error)
  }
}
