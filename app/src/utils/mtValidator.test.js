import mtValidator from "./mtValidator";
jest.mock("./mtHelper", () => ({
  __esModule: true, // this property makes it work
  calculateUnmodifiedContent: jest.fn((a, b, c) => a)
}));

describe("mtValidator test", () => {
  it("calculateScore test", () => {
    expect(mtValidator.calculateScore("", 0.97)).toBe(3);
    expect(mtValidator.calculateScore("", 0.9)).toBe(10);
    expect(mtValidator.calculateScore("", 0.8)).toBe(20);
  });
  it("getScoreStatus test", () => {
    expect(mtValidator.getScoreStatus(3)).toBe("failure");
    expect(mtValidator.getScoreStatus(10)).toBe("warning");
    expect(mtValidator.getScoreStatus(20)).toBe("success");
  });
});
