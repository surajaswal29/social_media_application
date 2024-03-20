import React, { useEffect, useRef, useState } from "react"
import Helper from "../../utility/helper"
import { BsThreeDotsVertical } from "react-icons/bs"
import {
  IoHeartSharp,
  IoHeartOutline,
  IoChatboxOutline,
  IoBookmark,
} from "react-icons/io5"
import { IoMdShareAlt } from "react-icons/io"

import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type MediaPostProps = {
  theme: string
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const MediaPost: React.FC<MediaPostProps> = ({ id, data }) => {
  const postText = useRef<HTMLParagraphElement | null>(null)
  const helper = new Helper()
  const post = helper.convertHashTags(data.caption)

  const slickSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full h-[400px]",
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
  }

  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    if (postText.current) {
      postText.current.innerHTML = post
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postText])

  return (
    <div className="w-full bg-white p-3 mb-4 rounded-md" key={id}>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={data.author.profile_image}
              alt={data.author.full_name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-sm font-semibold">{data.author.full_name}</h3>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <button className="text-xs text-gray-500">
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
        <div className="w-full mt-2">
          <p className="text-sm *:text-blue-500" ref={postText}>
            {post}
          </p>
        </div>
        <div className="w-full mt-2">
          <Slider {...slickSettings}>
            {data.url.map((url: string, index: number) => (
              <div key={index} className="w-full h-[400px] overflow-hidden">
                {data.type === "image" ? (
                  <img
                    src={url}
                    alt={`image-${index}`}
                    className="w-full h-full object-cover object-center border-2 border-gray-300"
                  />
                ) : (
                  <video
                    src={url}
                    className="w-full h-full object-cover object-center border-2 border-gray-300"
                    controls
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full mt-3 flex justify-between border-t py-2 *:text-gray-700 *:flex *:items-center">
          <button
            type="button"
            onClick={() => setIsLike(!isLike)}
            className={`flex items-center transition-all ease-in-out ${
              isLike ? "text-pink-600" : ""
            }`}
          >
            {!isLike ? (
              <IoHeartOutline size={22} />
            ) : (
              <IoHeartSharp size={22} />
            )}{" "}
            &nbsp; 50K
          </button>
          <button type="button">
            <IoMdShareAlt size={22} /> &nbsp; 50K
          </button>
          <button type="button">
            <IoChatboxOutline size={22} /> &nbsp; 50K
          </button>
          <button type="button">
            <IoBookmark size={22} /> &nbsp; 50K
            {/* <IoBookmarkOutline /> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MediaPost