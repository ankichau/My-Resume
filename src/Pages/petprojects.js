import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { GoBookmark } from "react-icons/go";
import SideBar from "../Components/sidebar";
import ToHome from "../Components/tohome";
import Line from "../Components/line";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div>
          <ToHome style={{ position: "absolute" }} />
          <Wrapper>
            <Content color="black" height="120vh" width="100vw" bor="60%">
              <div
                style={{
                  color: "white",
                  marginTop: "2.5%",
                }}
              >
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: 40,
                    marginLeft: 443,
                    width: 375,
                    background: "white",
                    color: "black",
                    paddingLeft: 7,
                  }}
                >
                  React JS
                  <span style={{ fontSize: 25 }}> (Pet Projects)</span>
                </div>

                <div
                  style={{
                    fontFamily: "cursive",
                    marginLeft: 373,
                    height: 20,
                    width: 20,
                    borderRadius: "60%",
                    backgroundColor: "white",
                    marginTop: 10,
                  }}
                >
                  <div
                    style={{
                      width: 418,
                      marginLeft: 26,
                      fontSize: 20,
                    }}
                  >
                    <span
                      style={{ textDecoration: "underline" }}
                      className="pet"
                      onClick={() =>
                        window.open(
                          "https://github.com/ankichau/My-Resume",
                          "_blank"
                        )
                      }
                    >
                      My Resume:
                    </span>
                    <span style={{ fontSize: 17 }}>
                      {" "}
                      You are looking it right now.
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 17,
                        marginLeft: 15,
                        width: 600,
                      }}
                    >
                      —
                      <span
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        Technology used:{" "}
                      </span>
                      Javascript,react.js, Css, Html5,styled components
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "cursive",
                    marginLeft: 373,
                    height: 20,
                    width: 20,
                    borderRadius: "60%",
                    backgroundColor: "white",
                    marginTop: 65,
                  }}
                >
                  <div style={{ width: 500, marginLeft: 30, fontSize: 20 }}>
                    <span
                      style={{ textDecoration: "underline" }}
                      className="pet"
                      onClick={() =>
                        window.open(
                          "https://github.com/ankichau/resort-beach-react",
                          "_blank"
                        )
                      }
                    >
                      Beach Resort:
                    </span>
                    <span style={{ fontSize: 17 }}>
                      {" "}
                      A website to check for hotels.
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 17,
                        marginLeft: 15,
                        width: 600,
                      }}
                    >
                      —
                      <span
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        Technology used:{" "}
                      </span>
                      Javascript,react.js, Css, Html5,styled components
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "cursive",
                    marginLeft: 373,
                    height: 20,
                    width: 20,
                    borderRadius: "60%",
                    backgroundColor: "white",
                    marginTop: 65,
                  }}
                >
                  <div style={{ width: 700, marginLeft: 30, fontSize: 20 }}>
                    <span
                      style={{ textDecoration: "underline" }}
                      className="pet"
                      onClick={() =>
                        window.open(
                          "https://github.com/ankichau/TodoList",
                          "_blank"
                        )
                      }
                    >
                      Todo List:
                    </span>
                    <span style={{ fontSize: 17 }}>
                      {" "}
                      A website to make a list of your work.<br></br> I have
                      used redux in this so that I can understand the basics of
                      redux.
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 17,
                        marginLeft: 15,
                        width: 600,
                      }}
                    >
                      —
                      <span
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        Technology used:{" "}
                      </span>
                      Javascript,react.js,redux, Css, Html5
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "cursive",
                    marginLeft: 373,
                    height: 20,
                    width: 20,
                    borderRadius: "60%",
                    backgroundColor: "white",
                    marginTop: 85,
                  }}
                >
                  <div style={{ width: 500, marginLeft: 30, fontSize: 20 }}>
                    <span
                      style={{ textDecoration: "underline" }}
                      className="pet"
                      onClick={() =>
                        window.open(
                          "https://github.com/ankichau/news-feed-page",
                          "_blank"
                        )
                      }
                    >
                      News Feed Page:
                    </span>
                    <span style={{ fontSize: 17 }}>
                      {" "}
                      A website to see the latest news . <br></br>Api used in
                      this is Google News Api.
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 17,
                        marginLeft: 15,
                        width: 600,
                      }}
                    >
                      —
                      <span
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        Technology used:{" "}
                      </span>
                      Javascript,react.js, Css, Html5
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "cursive",
                    fontSize: 35,
                    marginLeft: 422,
                    background: "white",
                    color: "black",
                    width: 490,
                    paddingLeft: 7,
                    marginTop: 95,
                  }}
                >
                  Backend Developer
                  <span style={{ fontSize: 25 }}> ( Pet Projects)</span>
                </div>
                <br></br>
                <div
                  style={{
                    marginLeft: 373,
                    height: 20,
                    width: 20,
                    borderRadius: "60%",
                    backgroundColor: "white",
                    fontFamily: "cursive",
                  }}
                >
                  <div style={{ width: 500, fontSize: 20, marginLeft: 25 }}>
                    <span
                      style={{ textDecoration: "underline" }}
                      className="pet"
                      onClick={() =>
                        window.open(
                          "https://github.com/ankichau/translation_app",
                          "_blank"
                        )
                      }
                    >
                      Language translator:
                    </span>
                    <span style={{ fontSize: 17 }}>
                      {" "}
                      A website which can convert the text from one language to
                      another.
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 18,
                        width: 600,
                        marginLeft: 25,
                      }}
                    >
                      —{" "}
                      <span style={{ textDecoration: "underline" }}>
                        Technology used:{" "}
                      </span>
                      Python, Flask, Html5
                    </div>
                  </div>
                </div>
              </div>
            </Content>
            <div className="about-sidebar" style={{ marginTop: "4%" }}>
              <Line colors="#013e3e"></Line>
              <SideBar
                title="Hobbies"
                icon={<GoBookmark />}
                color="white"
                colorr="#013e3e"
              />
              <SideBar
                title="Education"
                icon={<TiMortarBoard />}
                color="white"
                colorr="#013e3e"
              />
              <SideBar
                title="Experience"
                icon={<GoBookmark />}
                color="white"
                colorr="#013e3e"
              />

              <SideBar
                title="About"
                icon={<TiUser />}
                color="white"
                colorr="#013e3e"
              />

              <Line colors="#013e3e"></Line>
            </div>
          </Wrapper>
        </div>
      </>
    );
  }
}
