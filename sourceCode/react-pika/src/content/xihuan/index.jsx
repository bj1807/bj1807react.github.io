import React, { Component } from "react";
import "./index.scss";
import "../shouye/index.scss";
import Nav from "../nav";

export default class Xihuan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <div className="Xihuan-box">
        <Nav />
        <div className="Xihuan-b-ping">
          <div>
            <input
              className="Xihuan-b-input"
              type="text"
              readonly="readonly"
              defaultValue="暂无内容"
            />
          </div>
          <div className="flex justify-content Xihuan-box-flex">
            <div className="Xihuan-box-flex-left">LOFTER首页</div>
            <div className="flex justify-content">
              <div className="Xihuan-box-flex-left">退出</div>
              <div className="Xihuan-box-flex-left">pc视图</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
