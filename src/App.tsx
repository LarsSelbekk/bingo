import React, {ChangeEventHandler, useEffect, useState} from 'react';
import {Grid} from "./components/grid";
import "./App.css"
import {BingoSquare} from "./components/bingo-square";
import {BoardState, loadSongs, newBingo, SongData, update} from "./helper-functios";
import cloneDeep from "lodash/cloneDeep"
import {BingoAlert} from "./components/bingo-alert";
import {ButtonGroup} from "./components/button-group";
import {Button} from "react-bootstrap";
import {SongTable} from "./components/song-table";


function App() {
    const [boardState, setBoardState] = useState<BoardState | undefined>(undefined)
    const [showBingoOverlay, setShowBingoOverlay] = useState(false)
    const [showBingoGrid, setShowBingoGrid] = useState(true)
    const [songs, setSongs] = useState<SongData[] | undefined>(undefined)

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

    const updateScore = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSongs(prevState => {
            if (prevState)  {
                const newState = cloneDeep(prevState)
                newState[index].score = Number.parseFloat(event.target.value);
                return newState;
            }

            return prevState;
        })
    }
    useEffect(() => {
        const storage = localStorage.getItem("state")
        console.log(loadSongs())
        if (storage != null) {
            setBoardState(JSON.parse(storage))
        } else {
            setBoardState(newBingo())
        }
        const songStorage = localStorage.getItem("songs")
        if (songStorage != null) {
            setSongs(JSON.parse(songStorage))
        } else {
            setSongs(loadSongs())
        }
    }, [])

    useEffect(() => {
        if (boardState) {
            localStorage.setItem("state", JSON.stringify(boardState))
        }
    }, [boardState])

    useEffect(() => {
        if (songs) {
            localStorage.setItem("songs", JSON.stringify(songs))
        }
    }, [songs])

    return (
        <div className="app">
            <header className="header">
                Bingo
            </header>

            <ButtonGroup>
                <Button className={"button"} variant="secondary"
                        onClick={() => setShowBingoGrid(!showBingoGrid)}>Toggle</Button>
                <Button variant="secondary" onClick={() => {
                    setBoardState(newBingo());
                    setSongs(loadSongs());
                }}>Reset board</Button>
            </ButtonGroup>
            {showBingoGrid ? (<Grid>
                    {boardState?.squares.map((value, index) =>
                        <BingoSquare active={value.active} text={value.text}
                                     onClick={activateSquare(index)}/>)}
                </Grid>) :
                (<SongTable songs={songs} updateScore={updateScore}/>)}

            {showBingoOverlay && <BingoAlert open={showBingoOverlay} onClick={() => setShowBingoOverlay(false)}/>}

        </div>
    );
}

export default App;
