import React, { Component } from "react";
import Content from "../Components/content";
import Wrapper from "../Components/wrapper";
import ToHome from "../Components/tohome";
import img1 from "../images/logo.png";
import img2 from "../images/background.png";
import img3 from "../images/profile.png";
import "../App.css";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { GoBookmark } from "react-icons/go";
import SideBar from "../Components/sidebar";
import Line from "../Components/line";

class Hobbies extends React.Component {
  state = {
    images: [img1, img2, img3],
    currentImg: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    const { images, currentImg } = this.state;
    const urlString = images[currentImg];

    return (
      <>
        <ToHome />
        <Wrapper>
          <Content color="black" height="100vh" width="70vw" bor="0 60% 60% 0">
            <div
              style={{
                color: "white",
                marginTop: "20%",
                width: 320,
                padding: 20
              }}
            >
              <div
                style={{
                  width: 250,
                  textAlign: "center",
                  fontSize: 50,
                  fontFamily: "cursive",
                  marginLeft: "24%",
                  color: "black",
                  backgroundColor: "white",
                  marginBottom: 20
                }}
              >
                Hobbies
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "cursive",
                  marginLeft: "31%",
                  marginBottom: 20
                }}
              >
                {" "}
                — Art and Craft <br></br>— Dancing<br></br>— Indoor outdoor
                games like Kho-Kho, Badminton, Basketball, Carrom, etc.
              </div>
            </div>
          </Content>
          <img
            style={{
              height: 350,
              width: 350,
              position: "absolute",
              left: "26%",
              top: "20%",
              borderRadius: "60%",
              border: "5px solid white"
            }}
            src={urlString}
          />
          <Content
            style={{ marginRight: 196 }}
            color="black"
            height="100vh"
            width="70vw"
            bor="60% 0 0 60%"
          >
            <div
              style={{
                color: "white",
                marginTop: "20%",
                width: 600,
                padding: 20
              }}
            >
              <div
                style={{
                  width: 329,
                  textAlign: "center",
                  fontSize: 45,
                  fontFamily: "cursive",
                  marginLeft: "42%",
                  color: "black",
                  backgroundColor: "white",
                  marginBottom: 20
                }}
              >
                I am proud of
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "cursive",
                  marginLeft: "45%"
                }}
              >
                — Gold medalist in Kho-Kho nationals<br></br>— Gold medalist in
                Long Jump and Triple jump<br></br> — Secured 1st position in
                Fashion show<br></br>— 1st place in Dancing
              </div>
            </div>
          </Content>
          <div className="about-sidebar" style={{ marginTop: "3%" }}>
            <Line colors="black"></Line>
            <SideBar title="Education" icon={<TiMortarBoard />} color="black" />
            <SideBar title="About" icon={<TiUser />} color="black" />
            <SideBar title="Hobbies" icon={<GoBookmark />} color="black" />
            <Line colors="black"></Line>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default Hobbies;
