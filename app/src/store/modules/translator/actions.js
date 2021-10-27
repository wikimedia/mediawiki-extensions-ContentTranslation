import mtValidator from "../../../utils/mtValidator";
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
    dispatch("application/resetPublishResult", null, { root: true });

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
  const sourcePage = rootGetters["application/getCurrentPage"];
  const {
    /** @type {PageSection} */
    currentSourceSection,
    /** @type {SectionSuggestion} */
    currentSectionSuggestion,
    sourceLanguage,
    targetLanguage
  } = rootState.application;

  if (!currentSectionSuggestion) {
    throw new Error("Current source section cannot be empty during publishing");
  }

  /**
   * Publish translation and get publish result containing success/error messages
   * @type {PublishResult}
   */
  const publishResult = await cxTranslatorApi.publishTranslation({
    html: getters.getCleanHTMLForPublishing,
    sourceTitle: currentSectionSuggestion.sourceTitle,
    targetTitle: getters.getArticleTitleForPublishing,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle: getters.getSectionTitleForPublishing,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    sectionNumber: getters.getSectionNumberForPublishing
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
