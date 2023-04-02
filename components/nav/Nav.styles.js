import styled from "styled-components";
import { jiggle, point1, point2 } from "../../styles/keyframes";
import { centerContent } from "../../styles/style_mixins";

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff91;
  z-index: 10;
  height: 50px;
  width: 100%;
  box-shadow: 0px 2px 6px #00000038;
  display: flex;
  align-items: center;
  padding: 0 5%;
  font-size: 14px;
  &::after {
    content: "";
    height: 40px;
    width: 25px;
    position: absolute;
    background-color: #7272729e;
    box-shadow: 0px 2px 6px #00000038;
    position: absolute;
    z-index: 1;
    top: 110%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    clip-path: polygon(
      50% 0,
      100% 50%,
      50% 100%,
      50% 95%,
      95% 50%,
      50% 5%
    );
  }
  &::before,
  &::after {
    animation: ${point2} 2s ease-in infinite;
  }
  &::before {
    content: "";
    height: 30px;
    width: 15px;
    position: absolute;
    background-color: #7272729e;
    box-shadow: 0px 2px 6px #00000038;
    position: absolute;
    top: 140%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    clip-path: polygon(
      50% 0,
      100% 50%,
      50% 100%,
      50% 95%,
      95% 50%,
      50% 5%
    );
    animation-delay: 0.5s;
  }

  &:hover {
    box-shadow: none;
    border-bottom: 1px solid #2d44a0;
    background-color: #ffffff;
  }
  &:hover::before,
  &:hover::after {
    display: none;
  }
  a:hover {
    animation: ${jiggle} 0.5s ease-out;
  }
 
  .items {
    /* position: relative; */
    margin-left: 65%;
    width: 200px;
    left: 65%;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    a {
      margin-left: 20px;
      animation: ${jiggle} 0.5s ease-out;
    }
  }

  &:hover .navDrop {
    height: 80px;
    opacity: 1;
    font-size: 14px;
  }

  .navDrop {
    ${centerContent};
    position: absolute;
    background-color: #f0f0f07f;
    top: 100%;
    left: 0;
    height: 0;
    width: 100%;
    opacity: 0;
    font-size: 12px;
    transition: all 0.3s;
    a {
      margin-right: 2%;
    }
    &:hover {
      background-color: #ffffffdf;
    }
  }
`;
