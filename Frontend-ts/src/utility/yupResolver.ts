import * as yup from "yup";

export const userResolver = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    phone: yup.string().nullable().transform(value => value === "" ? null : value)
        .min(10, "Phone number must be exactly 10 digits")
        .max(10, "Phone number must be exactly 10 digits")
        .optional()
});
