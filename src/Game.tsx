import React, { useState, useEffect } from "react"
import "./Game.scss"

type Board = {
  charIndices: number[]
  width: number
  height: number
  hash: string
  solved: { [char: number]: string }
}

export default ({ onWin }: { onWin: () => void }) => {
  const [board, setBoard] = useState(
    boardData.charIndices.map((index) => ({
      index,
      char: boardData.solved[index] ?? ""
    }))
  )

  useEffect(() => {
    digestMessage(board.map((i) => i.char).join("")).then((hash) => {
      if (hash === boardData.hash) onWin()
    })
  }, [board, onWin])

  return (
    <div
      id="game"
      style={{ gridTemplateColumns: `repeat(${boardData.width}, 1fr)` }}
    >
      {board.map((i, n) => (
        <div className="board-cell" data-index={i.index} key={n}>
          <input
            type="text"
            maxLength={1}
            value={i.char}
            disabled={boardData.solved[i.index] !== undefined}
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

const boardData: Board = {
  solved: { 3: "v", 7: "n" },

  charIndices: [
    3,
    0,
    4,
    3,
    0,
    0,
    3,
    0,
    0,
    7,
    8,
    0,
    7,
    10,
    6,
    0,
    5,
    1,
    2,
    0,
    0,
    10,
    7,
    9,
    0
  ],
  width: 5,
  height: 5,
  hash: "4cb29b833beb49fad96cfc41edb5d38076f0ec2d27b9331e9b6ea027c2184413"
}

async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message) // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8) // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("") // convert bytes to hex string
  return hashHex
}
