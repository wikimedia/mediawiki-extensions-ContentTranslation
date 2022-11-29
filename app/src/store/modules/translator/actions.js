import mtValidator from "../../../utils/mtValidator";
import cxTranslatorApi from "../../../wiki/cx/api/translator";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";
import { validateParallelCorporaPayload } from "../../../utils/parallelCorporaValidator";
import { cleanupHtml } from "../../../utils/publishHelper";

/**
 * This action initially clears all existing MT publish feedback
 * messages. Then, it validates the application/currentSourceSection
 * state variable for Machine Translation abuse, using mtValidator module.
 * If the validation status is "success", it returns null. If not,
 * it returns the appropriate warning or error (depending on the validation
 * status) publish feedback message.
 *
 * @param {object} context
 * @param {object} context.rootState
 * @return {Promise<PublishFeedbackMessage|null>}
 */
function validateMT({ rootState }) {
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
    return null;
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

  return new PublishFeedbackMessage({
    title,
    text: messageBody,
    status,
    type: "mt",
  });
}

/**
 * This action is called:
 * a. after each segment translation (either by clicking on the "Apply the translation" button
 * or by editing a segment in the Visual Editor),
 * b. just before publishing a section translation
 * It basically sends a request to the "sxsave" with the proper payload, to store the parallel
 * corpora and create/update the translation in the "cx_translations" and "cx_section_translations"
 * database tables.
 *
 * @param {object} context
 * @param {object} context.rootState
 * @param {object} context.rootGetters
 * @return {Promise<PublishFeedbackMessage|null>}
 */
function saveTranslation({ rootState, rootGetters }) {
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
    throw new Error("Current source section cannot be empty during saving");
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

  const targetTitle =
    currentSectionSuggestion.targetTitle || currentSourceSection.title;

  const isSandbox = rootGetters["application/isSandboxTarget"];

  /**
   * saveTranslation api method returns null on success and a PublishFeedbackMessage upon failure
   * @type {Promise<PublishFeedbackMessage|null>}
   */
  return cxTranslatorApi.saveTranslation({
    sourceTitle: currentSectionSuggestion.sourceTitle,
    targetTitle,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle: currentSourceSection.targetSectionTitleForPublishing,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    isLeadSection: currentSourceSection.isLeadSection,
    units: units.map((unit) => unit.payload),
    // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
    sectionId: baseSectionId,
    isSandbox,
  });
}

/**
 * This action is only reachable when no publish error messages exist.
 * When dispatched, it publishes the current section using translator
 * api client, and it finally resolves to the return value from "publishTranslation"
 * api method, that can be either a PublishFeedbackMessage model or null.
 *
 * @param {object} context
 * @param {object} context.rootState
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} payload
 * @param {string|number} payload.captchaId
 * @param {string|number} payload.captchaAnswer
 * @return {Promise<{publishFeedbackMessage: (PublishFeedbackMessage|null), targetTitle: (string|null)}>}
 */
async function publishTranslation(
  { rootState, rootGetters, dispatch },
  { captchaId, captchaAnswer } = {}
) {
  const saveMessage = await dispatch("saveTranslation");

  if (!!saveMessage) {
    return { publishFeedbackMessage: saveMessage, targetTitle: null };
  }

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

  const targetTitle =
    currentSectionSuggestion.targetTitle || currentSourceSection.title;

  const isSandbox = rootGetters["application/isSandboxTarget"];

  const publishPayload = {
    html: cleanupHtml(currentSourceSection.translationHtml),
    sourceTitle: currentSectionSuggestion.sourceTitle,
    targetTitle,
    sourceSectionTitle: currentSourceSection.originalTitle,
    targetSectionTitle: currentSourceSection.targetSectionTitleForPublishing,
    sourceLanguage,
    targetLanguage,
    revision: sourcePage.revision,
    isSandbox,
  };

  if (captchaId) {
    publishPayload.captchaId = captchaId;
    publishPayload.captchaWord = captchaAnswer;
  }

  /**
   * Publish translation and get a publish feedback error message in case of
   * failure, or null in case of successful publishing
   */
  return await cxTranslatorApi.publishTranslation(publishPayload);
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
  saveTranslation,
  publishTranslation,
  fetchTranslations,
  translateContent,
};
