import React from "react";
import db from "../db";

const Detail = (props) => {
  // console.log(props.match.params.id);
  const bodyPart = db.find((item) => item.id === props.match.params.id);
  // console.log(db.find(item => (item.id === props.match.params.id));

  return (
    <div>
      {bodyPart.title}
      {bodyPart.titleDetail}
      {bodyPart.playList.map((item) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
};
export default Detail;
