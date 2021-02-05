import levenshtein from "fast-levenshtein";

/**
 * Default general MT threshold
 * Should be open to overwrite by the specific thresholds configured for
 * each wiki. In current case publishing is not permitted for translations
 * with MT used for over 80% of the translation
 */
const publishingThreshold = 80;

const thresholds = [
  { status: "error", value: 0 },
  { status: "warning", value: 100 - (publishingThreshold - 10) },
  { status: "success", value: 100 }
];

const calculateScore = (actualTranslation, proposedTranslation) => {
  const resultText = htmlToElement(actualTranslation).innerText;
  const proposedText = htmlToElement(proposedTranslation).innerText;
  const distance = levenshtein.get(resultText, proposedText);
  return proposedText.length
    ? Math.ceil(100 * (distance / proposedText.length))
    : 100;
};

const getScoreStatus = score =>
  thresholds.find(threshold => score <= threshold.value).status;

const htmlToElement = html => {
  const template = document.createElement("div");
  template.innerHTML = html;
  return template;
};

export default { calculateScore, getScoreStatus };
