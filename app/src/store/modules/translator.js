import cxTranslatorApi from "../../wiki/cx/api/translator";
import PublishResult from "../../wiki/cx/publishResult";
import { getTitleForPublishOption } from "../../utils/publishTitleFactory";

const state = {
  username: mw.config.get("wgUserName"),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: false
};

const mutations = {
  addTranslation(state, translation) {
    state.translations.push(translation);
  },
  setTranslationsLoaded: (state, value) => {
    state.translationsLoaded = value;
  }
};

const getters = {
  getPublishedTranslationsForLanguagePair: state => (
    sourceLanguage,
    targetLanguage
  ) => {
    return state.translations.filter(
      translationItem =>
        translationItem.sourceLanguage === sourceLanguage &&
        translationItem.targetLanguage === targetLanguage &&
        translationItem.status === "published"
    );
  },
  getDraftTranslationsForLanguagePair: state => (
    sourceLanguage,
    targetLanguage
  ) => {
    return state.translations.filter(
      translationItem =>
        translationItem.sourceLanguage === sourceLanguage &&
        translationItem.targetLanguage === targetLanguage &&
        translationItem.status === "draft"
    );
  },
  getPublishedTranslations: state => () => {
    return state.translations.filter(
      translationItem => translationItem.status === "published"
    );
  },
  getDraftTranslations: state => () => {
    return state.translations.filter(
      translationItem => translationItem.status === "draft"
    );
  },
  // Function with dummy implementation. Needed to add real functionality later
  hasSectionTranslations: state => () =>
    state.translations.some(translation => translation.hasSectionTranslations)
};

const actions = {
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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
