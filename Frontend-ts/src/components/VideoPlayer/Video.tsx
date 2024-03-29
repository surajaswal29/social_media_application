import "@vidstack/react/player/styles/base.css"
import { useRef } from "react"
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react"
import { VideoLayout } from "./VideoLayout"

type props = {
  url: string
}
const Video: React.FC<props> = ({ url }) => {
    const player = useRef<MediaPlayerInstance>(null)

  return (
    <MediaPlayer
      className="w-full h-full aspect-auto bg-slate-900 text-white font-sans overflow-hidden ring-media-focus data-[focus]:ring-4"
      title="Video"
      src={url}
      // onReady={onReady}
      // onProviderChange={onProviderChange}
      // onCanPlay={onCanPlay}
      ref={player}
      autoPlay={true} 
      muted={true}
      playsInline={true}
      controls={false}
    >
      <MediaProvider />
      <VideoLayout thumbnails="" />
    </MediaPlayer>
  )
}

export default Video
