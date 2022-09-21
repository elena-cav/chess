const xAxis = "ABCDEFGH";
const dyn_functions = [];
const pieces = ["Pawn", "Rook", "King", "Queen", "Bishop", "Knight"];

const calcXAxis = (initialX, finalX) =>
  Math.abs(xAxis.indexOf(initialX) - xAxis.indexOf(finalX));

dyn_functions["validateQueen"] = ({ xAxisMove, yAxisMove }) => {
  if (
    (yAxisMove > 0 && xAxisMove === 0) ||
    (yAxisMove === 0 && xAxisMove > 0) ||
    xAxisMove === yAxisMove
  ) {
    return true;
  }
};
dyn_functions["validateBishop"] = ({ xAxisMove, yAxisMove }) => {
  if (xAxisMove === yAxisMove) {
    return true;
  }
};
dyn_functions["validateKing"] = ({ xAxisMove, yAxisMove }) => {
  if (
    (xAxisMove === 1 && yAxisMove === 0) ||
    (xAxisMove === 0 && yAxisMove === 1) ||
    (xAxisMove === 1 && yAxisMove === 1)
  ) {
    return true;
  }
};
dyn_functions["validateRook"] = ({ xAxisMove, yAxisMove }) => {
  if (
    (xAxisMove > 0 && yAxisMove === 0) ||
    (xAxisMove === 0 && yAxisMove > 0)
  ) {
    return true;
  }
};
dyn_functions["validateKnight"] = ({ xAxisMove, yAxisMove }) => {
  if (xAxisMove === 1 && yAxisMove === 1) {
    return true;
  }
};
const validatePawn = (
  { xAxisMove, yAxisMove },
  initialPosition,
  finalPosition,
  colour
) => {
  const initialX = initialPosition[1];
  const finalX = finalPosition[1];
  if (
    (colour === "White" && initialX > finalX) ||
    (colour === "Black" && initialX < finalX)
  ) {
    return false;
  } else if (
    (initialX === "1" && colour === "White") ||
    (initialX === "8" && colour === "Black")
  ) {
    return false;
  } else if (initialX === "2" && xAxisMove === 0) {
    if (yAxisMove === 1 || yAxisMove === 2) {
      return true;
    }
  } else if (yAxisMove === 1 && xAxisMove === 0) {
    return true;
  }
};
const checkProps = (piece, initialPosition, finalPosition, colour) => {
  if (!pieces.includes(piece)) {
    throw new Error("Piece is not valid");
  } else if (
    !xAxis.includes(initialPosition[0] || !xAxis.includes(finalPosition[0]))
  ) {
    throw new Error("Position is not valid");
  } else if (colour !== "White" && colour !== "Black") {
    throw new Error("Colour is not valid");
  }
};

const canMove = (piece, initialPosition, finalPosition, colour) => {
  checkProps(piece, initialPosition, finalPosition, colour);
  const xAxisMove = calcXAxis(initialPosition[0], finalPosition[0]);
  const yAxisMove = Math.abs(initialPosition[1] - finalPosition[1]);
  const moves = {
    xAxisMove,
    yAxisMove,
  };

  const validatePiece = `validate${piece}`;
  let isValid;
  if (piece === "Pawn") {
    isValid =
      validatePawn(moves, initialPosition, finalPosition, colour) || false;
  } else {
    isValid = dyn_functions[validatePiece](moves) || false;
  }
  return isValid;
};

export default canMove;
