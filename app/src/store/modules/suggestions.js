import cxSuggestionsApi from "../../wiki/cx/api/suggestions";

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
    state.currentSectionSuggestion = suggestion;
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
            "mediawiki/fetchPageMetadata",
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
        "mediawiki/fetchPageMetadata",
        { language: suggestionRequest.sourceLanguage, titles },
        { root: true }
      );
    }
  },

  async loadSectionSuggestion(
    { commit, dispatch, getters },
    { sourceLanguage, targetLanguage, sourceTitle }
  ) {
    let suggestion = getters.getSectionSuggestionsForArticle(
      sourceLanguage,
      targetLanguage,
      sourceTitle
    );

    if (!suggestion) {
      /** @type {SectionSuggestion} */
      suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage,
        sourceTitle,
        targetLanguage
      );

      commit("addSectionSuggestion", suggestion);
      dispatch(
        "mediawiki/fetchPageMetadata",
        {
          language: sourceLanguage,
          titles: [sourceTitle]
        },
        { root: true }
      );
    }

    commit("setCurrentSectionSuggestion", suggestion);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
