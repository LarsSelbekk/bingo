import React from 'react';
import {Grid} from "./components/grid";
import "./App.css"
import {BingoSquare} from "./components/bingo-square";

function App() {
  return (
    <div className="app">
      <header className="header">
          Bingo
      </header>

        <Grid>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false} text={"hello"}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
        </Grid>
    </div>
  );
}

export default App;
