import styled from "styled-components";

export const StyledFooter = styled.div`
  height: 400px;
  .container {
    height: 90%;
    padding: 63px 42px 5px 55px;
    background-image: linear-gradient(
      164deg,
      #fbfbfd 0%,
      #fbfbfd 85%,
      #364587 85%,
      #1d2b69 90%,
      #1d2b69
    );
  }
  .mainContent {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .columns {
    display: flex;
    flex-direction: column;
    width: 23%;
  }
  .columns * {
    margin-bottom: 5%;
  }
  .columns a {
    width: fit-content;
    font-size: 14px;
  }
  .copywrite {
    height: 10%;
    padding: 10px 55px;
    color: #ffffff;
    background-image: linear-gradient(
      164deg,
      #364587 0%,
      #364587 63%,
      #1d2b69 75%
    );
    span {
      margin-left: 60%;
      svg {
        margin-left: 10px;
        width: 14px;
        height: 14px;
      }
    }
  }
`;
