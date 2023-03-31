import styled from "styled-components";
import { centerContent } from "../../../styles/style_mixins";

export const StyledServiceCard = styled.div`
  ${centerContent}
  flex-direction: column;
  width: 224px;
  height: 170px;
  box-shadow: 2px 10px 5px #ccc;
  padding: 10px;
  padding-top: 30px;
  background-color: #eef0f9d5;
  user-select: "none";
  margin: 0px 10px; 
  && > h1 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
  }
  img {
    width: 40px;
  }
`;
