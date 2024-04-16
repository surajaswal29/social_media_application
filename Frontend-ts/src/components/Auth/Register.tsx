import { FC } from "react"
import { FaGoogle } from "react-icons/fa"
import * as Types from "../../utility/types"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "./Auth.css"
import { userResolver } from "../../utility/yupResolver"

type Props = {
  theme: string
  switchForm: (e: Types.FormEvent) => void
}

const Register: FC<Props> = ({ theme, switchForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userResolver),
  })
  console.log(theme)

  const formSubmitHandler = (data: unknown) => {
    console.log(data)
  }

  return (
    <>
      <h1 className='mb-5 text-xl font-medium'>Create an account</h1>
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
          <label htmlFor='phone' className='form_control_label'>
            Phone (Optional)
          </label>
          <input
            type='text'
            placeholder='Enter your phone'
            className='form_control'
            {...register("phone")}
          />
          {errors.phone && (
            <p className='form_field_error'>{errors.phone?.message}</p>
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
          Create Account
        </button>
        <div className='w-full flex justify-center mt-2'>
          <span className='text-xs'>
            Already have an account?{" "}
            <button
              onClick={switchForm}
              type='button'
              className='text-blue-500 font-medium underline'
            >
              Login Here
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
        </div>
      </form>
    </>
  )
}

export default Register
