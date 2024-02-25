import React, { useState, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"

// Define the Props type to specify the expected props structure
type Props = {
  theme: string
}

const Join: React.FC<Props> = ({ theme }) => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  // Specify the event type for better type checking
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleJoinChatify = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Perform login logic here with the entered name
    console.log(theme) // This logs the current theme
    localStorage.setItem("userName", name)
    console.log("Logged in as:", name)
    navigate("/chat") // Navigate to the chat page
    // You can use navigate("/chat", { replace: true }) if you want to replace the current entry in the history stack
  }

  return (
    <div className="p-6 md:p-0 flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="w-full md:w-8/12 py-4 md:py-0 md:h-[65vh] bg-white flex rounded-md overflow-hidden">
        <div className="hidden md:w-1/2 h-full md:flex items-center justify-center p-4">
          <img src="/hero.svg" alt="Hero" className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 h-full border-l p-2 md:p-4">
          <div className="w-full bg-white px-6">
            <div className="my-3 flex w-full justify-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border border-blue-200">
                <img src="https://res.cloudinary.com/ds6spmr71/image/upload/v1685127006/chatify/logo_ewamcb.png" className="w-full" alt="Logo" />
              </div>
            </div>
            {isLoginPage ? (
              <>
                <h1 className="mb-5 text-xl font-semibold">Login to Chatify</h1>
                <form onSubmit={handleJoinChatify}>
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

                  <button type="submit" className="w-full mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
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
                </form>
              </>
            ) : (
              <>
                <h1 className="mb-5 text-xl font-semibold">Join Chatify</h1>
                <form onSubmit={handleJoinChatify}>
                  <div className="w-full">
                    <label htmlFor="firstname" className="text-xs text-gray-600 font-medium">
                      Full Name
                    </label>
                    <input type="text" placeholder="Enter your name" className="mb-2 w-full rounded border border-gray-200 p-2 focus:border-blue-300 text-sm focus:outline-none" value={name} onChange={handleNameChange} />
                  </div>
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

                  <button type="submit" className="w-full mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
                    Join
                  </button>
                  <div className="w-full flex justify-center mt-2">
                    <span className="text-xs">
                      Already have an account?{" "}
                      <button onClick={() => setIsLoginPage(!isLoginPage)} className="text-blue-500 font-medium underline">
                        Login Here
                      </button>
                    </span>
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
