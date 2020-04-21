import cxSuggestionsApi from "../../wiki/cx/suggestions";

const state = {
  suggestions: {},
  favorites: {}
};

const mutations = {
  setSuggestions(state, suggestions) {
    const key = `${suggestions.from}/${suggestions.to}`;
    state.suggestions = { ...state.suggestions, [key]: suggestions };
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  getSuggestions({ commit, dispatch }, suggestionRequest) {
    cxSuggestionsApi
      .fetchSuggestions(
        suggestionRequest.from,
        suggestionRequest.to,
        suggestionRequest.seeds
      )
      .then(suggestions => {
        let titles = [];
        commit("setSuggestions", {
          from: suggestionRequest.from,
          to: suggestionRequest.to,
          suggestions
        });
        for (let i = 0; i < suggestions.length; i++) {
          titles.push(suggestions[i].title);
        }
        dispatch(
          "mediawiki/fetchMetadata",
          { language: suggestionRequest.from, titles },
          { root: true }
        );
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
