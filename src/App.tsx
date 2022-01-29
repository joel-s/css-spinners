import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {CycloneSpinner} from "./spinners/CycloneSpinner";
import FlippableCard from "./card/FlippableCard";
import {ConvergenceSpinner} from "./spinners/ConvergenceSpinner";
import {CubicSpinner} from "./spinners/CubicSpinner";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(200deg, 80%, 20%);
  }
`;

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
        <ConvergenceSpinner speed={10} bidirectional={false} />
      </FlippableCard>
      <FlippableCard xOffset={1} yOffset={1} >
        <ConvergenceSpinner speed={2} bidirectional={false} />
      </FlippableCard>
    </Background>
    </>
  );
}

export default App;
