import React from 'react';
import {Grid} from "./components/grid";
import {BingoSquare} from "./components/bingo-square";

function App() {
  return (
    <div className="screen">
      <header className="bg-gray-800">
          Hello
      </header>

        <Grid>
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
              <BingoSquare active={true} connectedVertical={false} connectedHorizontal={false}/>
        </Grid>
    </div>
  );
}

export default App;
