import styled from "styled-components";

export const HomeHero = styled.div`
  z-index: 1;
  color: #fff;
  width: 500px;
  margin-top: 13%;
  h1 {
    font-size: 60px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    line-height: 30px;
  }
  button {
    background-image: linear-gradient(
      to right,
      #91b5fc,
      #91b5fc 50%,
      #fff 50%
    );
    color: #fff;
    font-size: 14px;
    border: solid 1px #fff;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 14px;
  }
  

  .slideButton {
    display: flex;
    width: 150px;
    margin: 0 auto;
    margin-top: 50px;
    button {
      border-radius: 50%;
      height: 15px;
      width: 15px;
      padding: 0;
    }
    .fill {
      background: #fff;
    }
  }
`;
