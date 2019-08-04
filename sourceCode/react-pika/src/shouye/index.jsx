import React, { Component } from "react";
import "./index.scss";
import { NavLink, BrowserRouter } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="shouyebox">
        <div className="header">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="lala" />
          <div className="linkbox">
            <select>
              <option />
            </select>
          </div>
        </div>
      </div>
    );
  }
}
