import React, { useEffect, useState } from "react"
import Story from "./story/Story"
import "./home.css"
import CreatePost from "./post/CreatePost"
import DisplayPosts from "./post/DisplayPosts"
import useNavDimensions from "../../hooks/useNavDimensions"

const Main: React.FC = () => {
  const [mainHeight, setMainHeight] = useState(0)
  const { navbarDimension } = useNavDimensions()
  useEffect(() => {
    console.log(navbarDimension)
    setMainHeight(navbarDimension.mainHeight - navbarDimension.navHeight - 30)
  }, [navbarDimension])

  return (
    <div
      className={`w-full md:w-5/12 px-2 md:px-6 overflow-auto`}
      style={{ height: `${mainHeight}px` }}
    >
      {/* Create a New Post */}
      <CreatePost />
      {/* Story Section */}
      <Story />
      {/* Display All Posts */}
      <DisplayPosts />

      <div className='w-full'>
        <p className='text-center text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} Social Media App
        </p>
        <p className='text-center text-gray-500 text-sm'>
          Made with ❤️ by{" "}
          <a
            href='https://github.com/surajaswal29'
            target='_blank'
            rel='noreferrer'
          >
            Suraj Aswal
          </a>
        </p>
      </div>
    </div>
  )
}

export default Main
