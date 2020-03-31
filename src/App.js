import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Detail/:id" component={Detail} />
      {/* <Route path="/lowerbac" exact={true} component={Neck} /> */}
    </HashRouter>
  );
}

export default App;
