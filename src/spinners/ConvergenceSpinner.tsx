import type {ReactElement} from "react";
import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

const spin = (startAngle: number, finalAngle: number) => keyframes`
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

type RingDivProps = { $size: number, $color: string, $startAngle: number, $finalAngle: number };

const RingDiv = styled.div.attrs<RingDivProps>((props) => ({
  $size: props.$size,
  $color: props.$color,
  $startAngle: props.$startAngle,
  $finalAngle: props.$finalAngle,
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  width: ${props => props.$size}vmin;
  height: ${props => props.$size}vmin;
  border-top: 2vmin solid ${props => props.$color};
  animation: 15s ease-in-out infinite ${props => spin(props.$startAngle, props.$finalAngle)};
`;

type RingProps = {
  i: number,
  speed: number,
  bidirectional: boolean,
  colors: string[],
};

/**
 * Returns a ring that spins back and forth
 * @param i Number between 0 and 30, inclusive
 * @param speed Sets the maximum number of turns for each arc
 * @param bidirectional If true, some arcs should rotate counterclockwise
 * @constructor
 */
export function Ring({i, speed, bidirectional, colors}: RingProps): ReactElement {
  const modulus = i % 3;
  const numTurns = Math.floor((Math.random()/2 +.5) * speed);
  const turns = (!bidirectional || Math.random() > .5) ? numTurns : -numTurns;
  const startAngle = (i % 2) ? 180 : 0;
  const finalAngle = turns * 360 + modulus * 120;
  const color = colors[modulus];
  const size = i * 2.5 + 3;

  return <RingDiv $size={size} $color={color} $startAngle={startAngle} $finalAngle={finalAngle} />;
}

type ConvergenceSpinnerProps = {
  speed: number,
  bidirectional: boolean,
  colors: string[],
};

export function ConvergenceSpinner(
  {speed, bidirectional, colors} : ConvergenceSpinnerProps
): ReactElement {
  return (
    <>
      {range(0, 30, 1).map(
        i => <Ring i={i} speed={speed} bidirectional={bidirectional} colors={colors} key={i} />
      )}
    </>
  );
}
