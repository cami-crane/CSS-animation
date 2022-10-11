import styled from "@emotion/styled";
import { Gigantic } from "../keyframes/Gigantic";

export const Mario = styled.img`
  margin: 0 auto;
  cursor: pointer;

  /* CSSアニメーション */
  animation-name: ${Gigantic};
  animation-duration: 3s;
  animation-timing-function: steps(3, start);
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: paused;

  :hover {
    animation-play-state: running;
  }
`;
