import React from "react";
import "./VideoListItem.scss";

const VideoListItem = ({ item, setVideoUrl }) => {
  return (
    <>
      <div
        className="item-wrapper"
        onClick={() => {
          handleClick(item.url);
        }}
      >
        <div className="video-image">
          <div className="image-container">
            <img
              className="thumbnail"
              src={item.thumbnail}
              style={{ objectPosition: item.objectPosition }}
              alt="요가 이미지"
            ></img>
            <i className="fab fa-youtube"></i>
          </div>
          <div className="right-wrapper">
            <div className="order">{item.order}</div>
            <div className="title">{item.title}</div>
          </div>
        </div>
      </div>
    </>
  );

  function handleClick(url) {
    setVideoUrl(url);
  }
};

export default VideoListItem;
