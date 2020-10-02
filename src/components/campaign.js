import React from "react";
import Video from "../assets/campaign.mp4";

const Campaign = () => {
  return (
    <div className="slide-container">
      <video
        type="video/mp4"
        muted
        loop
        autoPlay="autoplay"
        src={Video}
      ></video>
    </div>
  );
};

export default Campaign;
