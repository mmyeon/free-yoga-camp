import React, { Component } from "react";
import "./App.css";
import BodyPart from "./components/BodyPart";

const data = [
  { title: "Neck & Shoulder", backgroundColor: "#94ccfe", backgroundImage: "" },
  { title: "Lower Back", backgroundColor: "#94ACFE", backgroundImage: "" },
  { title: "Core", backgroundColor: "#BB94FE", backgroundImage: "" },
  { title: "Hip Flexor", backgroundColor: "#5C9EF6", backgroundImage: "" },
  { title: "Hamstrings", backgroundColor: "#D4CEED", backgroundImage: "" },
  { title: "Hands & Wrists", backgroundColor: "#94ccfe", backgroundImage: "" }
];

function App() {
  return (
    <div className="App">
      <div className="title_display">
        <h1 className="title free">Free</h1>
        <h1 className="title yogacamp">Yoga Camp</h1>
      </div>
      <div className="body-align">
        {data.map((item, index) => (
          <BodyPart
            key={index}
            title={item.title}
            backgroundColor={item.backgroundColor}
          />
        ))}

        {/* <BodyPart title={"Neck"} />
        <BodyPart title={"Shoulder"} />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart /> */}
      </div>
    </div>
  );
}

export default App;
