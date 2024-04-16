import { FC } from "react"
import { FaGoogle } from "react-icons/fa"
import * as Types from "../../utility/types"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "./Auth.css"
import { userResolver } from "../../utility/yupResolver"

type Props = {
  theme: string
  switchForm: (e: Types.FormEvent) => void
}

const Login: FC<Props> = ({ theme, switchForm }) => {
  const navigate = useNavigate()
  console.log(theme)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userResolver),
  })
  console.log(theme)

  const formSubmitHandler = (data: { email: string; password: string }) => {
    console.log(data)

    if (data.email === "abc@gmail.com" && data.password === "12345678") {
      navigate("/")
    }
  }

  return (
    <>
      <h1 className='mb-5 text-xl font-medium'>Log in to your account</h1>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className='w-full'>
          <label htmlFor='email' className='form_control_label'>
            Email
          </label>
          <input
            type='text'
            placeholder='Enter your email'
            className='form_control'
            {...register("email")}
          />
          {errors.email && (
            <p className='form_field_error'>{errors.email?.message}</p>
          )}
        </div>
        <div className='w-full'>
          <label htmlFor='password' className='form_control_label'>
            Password
          </label>
          <input
            type='text'
            placeholder='Enter your password'
            className='form_control'
            {...register("password")}
          />
          {errors.password && (
            <p className='form_field_error'>{errors.password?.message}</p>
          )}
        </div>

        <button type='submit' className='form_submit_btn'>
          Login
        </button>
        <div className='w-full flex justify-center mt-2'>
          <span className='text-xs'>
            Don't have an account?{" "}
            <button
              onClick={switchForm}
              className='text-blue-500 font-medium underline'
            >
              Register Here
            </button>
          </span>
        </div>
        <div className='w-full mt-5 flex justify-center'>
          <span className='h-8 w-8 border flex justify-center items-center rounded-full text-gray-500 font-normal text-xs'>
            OR
          </span>
        </div>
        <div className='w-full flex justify-center'>
          <button
            type='button'
            className='flex gap-2 border p-2 rounded items-center mt-4 bg-blue-500 text-white px-4 py-2 focus:outline-none'
          >
            <FaGoogle />
            Login with Google
          </button>
          {/* <button type="button" className="w-full mt-4 rounded bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none">
                      Login with Facebook
                    </button>
                    <button type="button" className="w-full mt-4 rounded bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none">
                      Login with Apple
                    </button>
                    <button type="button" className="w-full mt-4 rounded bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none">
                      Login with Microsoft
                    </button> */}
        </div>
      </form>
    </>
  )
}

export default Login
