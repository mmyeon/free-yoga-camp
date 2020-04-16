import React from "react";
import db from "../db";
import "./VideoList.scss";

const Detail = (props) => {
  // console.log(props.match.params.id);
  const bodyPart = db.find((item) => item.id === props.match.params.id);
  // console.log(db.find(item => (item.id === props.match.params.id));

  return (
    <div className="videolist-container">
      <div className="top-content">
        <h3 className="title">{bodyPart.title}</h3>
        {/* <h3 className="body-title">{bodyPart.title}</h3> */}
        <div className="body-title-detail">{bodyPart.titleDetail}</div>
      </div>
      <div className="video-content">
        {bodyPart.playList.map((item, index) => (
          <div className="video-image" key={index}>
            <img
              className="video-thumbnail"
              src={item.thumbnail}
              alt="요가 이미지"
            ></img>
            {/* <i className="fab fa-youtube"></i> */}
            <div className="video-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;