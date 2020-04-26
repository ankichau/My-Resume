import styled from "styled-components";

const Content = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background: #013e3e;
  border-radius: ${props => props.bor};
  @media screen and (max-width: 500px) {
    height: 60vh;
    width: 100%;
  }
`;

export default Content;
