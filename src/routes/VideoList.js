import React, { useState } from "react";
import db from "../db";
import "./VideoList.scss";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

const Detail = (props) => {
  // console.log(props.match.params.id);
  const bodyPart = db.find((item) => item.id === props.match.params.id);
  const [display, setDisplay] = useState("none");
  const [isplayed, setIsPlayed] = useState(false);
  // console.log(db.find(item => (item.id === props.match.params.id));

  return (
    <div className="videolist-container">
      <div className="text-container">
        <h3 className="title">{bodyPart.title}</h3>
        <div className="detail">{bodyPart.titleDetail}</div>
      </div>
      <div className="video-container">
        {bodyPart.playList.map((item, index) => (
          <div className="item-wrapper" key={index} onClick={handleClick}>
            <div className="video-image">
              <img
                className="thumbnail"
                src={item.thumbnail}
                style={{ objectPosition: item.objectPosition }}
                alt="요가 이미지"
              ></img>
              <i className="fab fa-youtube"></i>
              <div className="right-wrapper">
                <div className="order">{item.order}</div>
                <div className="title">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="display-video" style={{ display: "none" }}> */}

      <div className="player-wrapper" style={{ display }}>
        {/* <div className="display-video" style={{ display: setDisplay }}> */}
        <ReactPlayer
          id="video"
          className="player"
          url="https://youtu.be/TH-Nbk-HUos"
          // url={}
          playing={isplayed}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );

  function handleClick() {
    setDisplay("block");
    const video = document.getElementById("video");
    screenfull.request(video);

    if (screenfull.isEnabled) {
      screenfull.on("change", (event) => {
        if (screenfull.off) {
          setDisplay("none");
          setIsPlayed(!isplayed);
        }
      });
    }
  }
};

export default Detail;
