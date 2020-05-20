import cxSuggestionsApi from "../../wiki/cx/api/suggestions";

const state = {
  // Suggestions for articles to translate. Keyed by language pairs
  // Example key: 'en/es'. Values are
  suggestions: {},
  sectionSuggestions: {},
  favorites: {}
};

const mutations = {
  addSuggestions(state, { sourceLanguage, targetLanguage, suggestions }) {
    const key = `${sourceLanguage}/${targetLanguage}`;
    state.sectionSuggestions[key] = state.sectionSuggestions[key] || [];
    state.suggestions = {
      ...state.suggestions,
      [key]: [...suggestions, ...state.sectionSuggestions[key]]
    };
  },
  addSectionSuggestions(
    state,
    { sourceLanguage, targetLanguage, suggestions }
  ) {
    const key = `${sourceLanguage}/${targetLanguage}`;
    state.sectionSuggestions[key] = state.sectionSuggestions[key] || [];
    state.sectionSuggestions = {
      ...state.sectionSuggestions,
      [key]: [...suggestions, ...state.sectionSuggestions[key]]
    };
  }
};

const getters = {
  getSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.suggestions[`${sourceLanguage}/${targetLanguage}`] || [],
  getSectionSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.sectionSuggestions[`${sourceLanguage}/${targetLanguage}`] || [],
  getSectionSuggestionsForArticle: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) => {
    const suggestionsForPair =
      state.sectionSuggestions[`${sourceLanguage}/${targetLanguage}`] || [];
    return suggestionsForPair.find(
      suggestion => suggestion.sourceTitle === sourceTitle
    );
  }
};

const actions = {
  getSuggestions({ commit, dispatch }, suggestionRequest) {
    cxSuggestionsApi
      .fetchSuggestions(
        suggestionRequest.sourceLanguage,
        suggestionRequest.targetLanguage,
        suggestionRequest.seeds
      )
      .then(suggestions => {
        let titles = [];
        commit("addSuggestions", {
          sourceLanguage: suggestionRequest.sourceLanguage,
          targetLanguage: suggestionRequest.targetLanguage,
          suggestions
        });
        for (let i = 0; i < suggestions.length; i++) {
          titles.push(suggestions[i].title);
        }
        if (titles.length) {
          dispatch(
            "mediawiki/fetchMetadata",
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
    commit("addSectionSuggestions", {
      sourceLanguage: suggestionRequest.sourceLanguage,
      targetLanguage: suggestionRequest.targetLanguage,
      suggestions
    });
    for (let i = 0; i < suggestions.length; i++) {
      titles.push(suggestions[i].sourceTitle);
    }
    if (titles.length) {
      dispatch(
        "mediawiki/fetchMetadata",
        { language: suggestionRequest.sourceLanguage, titles },
        { root: true }
      );
    }
  },

  async getSectionSuggestionsForArticle(
    { commit, dispatch, rootGetters },
    suggestionRequest
  ) {
    const suggestions = await cxSuggestionsApi.fetchSectionSuggestions(
      suggestionRequest.sourceLanguage,
      suggestionRequest.sourceTitle,
      suggestionRequest.targetLanguage
    );
    commit("addSectionSuggestions", {
      sourceLanguage: suggestionRequest.sourceLanguage,
      targetLanguage: suggestionRequest.targetLanguage,
      suggestions: [suggestions]
    });

    dispatch(
      "mediawiki/fetchMetadata",
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
