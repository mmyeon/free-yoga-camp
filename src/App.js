import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Detail from "./routes/Detail";

import "./App.scss";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Route path="/" exact={true} component={Main}></Route>
        {/* <Route path="/id" component={Detail}></Route> */}
        <Route path="/:id" component={Detail}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
