import React from "react";
import Video from "../../media/strolly-video.mp4";

const VideoHeader = () => {
  return (
    <video
      src={Video}
      className="video"
      autoPlay={true}
      loop
      muted
      width="100%"
      type="video/mp4"
    />
  );
};

export default VideoHeader;
