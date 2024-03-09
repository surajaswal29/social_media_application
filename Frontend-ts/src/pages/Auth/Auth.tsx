import React, { useState } from "react"
import Register from "../../components/user/Register"
import * as Types from "../../utility/types"
import Login from "../../components/user/Login"

const Join: React.FC<Types.UserAuthProps> = ({ theme }) => {
  const [isLoginPage, setIsLoginPage] = useState(true)

  const switchForm = (e: Types.FormEvent) => {
    e.preventDefault()
    setIsLoginPage((pv) => !pv)
  }

  return (
    <div className="p-6 md:p-0 flex h-screen flex-col items-center justify-center bg-slate-100">
      <div className="w-full md:w-8/12 py-4 md:py-0 bg-white flex rounded-md overflow-hidden shadow">
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
            {isLoginPage ? <Login theme={theme} switchForm={switchForm} /> : <Register theme={theme} switchForm={switchForm} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
