import { useState } from "react";
import Board from "./Component/Board/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquers = history[currentMove];

  function handlePlay(nextSquears) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquears];
    setHistory(nextHistory);
    setXIsNext(!xIsNext);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 == 0);
  }

  const moves = history.map((squears, move) => {
    let description;
    if (move > 0) {
      description = `letst move to ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <>
        <li
          key={move}
          className="bg-slate-50 rounded-sm text-slate-950 mb-2 px-2"
        >
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return (
    <div className="conatiner md:flex justify-center items-center h-screen bg-slate-950 text-slate-50 ">
      <div className=" w-96 p-5 mr-4">
        <Board xIsNext={xIsNext} squears={currentSquers} onPlay={handlePlay} />
      </div>
      <div className="border p-2">
        <h1 className="mb-2">Your playing history </h1>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
