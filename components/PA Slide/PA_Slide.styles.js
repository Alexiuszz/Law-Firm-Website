import styled from "styled-components";

export const Slider = styled.div`
  padding: 10px 40px;
  padding-bottom: 60px;
  .PA-container {
    transition: all 2.5s;
    /* transform: ${(props) =>
      !props.inView && "translateX(-1000px)"}; */
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 80px 0px;
    opacity: ${(props) => !props.inView && "0"};
    .texts {
      transition: all 1s;
      transform: ${(props) => !props.inView && "translateX(-1000px)"};
      width: 50%;
      h1 {
        font-size: 28px;
        margin-bottom: 30px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
      }
      h1,
      p {
        text-align: left;
      }
    }
    .arrowsContainer {
      position: absolute;
      right: 5%;
      bottom: 30%;
      margin-left: 10px;
      display: flex;
    }
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
