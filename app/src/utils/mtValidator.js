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

/**
 * Given actual translation and proposed MT translation
 * as HTML strings, this method returns an integer from
 * 1 to 100 indicating the distance between these translations.
 * The higher the score, the bigger the distance (lower percentage
 * of unmodified MT).
 *
 * @param {string} actualTranslation
 * @param {string} proposedTranslation
 * @return {number} score as integer from 1 to 100
 */
const calculateScore = (actualTranslation, proposedTranslation) => {
  const resultText = htmlToElement(actualTranslation).textContent;
  const proposedText = htmlToElement(proposedTranslation).textContent;
  const distance =
    100 - 100 * calculateUnmodifiedContent(proposedText, resultText);

  return Math.ceil(distance);
};

/**
 * @param {number} score
 * @return {"failure"|"warning"|"success"}
 */
const getScoreStatus = score =>
  thresholds.find(threshold => score <= threshold.value).status;

/**
 * Given a page section, this method returns the percentage of
 * modified MT as a score from 0 to 100. The higher the score,
 * the lower the percentage of unmodified MT is.
 *
 * @param {PageSection} pageSection
 * @param {string} mtProvider
 * @return {number} modified MT translation score
 */
const getMTScoreForPageSection = (pageSection, mtProvider) =>
  calculateScore(
    pageSection.translationHtml,
    pageSection.getProposedTranslationHtml(mtProvider)
  );

const htmlToElement = html => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template;
};

export default { calculateScore, getScoreStatus, getMTScoreForPageSection };
