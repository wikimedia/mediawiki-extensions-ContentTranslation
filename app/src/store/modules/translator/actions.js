import cxTranslatorApi from "../../../wiki/cx/api/translator";
import { getTitleForPublishOption } from "../../../utils/publishTitleFactory";

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
  async publishTranslation({ rootState, rootGetters }) {
    const page = rootGetters["application/getCurrentPage"];
    const section = rootState.application.currentSourceSection;
    const sectionSuggestion = rootState.application.currentSectionSuggestion;
    const publishTarget = rootState.application.publishTarget;

    const targetTitle = getTitleForPublishOption(
      sectionSuggestion.targetTitle,
      publishTarget
    );
    /** @type PublishResult **/
    return await cxTranslatorApi.publishTranslation(
      page,
      section,
      sectionSuggestion,
      targetTitle
    );
  }
};
