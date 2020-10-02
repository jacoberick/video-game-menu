import React from "react";

const Slide = ({ video, gameMode }) => {
  return (
    <div className="slide-container">
      <video
        type="video/mp4"
        muted
        loop
        autoPlay="autoplay"
        src={video}
      ></video>
      <div className="game-mode-container">
        <h1>{gameMode}</h1>
      </div>
    </div>
  );
};

export default Slide;
