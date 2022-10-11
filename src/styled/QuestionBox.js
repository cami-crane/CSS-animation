import styled from "@emotion/styled";
import { FadeIn } from "../keyframes/FadeIn";

export const QuestionBox = styled.img`
  display: block;
  width: 200px;
  height: auto;
  opacity: 0;S
  cursor: pointer;

  /* CSSアニメーション */
  animation-name: ${FadeIn};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: reverse;

  :hover {
    animation-play-state: paused;
  }
`;
