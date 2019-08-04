import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import Dl from "./Dl.jsx";
import Zc from "./Zc.jsx";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "手机号(中国大陆)",
      password: "手机号(中国大陆)",
      zc: "手机号(中国大陆)",
      tpcode: "图片验证码",
      yzcode: "验证码",
      szpassword: "设置密码(6-18位)"
    };
  }

  onHandleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { phone, password, zc, tpcode, yzcode, szpassword } = this.state;
    return (
      <div>
        <img
          className="loginimg"
          src="http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png"
          alt=""
        />
        <div className="linkbox">
          <ul className="linkul">
            <li>
              <NavLink to="/login/zc" activeClassName="active">
                注册
              </NavLink>
            </li>
            <li>
              <NavLink to="/login/dl" activeClassName="active">
                登录
              </NavLink>
            </li>
          </ul>
          {/* <hr/> */}
        </div>
        <Route
          path="/login/zc"
          component={() => {
            return (
              <Zc
                zc={zc}
                tpcode={tpcode}
                yzcode={yzcode}
                szpassword={szpassword}
                onHandleChange={this.onHandleChange}
              />
            );
          }}
        />
        <Route
          path="/login/dl"
          component={() => {
            return (
              <Dl
                phone={phone}
                password={password}
                onHandleChange={this.onHandleChange}
              />
            );
          }}
        />
      </div>
    );
  }
}
