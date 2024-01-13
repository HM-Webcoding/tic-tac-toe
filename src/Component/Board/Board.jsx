import Squear from "../Squear/Squear";
import calculateWinner from "../Utilities/CalculateWinner";

export default function Board({ squears, xIsNext, onPlay }) {
  const wineer = calculateWinner(squears);

  let status;
  if (wineer) {
    status = `wineer player ( ${wineer})`;
  } else {
    status = "Next player: " + (xIsNext ? "(x)" : "(o)");
  }

  function handleClick(i) {
    if (squears[i] || wineer) {
      return;
    }
    const nextSquears = [...squears];
    if (xIsNext) {
      nextSquears[i] = "X";
    } else {
      nextSquears[i] = "O";
    }
    onPlay(nextSquears);
  }

  return (
    <>
      <div className="my-0 mx-auto container">
        <h1 className="text-3xl mb-2">{status}</h1>
        <div className="flex">
          <Squear value={squears[0]} squearsOnClick={() => handleClick(0)} />
          <Squear value={squears[1]} squearsOnClick={() => handleClick(1)} />
          <Squear value={squears[2]} squearsOnClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Squear value={squears[3]} squearsOnClick={() => handleClick(3)} />
          <Squear value={squears[4]} squearsOnClick={() => handleClick(4)} />
          <Squear value={squears[5]} squearsOnClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Squear value={squears[6]} squearsOnClick={() => handleClick(6)} />
          <Squear value={squears[7]} squearsOnClick={() => handleClick(7)} />
          <Squear value={squears[8]} squearsOnClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
