import { ChangeEvent, FC, useState } from "react"
import { FaGoogle } from "react-icons/fa"
import * as Types from "../../utility/types"

type Props = {
  theme: string
  switchForm: (e: Types.FormEvent) => void
}

const Login: FC<Props> = ({ theme, switchForm }) => {
  console.log(theme)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Log in to your account</h1>
      <form>
        <div className="w-full">
          <label htmlFor="email" className="text-xs text-gray-600 font-medium">
            Email
          </label>
          <input type="text" placeholder="Enter your email" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={userData.email} name="email" onChange={handleInputChange} />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-xs text-gray-600 font-medium">
            Password
          </label>
          <input type="text" placeholder="Enter your password" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={userData.password} name="password" onChange={handleInputChange} />
        </div>

        <button type="button" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
          Login
        </button>
        <div className="w-full flex justify-center mt-2">
          <span className="text-xs">
            Don't have an account?{" "}
            <button onClick={switchForm} className="text-blue-500 font-medium underline">
              Register Here
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
          {/* <button type="button" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
                      Login with Facebook
                    </button>
                    <button type="button" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
                      Login with Apple
                    </button>
                    <button type="button" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
                      Login with Microsoft
                    </button> */}
        </div>
      </form>
    </>
  )
}

export default Login
