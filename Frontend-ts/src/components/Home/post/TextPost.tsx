import React, { useEffect, useRef } from "react"
import Helper from "../../../utility/helper"
import { PostProps } from "../../../utility/types"

const TextPost: React.FC<PostProps> = ({ data }) => {
  const postText = useRef<HTMLParagraphElement | null>(null)
  const helper = new Helper()
  const post = helper.convertHashTags(data.content)

  useEffect(() => {
    if (postText.current) {
      postText.current.innerHTML = post
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postText])

  return (
    <div className="w-full mt-3">
      <p className="text-sm *:text-blue-500" ref={postText}>
        {post}
      </p>
    </div>
  )
}

export default TextPost
