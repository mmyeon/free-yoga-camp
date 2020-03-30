import React from "react";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Main from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Main} />
      <Route path="/Detail" exact={true} component={Detail} />
      {/* <Route path="/lowerbac" exact={true} component={Neck} /> */}
    </Router>
  );
}

export default App;
