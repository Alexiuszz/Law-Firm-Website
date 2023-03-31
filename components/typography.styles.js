import { Noto_Serif_TC } from "next/font/google";
import styled from "styled-components";

const noto = Noto_Serif_TC({
  subsets: ["latin"],
  weight: "300",
});

export const Header = styled.h1.attrs((props) => ({
  className: noto.className,
}))`
  text-align: center;
  font-weight: 300;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 400;
`;
