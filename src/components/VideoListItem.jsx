import React, { useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

const VideoListItem = ({ item }) => {
  const [display, setDisplay] = useState("none");
  const [isplayed, setIsPlayed] = useState(false);

  return (
    <>
      <div className="item-wrapper" onClick={handleClick}>
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

      <div className="player-wrapper" style={{ display }}>
        <ReactPlayer
          id="video"
          className="player"
          url={item.url}
          playing={isplayed}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </>
  );

  function handleClick() {
    // TODO: 클릭하면 바로 화면 뜨도록 수정
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

export default VideoListItem;
