import React, { Component } from "react";
import "./App.css";
import BodyPart from "./components/BodyPart";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Free Yoga Camp</h1>
      <div className="body-align">
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
      </div>
    </div>
  );
}

export default App;
