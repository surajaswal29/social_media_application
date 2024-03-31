import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TextPost from "./TextPost"
import { PostProps } from "../../../utility/types"
import Video from "../../VideoPlayer/Video"

type MediaPostProps = {
  url: string
  media_type: string
}

const MediaPost: React.FC<PostProps> = ({ data }) => {
  // states
  const [currentPostSlide, setCurrentPostSlide] = React.useState(0)

  // post slider settings
  const slickSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full max-h-[400px]",
    arrows: false,
    beforeChange: (_current: number, next: number) => {
      setCurrentPostSlide(next)
    },
  }

  return (
    <div className="w-full mt-3">
      <TextPost data={data} theme="light" />

      <div className="w-full mt-2 relative">
        {data.media.length === 1 ? (
          <div className="w-full h-[400px] overflow-hidden flex items-center border bg-slate-400">
            {data.media[0].media_type === "image" && (
              <img
                src={data.media[0].url}
                alt={`image-0`}
                className="w-full h-full object-cover object-center border border-gray-50"
              />
            )}
            {data.media[0].media_type === "video" && (
              <Video url={data.media[0].url} isActive={true} postNumber={0} />
            )}
          </div>
        ) : (
          <Slider {...slickSettings}>
            {data.media &&
              data.media.map((item: MediaPostProps, index: number) => (
                <div
                  key={index}
                  className="w-full h-[400px] overflow-hidden flex items-center border bg-slate-400"
                >
                  {item.media_type === "image" && (
                    <img
                      src={item.url}
                      alt={`image-${index}`}
                      className="w-full h-full object-cover object-center border border-gray-50"
                    />
                  )}
                  {item.media_type === "video" && (
                    <Video
                      url={item.url}
                      isActive={currentPostSlide === index}
                      postNumber={index}
                    />
                  )}
                </div>
              ))}
          </Slider>
        )}

        <span
          id="post_counter_display"
          className="absolute top-2 right-2 text-gray-200 text-sm font-medium"
        >
          {`${currentPostSlide + 1}/${data.media ? data.media.length : 1}`}
        </span>
      </div>
    </div>
  )
}

export default MediaPost
