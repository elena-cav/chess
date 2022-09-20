import React from "react";
import "./chessboard.css";

export default function Chessboard({
  handleClick,
  initialPosition,
  finalPosition,
  piece,
  pieceName,
  isValidated,
}) {
  const board = [...Array(8)].map((x, j) => {
    return Array(8)
      .fill(null)
      .map((y, i) => {
        return `${String.fromCharCode(65 + i)}${8 - j}`;
      });
  });
  const turnedBoard = board[0].map((_, colIndex) =>
    board.map((row) => row[colIndex])
  );

  return (
    <div className="chessboard">
      {turnedBoard.map((x, i) => {
        return (
          <div className="row" key={i}>
            {x.map((sq, j) => {
              const tileClass =
                (i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)
                  ? "tile black-tile"
                  : "tile white-tile";
              return (
                <button
                  onClick={() => {
                    handleClick(sq);
                  }}
                  key={sq}
                  className={
                    tileClass +
                    (sq === initialPosition || sq === finalPosition
                      ? " selected"
                      : "")
                  }
                >
                  {(isValidated && piece && sq === initialPosition) ||
                  (isValidated && piece && sq === finalPosition) ? (
                    <img
                      className="chess-piece"
                      alt={pieceName}
                      src={piece}
                    ></img>
                  ) : (
                    sq
                  )}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
