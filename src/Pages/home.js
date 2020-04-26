import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import Profile from "../Components/profile";
import SideBar from "../Components/sidebar";
import myprofile from "../images/profile.png";
import FeedBack from "../Components/feedback";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { IoIosBook, IoMdMedal } from "react-icons/io";
import { GoBookmark } from "react-icons/go";

import Line from "../Components/line";

export default class Home extends Component {
  state = {
    show: false,
    open: false,
  };
  showopen = (e) => {
    this.setState({ show: true });
  };
  showclose = (e) => {
    this.setState({ show: false });
  };
  show = () => {
    this.setState({ open: true });
  };
  showc = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <div className={this.state.show && "modal-back"}>
          <div className="main-body">
            <Wrapper>
              <Content height="90vh" width="174vh" bor="0 0 0 60%">
                <span className="name-header"> Hey there! </span>
                <span className="name">I'am Ankita Chauhan</span>
                <span className="role">
                  {" "}
                  React{" "}
                  <span
                    style={{
                      fontFamily: "Serif",
                      color: "#013e3e",
                      fontSize: 30,
                    }}
                  >
                    {" "}
                    and{" "}
                  </span>
                  <span style={{ fontFamily: "cursive", color: "black" }}>
                    {" "}
                    Python <span> Developer </span>
                  </span>
                </span>
              </Content>
              <Profile
                id="imgg"
                src={myprofile}
                onMouseOver={this.show}
                onMouseOut={this.showc}
                onClick={this.showopen}
              />
              {this.state.open && (
                <div
                  style={{
                    width: 200,
                    height: 20,
                    position: "absolute",
                    left: "75%",
                    top: "11%",
                    color: "#013e3e",
                    textAlign: "center",
                    padding: 8,
                    border: "3px solid #013e3e ",
                  }}
                >
                  Click to drop a feeddback
                </div>
              )}
              <div className="modal-center">
                <FeedBack show={this.state.show} onclose={this.showclose} />
              </div>
            </Wrapper>
            <div className="sidebar">
              <Line colors="#013e3e"></Line>
              <SideBar
                title="About"
                icon={<TiUser />}
                color="#013e3e"
                colorr="white"
              />
              <SideBar
                title="Education"
                icon={<TiMortarBoard />}
                color="#013e3e"
                colorr="white"
              />
              <SideBar
                title="Experience"
                icon={<IoIosBook />}
                color="#013e3e"
                colorr="white"
              />
              <SideBar
                title="Projects"
                icon={<GoBookmark />}
                color="#013e3e"
                colorr="white"
              />
              <SideBar
                title="Hobbies"
                icon={<IoMdMedal />}
                color="#013e3e"
                colorr="white"
              />
              <Line colors="#013e3e"></Line>
            </div>
          </div>
        </div>
      </>
    );
  }
}
