import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
export default class Centens extends Component {
  render() {
    return (
      <div className="Centens-box">
        <div className="Centens-b-ping">
          <div className="Centens-b-top">
            <p className="Centens-b-top-right-triangle" />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/222.png`}
              alt="lala"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="Centens-box-img">
              <img
                src={`${process.env.PUBLIC_URL}/img/1.png`}
                alt="lala"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div />
        </div>
        <div className="Centens-b-ping">
          <div className="Centens-b-top">
            <p className="Centens-b-top-right-triangle" />
          </div>
          <div />
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/222.png`}
              alt="lala"
              style={{ width: "100%" }}
            />
            <div className="Centens-box-img">
              <img
                src={`${process.env.PUBLIC_URL}/img/1.png`}
                alt="lala"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="Centens-box-but">
            <button className="Centens-box-but-t">显示更多文章</button>
          </div>
          <div className="flex justify-content Centens-box-flex">
            <div className="Centens-box-flex-left">
              <NavLink to="/shouye">LOFTER首页</NavLink>
            </div>
            <div className="flex justify-content">
              <div className="Centens-box-flex-left">
                <NavLink to="/">退出</NavLink>
              </div>
              <div className="Centens-box-flex-left">pc视图</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
