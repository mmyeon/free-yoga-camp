import React, { useState } from "react";
import "./Item.scss";

const Item = ({ title, desc, backgroundColor }) => {
  const [isOpenedBodyItem, setIsOpenedBodyItem] = useState(false);

  function handleClick() {
    setIsOpenedBodyItem(!isOpenedBodyItem);
  }

  return (
    <div
      className={`body-item ${isOpenedBodyItem ? "clicked" : ""}`}
      style={{ backgroundColor }}
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
