import "./App.css";
import { useState } from "react";
import Chessboard from "./components/Chessboard";
import { whitePieces, blackPieces } from "./utilties/pieces";
import canMove from "./utilties/index";
function App() {
  const [pieceObj, setPiece] = useState(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isValidated, setValidated] = useState(false);
  const handlePositionClick = (sq) => {
    if (!initialPosition) {
      setInitialPosition(sq);
    } else setFinalPosition(sq);
  };
  const handleValidate = () => {
    setValidated(true);
    setIsValid(
      canMove(pieceObj.name, initialPosition, finalPosition, pieceObj.colour)
    );
  };

  return (
    <div className="App">
      <h1>Chessboard validator</h1>
      <div className="pieces">
        {blackPieces.map(({ piece, name }) => {
          return (
            <button
              className="piece"
              key={name}
              onClick={() => {
                setPiece({ name, piece, colour: "Black" });
              }}
            >
              <img alt={name} src={piece}></img>
            </button>
          );
        })}
      </div>
      <Chessboard
        handleClick={handlePositionClick}
        initialPosition={initialPosition}
        finalPosition={finalPosition}
        isValidated={isValidated}
        piece={pieceObj?.piece}
        pieceName={pieceObj?.name}
      />
      <div className="pieces">
        {whitePieces.map(({ piece, name }) => {
          return (
            <button
              className="piece"
              key={name}
              onClick={() => {
                setPiece({ name, piece, colour: "White" });
              }}
            >
              <img alt={name} src={piece}></img>
            </button>
          );
        })}
      </div>
      <div className="moves">
        <h2>Validate Move</h2>
        <p>Piece: {pieceObj?.name}</p>
        <p>Initial position: {initialPosition}</p>
        <p>Final position: {finalPosition}</p>
      </div>
      <div className="button-wrapper">
        <button
          className="validate-btn"
          onClick={() => {
            setIsValid(false);
            setPiece(null);
            setInitialPosition(null);
            setFinalPosition(null);
            setValidated(false);
          }}
        >
          Reset
        </button>
        <button
          className="validate-btn"
          disabled={!pieceObj || !initialPosition || !finalPosition}
          onClick={handleValidate}
        >
          Validate
        </button>
      </div>
      <div className="valid">
        {isValidated && isValid && <p>Your move is valid</p>}
        {isValidated && !isValid && <p>Your move is not valid</p>}
      </div>
    </div>
  );
}

export default App;
