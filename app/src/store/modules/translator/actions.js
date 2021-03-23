import cxTranslatorApi from "../../../wiki/cx/api/translator";
import { getTitleForPublishOption } from "../../../utils/publishTitleFactory";
import mtValidator from "../../../utils/mtValidator";
import PublishResult from "../../../wiki/cx/models/publishResult";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";

export default {
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
  async publishTranslation({ rootState, dispatch, rootGetters }) {
    const isValid = await dispatch("validateMT");
    if (!isValid) {
      return;
    }
    const page = rootGetters["application/getCurrentPage"];
    /** @var {PageSection} */
    const section = rootState.application.currentSourceSection;
    const sectionSuggestion = rootState.application.currentSectionSuggestion;
    const publishTarget = rootState.application.publishTarget;

    const targetTitle = getTitleForPublishOption(
      sectionSuggestion.targetTitle,
      publishTarget
    );
    /** @type PublishResult **/
    const publishResult = await cxTranslatorApi.publishTranslation(
      page,
      section,
      sectionSuggestion,
      targetTitle
    );
    dispatch("application/setPublishResult", publishResult, { root: true });
  },
  validateMT({ rootState, dispatch }) {
    /** @var {PageSection} */
    const section = rootState.application.currentSourceSection;
    const mtValidationScore = mtValidator.getMTScoreForPageSection(
      section,
      rootState.application.currentMTProvider
    );
    const mtValidationStatus = mtValidator.getScoreStatus(mtValidationScore);
    if (mtValidationStatus === "success") {
      return true;
    }
    const existingPublishResult = rootState.application.currentPublishResult;
    // Bypass user feedback and try to publish anyway
    // when user has already suppressed related warnings
    const bypassUserWarnings =
      mtValidationStatus === "warning" &&
      existingPublishResult.hasSuppressedWarnings;

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
};
