import { Request, Response } from "express"

export const create_user = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Register user" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const get_single_user = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Single user" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export default { create_user, get_single_user }
