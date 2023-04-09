import styled from "styled-components";
import { centerContent } from "../../styles/style_mixins";

export const StyledSlider = styled.div`
  background-color: #c3c3c3;
  position: relative; 
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  min-height: ${(props) => !props.height && "670px"};
  ${centerContent};
  .currImg.currImg {
    transform: translateX(0vw);
    opacity: 1;
  }
  .multi.multi {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100vw;
    height: 100vh; */
  }
`;
export const StyledSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: opacity 2s;
  opacity: 0;
  background-image: ${(props) =>
      props.bgMask
        ? "linear-gradient(to bottom,      rgba(8, 12, 28, 0.721) 0%,      rgba(8, 12, 28, 0.699) 50%,      rgba(8, 12, 28, 0.737) 70%    )"
        : "linear-gradient(to bottom,      rgba(0, 0, 0, 0) 0%,      rgba(8, 12, 28, 0.453) 50%,      rgba(8, 12, 28, 0.737) 70%    )"},
    url(${(props) => props.image});
  background-size: cover;
  background-position: top;
  z-index: 0;
`;
