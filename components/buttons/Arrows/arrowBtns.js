import styled from "styled-components";
import { centerContent } from "../../../styles/style_mixins";

const Arrow = styled.button`
  height: 40px;
  width: 40px;
  background-color: ${(props) =>
    props.disabled ? "#2a3d9253" : "#2a3d92"};
  border-radius: 50%;
  cursor: pointer;
  ${centerContent};
  user-select: none;
  border: none;
  margin-right: 20px;
  div {
    height: 90%;
    width: 127%;
    background-color: #fff;
    clip-path: polygon(
      20% 10%,
      100% 50%,
      20% 90%,
      20% 80%,
      81% 50%,
      20% 20%
    );
  }
`;

export const StyledLeftArrow = styled(Arrow)`
  div {
    transform: rotate(180deg);
  }
`;
export const StyledRightArrow = styled(Arrow)``;
