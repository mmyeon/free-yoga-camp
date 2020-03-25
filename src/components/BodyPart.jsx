import React from "react";
import "./BodyPart.css";

function BodyPart({ title, backgroundColor }) {
  //   console.log("props", props);
  // { title = "NoName" }
  return (
    <div className="body" style={{ backgroundColor }}>
      {/* <h1>{props.title}</h1> */}
      <h3 className={`my-${title.toLowerCase()} bodypart`}>{title}</h3>
    </div>
  );
}

export default BodyPart;

// const props = {title : "shoulder",desc:"이건 어께"};

// const title = data.title;
// const desc = data.desc;

// const {title, desc} = data
