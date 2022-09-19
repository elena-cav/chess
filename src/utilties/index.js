const xAxis = "ABCDEFGH";
const dyn_functions = [];

const calcXAxis = (initialX, finalX) =>
  Math.abs(xAxis.indexOf(initialX) - xAxis.indexOf(finalX));

dyn_functions["validateQueen"] = ({ xAxisMove, yAxisMove }) => {
  if (
    (xAxisMove > 0 && yAxisMove === 0) ||
    (xAxisMove === 0 && yAxisMove > 1) ||
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

const canMove = (piece, initialPosition, finalPosition) => {
  const xAxisMove = calcXAxis(initialPosition[0], finalPosition[0]);
  const yAxisMove = Math.abs(initialPosition[1] - finalPosition[1]);
  const moves = {
    xAxisMove,
    yAxisMove,
  };
  const validatePiece = `validate${piece}`;
  const isValid = dyn_functions[validatePiece](moves) || false;
  return isValid;
};

export default canMove;
