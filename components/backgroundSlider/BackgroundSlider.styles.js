import styled from "styled-components";
import { centerContent } from "../../styles/style_mixins";

export const StyledSlider = styled.div`
  background-color: #c3c3c3;
  width: 100vw;
  height: 100vh;
  ${centerContent};
  .currImg.currImg {
    transform: translateX(0vw);
    opacity: 1;
  }
  .multi.multi {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;
export const StyledSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: opacity 2s;
  opacity: 0;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(8, 12, 28, 0.453) 50%,
      rgba(8, 12, 28, 0.737) 70%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: top;
  z-index: 0;
`;
