import cxTranslatorApi from "../../../wiki/cx/api/translator";
import mtValidator from "../../../utils/mtValidator";
import PublishResult from "../../../wiki/cx/models/publishResult";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";
import {
  calculateHtmlToPublish,
  calculateNewSectionNumber,
  getTitleForPublishOption
} from "../../../utils/publishHelper";

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
const validateMT = ({ rootState, dispatch }) => {
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
};

export default {
  validateMT,
  async fetchTranslations({ commit, dispatch, state }) {
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
  },

  /**
   * @param {Object} rootState
   * @param {Function} dispatch
   * @param {Object} rootGetters
   * @return {Promise<void>}
   */
  async publishTranslation({ rootState, dispatch, rootGetters }) {
    const isValid = await dispatch("validateMT");
    if (!isValid) {
      return;
    }
    const sourcePage = rootGetters["application/getCurrentPage"];
    const targetPage = rootGetters["application/getCurrentTargetPage"];
    const { section, sectionSuggestion, publishTarget } = rootState.application;

    const firstAppendixTargetTitle = rootGetters[
      "suggestions/getFirstAppendixTitleBySectionSuggestion"
    ](sectionSuggestion);

    const targetTitle = getTitleForPublishOption(
      sectionSuggestion.targetTitle,
      publishTarget
    );

    const sectionNumber = calculateNewSectionNumber(
      sectionSuggestion,
      section,
      targetPage,
      firstAppendixTargetTitle
    );

    const html = calculateHtmlToPublish(
      sectionSuggestion,
      section,
      targetPage,
      firstAppendixTargetTitle
    );
    const { sourceTitle, sourceLanguage, targetLanguage } = sectionSuggestion;
    const { originalTitle, title } = section;
    /** @type PublishResult **/
    const publishResult = await cxTranslatorApi.publishTranslation({
      html,
      sourceTitle,
      targetTitle,
      sourceSectionTitle: originalTitle,
      targetSectionTitle: title,
      sourceLanguage,
      targetLanguage,
      revision: sourcePage.revision,
      sectionNumber
    });
    dispatch("application/setPublishResult", publishResult, { root: true });
  }
};
