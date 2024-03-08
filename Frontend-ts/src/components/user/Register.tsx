import { ChangeEvent, FC, useState } from "react"
import { FaGoogle } from "react-icons/fa"
import * as Types from "../../utility/types"

type Props = {
  theme: string
  switchForm: (e: Types.FormEvent) => void
}

const Register: FC<Props> = ({ theme, switchForm }) => {
  console.log(theme)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    phone: "",
  })

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Create an account</h1>
      <form>
        <div className="w-full">
          <label htmlFor="email" className="text-xs text-gray-600 font-medium">
            Email
          </label>
          <input type="text" placeholder="Enter your email" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={userData.email} name="email" onChange={handleInputChange} />
        </div>
        <div className="w-full">
          <label htmlFor="phone" className="text-xs text-gray-600 font-medium">
            Phone (Optional)
          </label>
          <input type="text" placeholder="Enter your phone" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={userData.phone} name="phone" onChange={handleInputChange} />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-xs text-gray-600 font-medium">
            Password
          </label>
          <input type="text" placeholder="Enter your password" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={userData.password} name="password" onChange={handleInputChange} />
        </div>

        <button type="submit" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
          Create Account
        </button>
        <div className="w-full flex justify-center mt-2">
          <span className="text-xs">
            Already have an account?{" "}
            <button onClick={switchForm} type="button" className="text-blue-500 font-medium underline">
              Login Here
            </button>
          </span>
        </div>
        <div className="w-full mt-5 flex justify-center">
          <span className="h-8 w-8 border flex justify-center items-center rounded-full text-gray-500 font-normal text-xs">OR</span>
        </div>
        <div className="w-full flex justify-center">
          <button type="button" className="flex gap-2 border p-2 rounded items-center mt-4 bg-blue-500 text-white px-4 py-2 focus:outline-none">
            <FaGoogle />
            Login with Google
          </button>
        </div>
      </form>
    </>
  )
}

export default Register
