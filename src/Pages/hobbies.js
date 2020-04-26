import React, { Component } from "react";
import Content from "../Components/content";
import Wrapper from "../Components/wrapper";
import ToHome from "../Components/tohome";
// import img1 from "../images/logo.png";
// import img2 from "../images/background.png";
// import img3 from "../images/profile.png";
import "../App.css";
import { TiUser, TiMortarBoard } from "react-icons/ti";
import { IoIosBook, IoMdMedal } from "react-icons/io";
import SideBar from "../Components/sidebar";
import Line from "../Components/line";

class Hobbies extends React.Component {
  // state = {
  //   images: [img1, img2, img3],
  //   currentImg: 0,
  // };

  // componentDidMount() {
  //   this.interval = setInterval(() => this.changeBackgroundImage(), 3000);
  // }

  // componentWillUnmount() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }

  // changeBackgroundImage() {
  //   let newCurrentImg = 0;
  //   const { images, currentImg } = this.state;
  //   const noOfImages = images.length;

  //   if (currentImg !== noOfImages - 1) {
  //     newCurrentImg = currentImg + 1;
  //   }

  //   this.setState({ currentImg: newCurrentImg });
  // }

  render() {
    // const { images, currentImg } = this.state;
    // const urlString = images[currentImg];

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
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 250,
                  textAlign: "center",
                  fontSize: 50,
                  fontFamily: "cursive",
                  marginLeft: "50%",
                  color: "black",
                  backgroundColor: "white",
                  marginBottom: 20,
                }}
              >
                Hobbies
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "cursive",
                  marginLeft: "40%",
                  marginBottom: 20,
                  width: 450,
                }}
              >
                {" "}
                — Art and Craft <br></br>— Dancing<br></br>— Indoor outdoor
                games like Kho-Kho, Badminton, Basketball, Carrom, etc.
              </div>
            </div>
          </Content>
          {/* <img
            style={{
              height: 350,
              width: 350,
              position: "absolute",
              left: "36%",
              top: "20%",
              borderRadius: "60%",
              border: "5px solid white",
            }}
            src={urlString}
          /> */}
          <Content color="black" height="100vh" width="70vw" bor="60% 0 0 60%">
            <div
              style={{
                color: "white",
                marginTop: "5%",
                width: 600,
                padding: 20,
                position: "absolute",
                bottom: "27%",
                left: "44.5%",
              }}
            >
              <div
                style={{
                  width: 329,
                  textAlign: "center",
                  fontSize: 45,
                  fontFamily: "cursive",
                  marginLeft: "35%",
                  color: "black",
                  backgroundColor: "white",
                  marginBottom: 20,
                }}
              >
                Achievements
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "cursive",
                  marginLeft: "30%",
                }}
              >
                — Gold medalist in Kho-Kho nationals<br></br>— Gold medalist in
                Long Jump and Triple jump<br></br> — Secured 1st position in
                Fashion show<br></br>— 1st place in Dancing
              </div>
            </div>
          </Content>
          <div className="about-sidebar" style={{ marginTop: "5%" }}>
            <Line colors="white"></Line>
            <SideBar
              title="About"
              icon={<TiUser />}
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
              icon={<IoIosBook />}
              color="white"
              colorr="#013e3e"
            />
            <SideBar
              title="Projects"
              icon={<IoMdMedal />}
              color="white"
              colorr="#013e3e"
            />
            <Line colors="white"></Line>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default Hobbies;
