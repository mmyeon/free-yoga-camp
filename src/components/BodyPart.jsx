import React from "react";
import "./BodyPart.css";

function BodyPart({ title }) {
  //   console.log("props", props);
  // { title = "NoName" }
  return (
    <div className="body">
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
    </div>
  );
}

export default BodyPart;

// const props = {title : "shoulder",desc:"이건 어께"};

// const title = data.title;
// const desc = data.desc;

// const {title, desc} = data
