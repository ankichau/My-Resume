import React, { Component } from "react";
import "../App.css";

export default class EduDetails extends Component {
  state = {
    hover: false
  };
  handleMouseIn = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <>
        <div className="edu-name">{this.props.name}</div>
        <div
          className="side"
          onMouseOver={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
        >
          <div style={{ fontFamily: "cursive", padding: 1 }}>
            {this.props.title}
          </div>
          <div style={{ fontFamily: "cursive", padding: 1, fontSize: 12 }}>
            {this.props.children}
          </div>
          <div>
            {this.state.hover && <div className="hover">{this.props.some}</div>}
          </div>
        </div>
      </>
    );
  }
}
