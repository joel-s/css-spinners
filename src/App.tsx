import React from "react";
import styled from "styled-components";
import {CycloneSpinner} from "./spinners/CycloneSpinner";
import FlippableCard from "./card/FlippableCard";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  overflow: hidden;
`;

function App() {
  return (
    <Background>
      <FlippableCard>
        <CycloneSpinner />
      </FlippableCard>
    </Background>
  );
}

export default App;
