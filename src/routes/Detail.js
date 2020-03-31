import React from "react";
import db from "../db";

function Detail(props) {
  // console.log(props.match.params.id);
  // console.log(db[0].desc);
  const rigthBodyPart = db.find(item => item.id === props.match.params.id);

  return (
    <>
      <h1>{rigthBodyPart.desc}</h1>
    </>
  );
}

export default Detail;
