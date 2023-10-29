import type { ReactElement } from "react";
import styled, {keyframes} from "styled-components";
import {range} from "../utils/util";

const spin = (i) => keyframes`
  from {
    transform: rotate(${(-360 * 5) - (30 * i)}deg);
  }
  to {
    transform: rotate(${(360 * 5) + (30 * i)}deg);
  }
`;

/**
 * Returns a ring that spins back and forth
 * @param i Number between 0 and 30, inclusive
 */
const Ring = styled.div.attrs<{ $i: number }>((props) => ({
  $i: props.$i,
  $lightness: props.$i + 20,
  $size: props.$i * 2.5 + 3,
}))`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    width: ${(props) => props.$size}vmin;
    height: ${(props) => props.$size}vmin;
    border-right: 2vmin solid hsl(200deg, 100%, ${(props) => props.$lightness}%);
    border-top: 2vmin solid hsl(200deg, 100%, ${(props) => props.$lightness}%);
    animation: 10s ease-in-out infinite alternate ${(props) => spin(props.$i)};
  `;

export function CycloneSpinner(): ReactElement {
  return (
    <>
      {range(0, 30, 1).map(i => <Ring $i={i} key={i} />)}
    </>
  );
}
