import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.scss";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Shouye from "../../../content/shouye";
import Xihuan from "../../../content/xihuan";
import Fabu from "../../../content/fabu/fb";
export default class Html extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shouye" component={Shouye} />
        <Route path="/fb" component={Fabu} />
        <Route path="/xh" component={Xihuan} />
      </BrowserRouter>
    );
  }
}
