import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import ToHome from "../Components/tohome";
import { FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiMortarBoard } from "react-icons/ti";
import { IoIosBook } from "react-icons/io";
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
          </Content>
        </Wrapper>
        <div className="about-sidebar" style={{ marginTop: "-290px" }}>
          <Line colors="black"></Line>
          <SideBar title="Education" icon={<TiMortarBoard />} color="black" />
          <SideBar title="Experience" icon={<IoIosBook />} color="black" />
          <SideBar title="Hobbies" icon={<GoBookmark />} color="black" />
          <Line colors="black"></Line>
        </div>
        <IoMdMail
          style={{
            position: "absolute",
            top: "4%",
            left: "80%",
            color: "white",
            fontSize: "2rem"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "83%",
            color: "white"
          }}
        >
          ankichua3097@gmail.com
        </div>
        <a
          href="https://github.com/ankichau"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaGithub className="about-icon" />
        </a>
        <a
          href="https://angel.co/ankita-chauhan-11"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaAngellist style={{ left: "15%" }} className="about-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-chauhan30/"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaLinkedin style={{ left: "25%" }} className="about-icon" />
        </a>
      </>
    );
  }
}
