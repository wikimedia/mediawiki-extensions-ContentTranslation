import mtValidator from "../../../utils/mtValidator";
import {
  calculateHtmlToPublish,
  calculateNewSectionNumber
} from "../../../utils/publishHelper";
import cxTranslatorApi from "../../../wiki/cx/api/translator";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";
import PublishResult from "../../../wiki/cx/models/publishResult";

/**
 * This action validates application/currentSourceSection model
 * for Machine Translation abuse, using mtValidator module, and
 * returns a boolean indicating whether this section is valid for
 * translation or not.
 * If validation status is "success", or validation status is "warning"
 * and existing warnings have been suppressed then true is returned.
 * If else, currentPublishResult is updated accordingly and false is returned
 *
 * @param {object} context
 * @param {object} context.rootState
 * @param {function} context.dispatch
 * @return {boolean}
 */
function validateMT({ rootState, dispatch }) {
  /** @var {PageSection} */
  const section = rootState.application.currentSourceSection;
  /**
   * Percentage of modified MT for current source section
   * as integer from 1 to 100
   * @type {number}
   */
  const mtValidationScore = mtValidator.getMTScoreForPageSection(
    section,
    rootState.application.currentMTProvider
  );
  /**
   * Status for the given MT validation score
   * @type {"failure"|"warning"|"success"}
   */
  const mtValidationStatus = mtValidator.getScoreStatus(mtValidationScore);

  // If machine translation has been modified above threshold percentage
  // this section is valid for publishing
  if (mtValidationStatus === "success") {
    return true;
  }

  // if user has already tried to publish, then currentPublishResult holds
  // information about user suppressing warning messages.
  // NOTE: This implementation may change once a more sophisticated approach
  // regarding publish warnings is followed
  const existingPublishResult = rootState.application.currentPublishResult;
  // If user has already suppressed MT warnings,
  // then this section is valid for publishing
  const bypassUserWarnings =
    mtValidationStatus === "warning" &&
    existingPublishResult.hasSuppressedWarnings;

  // If validation status is "failure" or "warning" and warnings have not
  // been suppressed by the user, then update currentPublishResult with
  // related warnings/errors and return false, as this section is not valid
  // for publishing
  if (!bypassUserWarnings) {
    const unmodifiedPercentage = 100 - mtValidationScore;
    const title = mw.message(
      "cx-sx-publisher-mt-abuse-message-title",
      unmodifiedPercentage
    );
    const text = mw.message("cx-sx-publisher-mt-abuse-message-body");
    const message = new PublishFeedbackMessage({ title, text });
    const result = new PublishResult({
      result: mtValidationStatus,
      messages: [message]
    });
    dispatch("application/setPublishResult", result, { root: true });

    return false;
  }

  return true;
}

/**
 * This action validates application/currentSourceSection for MT abuse
 * and if this section is valid for publishing, it uses publishHelper
 * methods to get the appropriate title, content and position. Then,
 * it publishes the current section using translator api client and
 * stores the PublishResult model (either successful or failed) to
 * application/currentPublishResult state variable.

 * @param {object} context
 * @param {object} context.rootState
 * @param {function} context.dispatch
 * @param {object} context.rootGetters
 * @param {object} context.getters
 * @return {Promise<void>}
 */
async function publishTranslation({
  rootState,
  dispatch,
  rootGetters,
  getters
}) {
  /**
   * Validate currentSourceSection against MT abuse
   * @type {boolean}
   */
  const isValid = await dispatch("validateMT");

  if (!isValid) {
    return;
  }

  const sourcePage = rootGetters["application/getCurrentPage"];
  const targetPage = rootGetters["application/getCurrentTargetPage"];
  const {
    /** @type {PageSection} */
    currentSourceSection,
    /** @type {SectionSuggestion} */
    currentSectionSuggestion
  } = rootState.application;

  if (!currentSectionSuggestion) {
    throw new Error("Current source section cannot be empty during publishing");
  }

  /**
   * Get first appendix title inside target article page
   * or null if none
   * @type {string|null}
   */
  const firstAppendixTargetTitle = rootGetters[
    "suggestions/getFirstAppendixTitleBySectionSuggestion"
  ](currentSectionSuggestion);

  /**
   * Get publishing title for current section for the given
   * publish target (which corresponds to a specific namespace)
   * @type {string}
   */
  const targetTitle = getters.getArticleTitleForPublishing;
  const targetSectionTitle = getters.getSectionTitleForPublishing;

  /**
   * Get position where the new section will be published
   * inside target article. If target section is already
   * present inside target article, this number equals its
   * position inside target article. If section is new,
   * according to current approach it should be published
   * before first appendix section, and this number equals
   * the position of the first appendix section. If no
   * appendix section exists, the section will be published
   * at the bottom of the target article and this number
   * equals to "new"
   *
   * @type {number|"new"}
   */
  const sectionNumber = calculateNewSectionNumber(
    targetSectionTitle,
    firstAppendixTargetTitle,
    targetPage
  );

  /**
   * Get clean HTML to be published.
   *
   * Since Action API doesn't support publishing section to
   * desired position out of the box, if the section is to
   * be published before appendix sections, we have to replace
   * first appendix section contents with a new HTML string
   * containing both new section contents and appendix section
   * contents.
   *
   * @type {string}
   */
  const html = calculateHtmlToPublish(
    targetSectionTitle,
    currentSourceSection,
    targetPage,
    firstAppendixTargetTitle
  );

  const {
    sourceTitle,
    sourceLanguage,
    targetLanguage
  } = currentSectionSuggestion;

  /**
   * Publish translation and get publish result containing success/error messages
   * @type {PublishResult}
   */
  const publishResult = await cxTranslatorApi.publishTranslation({
    html,
    sourceTitle,
    targetTitle,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    sectionNumber
  });

  dispatch("application/setPublishResult", publishResult, { root: true });
}

async function fetchTranslations({ commit, dispatch, state }) {
  // If translations have already been fetched, then skip
  if (state.translations.length) {
    return;
  }
  /** @type {Translation[]} */
  const translations = await cxTranslatorApi.fetchTranslations();
  translations.forEach(translation => commit("addTranslation", translation));

  const queue = translations.reduce((queue, translation) => {
    const language = translation.sourceLanguage;
    queue[language] = queue[language] || [];
    queue[language].push(translation.sourceTitle);

    return queue;
  }, {});
  commit("setTranslationsLoaded", true);

  Object.keys(queue).forEach(sourceLanguage => {
    dispatch(
      "mediawiki/fetchPageMetadata",
      { language: sourceLanguage, titles: queue[sourceLanguage] },
      { root: true }
    );
  });
}

export default {
  validateMT,
  publishTranslation,
  fetchTranslations
};
