import React, { Component } from "react";
import "./App.css";
import BodyPart from "./components/BodyPart";

const data = [
  { title: "Neck" },
  { title: "Shoulder" },
  { title: "Back" },
  { title: "Back" },
  { title: "Back" },
  { title: "Back" }
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
