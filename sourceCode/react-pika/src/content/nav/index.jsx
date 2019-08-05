import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const selectData = [
  { to: "/shouye", text: "LOFTER首页" },
  { to: "/fb", text: "发布文章" },
  { to: "/xh", text: "喜欢的文章" },
  { to: "/fx", text: "发现" },
  { to: "/gz", text: "关注的博客" },
  { to: "/wd", text: "—我的博客—" },
  { to: "/name", text: "name" }
];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <div>
        <div className="shou-login ">
          <div className="imgbox">
            <img
              src={`${process.env.PUBLIC_URL}/img/3.png`}
              alt="lala"
              style={{ height: "100%", marginTop: "6px" }}
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
      </div>
    );
  }
}
