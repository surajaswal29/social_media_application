import React from "react"
import CoverImage from "../../assets/1.png"

const RightSidebar: React.FC = () => {
  
  return (
    <div className="hidden md:block w-[30%] px-6">
      <div className="w-full bg-white rounded-md overflow-hidden">
        <div className="w-full h-[100px]">
          <img
            src={CoverImage}
            alt="User Cover Picture"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full flex justify-center relative p-6">
          <div className="flex w-[100px] h-[100px] absolute top-0 -translate-y-1/2 border-4 border-gray-300 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/400?img=61"
              alt="User Profile Picture"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-3">
          <p className="text-lg font-medium">Suraj Aswal</p>
          <p className="text-sm text-gray-500">@surajaswal29</p>
          <p className="text-sm text-gray-500">NodeJS & MERN Stack Developer</p>
        </div>
        <div className="w-full flex justify-between px-8 *:flex *:flex-col *:items-center *:font-medium mb-4">
          <div className="text-sm">
            <span>290</span>
            <span className="text-gray-500">Post</span>
          </div>
          <div className="text-sm">
            <span>20K</span>
            <span className="text-gray-500">Followers</span>
          </div>
          <div className="text-sm">
            <span>230</span>
            <span className="text-gray-500">Following</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
