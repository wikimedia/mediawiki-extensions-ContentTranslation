const DifficultyEnum = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown",
};

const ArticleDifficultyThresholdEnum = {
  easy: 1000,
  medium: 3000,
  hard: 10000,
};

const SectionDifficultyThresholdEnum = {
  easy: 500,
  medium: 1500,
  hard: 3000,
};

const getDifficultyBySize = (size, thresholds) => {
  if (!size || size < 0) {
    return DifficultyEnum.unknown;
  }

  if (size < thresholds.easy) {
    return DifficultyEnum.stub;
  } else if (size < thresholds.medium) {
    return DifficultyEnum.easy;
  } else if (size < thresholds.hard) {
    return DifficultyEnum.medium;
  } else {
    return DifficultyEnum.hard;
  }
};

const getArticleDifficultyBySize = (size) => {
  return getDifficultyBySize(size, ArticleDifficultyThresholdEnum);
};

const getSectionDifficultyBySize = (size) => {
  return getDifficultyBySize(size, SectionDifficultyThresholdEnum);
};

/**
 * Check if an article translation is easy or stub (quick translation)
 * @param {number} sizeInBytes - The size in bytes
 * @returns {boolean} True if the translation is easy or stub difficulty
 */
const isEasyOrStubArticleTranslation = (sizeInBytes) => {
  if (!sizeInBytes) return false;
  const difficulty = getArticleDifficultyBySize(sizeInBytes);

  return (
    difficulty === DifficultyEnum.stub || difficulty === DifficultyEnum.easy
  );
};

/**
 * Check if a section translation is easy based on its size
 * @param {number} sectionSize - The size of the section in bytes
 * @returns {boolean} True if the section is easy
 */
const isEasySectionTranslation = (sectionSize) => {
  if (!sectionSize) return false;

  return getSectionDifficultyBySize(sectionSize) === DifficultyEnum.easy;
};

export {
  DifficultyEnum,
  ArticleDifficultyThresholdEnum,
  SectionDifficultyThresholdEnum,
  getArticleDifficultyBySize,
  getSectionDifficultyBySize,
  isEasyOrStubArticleTranslation,
  isEasySectionTranslation,
};
