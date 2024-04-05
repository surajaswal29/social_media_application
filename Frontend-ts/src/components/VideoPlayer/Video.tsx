import "@vidstack/react/player/styles/base.css"
import React from "react"
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react"
import { VideoLayout } from "./VideoLayout"

type Props = {
  url: string
  isActive: boolean
  postNumber: number
}

const Video: React.FC<Props> = ({ url, isActive, postNumber }) => {
  const player = React.useRef<MediaPlayerInstance>(null)
  const videoContainer = React.useRef(null)
  const [isReady, setIsReady] = React.useState(false)

  const handleOnCanPlay = () => {
    setIsReady(true)
    if (isActive) {
      player.current?.play()
    }
  }

  React.useEffect(() => {
    if (isActive && isReady) {
      player.current?.play()
    } else {
      player.current?.pause()
    }
  }, [isActive, isReady, postNumber, url])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries);
        console.log(entries[0].isIntersecting)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isActive && isReady) {
              player.current?.play()
            }
          } else {
            player.current?.pause()
          }
        })
      },
      {
        root: null,
        threshold: 1,
      }
    )

    if (videoContainer.current) {
      observer.observe(videoContainer.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [isActive, isReady])

  return (
    <div className="w-full h-full" ref={videoContainer}>
      <MediaPlayer
        className="w-full h-full aspect-auto bg-slate-900 text-white font-sans overflow-hidden ring-media-focus focus:ring-4"
        title="Video"
        src={url}
        ref={player}
        muted={true}
        playsInline={true}
        controls={false}
        onCanPlay={handleOnCanPlay}
      // autoPlay={false}
      // loop={false}
      >
        <MediaProvider />
        <VideoLayout thumbnails="" />
      </MediaPlayer>
    </div>
  )
}

export default Video
