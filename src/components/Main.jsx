import React, { useState } from "react";
import db from "../db";
import Item from "./Item";
import "./Main.scss";

const Main = () => {
  const [activeItemId, setActiveItemId] = useState("");

  return (
    <div className="item-container">
      {db.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          title={item.title}
          desc={item.desc}
          backgroundColor={item.backgroundColor}
          activeItemId={activeItemId}
          setActiveItemId={setActiveItemId}
        />
      ))}
    </div>
  );
};

export default Main;
