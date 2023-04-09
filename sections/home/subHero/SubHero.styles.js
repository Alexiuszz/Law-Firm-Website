import styled from "styled-components";

export const StyledSubHero = styled.div`
  margin-top: 20px;
  .inView {
    transform: rotateY(60deg) translateZ(-200px);
    opacity: 0;
  }
  .heroContent {
    z-index: 1;
    color: #fff;
    width: 500px;
    transition: all 2s;
    h1 {
      font-size: 28px;
      font-weight: 500;
    }
    button {
      background-image: linear-gradient(
        to right,
        #91b5fc,
        #91b5fc 50%,
        #fff 50%
      );
      border: solid 1px #fff;
      border-radius: 8px;
      color: #fff;
      font-size: 14px;
      margin: 0 auto;
      margin-top: 30px;
      padding: 14px;
    }
  }
`;
