import React from "react";
import $ from "jquery";

const Slide = ({ video, gameMode, descrip, id }) => {
  return (
    <div className={`slide-container ${id}`}>
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
      <div className="descrip-container">
        <p>{descrip}</p>
      </div>
    </div>
  );
};

export default Slide;
