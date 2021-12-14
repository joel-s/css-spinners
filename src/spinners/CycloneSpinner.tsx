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
  const lightness = i + 20;
  const size = i * 2.5 + 3;

  const spin = keyframes`
    from {
      transform: rotate(${(-360 * 5) - (30 * i)}deg);
    }
    to {
      transform: rotate(${(360 * 5) + (30 * i)}deg);
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
    border-right: 2vmin solid hsl(200deg, 100%, ${lightness}%);
    border-top: 2vmin solid hsl(200deg, 100%, ${lightness}%);
    animation: 10s ease-in-out infinite alternate ${spin};
  `;

  return <RingDiv />;
}

export function CycloneSpinner(): JSX.Element {
  return (
    <>
      {range(0, 30, 1).map(i => <Ring i={i} key={i} />)}
    </>
  );
}
