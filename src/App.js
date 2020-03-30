import React from "react";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import Neck from "./routes/Neck";

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Main} />
      <Route path="/neck" exact={true} component={Neck} />
      {/* <Route path="/lowerbac" exact={true} component={Neck} /> */}
    </Router>
  );
}

export default App;
