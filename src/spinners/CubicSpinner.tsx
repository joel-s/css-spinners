import type { ReactElement } from "react";
import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

const COLORS = [
  "hsl(25deg, 100%, 50%)",
  "hsl(200deg, 100%, 60%)",
  "hsl(200deg, 80%, 20%)",
];

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
`;

/**
 * Returns a ring that spins back and forth
 * @param $i Number between 0 and 30, inclusive
 * @param $speed Sets the maximum number of turns for each arc
 * @param $bidirectional If true, some arcs should rotate counterclockwise
 */
const Ring = styled.div.attrs<{ $i: number, $speed: number }>((props) => ({
  $i: props.$i,
  $color: COLORS[props.$i % 3],
  $size: props.$i * 2.5 + 3,
  $bezierLowX: (props.$i * .01) + (props.$i % 3) * .22,
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 40%;
  width: ${(props) => props.$size}vmin;
  height: ${(props) => props.$size}vmin;
  border-top: 2vmin solid ${(props) => props.$color};
  border-left: 2vmin solid ${(props) => props.$color};
  animation: 12s
    cubic-bezier(${(props) => props.$bezierLowX}, 0, ${(props) => props.$bezierLowX + .15}, 1)
    infinite ${spin};
`;

type CubicSpinnerProps = {
  speed: number,
};

export function CubicSpinner({speed} : CubicSpinnerProps): ReactElement {
  return (
    <>
      {range(0, 30, 1).map(
        i => <Ring $i={i} $speed={speed} key={i} />
      )}
    </>
  );
}
