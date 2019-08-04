import React, { Component } from "react";

export default class Dl extends Component {
  render() {
    const { phone, password, onHandleChange } = this.props;
    return (
      <div>
        <div className="inputbox">
          <form>
            <label>
              <input
                type="text"
                className="plone"
                value={phone}
                name="phone"
                onChange={onHandleChange}
              />
            </label>

            <label>
              <input
                type="text"
                className="plone"
                value={password}
                name="password"
                onChange={onHandleChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}
