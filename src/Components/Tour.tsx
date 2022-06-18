import React, { useState } from "react";
import ReactPlayer from "react-player";
import myVideo from "../Media/img/Video/video.mp4";
const Tour = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="text-center relative">
        <h1 className="text-4xl">Video Tour</h1>
        <div className="flex justify-center py-12">
          <p className="max-w-lg text-xl text-green3">
            Find out more with our video of the most beautiful and pleasant
            places for you and your family.
          </p>
        </div>
        <div className="justify-center flex ">
          <div className="relative">
            <ReactPlayer
              url={myVideo}
              width={1000}
              height={564}
              loop
              playing={isPlaying}
            />
            <div className="bg-green4  absolute right-8 -bottom-8">
              <button
                className="px-14 py-6"
                onClick={() => {
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? (
                  <box-icon color="white" name="pause"></box-icon>
                ) : (
                  <box-icon color="white" name="play"></box-icon>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
