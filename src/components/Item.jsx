import React from "react";
import "./Item.scss";

const Item = ({
  id,
  title,
  desc,
  bgColor,
  activeItemId,
  setActiveItemId,
  bgImage,
}) => {
  function handleClick() {
    // console.log(activeItemId);
    setActiveItemId({ id });
  }

  return (
    <div
      className={`body-item ${activeItemId.id === id ? "clicked" : ""}`}
      // style={{ bgColor, bgImage }}
      style={{ backgroundColor: bgColor, backgroundImage: bgImage }}
      onClick={handleClick}
    >
      <div>
        <div className="text">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
