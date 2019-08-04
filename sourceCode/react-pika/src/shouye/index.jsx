import React, { Component } from "react";
import "./index.scss";
import Centens from "../centens";
export default class Shouye extends Component {
  render() {
    return (
      <div className="shou-box">
        <header>
          <div className="shou-login">
            <div className="shou-login-content flex justify-content">
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/img/3.png`}
                  style={{ height: "100%" }}
                />
              </div>
              <select name="" id="" className="shou-select">
                <option value="" className="shou-option">
                  LOFTER首页
                </option>
                <option value="" className="shou-option">
                  发布文章
                </option>
                <option value="" className="shou-option">
                  喜欢的文章
                </option>
                <option value="" className="shou-option">
                  发现
                </option>
                <option value="" className="shou-option">
                  关注的博客
                </option>
                <option value="" className="shou-option">
                  ——我的博客——
                </option>
                <option value="" className="shou-option">
                  name
                </option>
              </select>
            </div>
          </div>
          <Centens />
        </header>
      </div>
    );
  }
}
