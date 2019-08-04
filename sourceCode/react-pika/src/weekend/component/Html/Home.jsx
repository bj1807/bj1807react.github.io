import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          className="logo"
          src="http://www.lofter.com/mobile/src/images/newlogo.png?005"
          alt="zhanmusi"
        />
        <NavLink to="/" exact className="button1">
          点击下载App
        </NavLink>
        <NavLink to="/login" className="button2">
          登录/注册
        </NavLink>
      </div>
    );
  }
}
