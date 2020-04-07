import React from "react";
import db from "../db";
import Item from "./Item";
import "./Main.scss";

const Main = () => {
  return (
    <div className="item-container">
      {db.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          desc={item.desc}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </div>
  );
};

export default Main;
