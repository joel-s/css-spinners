import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

type RingProps = {
  i: number,
  speed: number,
  bidirectional: boolean,
};

/**
 * Returns a ring that spins back and forth
 * @param i Number between 0 and 30, inclusive
 * @param speed Sets the maximum number of turns for each arc
 * @param bidirectional If true, some arcs should rotate counterclockwise
 * @constructor
 */
export function Ring({i, speed, bidirectional}: RingProps): JSX.Element {
  const modulus = i % 3;
  const numTurns = Math.floor((Math.random()/2 +.5) * speed);
  const turns = (!bidirectional || Math.random() > .5) ? numTurns : -numTurns;
  const startAngle = (i % 2) ? 180 : 0;
  const finalAngle = turns * 360 + modulus * 120;
  const hue = 220 + modulus * 60;
  const lightness = i + 20;
  const size = i * 2.5 + 3;

  const spin = keyframes`
    0% {
      transform: rotate(${startAngle}deg);
    }
    40% {
      transform: rotate(${finalAngle}deg);
    }
    50% {
      transform: rotate(${finalAngle}deg);
    }
    90% {
      transform: rotate(${startAngle}deg);
    }
    100% {
      transform: rotate(${startAngle}deg);
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

type ConvergenceSpinnerProps = {
  speed: number,
  bidirectional: boolean,
};

export function ConvergenceSpinner({bidirectional, speed} : ConvergenceSpinnerProps): JSX.Element {
  return (
    <>
      {range(0, 30, 1).map(
        i => <Ring i={i} speed={speed} bidirectional={bidirectional} key={i} />
      )}
    </>
  );
}
