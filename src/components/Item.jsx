import React from "react";
import "./Item.scss";

const Item = ({ title, desc, backgroundColor }) => {
  console.log(desc);
  return (
    <div className="body-item" style={{ backgroundColor }}>
      <span>{desc}</span>
    </div>
  );
};

export default Item;
