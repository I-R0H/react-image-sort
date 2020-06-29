import React from 'react';
import './App.css';
import { Horizontal } from './components/Horizontal';
import { Grid } from './components/Grid';
import styled from 'styled-components';

function App() {
  return (
    <GridDiv className="App">
      <GridDiv>
        Horizontal
        <Horizontal />
      </GridDiv>
      <GridDiv>
        Grid
        <Grid />
      </GridDiv>
    </GridDiv>
  );
}

export default App;

const GridDiv = styled.div`
  display: grid;
  gap: 16px;
`
