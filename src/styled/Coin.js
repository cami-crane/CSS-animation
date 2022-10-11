import styled from "@emotion/styled";
import { Rotate } from "../keyframes/Rotate";

export const Coin = styled.img`
  width: 100px;
  /* margin: 0 auto; */

  animation: ${Rotate} 1s linear infinite;
`;
