import React from "react"
import { IoIosAddCircleOutline } from "react-icons/io"
import { Link } from "react-router-dom"

const Story: React.FC = () => {
  return (
    <div className="w-full my-2">
      <h1 className="font-medium flex justify-between">
        <span>Stories</span>
        <Link to={"/all-story"} className="text-sm text-blue-500">
          See all
        </Link>
      </h1>
      <div className="main_story_wrapper">
        {/* My Story Box */}
        <div className="my_story_box story_box_dimension" id="story_box">
          <IoIosAddCircleOutline size={22} />
          Add Story
        </div>
        {/* Other following Stories */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="other_story_box story_box_dimension" key={item} id="story_box">
            <img src="https://placehold.co/400" alt="story" className="w-full h-full object-cover rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Story
