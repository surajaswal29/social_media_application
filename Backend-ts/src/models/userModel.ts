import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { GENERATE_LOGIN_TOKEN, USER_VALIDATION_MSG } from "../utils/constant"

// user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      firstName: {
        type: String,
        validate: [validator.isAlphanumeric, USER_VALIDATION_MSG.name()],
      },
      lastName: {
        type: String,
        validate: [validator.isAlphanumeric, USER_VALIDATION_MSG.name()],
      },
    },
    phone: {
      type: String,
      unique: true,
      minlength: [10, USER_VALIDATION_MSG.lengthMin({ field: "phone", len: 10 })],
      maxlength: [10, USER_VALIDATION_MSG.lengthMax({ field: "phone", len: 10 })],
      // validate: {
      //   validator: function (v: string) {
      //     return validator.isMobilePhone(v, "en-IN")
      //   },
      //   message: USER_VALIDATION_MSG.phone(),
      // },
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, USER_VALIDATION_MSG.email()],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, USER_VALIDATION_MSG.lengthMin({ field: "password", len: 8 })],
      validate: [validator.isStrongPassword, USER_VALIDATION_MSG.password()],
    },
    username: {
      type: String,
      unique: true,
      minlength: [3, USER_VALIDATION_MSG.lengthMin({ field: "username", len: 3 })],
      maxlength: [15, USER_VALIDATION_MSG.lengthMax({ field: "username", len: 15 })],
      validate: {
        validator: function (v: string) {
          return /^[a-zA-Z0-9._]+$/.test(v)
        },
        message: USER_VALIDATION_MSG.username(),
      },
    },
    dob: {
      type: String,
      validate: [validator.isDate, USER_VALIDATION_MSG.date()],
      default: null,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: USER_VALIDATION_MSG.gender(),
      },
      default: "other",
      lowercase: true,
      validate: [validator.isAlpha, USER_VALIDATION_MSG.gender()],
    },
    profileMedia: {
      profilePicture: {
        type: String,
        default: null,
        validate: [validator.isURL, USER_VALIDATION_MSG.url()],
      },
      coverPicture: {
        type: String,
        default: null,
        validate: [validator.isURL, USER_VALIDATION_MSG.url()],
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
    login_token: String,
    login_token_expire: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

userSchema.methods.comparePassword = async function (password: string, hash: string) {
  try {
    const result = await bcrypt.compare(password, hash)
    return result
  } catch (err) {
    console.error(err)
    return false
  }
}

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  if (!this.login_token && process.env.JWT_SECRET && process.env.JWT_TOKEN_EXPIRY) {
    this.login_token = await GENERATE_LOGIN_TOKEN(this.id)
    this.login_token_expire = Date.now() + parseInt(process.env.JWT_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000
  }
  next()
})

export default mongoose.model("User", userSchema, "users")
