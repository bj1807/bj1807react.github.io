import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import Centens from "../centens";

const selectData = [
  { to: "/shouye", text: "LOFTER首页" },
  { to: "/fb", text: "发布文章" },
  { to: "/xh", text: "喜欢的文章" },
  { to: "/fx", text: "发现" },
  { to: "/gz", text: "关注的博客" },
  { to: "/wd", text: "—我的博客—" },
  { to: "/name", text: "name" }
];

export default class Shouye extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <div className="shou-box">
        <header>
          <div className="shou-login">
            <div className="imgbox">
              <img
                src={`${process.env.PUBLIC_URL}/img/3.png`}
                style={{ height: "100%" }}
              />
            </div>
            <div
              className="rightbox1"
              onClick={() =>
                this.setState({
                  isShow: !this.state.isShow
                })
              }
            >
              LOEFTER首页
              {this.state.isShow && (
                <ul className="shou-select">
                  {selectData.map((item, index) => {
                    return (
                      <li key={index} className="shou-option">
                        <NavLink to={item.to}>{item.text}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <Centens />
        </header>
      </div>
    );
  }
}
