import React from "react";
import db from "../db";
import "./VideoList.scss";

const Detail = (props) => {
  // console.log(props.match.params.id);
  const bodyPart = db.find((item) => item.id === props.match.params.id);

  // console.log(db.find(item => (item.id === props.match.params.id));

  return (
    <div className="videolist-container">
      <div className="text-container">
        <h3 className="title">{bodyPart.title}</h3>
        {/* <h3 className="body-title">{bodyPart.title}</h3> */}
        <div className="detail">{bodyPart.titleDetail}</div>
      </div>
      <div className="video-container">
        {bodyPart.playList.map((item, index) => (
          <div className="video-image" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default Detail;
