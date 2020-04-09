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
}) => {
  function handleClick() {
    // console.log(activeItemId);
    setActiveItemId({ id });
  }

  return (
    // <div>
    <div
      className={`body-item ${activeItemId.id === id ? "clicked" : ""}`}
      // className="container"
      // style={{ bgColor, bgImage }}
      style={{
        backgroundColor: bgColor,
        // backgroundImage: bgImage,
      }}
      onClick={handleClick}
    >
      <img
        className={`yoga-pose ${activeItemId.id === id ? "clicked" : ""}`}
        src={imageUrl}
        // alt="yoga pose"
        width="100%"
        height="100%"
        // onClick={handleClick}
      />
      <div>
        <div className="text">
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
