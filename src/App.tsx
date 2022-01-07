import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {CycloneSpinner} from "./spinners/CycloneSpinner";
import FlippableCard from "./card/FlippableCard";

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
    <Background>
      <FlippableCard isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <CycloneSpinner />
      </FlippableCard>
    </Background>
    </>
  );
}

export default App;
