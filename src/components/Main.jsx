import React, { useState } from "react";
import db from "../db";
import Item from "./Item";
import "./Main.scss";

const Main = () => {
  const [activeItemId, setActiveItemId] = useState("neck");

  return (
    <div className="main-container">
      {db.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          title={item.title}
          titleDetail={item.titleDetail}
          desc={item.desc}
          bgColor={item.backgroundColor}
          imageUrl={item.imageUrl}
          activeItemId={activeItemId}
          setActiveItemId={setActiveItemId}
          objectPosition={item.objectPosition}
        />
      ))}
    </div>
  );
};

export default Main;
