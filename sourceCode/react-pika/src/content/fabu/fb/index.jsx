import React, { Component } from "react";
import "./index.scss";
import Nav from "../../nav";
export default class Fabu extends Component {
  render() {
    return (
      <div className="fb-box">
        <div>
          <div className="fb-g-hd flex flex-bw">
            <Nav />
          </div>
          <div className="fb-content-box">
            <div className="fb-m-edit">
              <div className="main-head">
                <input maxLength="50" type="text" placeholder="文章标题" />
              </div>
            </div>
            <div className="editor">
              <div className="w-ipt">
                <textarea placeholder="正文" />
              </div>
            </div>
            <div className="fb-option">
              <div>选项</div>
              <div className="fb-s">发布到:genuine的博客</div>
              <div className="san" />
            </div>
            <div className="btn">
              <button type="submit" className="btn-con">
                发布
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
