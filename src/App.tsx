import React, { useState } from "react"
import "./App.scss"
import Game from "./Game"

type State = "starting" | "playing" | "winning"

function App() {
  const [state, setState] = useState<State>("starting")
  const [startTime, setStartTime] = useState(0)
  const [endtime, setEndTime] = useState(0)

  return (
    <div className="App">
      {state === "playing" ? (
        <Game
          onWin={() => {
            setState("winning")
            setEndTime(Date.now())
          }}
        />
      ) : state === "starting" ? (
        <button
          id="play-game"
          onClick={() => {
            setState("playing")
            setStartTime(Date.now())
          }}
        >
          Play game!
        </button>
      ) : (
        <div id="win">
          You won!
          <br />
          Time: {Math.round((endtime - startTime) / 1000)} seconds
        </div>
      )}
    </div>
  )
}

export default App
