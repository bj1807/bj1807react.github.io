import React, { Component } from "react";
import "./index.scss";
import Centens from "../centens";
import Nav from "../nav";

export default class Shouye extends Component {
  render() {
    return (
      <div className="shou-box">
        <header>
          <Nav />
          <Centens />
        </header>
      </div>
    );
  }
}
