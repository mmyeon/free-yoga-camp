import React, { useState } from "react";
import db from "../db";
import Item from "./Item";
// import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const [activeItemId, setActiveItemId] = useState("neck");

  return (
    <div className="item-container">
      {db.map((item) => (
        // <Link
        //   to={{
        //     pathname: `/${item.id}`,
        //   }}
        // >
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
        // </Link>
      ))}
    </div>
  );
};

export default Main;
