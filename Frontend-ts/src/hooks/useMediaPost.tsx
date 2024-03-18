import { MediaPostHookProps } from "../utility/types"

function useMediaPost(props: MediaPostHookProps) {
  if (props.data.length === 1) {
    return (
      <div className="grid grid-rows-2 grid-flow-col cursor-pointer mt-3">
        <div className="border row-span-3 col-span-2">
          {props.isImage ? (
            <img
              src={props.data[0]}
              alt="Post Media"
              className="w-full h-full"
            />
          ) : (
            <video src={props.data[0]} controls></video>
          )}
        </div>
      </div>
    )
  } else if (props.data.length >= 3) {
    return (
      <div className="grid grid-rows-2 grid-flow-col cursor-pointer mt-3">
        <div className="border row-span-3 col-span-2">
          {props.isImage ? (
            <img
              src={props.data[0]}
              alt="Post Media"
              className="w-full h-full"
            />
          ) : (
            <video
              src={props.data[0]}
              controls
              className="w-full h-full"
            ></video>
          )}
        </div>
        <div className="border">
          {props.isImage ? (
            <img
              src={props.data[1]}
              alt="Post Media"
              className="w-full h-full"
            />
          ) : (
            <video
              src={props.data[1]}
              controls
              className="w-full h-full"
            ></video>
          )}
        </div>
        {props.data.length <= 3 ? (
          <div className="border">
            {props.isImage ? (
              <img
                src={props.data[2]}
                alt="Post Media"
                className="w-full h-full"
              />
            ) : (
              <video
                src={props.data[2]}
                controls
                className="w-full h-full"
              ></video>
            )}
          </div>
        ) : (
          <div className="border">
            {props.isImage ? (
              <div className="w-full relative backdrop-blur-md">
                <img
                  src={props.data[2]}
                  alt="Post Media"
                  className="w-full h-full"
                />
                <span className="absolute top-1/2 text-sm left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 px-3 font-medium rounded-full">
                  {props.data.length - 3}+ more
                </span>
              </div>
            ) : (
              <video src={props.data[0]} controls>
                <source src={props.data[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    )
  } else if (props.data.length === 2) {
    return (
      <div className="grid grid-cols-2 cursor-pointer mt-3">
        <div className="border">
          {props.isImage ? (
            <img
              src={props.data[0]}
              alt="Post Media"
              className="w-full h-full"
            />
          ) : (
            <video src={props.data[0]} controls></video>
          )}
        </div>
        <div className="border">
          {props.isImage ? (
            <img
              src={props.data[1]}
              alt="Post Media"
              className="w-full h-full"
            />
          ) : (
            <video src={props.data[1]} controls></video>
          )}
        </div>
      </div>
    )
  }
}

export default useMediaPost
