import {
  DifficultyEnum,
  ArticleDifficultyThresholdEnum,
  SectionDifficultyThresholdEnum,
  getArticleDifficultyBySize,
  getSectionDifficultyBySize,
} from "./translationDifficulty";

describe("translationDifficulty", () => {
  describe("invalid inputs", () => {
    const invalidInputs = [null, undefined, 0, -1];

    test.each(invalidInputs)(
      "should return unknown for invalid size: %s",
      (size) => {
        expect(getArticleDifficultyBySize(size)).toBe(DifficultyEnum.unknown);
        expect(getSectionDifficultyBySize(size)).toBe(DifficultyEnum.unknown);
      }
    );
  });

  describe("getArticleDifficultyBySize", () => {
    const { easy, medium, hard } = ArticleDifficultyThresholdEnum;

    it("should return correct difficulty levels based on thresholds", () => {
      expect(getArticleDifficultyBySize(1)).toBe(DifficultyEnum.stub);
      expect(getArticleDifficultyBySize(easy - 1)).toBe(DifficultyEnum.stub);
      expect(getArticleDifficultyBySize(easy)).toBe(DifficultyEnum.easy);
      expect(getArticleDifficultyBySize(medium - 1)).toBe(DifficultyEnum.easy);
      expect(getArticleDifficultyBySize(medium)).toBe(DifficultyEnum.medium);
      expect(getArticleDifficultyBySize(hard - 1)).toBe(DifficultyEnum.medium);
      expect(getArticleDifficultyBySize(hard)).toBe(DifficultyEnum.hard);
    });
  });

  describe("getSectionDifficultyBySize", () => {
    const { easy, medium, hard } = SectionDifficultyThresholdEnum;

    it("should return correct difficulty levels based on thresholds", () => {
      expect(getSectionDifficultyBySize(1)).toBe(DifficultyEnum.stub);
      expect(getSectionDifficultyBySize(easy - 1)).toBe(DifficultyEnum.stub);
      expect(getSectionDifficultyBySize(easy)).toBe(DifficultyEnum.easy);
      expect(getSectionDifficultyBySize(medium - 1)).toBe(DifficultyEnum.easy);
      expect(getSectionDifficultyBySize(medium)).toBe(DifficultyEnum.medium);
      expect(getSectionDifficultyBySize(hard - 1)).toBe(DifficultyEnum.medium);
      expect(getSectionDifficultyBySize(hard)).toBe(DifficultyEnum.hard);
    });
  });

  describe("threshold behavior", () => {
    it("should have different thresholds for articles vs sections", () => {
      const testSize =
        Math.min(
          ArticleDifficultyThresholdEnum.easy,
          SectionDifficultyThresholdEnum.medium
        ) - 1;
      expect(getArticleDifficultyBySize(testSize)).toBe(DifficultyEnum.stub);
      expect(getSectionDifficultyBySize(testSize)).toBe(DifficultyEnum.easy);
    });
  });
});
