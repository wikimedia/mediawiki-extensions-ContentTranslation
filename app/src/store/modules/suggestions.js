import cxSuggestionsApi from "../../wiki/cx/api/suggestions";
import mwPageApi from "../../wiki/mw/api/page";

const state = {
  pageSuggestions: [],
  sectionSuggestions: [],
  favorites: {},
  currentSectionSuggestion: null
};

const mutations = {
  addPageSuggestion(state, suggestion) {
    state.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state, suggestion) {
    state.sectionSuggestions.push(suggestion);
  },
  setCurrentSectionSuggestion(state, suggestion) {
    suggestion.availableSourceLanguages =
      state.currentSectionSuggestion?.availableSourceLanguages || [];

    state.currentSectionSuggestion = suggestion;
  },
  setCurrentSectionSuggestionAvailableSourceLanguages(state, languages) {
    state.currentSectionSuggestion.availableSourceLanguages = languages;
  },
  setCurrentSectionSuggestionSourceLanguage(state, language) {
    state.currentSectionSuggestion.sourceLanguage = language;
  },
  setCurrentSectionSuggestionTargetLanguage(state, language) {
    state.currentSectionSuggestion.targetLanguage = language;
  }
};

const getters = {
  getPageSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.pageSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),
  getSectionSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.sectionSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),
  getSectionSuggestionsForArticle: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) =>
    state.sectionSuggestions.find(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.sourceTitle === sourceTitle
    )
};

const actions = {
  getPageSuggestions({ commit, dispatch }, suggestionRequest) {
    cxSuggestionsApi
      .fetchSuggestions(
        suggestionRequest.sourceLanguage,
        suggestionRequest.targetLanguage,
        suggestionRequest.seeds
      )
      .then(suggestions => {
        let titles = [];

        for (let i = 0; i < suggestions.length; i++) {
          commit("addPageSuggestion", suggestions[i]);
          titles.push(suggestions[i].sourceTitle);
        }
        if (titles.length) {
          dispatch(
            "mediawiki/fetchPage",
            { language: suggestionRequest.sourceLanguage, titles },
            { root: true }
          );
        }
      });
  },
  async getSectionSuggestions(
    { commit, dispatch, rootGetters },
    suggestionRequest
  ) {
    let titles = [];
    const publishedTranslations = rootGetters[
      "translator/getPublishedTranslationsForLanguagePair"
    ](suggestionRequest.sourceLanguage, suggestionRequest.targetLanguage);
    const suggestions = await cxSuggestionsApi.getSxSuggestionsFromPublishedArticles(
      publishedTranslations
    );

    for (let i = 0; i < suggestions.length; i++) {
      commit("addSectionSuggestion", suggestions[i]);
      titles.push(suggestions[i].sourceTitle);
    }
    if (titles.length) {
      dispatch(
        "mediawiki/fetchPage",
        { language: suggestionRequest.sourceLanguage, titles },
        { root: true }
      );
    }
  },

  async loadSectionSuggestion(
    { commit, dispatch, rootGetters },
    suggestionRequest
  ) {
    /** @type {SectionSuggestion} */
    const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      suggestionRequest.sourceLanguage,
      suggestionRequest.sourceTitle,
      suggestionRequest.targetLanguage
    );
    commit("addSectionSuggestion", suggestion);
    commit("setCurrentSectionSuggestion", suggestion);

    dispatch(
      "mediawiki/fetchPage",
      {
        language: suggestionRequest.sourceLanguage,
        titles: [suggestionRequest.sourceTitle]
      },
      { root: true }
    );
  },

  async getAvailableSourceLanguagesForSectionSuggestion({ commit, state }) {
    const languages = await mwPageApi.fetchAvailableSourceLanguagesForPage(
      state.currentSectionSuggestion.sourceTitle,
      state.currentSectionSuggestion.sourceLanguage
    );
    commit("setCurrentSectionSuggestionAvailableSourceLanguages", languages);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
