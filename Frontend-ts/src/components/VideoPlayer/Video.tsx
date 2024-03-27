import React from "react"
import { Player } from "video-react"
import "video-react/dist/video-react.css" // import css
type props = {
  url: string
}
const Video: React.FC<props> = ({ url }) => {
  return (
    <Player
      fluid={true}
      autoPlay
      muted
      playsInline
      poster="/assets/poster.png"
      src={url}
    />
  )
}

export default Video
