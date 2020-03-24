import styled from "styled-components";

const Profile = styled.img`
  height: 350px;
  width: 350px;
  position: absolute;
  left: 59%;
  top: 20%;
  border-radius: 60%; // background: blue;
  border: 6px solid white;
  ${props => props.sum}:hover {
    height: 360px;
    width: 360px;
    border: 6px dotted #013e3e;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
    width: 200px;
    position: absolute;
    left: 23%;
    top: 51%;
  }
`;

export default Profile;
