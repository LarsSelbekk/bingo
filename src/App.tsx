import React, {useEffect, useState} from 'react';
import {Grid} from "./components/grid";
import "./App.css"
import {BingoSquare} from "./components/bingo-square";
import {BoardState, newBingo, update} from "./helper-functios";
import cloneDeep from "lodash/cloneDeep"
import {BingoAlert} from "./components/bingo-alert";
import {ButtonGroup} from "./components/button-group";
import {Button} from "react-bootstrap";

function App() {
    const [boardState, setBoardState] = useState<BoardState | undefined>(undefined)
    const [showBingoOverlay, setShowBingoOverlay] = useState(false)
    const [showBingoGrid, setShowBingoGrid] = useState(true)
    const activateSquare = (index: number) => () => {
        setBoardState(prevState => {
            if (prevState) {
                const newSquareState = cloneDeep(prevState)
                newSquareState.squares[index].active = !newSquareState.squares[index].active
                const {newState, bingo} = update(newSquareState)
                if (bingo) setShowBingoOverlay(bingo)
                return newState
            }
            return prevState
        })
    }

    useEffect(() => {
        const storage = localStorage.getItem("state")
        if (storage != null) {
            setBoardState(JSON.parse(storage))
        } else {
            setBoardState(newBingo())
        }
    }, [])

    useEffect(() => {
        if (boardState) {
            localStorage.setItem("state", JSON.stringify(boardState))
        }
    }, [boardState])

    return (
        <div className="app">
            <header className="header">
                Bingo
            </header>

            <ButtonGroup>
                <Button className={"button"} variant="secondary"
                        onClick={() => setShowBingoGrid(!showBingoGrid)}>Toggle</Button>
                <Button variant="secondary" onClick={() => setBoardState(newBingo())}>Reset board</Button>
            </ButtonGroup>
            {showBingoGrid ? (<Grid>
                    {boardState?.squares.map((value, index) =>
                        <BingoSquare active={value.active} text={value.text}
                                     onClick={activateSquare(index)}/>)}
                </Grid>) :
                (<div>Something else</div>)}

            {showBingoOverlay && <BingoAlert open={showBingoOverlay} onClick={() => setShowBingoOverlay(false)}/>}

        </div>
    );
}

export default App;
