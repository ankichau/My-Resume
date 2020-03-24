import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Show = styled.div`
  border: 3px solid ${props => props.color};
  height: 34px;
  border-radius: 20px;
  margin-right: 5px;
  color: ${props => props.color};
  font-size: 20px;
  padding-right: 40px;
  padding-left: 20px;
  padding-top: 2px;
`;

class SideBar extends React.Component {
  state = {
    show: false
  };

  handlehover = () => {
    this.setState({ show: true });
  };
  handleout = () => {
    this.setState({ show: false });
  };
  render() {
    const { title, icon, tt } = this.props;
    return (
      <>
        <Link
          style={{ textDecorationLine: "none", marginTop: "50%" }}
          to={title}
        >
          <div
            style={{
              height: 40,
              width: 40,
              background: this.props.color,
              borderRadius: 24,
              marginBottom: 10,
              display: "flex",
              flexDirection: "row-reverse"
            }}
            onMouseOver={this.handlehover}
            onMouseOut={this.handleout}
          >
            <div className="image-home">{icon}</div>
            <div>{tt}</div>
            <div>
              {this.state.show && (
                <Show color={this.props.color} className="showtitle">
                  {title}{" "}
                </Show>
              )}
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default SideBar;
