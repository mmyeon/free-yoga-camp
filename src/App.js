import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./routes/Detail";

import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/body/:id" component={Detail} />
      </div>
    </HashRouter>
  );
}

export default App;
