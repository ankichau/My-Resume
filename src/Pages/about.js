import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import ToHome from "../Components/tohome";
import { FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiMortarBoard } from "react-icons/ti";
import { IoIosBook, IoMdMedal } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import SideBar from "../Components/sidebar";
import Line from "../Components/line";

export default class About extends Component {
  render() {
    return (
      <>
        <ToHome />
        <Wrapper>
          <Content color="black" width="100%" height="70vh" bor="0 0 100% 0">
            <h3 className="about-title">Objective</h3>
            <span className="about-objective">
              To work with an organization where I can continuously learn and
              <br></br>
              <br></br>
              obtain a position that will allow me to utilize my skills and
              <br></br>
              <br></br>
              experience to contribute to the success of the organization.
            </span>
            <div
              style={{
                position: "relative",
                background: "white",
                width: 240,
                height: 40,
                left: "78%",
                top: "5%",
              }}
            >
              <IoMdMail
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "2%",
                  color: "black",
                  fontSize: "2rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "24%",
                  left: "18%",
                  color: "black",
                }}
              >
                ankichau3097@gmail.com
              </div>
            </div>
          </Content>
        </Wrapper>
        <div className="about-sidebar" style={{ marginTop: "-340px" }}>
          <Line colors="#013e3e"></Line>
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
            icon={<IoMdMedal />}
            color="#013e3e"
            colorr="white"
          />
          <SideBar
            title="Hobbies"
            icon={<GoBookmark />}
            color="#013e3e"
            colorr="white"
          />

          <Line colors="#013e3e"></Line>
        </div>

        <a
          href="https://github.com/ankichau"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaGithub style={{ left: "60%" }} className="about-icon" />
        </a>
        <a
          href="https://angel.co/ankita-chauhan-11"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaAngellist style={{ left: "70%" }} className="about-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-chauhan30/"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaLinkedin style={{ left: "80%" }} className="about-icon" />
        </a>
      </>
    );
  }
}
