import React from "react";
import knight from "../assets/knight_w.png";

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

  return (
    <div className="chessboard">
      {board.reverse().map((x, i) => {
        return (
          <div className="row" key={i}>
            {x.reverse().map((sq, j) => {
              const tileClass =
                (i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)
                  ? "tile black-tile"
                  : "tile white-tile";
              console.log(sq, initialPosition, finalPosition);
              return (
                <button
                  onClick={() => {
                    handleClick(sq);
                  }}
                  key={sq}
                  className={tileClass}
                >
                  {(isValidated && piece && sq === initialPosition) ||
                  (isValidated && piece && sq === finalPosition) ? (
                    <img alt={pieceName} src={piece}></img>
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
