import styled from "styled-components";
import { smallHeader } from "../../../styles/style_variables";

export const NewsContainer = styled.div`
  padding: 70px 40px;
  padding-bottom: 60px;
  h1 {
    font-weight: 400;
    font-size: ${smallHeader};
    text-align: left;
    margin-bottom: 40px;
  }
  .newsContainer {
    display: flex;
    justify-content: space-between;
  }
  .texts {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 5%;
    p {
      text-align: left;
      margin-bottom: 10px;
    }
  }
`;
