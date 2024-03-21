import React from "react"
import { PostProps } from "../../../utility/types"
import useLinkHandler from "../../../hooks/useLinkHandler"

const LinkPost: React.FC<PostProps> = ({ data }) => {
  useLinkHandler(data.link_url).then((i) => console.log(i))

  return <div>LinkPost</div>
}

export default LinkPost
