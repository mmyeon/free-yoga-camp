import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

function BodyPart({ id, title, backgroundColor, disc }) {
  //   console.log("props", props);
  // { title = "NoName" }
  return (
    <Link to={{ pathname: `/${id}` }}>
      <div className="body" style={{ backgroundColor }}>
        {/* <h1>{props.title}</h1> */}
        <h3 className={`bodypart`}>{title}</h3>
      </div>
    </Link>
  );
}

BodyPart.protoTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BodyPart;

// const props = {title : "shoulder",desc:"이건 어께"};

// const title = data.title;
// const desc = data.desc;

// const {title, desc} = data
