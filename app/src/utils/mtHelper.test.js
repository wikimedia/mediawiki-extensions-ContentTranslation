import { calculateUnmodifiedContent } from "./mtHelper";

describe("calculateUnmodifiedContent test", () => {
  it("calculateUnmodifiedContent no1", () => {
    const testCases = [
      {
        string1: "a b c d",
        string2: "a b c d",
        language: "en",
        result: 1
      },
      {
        string1: "a b c d",
        string2: "a b c d e",
        language: "en",
        result: 0.8
      },
      {
        string1: "a b c d",
        string2: "a b c",
        language: "en",
        result: 0.75
      },
      {
        string1: "a b c d e",
        string2: "A B C D E",
        language: "en",
        result: 0
      },
      {
        string1: "典范条目",
        string2: "典闻动态",
        language: "zh",
        result: 0.25
      },
      {
        string1: "a b c d e.",
        string2: "a B c d e. f g h",
        language: "en",
        result: 0.5
      },
      {
        string1: "foo",
        string2: "   ",
        language: "en",
        result: 0
      },
      {
        string1: "",
        string2: "",
        language: "en",
        result: 0
      }
    ];

    testCases.forEach(testCase => {
      const actualResult = calculateUnmodifiedContent(
        testCase.string1,
        testCase.string2,
        testCase.language
      );
      expect(actualResult).toBe(testCase.result);
    });
  });
});
