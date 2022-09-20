import canMove from ".";

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
    expect(canMove("Pawn", "B2", "B4")).toBe(true);
  });
  test("should be able to validate a valid Pawn move", () => {
    expect(canMove("Pawn", "C3", "C4")).toBe(true);
  });
  test("should be able to validate an invalid Pawn move", () => {
    expect(canMove("Pawn", "C3", "C5", "White")).toBe(false);
  });
  test("should be able to flag if pawn starts from an erroneous position", () => {
    expect(canMove("Pawn", "C1", "C2", "White")).toBe(false);
    expect(canMove("Pawn", "C8", "C7", "Black")).toBe(false);
  });
});
