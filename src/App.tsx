import React, { useState } from "react"
import "./App.scss"
import Game from "./Game"
import { Level, levels } from "./levels"

type State =
  | { state: "starting" }
  | { state: "playing"; level: Level }
  | { state: "winning" }

function App() {
  const [state, setState] = useState<State>({ state: "starting" })
  const [startTime, setStartTime] = useState(0)
  const [endtime, setEndTime] = useState(0)

  return (
    <div className="App">
      {state.state === "playing" ? (
        <Game
          level={state.level}
          onWin={() => {
            setState({ state: "winning" })
            setEndTime(Date.now())
          }}
        />
      ) : state.state === "starting" ? (
        levels.map((level, i) => (
          <button
            className="play-game"
            onClick={() => {
              setState({ state: "playing", level })
              setStartTime(Date.now())
            }}
          >
            Taso {i + 1}
          </button>
        ))
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
