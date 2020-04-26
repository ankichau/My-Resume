import React, { Component } from "react";

export default class Skill extends Component {
  state = {
    show: false,
  };
  handelopen = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <>
        <div className="skill" onClick={this.handelopen}>
          <div
            style={{
              paddingLeft: 1,
              paddingTop: "26%",
              textAlign: "center",
              fontSize: 17,
            }}
          >
            {this.props.title}
          </div>
          {this.state.show && (
            <div>
              <ul
                style={{
                  marginTop: "33%",
                  marginBottom: 20,
                  color: "black",
                  fontFamily: "cursive",
                  fontSize: 15,
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
