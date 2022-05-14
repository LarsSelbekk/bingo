import React, {useState} from 'react';
import {Grid} from "./components/grid";
import "./App.css"
import {BingoSquare} from "./components/bingo-square";
import {BoardState, newBingo, update} from "./helper-functios";
import cloneDeep from "lodash/cloneDeep"
function App() {

    const [boardState, setBoardState] = useState<BoardState>(newBingo())
    const [showBingoOverlay, setShowBingoOverlay] = useState(false)
    const activateSquare = (index: number) => () => {
        setBoardState(prevState => {
            const newSquareState = cloneDeep(prevState)
            newSquareState.squares[index].active = !newSquareState.squares[index].active
            const {newState, bingo} = update(newSquareState)
            if (bingo) setShowBingoOverlay(bingo)
            return newState
        })
    }
    return (
        <div className="app">
            <header className="header">
                Bingo
            </header>

            {showBingoOverlay && (<>BINGO</>)}

            <Grid>
                {boardState.squares.map((value, index) =>
                    <BingoSquare active={value.active} text={value.text}
                                 onClick={activateSquare(index)}/>)}
            </Grid>
        </div>
    );
}

export default App;
