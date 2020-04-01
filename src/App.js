import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/body/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
