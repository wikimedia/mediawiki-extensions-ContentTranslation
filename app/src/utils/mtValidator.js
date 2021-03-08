import { calculateUnmodifiedContent } from "./mtHelper";

/**
 * Default general MT threshold
 * Should be open to overwrite by the specific thresholds configured for
 * each wiki. In current case publishing is not permitted for translations
 * with MT used for over 95% of the translation
 */
const publishingThreshold = 95;
const warningThreshold = 85;

const thresholds = [
  { status: "failure", value: 100 - publishingThreshold },
  { status: "warning", value: 100 - warningThreshold },
  { status: "success", value: 100 }
];

const calculateScore = (actualTranslation, proposedTranslation) => {
  const resultText = htmlToElement(actualTranslation).textContent;
  const proposedText = htmlToElement(proposedTranslation).textContent;
  const distance =
    100 - 100 * calculateUnmodifiedContent(proposedText, resultText);
  return Math.ceil(distance);
};

const getScoreStatus = score =>
  thresholds.find(threshold => score <= threshold.value).status;

const htmlToElement = html => {
  const template = document.createElement("div");
  template.innerHTML = html;
  return template;
};

export default { calculateScore, getScoreStatus };
