import {
  DifficultyEnum,
  ArticleDifficultyThresholdEnum,
  SectionDifficultyThresholdEnum,
  getArticleDifficultyBySize,
  getSectionDifficultyBySize,
  isEasyOrStubArticleTranslation,
  isEasySectionTranslation,
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

  describe("isEasyOrStubArticleTranslation", () => {
    it("works correctly for articles", () => {
      // Article thresholds: 2500/10000/40000
      expect(isEasyOrStubArticleTranslation(500)).toBe(true); // stub
      expect(isEasyOrStubArticleTranslation(1500)).toBe(true); // stub (1500 < 2500)
      expect(isEasyOrStubArticleTranslation(5000)).toBe(true); // easy (2500 <= 5000 < 10000)
      expect(isEasyOrStubArticleTranslation(15000)).toBe(false); // hard
      expect(isEasyOrStubArticleTranslation(null)).toBe(false); // no size
    });
  });

  describe("isEasySectionTranslation", () => {
    it("works correctly", () => {
      // Section thresholds: 1000/4000/12000
      expect(isEasySectionTranslation(300)).toBe(false); // stub
      expect(isEasySectionTranslation(800)).toBe(false); // stub (800 < 1000)
      expect(isEasySectionTranslation(2000)).toBe(true); // easy (1000 <= 2000 < 4000)
      expect(isEasySectionTranslation(6000)).toBe(false); // medium (4000 <= 6000 < 12000)
      expect(isEasySectionTranslation(null)).toBe(false); // no size
    });
  });
});
