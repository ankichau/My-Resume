import styled from "styled-components";

const Content = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.color};
  border-radius: ${props => props.bor};
  @media screen and (max-width: 500px) {
    height: 60vh;
    width: 100%;
  }
`;

export default Content;
