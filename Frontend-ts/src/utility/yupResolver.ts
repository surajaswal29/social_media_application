import * as yup from "yup"

export const userResolver = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    phone: yup.string().min(10).max(10)
  })