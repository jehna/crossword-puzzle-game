import React, { useState, useEffect } from "react"
import { Level } from "./levels"
import "./Game.scss"

export default ({ onWin, level }: { onWin: () => void; level: Level }) => {
  const [board, setBoard] = useState(
    level.charIndices.map((index) => ({
      index,
      char: level.solved[index] ?? ""
    }))
  )

  useEffect(() => {
    digestMessage(board.map((i) => i.char).join("")).then((hash) => {
      if (hash === level.hash) onWin()
    })
  }, [board, level.hash, onWin])

  return (
    <div
      id="game"
      style={{ gridTemplateColumns: `repeat(${level.width}, 1fr)` }}
    >
      {board.map((i, n) => (
        <div className="board-cell" data-index={i.index} key={n}>
          <input
            type="text"
            maxLength={1}
            value={i.char}
            disabled={level.solved[i.index] !== undefined}
            onChange={(e) => {
              setBoard(
                board.map((item) =>
                  item.index === i.index
                    ? { ...item, char: e.target.value.toLowerCase() }
                    : item
                )
              )
              if (e.target.value) e.target.blur()
            }}
          />
        </div>
      ))}
    </div>
  )
}

async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message) // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8) // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("") // convert bytes to hex string
  return hashHex
}
