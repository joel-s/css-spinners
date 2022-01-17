import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {CycloneSpinner} from "./spinners/CycloneSpinner";
import FlippableCard from "./card/FlippableCard";
import {ConvergenceSpinner} from "./spinners/ConvergenceSpinner";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #333;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vmin;
  margin: auto;
  background-color: black;
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
      <FlippableCard xOffset={-1} yOffset={1} >
        <ConvergenceSpinner speed={10} bidirectional={false} />
      </FlippableCard>
      <FlippableCard xOffset={1} yOffset={1} >
        <ConvergenceSpinner speed={3} bidirectional={true} />
      </FlippableCard>
    </Background>
    </>
  );
}

export default App;
