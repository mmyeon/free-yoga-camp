import React from "react";
import db from "../db";
import "./VideoList.scss";
import VideoListItem from "../components/VideoListItem";

const Detail = (props) => {
  const bodyPart = db.find((item) => item.id === props.match.params.id);

  return (
    <div className="videolist-container">
      <div className="text-container">
        <h3 className="title">{bodyPart.title}</h3>
        <div className="detail">{bodyPart.titleDetail}</div>
      </div>
      <div className="video-container">
        {bodyPart.playList.map((item, index) => (
          <VideoListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
