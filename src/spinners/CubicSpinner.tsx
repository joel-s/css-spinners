import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

type RingProps = {
  i: number,
  speed: number,
};

const COLORS = [
  "hsl(25deg, 100%, 50%)",
  "hsl(200deg, 100%, 60%)",
  "hsl(200deg, 80%, 20%)",
];

/**
 * Returns a ring that spins back and forth
 * @param i Number between 0 and 30, inclusive
 * @param speed Sets the maximum number of turns for each arc
 * @param bidirectional If true, some arcs should rotate counterclockwise
 * @constructor
 */
export function Ring({i, speed}: RingProps): JSX.Element {
  const modulus = i % 3;
  const color = COLORS[modulus];
  const size = i * 2.5 + 3;

  const bezierLowXValue = (i * .01) + modulus * .25;
  const bezierHighXValue = bezierLowXValue + .15;

  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  const RingDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 40%;
    width: ${size}vmin;
    height: ${size}vmin;
    border-top: 2vmin solid ${color};
    border-left: 2vmin solid ${color};
    animation: 3s cubic-bezier(${bezierLowXValue}, 0, ${bezierHighXValue}, 1) infinite ${spin};
  `;

  return <RingDiv />;
}

type CubicSpinnerProps = {
  speed: number,
};

export function CubicSpinner({speed} : CubicSpinnerProps): JSX.Element {
  return (
    <>
      {range(0, 30, 1).map(
        i => <Ring i={i} speed={speed} key={i} />
      )}
    </>
  );
}
