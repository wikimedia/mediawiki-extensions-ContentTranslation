import mtValidator from "./mtValidator";

jest.mock("./mtHelper", () => ({
  __esModule: true, // this property makes it work
  calculateUnmodifiedContent: jest.fn((proposed, actual, language) => {
    if (actual === "actual1" && proposed === "proposed1") {
      return 0.97;
    } else if (actual === "actual2" && proposed === "proposed2") {
      return 0.9;
    } else if (actual === "actual3" && proposed === "proposed3") {
      return 0.8;
    }

    return 0;
  }),
}));

describe("mtValidator test", () => {
  it("calculateScore test", () => {
    expect(mtValidator.calculateScore("actual1", "proposed1", "bn")).toBe(3);
    expect(mtValidator.calculateScore("actual2", "proposed2", "bn")).toBe(10);
    expect(mtValidator.calculateScore("actual3", "proposed3", "bn")).toBe(20);
  });
  it("getScoreStatus test", () => {
    expect(mtValidator.getScoreStatus(3)).toBe("failure");
    expect(mtValidator.getScoreStatus(10)).toBe("warning");
    expect(mtValidator.getScoreStatus(20)).toBe("success");
  });
});
