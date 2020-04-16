import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

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
      className={`item-container ${activeItemId === id ? "clicked" : ""}`}
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
      <div className="content">
        <div className="title">{title}</div>
        <div className={`desc ${activeItemId === id ? "visible" : ""}`}>
          {titleDetail}
        </div>
        <Link to={{ pathname: `/${id}` }}>
          <div className={`action-btn ${activeItemId === id ? "visible" : ""}`}>
            수련하기
          </div>
        </Link>
      </div>
    </div>
  );

  function handleClick() {
    setActiveItemId(id);
  }
};

export default Item;
