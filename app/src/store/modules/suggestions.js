import cxSuggestionsApi from "../../wiki/cx/api/suggestions";

const state = {
  pageSuggestions: [],
  sectionSuggestions: [],
  favorites: {}
};

const mutations = {
  addPageSuggestion(state, suggestion) {
    state.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state, suggestion) {
    state.sectionSuggestions.push(suggestion);
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

  async getSectionSuggestionsForArticle(
    { commit, dispatch, rootGetters },
    suggestionRequest
  ) {
    const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      suggestionRequest.sourceLanguage,
      suggestionRequest.sourceTitle,
      suggestionRequest.targetLanguage
    );
    commit("addSectionSuggestion", suggestion);

    dispatch(
      "mediawiki/fetchPage",
      {
        language: suggestionRequest.sourceLanguage,
        titles: [suggestionRequest.sourceTitle]
      },
      { root: true }
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
