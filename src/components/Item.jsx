import React from "react";
import "./Item.scss";

const Item = ({
  id,
  title,
  titleDetail,
  desc,
  bgColor,
  activeItemId,
  setActiveItemId,
  imageUrl,
  objectPosition,
}) => {
  return (
    <div
      className={`body-item ${activeItemId === id ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img
        className={`yoga-pose ${activeItemId === id ? "clicked" : ""}`}
        src={imageUrl}
        alt="yoga pose"
        width="100%"
        height="100%"
        style={{ objectPosition }}
      />
      <div className="text">
        <div className="title">{title}</div>
        <div className={`title-detail ${activeItemId === id ? "visible" : ""}`}>
          {titleDetail}
        </div>
        <div className={`action-text ${activeItemId === id ? "visible" : ""}`}>
          수련하기
        </div>
      </div>
    </div>
  );

  function handleClick() {
    setActiveItemId(id);
  }
};

export default Item;
