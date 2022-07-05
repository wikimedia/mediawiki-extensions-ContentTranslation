import mtValidator from "../../../utils/mtValidator";
import cxTranslatorApi from "../../../wiki/cx/api/translator";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";
import { validateParallelCorporaPayload } from "../../../utils/parallelCorporaValidator";

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
  const { currentSourceSection: section, targetLanguage } =
    rootState.application;
  /**
   * Percentage of modified MT for current source section
   * as integer from 1 to 100
   * @type {number}
   */
  const mtValidationScore = mtValidator.getMTScoreForPageSection(
    section,
    targetLanguage
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
  const status = mtValidationStatus === "failure" ? "error" : "warning";
  let title, messageBody;

  if (status === "warning") {
    title = mw
      .message("cx-sx-publisher-mt-abuse-message-title", unmodifiedPercentage)
      .plain();
    messageBody = mw.message("cx-sx-publisher-mt-abuse-message-body").plain();
  } else {
    title = mw
      .message("cx-sx-publisher-mt-abuse-error-title", unmodifiedPercentage)
      .plain();
    messageBody = mw.message("cx-sx-publisher-mt-abuse-error-body").plain();
  }
  const message = new PublishFeedbackMessage({
    title,
    text: messageBody,
    status,
    type: "mt",
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
    targetLanguage,
  } = rootState.application;

  if (!currentSectionSuggestion) {
    throw new Error("Current source section cannot be empty during publishing");
  }

  const supportedMTProviders = rootGetters["mediawiki/getSupportedMTProviders"](
    sourceLanguage,
    targetLanguage
  );

  const baseSectionId = `${sourcePage.revision}_${currentSourceSection.id}`;
  const units = currentSourceSection.getParallelCorporaUnits(baseSectionId);
  units.forEach((unit) =>
    validateParallelCorporaPayload(unit, supportedMTProviders)
  );

  const saveMessage = await cxTranslatorApi.saveTranslation({
    sourceTitle: currentSectionSuggestion.sourceTitle,
    targetTitle: getters.getArticleTitleForPublishing,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle: currentSourceSection.targetSectionTitleForPublishing,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    sectionNumber: getters.getSectionNumberForPublishing,
    units: units.map((unit) => unit.payload),
    // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
    sectionId: baseSectionId,
  });

  if (!!saveMessage) {
    commit("application/addPublishFeedbackMessage", saveMessage, {
      root: true,
    });

    return;
  }

  /**
   * Publish translation and get a publish feedback error message in case of
   * failure, or null in case of successful publishing
   *
   * @type {PublishFeedbackMessage|null}
   */
  const publishMessage = await cxTranslatorApi.publishTranslation({
    html: getters.getCleanHTMLForPublishing,
    sourceTitle: currentSectionSuggestion.sourceTitle,
    targetTitle: getters.getArticleTitleForPublishing,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle: currentSourceSection.targetSectionTitleForPublishing,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    sectionNumber: getters.getSectionNumberForPublishing,
  });

  if (!!publishMessage) {
    commit("application/addPublishFeedbackMessage", publishMessage, {
      root: true,
    });
  }
}

async function fetchTranslations({ commit, dispatch, state }) {
  // If translations have already been fetched, then skip
  if (state.translations.length) {
    return;
  }
  /** @type {Translation[]} */
  const translations = await cxTranslatorApi.fetchTranslations();
  translations.forEach((translation) => commit("addTranslation", translation));

  const queue = translations.reduce((queue, translation) => {
    const language = translation.sourceLanguage;
    queue[language] = queue[language] || [];
    queue[language].push(translation.sourceTitle);

    return queue;
  }, {});
  commit("setTranslationsLoaded", true);

  Object.keys(queue).forEach((sourceLanguage) => {
    dispatch(
      "mediawiki/fetchPageMetadata",
      { language: sourceLanguage, titles: queue[sourceLanguage] },
      { root: true }
    );
  });
}

/**
 * Translates HTML content for a given MT provider and the
 * application's source/target language pair, and returns
 * a promise that resolves to a string containing the translation.
 *
 * @param {object} context
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} context.rootState
 * @param {object} payload
 * @param {string} payload.provider
 * @param {string} payload.originalContent
 * @return {Promise<String>}
 */
async function translateContent(
  { rootGetters, dispatch, rootState },
  { provider, originalContent }
) {
  const { sourceLanguage, targetLanguage } = rootState.application;
  const isValidProvider = rootGetters[
    "mediawiki/isValidProviderForTranslation"
  ](sourceLanguage, targetLanguage, provider);

  if (!isValidProvider) {
    return Promise.resolve();
  }

  try {
    const token = await dispatch(
      "application/getCXServerToken",
      {},
      { root: true }
    );

    return await cxTranslatorApi.fetchSegmentTranslation(
      sourceLanguage,
      targetLanguage,
      provider,
      originalContent,
      token
    );
  } catch (error) {
    mw.log.error("Error while translating segment", error);

    // Fall back to original content
    return originalContent;
  }
}

export default {
  validateMT,
  publishTranslation,
  fetchTranslations,
  translateContent,
};
