import React from "react"
import Story from "./story/Story"
import "./home.css"
import CreatePost from "./post/CreatePost"
import DisplayPosts from "./post/DisplayPosts"

const Main: React.FC = () => {
  return (
    <div className="w-full md:w-5/12 px-2 md:px-8">
      {/* Create a New Post */}
      <CreatePost />
      {/* Story Section */}
      <Story />
      {/* Display All Posts */}
      <DisplayPosts />
    </div>
  )
}

export default Main
