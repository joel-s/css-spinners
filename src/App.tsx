import React from 'react';
import styled from 'styled-components';
import {ConvergenceSpinner} from "./spinners/ConvergenceSpinner";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
`;

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 95vmin;
  width: 95vmin;
  margin: auto;
  background-color: white;
`;

function App() {
  return (
    <Background>
      <Main>
        <ConvergenceSpinner />
      </Main>
    </Background>
  );
}

export default App;
