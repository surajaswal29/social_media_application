import React, { useState, ChangeEvent, useEffect } from "react"
import { FaGoogle } from "react-icons/fa"
// import { useNavigate } from "react-router-dom"

// Define the Props type to specify the expected props structure
type Props = {
  theme: string
}

const Join: React.FC<Props> = ({ theme }) => {
  // const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  // Specify the event type for better type checking
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const switchForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoginPage(!isLoginPage)
  }

  useEffect(() => {
    console.log(theme)
    console.log(isLoginPage)
  }, [isLoginPage, theme])

  return (
    <div className="p-6 md:p-0 flex h-screen flex-col items-center justify-center bg-slate-100">
      <div className="w-full md:w-8/12 py-4 md:py-0 md:h-[70vh] bg-white flex rounded-md overflow-hidden shadow">
        <div className="hidden md:w-1/2 h-full md:flex items-center justify-center p-4">
          <img src="/hero.svg" alt="Hero" className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 h-full border p-2 md:p-4">
          <div className="w-full bg-white px-6">
            <div className="my-4 flex w-full justify-center">
              <div className="h-14">
                <img src={import.meta.env.VITE_MAIN_LOGO} className="w-full h-full object-contain" alt="Logo" />
              </div>
            </div>
            {isLoginPage ? (
              <>
                <h1 className="mb-5 text-xl font-semibold">Log in to your account</h1>
                <form>
                  <div className="w-full">
                    <label htmlFor="email" className="text-xs text-gray-600 font-medium">
                      Email
                    </label>
                    <input type="text" placeholder="Enter your email" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={name} onChange={handleNameChange} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="password" className="text-xs text-gray-600 font-medium">
                      Password
                    </label>
                    <input type="text" placeholder="Enter your password" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={name} onChange={handleNameChange} />
                  </div>

                  <button type="button" className="w-full mt-4 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
                    Login
                  </button>
                  <div className="w-full flex justify-center mt-2">
                    <span className="text-xs">
                      Don't have an account?{" "}
                      <button onClick={() => setIsLoginPage(!isLoginPage)} className="text-blue-500 font-medium underline">
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
            ) : (
              <>
                <h1 className="mb-5 text-xl font-semibold">Create an account</h1>
                <form>
                  <div className="w-full">
                    <label htmlFor="email" className="text-xs text-gray-600 font-medium">
                      Email
                    </label>
                    <input type="text" placeholder="Enter your email" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={name} onChange={handleNameChange} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="password" className="text-xs text-gray-600 font-medium">
                      Password
                    </label>
                    <input type="text" placeholder="Enter your password" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={name} onChange={handleNameChange} />
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
