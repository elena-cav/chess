import canMove from ".";

describe("chess ", () => {
  test("should be able to validate a valid King move", () => {
    expect(canMove("King", "D4", "E5")).toBe(true);
  });
  test("should be able to validate a invalid King move", () => {
    expect(canMove("King", "D7", "E5")).toBe(false);
  });
  test("should be able to validate a valid Bishop move", () => {
    expect(canMove("Bishop", "A7", "G1")).toBe(true);
  });
  test("should be able to validate a invalid Bishop move", () => {
    expect(canMove("Bishop", "A7", "A8")).toBe(false);
  });
  test("should be able to validate a valid Rook move", () => {
    expect(canMove("Rook", "A8", "H8")).toBe(true);
  });
  test("should be able to validate an invalid Rook move", () => {
    expect(canMove("Rook", "A8", "H7")).toBe(false);
  });
  test("should be able to validate a valid Queen move", () => {
    expect(canMove("Queen", "C4", "D5")).toBe(true);
  });
  test("should be able to validate an invalid Queen move", () => {
    expect(canMove("Queen", "C4", "D6")).toBe(false);
  });
  test("should be able to validate a valid Knight move", () => {
    expect(canMove("Knight", "C4", "B5")).toBe(true);
  });
  test("should be able to validate an invalid Knight move", () => {
    expect(canMove("Knight", "C4", "A3")).toBe(false);
  });
  test("should be able to validate a valid Pawn initial move", () => {
    expect(canMove("Pawn", "B2", "D2")).toBe(true);
  });
  test("should be able to validate a valid Pawn move", () => {
    expect(canMove("Pawn", "C3", "D3")).toBe(true);
  });
  test("should be able to validate an invalid Pawn move", () => {
    expect(canMove("Pawn", "C3", "E3")).toBe(false);
  });
});
