import React, { Component } from "react";

export default class Zc extends Component {
  render() {
    const { zc, tpcode, yzcode, szpassword, onHandleChange } = this.props;
    return (
      <div>
        <div className="inputbox">
          <input
            className="plone"
            type="text"
            value={zc}
            name="zc"
            onChange={onHandleChange}
          />
          <div>
            <input
              className="tpcode"
              type="text"
              value={tpcode}
              name="tpcode"
              onChange={onHandleChange}
            />
            <img
              className="tpimg"
              src="http://www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do?width=100&height=35&60176"
              alt="啦"
            />
            <button>换一张</button>
          </div>
          <div className="yzbox">
            <input
              className="yzcode"
              type="text"
              value={yzcode}
              name="yzcode"
              onChange={onHandleChange}
            />
            <button>发送验证码</button>
          </div>
          <input
            className="plone"
            type="text"
            value={szpassword}
            name="szpassword"
            onChange={onHandleChange}
          />
        </div>
      </div>
    );
  }
}
