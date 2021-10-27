import mtValidator from "../../../utils/mtValidator";
import cxTranslatorApi from "../../../wiki/cx/api/translator";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";

/**
 * This action initially clears all existing MT publish feedback
 * messages. Then, it validates the application/currentSourceSection
 * state variable for Machine Translation abuse, using mtValidator module.
 * If the validation status is "success", it returns immediately. If not,
 * it adds the appropriate warning or error (depending on the validation
 * status) publish feedback message, to the vuex application state.
 *
 * @param {object} context
 * @param {object} context.rootState
 * @param {function} context.commit
 * @param {function} context.commit
 */
function validateMT({ rootState, commit }) {
  // clear MT feedback messages before validation
  commit("application/clearMTPublishFeedbackMessages", {}, { root: true });

  /** @var {PageSection} */
  const { currentSourceSection: section } = rootState.application;
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
  // the method returns without adding any MT feedback message
  if (mtValidationStatus === "success") {
    return;
  }

  // If validation status is "failure" or "warning", then add an MT feedback
  // message containing the related warnings/errors
  const unmodifiedPercentage = 100 - mtValidationScore;
  const title = mw.message(
    "cx-sx-publisher-mt-abuse-message-title",
    unmodifiedPercentage
  );
  const message = new PublishFeedbackMessage({
    title,
    text: mw.message("cx-sx-publisher-mt-abuse-message-body"),
    status: mtValidationStatus === "failure" ? "error" : "warning",
    type: "mt"
  });
  commit("application/addMTPublishFeedbackMessage", message, { root: true });
}

/**
 * This action is only reachable when no publish error messages exist.
 * When dispatched, it uses store getters to get the appropriate title,
 * content and position for the current section to be published,
 * and it publishes the current section using translator api client.
 * Based on the return value from "publishTranslation" api method,
 * that can be either a PublishFeedbackMessage model or null,
 * it adds the publish feedback error message to the state if it
 * exists.
 *
 * @param {object} context
 * @param {object} context.rootState
 * @param {function} context.commit
 * @param {object} context.rootGetters
 * @param {object} context.getters
 * @return {Promise<void>}
 */
async function publishTranslation({ rootState, commit, rootGetters, getters }) {
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
   * Publish translation and get a publish feedback error message in case of
   * failure, or null in case of successful publishing
   *
   * @type {PublishFeedbackMessage|null}
   */
  const message = await cxTranslatorApi.publishTranslation({
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

  if (!!message) {
    commit("application/addPublishFeedbackMessage", message, { root: true });
  }
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
