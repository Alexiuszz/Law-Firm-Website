import styled from "styled-components";
import { centerContent } from "../../styles/style_mixins";

export const Button = styled.button.attrs((props) => ({
        className: props.className,
      }))`
  ${centerContent};
  font-family: inherit;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    #547fd6,
    #547fd6 50%,
    #ffffff 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;  

  &:hover {
    background-position: 0;
  }
`;
