import React from "react";

const Slide = ({ video, gameMode, descrip, id }) => {
  return (
    <div className={`slide-container ${id}`}>
      <div className="label">
        <p>{gameMode}</p>
      </div>
      <div className="slide-container--inner">
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
    </div>
  );
};

export default Slide;
