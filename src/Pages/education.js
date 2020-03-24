import React, { Component } from "react";
import Wrapper from "../Components/wrapper";
import Content from "../Components/content";
import EduDetails from "../Components/edudetails";
import { TiUser } from "react-icons/ti";
import { IoIosBook } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import SideBar from "../Components/sidebar";
import ToHome from "../Components/tohome";
import Line from "../Components/line";

export default class Education extends Component {
  render() {
    return (
      <>
        <ToHome />
        <Wrapper>
          <Content color="black" width="150vh" height="100vh" bor="0 60% 60% 0">
            <div
              style={{
                color: "white",
                position: "absolute",
                top: 60,
                left: 20,
                width: 700,
                padding: 20
              }}
            >
              <span
                style={{
                  paddingLeft: 100,
                  fontFamily: "cursive",
                  fontSize: 40,
                  textAlign: "center"
                }}
              >
                College Projects
              </span>
              <br></br>
              <br></br>
              <span style={{ padding: 5, fontFamily: "cursive", fontSize: 20 }}>
                {" "}
                Smart Screen ​ (MAR 2019 - APR 2019)<br></br>
                <br></br> Based on simple screen content sharing which can later
                be used for references at any time Technologies worked on​ -
                Raspberry Pi, Python, S-FTP protocol.
              </span>
              <br></br>
              <br></br>
              <span style={{ padding: 5, fontFamily: "cursive", fontSize: 20 }}>
                Self Driving car — Mini Project ​ ( MAR 2018)<br></br>
                <br></br> The car was built using 4 motors which were used to
                drive the car in the needed motion. Voice Inputs are given using
                an android application which drives the car in the required
                direction.
              </span>
              <br></br>
            </div>
          </Content>
          <div>
            <EduDetails
              title="H.K.B.K College of Engineering /B.E.(EC)"
              some="7.45/10(CGPA)"
              name="COLLEGE"
            >
              2015 - 2019, BANGALORE
            </EduDetails>
            <EduDetails
              title="Kendriya Vidyalaya No.1/PUC"
              some="72%"
              name="SCHOOL/PUC"
            >
              2014 - 2015, BANGALORE
            </EduDetails>
            <EduDetails
              title="Kendriya Vidyalaya No.1/SSLC"
              some="8.8/10(CGPA)"
              name="SCHOOL/SSLC"
            >
              2012 - 2013, BANGALORE
            </EduDetails>
          </div>
          <div className="about-sidebar" style={{ marginTop: 50 }}>
            <Line colors="black"></Line>
            <SideBar title="Experience" icon={<IoIosBook />} color="black" />
            <SideBar title="About" icon={<TiUser />} color="black" />

            <SideBar title="Hobbies" icon={<GoBookmark />} color="black" />
            <Line colors="black"></Line>
          </div>
        </Wrapper>
      </>
    );
  }
}
