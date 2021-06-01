import React, { Component } from "react";
import "../styles/App.scss";

class Title extends Component {
  render() {
    return (
      <div className={`collapsiblebox ${this.props.nameClass}`}>
        <div className="collapsible">
          <div className="collapsible__icon">
            <i className={`far ${this.props.iconClass}`}></i>
          </div>
          <div className="collapsible__title">{this.props.title}</div>
          <div className="arrow">
            <i
              className={`fas fa-chevron-down collapsible__icon2 ${this.props.arrowClass}`}
            ></i>
          </div>
        </div>
        <div className="line"></div>
      </div>
    );
  }
}

export default Title;
