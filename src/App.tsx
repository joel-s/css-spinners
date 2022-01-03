import React from 'react';
import styled from 'styled-components';
import { ConvergenceSpinner } from "./spinners/ConvergenceSpinner";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  overflow: hidden;
  perspective: 1000px;
`;

// const CardFace = ...;

const Front = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 5%;
  transition: transform 1000ms;
  will-change: transform;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vmin;
  width: 90vmin;
  margin: auto;
  
  &:hover ${Front}, &:focus ${Front} {
    transform: rotateY(180deg);
  } 
`;

function App() {
  return (
    <Background>
      <Card>
        <Front>
          <ConvergenceSpinner bidirectional={true} />
        </Front>
      </Card>
    </Background>
  );
}

export default App;
