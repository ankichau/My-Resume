import React, { Component } from "react";

export default class Skill extends Component {
  state = {
    show: false,
    open: false
  };
  handelopen = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <>
        <div className="skill" onClick={this.handelopen}>
          <div
            style={{
              paddingLeft: 1,
              paddingTop: "37%",
              textAlign: "center"
            }}
          >
            {this.props.title}
          </div>
          {this.state.show && (
            <div>
              <ul
                style={{
                  marginTop: "48%",
                  marginLeft: 35,
                  marginBottom: 20,
                  color: "black",
                  fontFamily: "cursive",
                  fontSize: 15
                }}
              >
                {this.props.children}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}
