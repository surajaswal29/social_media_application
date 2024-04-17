import multer, { Multer } from "multer"
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from "cloudinary"
import { Request, Response, NextFunction } from "express"
import { MAX_FILE_SIZE } from "./constant"

const clnConfig = () =>
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

const storage = multer.memoryStorage()

export const upload: Multer = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      return cb(null, true)
    } else {
      return cb(null, false)
    }
  },
  limits: { fileSize: MAX_FILE_SIZE },
})

const single_upload = upload.single("file")

export const uploadSingleFile = (req: Request, res: Response, next: NextFunction) => {
  single_upload(req, res, (err: any) => {
    if (err instanceof multer.MulterError) {
      console.log(err)
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(500).json({
          status: "fail",
          msg: "File size exceeds the limit of 2MB",
        })
      } else {
        return res.status(500).json({
          status: "fail",
          msg: err.message,
        })
      }
    } else if (err) {
      return res.status(500).json({ error: "Server error" })
    } else {
      return next()
    }
  })
}

export const uploadToCloudinary = async (req: Request) => {
  try {
    // invoke cloudinary config
    clnConfig()

    const file: Express.Multer.File = req.file as Express.Multer.File

    // converting file to base64
    let base64 = file.buffer.toString("base64")
    const dataUri = `data:${file.mimetype};base64,${base64}`

    // uploadting to cloudinary
    const result: UploadApiResponse | UploadApiErrorResponse = await cloudinary.uploader.upload(dataUri, {
      folder: "uttara",
      public_id: "uttara",
      overwrite: false,
      resource_type: "auto",
    })
    return {
      status: "success",
      msg: "Image uploaded successfully",
      url: result.secure_url,
    }
  } catch (error: any) {
    console.log(error)
    console.log("Error in uploading image to cloudinary")
    return {
      status: "fail",
      msg: error.message,
    }
  }
}
