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

export {
  DifficultyEnum,
  ArticleDifficultyThresholdEnum,
  SectionDifficultyThresholdEnum,
  getArticleDifficultyBySize,
  getSectionDifficultyBySize,
};
