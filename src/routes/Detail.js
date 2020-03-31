import React from "react";
import db from "../db";
import "./Detail.css";

function Detail(props) {
  // console.log(props.match.params.id);
  // console.log(db[0].desc);
  const rigthBodyPart = db.find(item => item.id === props.match.params.id);
  console.log(rigthBodyPart.playList);
  // const yogaVideoList = db.map(item => )

  return (
    <>
      <h1 className="detail-desc">{rigthBodyPart.desc}</h1>
      <ul>
        <li>
          <div className="circle">
            <svg height="100px" width="100px">
              <g>
                <title>Not Passed</title>
                <circle
                  cx="50px"
                  cy="50px"
                  r="10px"
                  stroke="black"
                  stroke-width="3px"
                  fill="white"
                ></circle>
              </g>
            </svg>
            <div className="yogaVideoList">
              {rigthBodyPart.playList.map(item => (
                <li>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </div>
            <a href="https://developer.mozilla.org/ko/docs/Web/SVG/Element/circle">
              하하하
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Detail;
