import canMove from ".";
import { testProp, fc } from "jest-fast-check";

describe("chess", () => {
  test("should be able to validate a valid King move", () => {
    expect(canMove("King", "D4", "E5", "White")).toBe(true);
  });
  test("should be able to validate a invalid King move", () => {
    expect(canMove("King", "D7", "E5", "White")).toBe(false);
  });
  test("should be able to validate a valid Bishop move", () => {
    expect(canMove("Bishop", "A7", "G1", "White")).toBe(true);
  });
  test("should be able to validate a invalid Bishop move", () => {
    expect(canMove("Bishop", "A7", "A8", "White")).toBe(false);
  });
  test("should be able to validate a valid Rook move", () => {
    expect(canMove("Rook", "A8", "H8", "White")).toBe(true);
  });
  test("should be able to validate an invalid Rook move", () => {
    expect(canMove("Rook", "A8", "H7", "White")).toBe(false);
  });
  test("should be able to validate a valid Queen move", () => {
    expect(canMove("Queen", "C4", "D5", "White")).toBe(true);
  });
  test("should be able to validate an invalid Queen move", () => {
    expect(canMove("Queen", "C4", "D6", "White")).toBe(false);
  });
  test("should be able to validate a valid Knight move", () => {
    expect(canMove("Knight", "C4", "B5", "White")).toBe(true);
  });
  test("should be able to validate an invalid Knight move", () => {
    expect(canMove("Knight", "C4", "A3", "White")).toBe(false);
  });
  test("should be able to validate a valid Pawn initial move", () => {
    expect(canMove("Pawn", "B2", "B4", "White")).toBe(true);
  });
  test("should be able to validate a valid Pawn move", () => {
    expect(canMove("Pawn", "C3", "C4", "White")).toBe(true);
  });
  test("should be able to validate an invalid Pawn move", () => {
    expect(canMove("Pawn", "C3", "C5", "White")).toBe(false);
  });
  test("should be able to flag if pawn starts from an erroneous position", () => {
    expect(canMove("Pawn", "C1", "C2", "White")).toBe(false);
    expect(canMove("Pawn", "C8", "C7", "Black")).toBe(false);
  });
  test("should be able to flag if pawn moves backwards", () => {
    expect(canMove("Pawn", "C3", "C2", "White")).toBe(false);
    expect(canMove("Pawn", "C7", "C8", "Black")).toBe(false);
  });
  test("should reject with invalid position", () => {
    expect(() => canMove("Pawn", "Y3", "C5", "White")).toThrow(
      new Error("Position is not valid")
    );
  });
  test("should reject with invalid piece", () => {
    expect(() => canMove("Piece", "B3", "C5", "White")).toThrow(
      new Error("Piece is not valid")
    );
  });
  test("should reject with invalid colour", () => {
    expect(() => canMove("Pawn", "B3", "C5", "Pink")).toThrow(
      new Error("Colour is not valid")
    );
  });
});
testProp(
  "throw an error if piece is not accepted",
  [fc.string()],
  (a) => {
    try {
      canMove(a);
    } catch (e) {
      return true;
    }
  },
  { verbose: true }
);

testProp(
  "throw an error if position is not accepted",
  [
    fc.constantFrom("Pawn", "Rook", "King", "Queen", "Bishop", "Knight"),
    fc.string(),
    fc.string(),
  ],
  (a, b, c) => {
    try {
      canMove(a, b, c);
    } catch (e) {
      return true;
    }
  },

  { verbose: true }
);
testProp(
  "throw an error if colour is not accepted",
  [
    fc.constantFrom("Pawn", "Rook", "King", "Queen", "Bishop", "Knight"),
    fc.string(),
  ],
  (a, b) => {
    try {
      canMove(a, "A2", "A3", b);
    } catch (e) {
      return true;
    }
  },

  { verbose: true }
);
