import React from "react"
import PostData from "../../../assets/post.json"
import { BsThreeDotsVertical } from "react-icons/bs"
import {
  IoHeartSharp,
  IoHeartOutline,
  IoChatboxOutline,
  IoBookmark,
} from "react-icons/io5"
import { IoMdShareAlt } from "react-icons/io"
import TextPost from "./TextPost"
import MediaPost from "./MediaPost"
// import LinkPost from "./LinkPost"
import PollPost from "./PollPost"
import { Menu, MenuItem } from "@mui/material"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { PiStickerBold } from "react-icons/pi"

const DisplayPosts: React.FC = () => {
  const [isLike, setIsLike] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderPostType = (type: string, data: any) => {
    switch (type) {
      case "text":
        return <TextPost data={data} theme='light' />
      case "media":
        return <MediaPost data={data} theme='light' />
      //   case "link":
      //     return <LinkPost data={data} theme="light" />
      case "poll":
        return <PollPost data={data} theme='light' />
      default:
        return null
    }
  }
  return (
    <div className='w-full my-2'>
      <h1 className='font-medium my-2'>Feeds</h1>
      {PostData.map((data, index) => (
        <div className='w-full bg-white p-3 mb-4 rounded-md' key={index}>
          <div className='w-full'>
            {/* user info header */}
            <div className='w-full flex justify-between relative'>
              <div className='flex items-center gap-2'>
                <img
                  src={data.author.profile_image}
                  alt={data.author.full_name}
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <h3 className='text-sm font-semibold'>
                    {data.author.full_name}
                  </h3>
                  <p className='text-xs text-gray-500'>2 hours ago</p>
                </div>
              </div>
              <button
                className='text-xs text-gray-600'
                onClick={handleMenuClick}
              >
                <BsThreeDotsVertical size={18} />
              </button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    width: "fit-content",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
            {/* caption or text post */}
            {renderPostType(data.type, data)}

            {/* action buttons - like, comment, share */}
            <div className='w-full mt-3 flex justify-between border-t py-2 *:text-gray-700 *:flex *:items-center'>
              <button
                type='button'
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
              <button type='button'>
                <IoMdShareAlt size={22} /> &nbsp; 50K
              </button>
              <button type='button'>
                <IoChatboxOutline size={22} /> &nbsp; 50K
              </button>
              <button type='button'>
                <IoBookmark size={22} /> &nbsp; 50K
                {/* <IoBookmarkOutline /> */}
              </button>
            </div>
            {/* comment area */}
            <div className='w-full flex justify-between items-center pt-3 border-t'>
              <div className='w-10/12 flex relative'>
                <input
                  type='text'
                  placeholder='Add a comment'
                  className='w-full text-sm text-gray-800 rounded-md border border-slate-300 p-2 focus:outline-none'
                />
              </div>
              <div className='w-2/12 flex items-center justify-center gap-2'>
                <button className='text-violet-600 hover:text-violet-500'>
                  <PiStickerBold size={24} />
                </button>
                <button className='text-violet-600 hover:text-violet-500'>
                  <MdOutlineEmojiEmotions size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayPosts
