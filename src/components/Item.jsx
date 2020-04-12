import React from "react";
import "./Item.scss";

const Item = ({
  id,
  title,
  desc,
  bgColor,
  activeItemId,
  setActiveItemId,
  imageUrl,
  objectPosition,
}) => {
  function handleClick() {
    setActiveItemId({ id });
  }
  return (
    <div
      className={`body-item ${activeItemId.id === id ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img
        className={`yoga-pose ${activeItemId.id === id ? "clicked" : ""}`}
        src={imageUrl}
        alt="yoga pose"
        width="100%"
        height="100%"
        style={{ objectPosition }}
      />
      {/* <div className="text">
        <div className="title">{title}</div>
      </div> */}
    </div>
  );
};

export default Item;
