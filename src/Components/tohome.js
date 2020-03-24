import React from "react";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 80px;
  width: 80px;
  position: absolute;
  border-radius: 60%; // background: blue;
  border: 2px solid white;
  &:hover {
    height: 90px;
    width: 90px;
    border: 2px dotted white;
  }
`;

export default function ToHome() {
  return (
    <Link to="/">
      <Logo src={profile} />
    </Link>
  );
}
