import { useState } from "react"
import Square from "../components/Square"

import './App.css'
import StateManager from "../models/StateManager"
import Snapshot from "../components/Snapshot"
import State from "../models/State"
import CheckWinner from "../utils/CheckWinner"

const App = () => {

    const [squares, setSquare] = useState(Array(9).fill(null))
    const [xTurn, SetXTurn] = useState(true)

    const [stateManagerPool, setStateManagerPool] = useState(new Array())
    const sm = new StateManager(stateManagerPool, setStateManagerPool)

    const clickHandler = (i) => {
        if (squares[i] || CheckWinner(squares)[0]) {
            return
        }

        const squaresCopy = squares.slice()
        squaresCopy[i] = xTurn ? "X" : "O"
        setSquare(squaresCopy)

        SetXTurn(!xTurn)
        const snapshot = new State(squares.slice(), xTurn)
        sm.add(snapshot)
    }

    const newGame = (t) => {
        sm.clear()
        setSquare(Array(9).fill(null))
        SetXTurn(t)
    }

    const [winner, pattern] = CheckWinner(squares)
    let status = winner ? `Победитель: ${winner}` : `Ход: ${xTurn ? "X" : "O"}`

    return (
        <div className="App">
            <p>{status}</p>
            <div className="App__BattleArea">
                {[...Array(9).keys()].map(i => (
                    <Square 
                        key={i}
                        value={squares[i]} 
                        click={() => {clickHandler(i)}} 
                        className={winner && pattern.includes(i) ? "BattleArea__Winner" : null}
                    />
                ))}
            </div>
            <div style={{margin: "10px 0"}}>
                <button onClick={() => {newGame(true)}}>Начать сначала (X)</button>
                <button onClick={() => {newGame(false)}}>Начать сначала (O)</button>
            </div>
            <div className="App__History">
                {sm.StatePool.map((snap, i) => (
                    <Snapshot 
                        key={i} 
                        step={i} 
                        snapshot={snap} 
                        toolset={[setSquare, SetXTurn]} 
                    />
                ))}
            </div>
        </div>
    )
}

export default App