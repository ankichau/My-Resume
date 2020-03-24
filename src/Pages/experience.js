import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { GoBookmark } from "react-icons/go";
import SideBar from "../Components/sidebar";
import Skill from "../Components/skill";
import ToHome from "../Components/tohome";
import Line from "../Components/line";

export default class Experience extends Component {
  render() {
    return (
      <>
        <div>
          <ToHome />
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: "52%",
              top: "1%"
            }}
          >
            <Skill title="Backend Technology">
              <li>Python</li>
              <li>Django rest framework</li>
              <li>C++</li>
              <li>Regex</li>
            </Skill>
            <Skill title="Frontend Technology">
              <li>React.js</li>
              <li>Javascript</li>
              <li>CSS</li>
              <li>Html</li>
            </Skill>
            <Skill title="Database">
              <li style={{ padding: 20 }}>MySql</li>
            </Skill>
          </div>
          <Wrapper>
            <Content color="black" width="65vw" height="100vh" bor="0 100% 0 0">
              <div
                style={{
                  color: "white",
                  marginTop: 189,
                  marginLeft: 32
                }}
              >
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: 30,
                    marginLeft: 100
                  }}
                >
                  Decathlon UK-
                  <span style={{ fontSize: 25 }}>
                    (Intern Python Developer)
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: 10,
                    fontSize: 15,
                    marginLeft: 200
                  }}
                >
                  SEP 2019 - PRESENT ​ (4 months)
                </div>
                <div
                  style={{
                    width: 600,
                    fontFamily: "cursive",
                    fontSize: 17,
                    marginLeft: 90
                  }}
                >
                  Play Platform — Backend Developer <br></br> — A website to
                  read/write blogs and book/create events.<br></br> —
                  Technologies worked on​ - Google Assistant(Analytics), Python,
                  Django Rest Framework, Postgresql.
                </div>
                <br></br>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: 35,
                    marginLeft: 100
                  }}
                >
                  Pet Projects-
                  <span style={{ fontSize: 25 }}> (React Developer)</span>
                  <div
                    style={{
                      width: 600,
                      fontFamily: "cursive",
                      fontSize: 17,
                      marginLeft: 5
                    }}
                  >
                    — Beach Resort<br></br>— Todo List<br></br>— My Resume
                  </div>
                </div>
              </div>
            </Content>
            <div className="about-sidebar" style={{ marginTop: "8%" }}>
              <Line colors="black"></Line>
              <SideBar title="Hobbies" icon={<GoBookmark />} color="black" />
              <SideBar
                title="Education"
                icon={<TiMortarBoard />}
                color="black"
              />
              <SideBar title="About" icon={<TiUser />} color="Black" />

              <Line colors="black"></Line>
            </div>
          </Wrapper>
        </div>
      </>
    );
  }
}
