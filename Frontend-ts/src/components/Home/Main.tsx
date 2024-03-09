import React, { useState } from "react"
import { MdErrorOutline, MdOutlineAdd, MdOutlineAddPhotoAlternate } from "react-icons/md"

const Main: React.FC = () => {
  const [postText, setPostText] = useState("")
  return (
    <div className="w-6/12">
      <div className="w-full bg-white p-3 mb-4 rounded-md">
        <div className="w-full h-fit">
          <textarea
            name="new_post"
            id="new_post"
            className={`w-full h-20 text-sm p-1 text-justify border rounded text-black resize-none outline-none  ${postText.length > 250 ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-gray-400"}`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
          <div className="w-full flex gap-2">
            <span className="text-xs">{postText.length}/250</span>
            {postText.length > 250 && (
              <span className="text-xs text-red-400 flex items-center gap-1">
                <MdErrorOutline size={12} />
                Maximum 250 Characters are allowed.
              </span>
            )}
          </div>
        </div>
        <div className="w-full mt-2 flex gap-3">
          <button className="bg-teal-500 hover:bg-teal-600 p-2 rounded flex items-center gap-1 text-sm text-white">
            <MdOutlineAdd size={20} />
            Post
          </button>
          <button className="text-blue-600">
            <MdOutlineAddPhotoAlternate size={22} />
          </button>
        </div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div className="w-full h-36 bg-white p-3 mb-4 rounded-md" key={index}>
          {item} || Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quasi eveniet maiores id autem consectetur hic nemo dolor? Accusantium suscipit officia fuga fugit tempore! Quas veritatis quaerat unde quos eveniet!
        </div>
      ))}
    </div>
  )
}

export default Main
