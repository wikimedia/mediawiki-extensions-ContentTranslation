const DifficultyEnum = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown",
};

const ArticleDifficultyThresholdEnum = {
  easy: 2500,
  medium: 10000,
  hard: 40000,
};

const SectionDifficultyThresholdEnum = {
  easy: 1000,
  medium: 4000,
  hard: 12000,
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
 * Check if an article translation is easy or stub (quick translation)
 * @param {number} sizeInBytes - The size in bytes
 * @returns {boolean} True if the translation is easy or stub difficulty
 */
const isEasyOrStubSectionTranslation = (sizeInBytes) => {
  if (!sizeInBytes) return false;
  const difficulty = getSectionDifficultyBySize(sizeInBytes);

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
  isEasyOrStubSectionTranslation,
  isEasySectionTranslation,
};
