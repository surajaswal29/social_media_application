import { FC } from "react"
import * as Types from "../../utility/types"
import Navbar from "../../components/Home/Navbar"
import Main from "../../components/Home/Main"
import RightSidebar from "../../components/Home/RightSidebar"
import LeftSidebar from "../../components/Home/LeftSidebar"

const Home: FC<Types.UserHomeProps> = ({ theme }) => {
  console.log(theme)
  return (
    <div className="container bg-slate-100">
      <header>
        <Navbar theme={theme} />
      </header>
      <div className="w-full flex px-8 mt-6">
        <RightSidebar />
        <Main />
        <LeftSidebar />
      </div>
    </div>
  )
}

export default Home
