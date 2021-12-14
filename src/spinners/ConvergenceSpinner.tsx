import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

type RingProps = {
  i: number,
};

/**
 * Returns a ring that spins back and forth
 * @param i Number between 0 and 30, inclusive
 * @constructor
 */
export function Ring({i}: RingProps): JSX.Element {
  const modulus = i % 3;
  const numTurns = Math.floor((Math.random() +.5) * 20);
  const turns = (Math.random() > .5 || true) ? numTurns : -numTurns;
  const startAngle = (i % 2) ? 180 : 0;
  const finalAngle = turns * 360 + modulus * 120;
  const hue = 220 + modulus * 60;
  const lightness = i + 20;
  const size = i * 2.5 + 3;

  const spin = keyframes`
    from {
      transform: rotate(${startAngle}deg);
    }
    5% {
      transform: rotate(${startAngle}deg);
    }
    95% {
      transform: rotate(${finalAngle}deg);
    }
    to {
      transform: rotate(${finalAngle}deg);
    }
  `;

  const RingDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    width: ${size}vmin;
    height: ${size}vmin;
    /*border-right: 2vmin solid hsl(${hue}, 100%, ${lightness}%);*/
    border-top: 2vmin solid hsl(${hue}, 70%, ${lightness}%);
    animation: 15s ease-in-out infinite alternate ${spin};
  `;

  return <RingDiv />;
}

export function ConvergenceSpinner(): JSX.Element {
  return (
    <>
      {range(0, 30, 1).map(i => <Ring i={i} key={i} />)}
    </>
  );
}
