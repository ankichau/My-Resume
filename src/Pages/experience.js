import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import SideBar from "../Components/sidebar";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { IoMdMedal } from "react-icons/io";
import ToHome from "../Components/tohome";
import Skill from "../Components/skill";
import Line from "../Components/line";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ToHome style={{ position: "absolute" }} />
        <Wrapper>
          <Content height="72vh" width="195vh" bor="0 0 0 60%">
            <div
              style={{
                color: "white",
                marginTop: "1%",

                marginLeft: "30%",
              }}
            >
              <div
                style={{
                  fontFamily: "cursive",
                  fontSize: 35,
                  marginLeft: 185,
                  width: 230,
                  background: "white",
                  color: "black",
                  paddingLeft: 7,
                }}
              >
                Decathlon UK<br></br>
              </div>
              <span style={{ fontSize: 25, marginLeft: 160, width: 215 }}>
                (Intern Python Developer)
              </span>
              <div
                style={{
                  marginBottom: 10,
                  fontSize: 15,
                  marginLeft: 300,
                  width: 215,
                }}
              >
                SEP 2019 - Dec 2019 ​(4 months)
              </div>

              <div
                style={{
                  width: 457,
                  fontFamily: "cursive",
                  fontSize: 18,
                  marginLeft: 62,
                }}
              >
                <span style={{ textDecoration: "underline" }}>
                  Play Platform — Backend Developer:-
                </span>
                <div style={{ marginTop: 15, marginRight: "3%", width: 500 }}>
                  — A website to read/write blogs and book/create events.
                  <br></br>{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    — Technologies worked on​ :-{" "}
                  </span>{" "}
                  <br></br>
                  <div style={{ width: 600, marginTop: 10, marginLeft: 20 }}>
                    Google Assistant(Analytics), Python, Django Rest Framework,
                    Postgresql
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginLeft: "50%",
                backgroundColor: "white",
                color: "black",
                width: 150,
                marginTop: 22,
                fontSize: 35,
                textAlign: "center",
                fontFamily: "cursive",
              }}
            >
              Skills
            </div>
          </Content>
          <div className="about-sidebar" style={{ marginTop: "3%" }}>
            <Line colors="#013e3e"></Line>
            <SideBar
              title="Projects"
              icon={<IoMdMedal />}
              color="#013e3e"
              colorr="white"
            />
            <SideBar
              title="Hobbies"
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
              title="About"
              icon={<TiUser />}
              color="#013e3e"
              colorr="white"
            />

            <Line colors="#013e3e"></Line>
          </div>
        </Wrapper>

        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "24%",
            top: "65%",
          }}
        >
          <Skill title="Frontend Technology">
            <li>React.js</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>Html</li>
          </Skill>

          <Skill title="Backend Technology">
            <li>Python</li>
            <li style={{ width: 300 }}>Django rest framework</li>
            <li>C++</li>
            <li>Regex</li>
          </Skill>

          <Skill style={{ mariginTop: 5 }} title="Database">
            <li style={{ padding: 20 }}>MySql</li>
          </Skill>
        </div>
      </div>
    );
  }
}
