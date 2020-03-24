import React, { Component } from "react";
import "./App.css";
import BodyPart from "./components/BodyPart";

const data = [
  { title: "Neck & Shoulder" },
  { title: "Lower Back" },
  { title: "Core" },
  { title: "Hip Flexor" },
  { title: "Hamstrings" },
  { title: "Hands & Wrists" }
];

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Free Yoga Camp</h1>
      <div className="body-align">
        {data.map((item, index) => (
          <BodyPart key={index} title={item.title} />
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
