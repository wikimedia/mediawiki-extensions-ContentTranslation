import { calculateUnmodifiedContent } from "./mtHelper";

/** Default general MT threshold */
const publishingThreshold = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
);
const warningThreshold = publishingThreshold - 10;

const thresholds = [
  { status: "failure", value: 100 - publishingThreshold },
  { status: "warning", value: 100 - warningThreshold },
  { status: "success", value: 100 },
];

/**
 * Given actual translation and proposed MT translation
 * as HTML strings, this method returns an integer from
 * 1 to 100 indicating the distance between these translations.
 * The higher the score, the bigger the distance (lower percentage
 * of unmodified MT).
 *
 * @param {string} actualTranslation
 * @param {string} proposedTranslation
 * @param {string} language
 * @return {number} score as integer from 1 to 100
 */
const calculateScore = (actualTranslation, proposedTranslation, language) => {
  const resultText = htmlToElement(actualTranslation).textContent;
  const proposedText = htmlToElement(proposedTranslation).textContent;
  const distance =
    100 - 100 * calculateUnmodifiedContent(proposedText, resultText, language);

  return Math.ceil(distance);
};

/**
 * @param {number} score
 * @return {"failure"|"warning"|"success"}
 */
const getScoreStatus = (score) =>
  thresholds.find((threshold) => score <= threshold.value).status;

/**
 * Given a page section, this method returns the percentage of
 * modified MT as a score from 0 to 100. The higher the score,
 * the lower the percentage of unmodified MT is.
 *
 * @param {PageSection} pageSection
 * @param {string} language
 * @return {number} modified MT translation score as integer from 1 to 100
 */
const getMTScoreForPageSection = (pageSection, language) =>
  calculateScore(
    pageSection.translationHtml,
    pageSection.proposedTranslationHTMLForMTValidation,
    language
  );

/**
 * @return {number} Minimum percentage of modified MT text for publication. Between 0 and 1
 */
const getMtModificationThreshold = () => (100 - publishingThreshold) / 100;

const htmlToElement = (html) => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template;
};

export default {
  calculateScore,
  getScoreStatus,
  getMTScoreForPageSection,
  getMtModificationThreshold,
};
