import React from "react";
import styled, {createGlobalStyle, keyframes} from "styled-components";
import {CycloneSpinner} from "./spinners/CycloneSpinner";
import FlippableCard from "./card/FlippableCard";
import {ConvergenceSpinner} from "./spinners/ConvergenceSpinner";
import {CubicSpinner} from "./spinners/CubicSpinner";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(200deg, 80%, 20%);
    overflow: hidden;
  }
`;

const COLORS_WITH_ORANGE = [
  "hsl(25deg, 100%, 50%)",
  "hsl(200deg, 100%, 60%)",
  "hsl(200deg, 80%, 20%)",
];
const COLORS_ONLY_BLUE = [
  "hsl(200deg, 80%, 20%)",
  "hsl(200deg, 90%, 40%)",
  "hsl(200deg, 100%, 60%)",
];

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  perspective: 200vmin;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <FlippableCard xOffset={-1} yOffset={-1} >
          <CycloneSpinner />
        </FlippableCard>
        <FlippableCard xOffset={1} yOffset={-1} >
          <CubicSpinner speed={.5} />
        </FlippableCard>
        <FlippableCard xOffset={-1} yOffset={1} >
          <ConvergenceSpinner speed={10} bidirectional={false} colors={COLORS_WITH_ORANGE} />
        </FlippableCard>
        <FlippableCard xOffset={1} yOffset={1} >
          <ConvergenceSpinner speed={2} bidirectional={false} colors={COLORS_ONLY_BLUE} />
        </FlippableCard>
      </Background>
    </>
  );
}

export default App;
