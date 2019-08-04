import React, { Component } from "react";
import "./index.scss";
export default class Xihuan extends Component {
  render() {
    return (
      <div className="Xihuan-box">
        <div className="Xihuan-b-ping">
          <div>
            <input
              className="Xihuan-b-input"
              readonly="readonly"
              type="text"
              value="暂无内容"
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
