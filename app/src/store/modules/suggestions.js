import cxSuggestionsApi from "../../wiki/cx/api/suggestions";
import Vue from "vue";
const state = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  favorites: {},
  sectionSuggestionsLoaded: false
};

const mutations = {
  addPageSuggestion(state, suggestion) {
    state.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state, suggestion) {
    state.sectionSuggestions.push(suggestion);
  },
  setSectionSuggestionsLoaded(state, value) {
    state.sectionSuggestionsLoaded = value;
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
  async fetchPageSuggestions(
    { commit, dispatch },
    { sourceLanguage, targetLanguage, seed }
  ) {
    /** @type {ArticleSuggestion[]} */
    const suggestions = await cxSuggestionsApi.fetchSuggestions(
      sourceLanguage,
      targetLanguage,
      seed
    );
    suggestions.forEach(suggestion => commit("addPageSuggestion", suggestion));
    const titles = suggestions.map(suggestion => suggestion.sourceTitle);
    titles.length &&
      dispatch(
        "mediawiki/fetchPageMetadata",
        { language: sourceLanguage, titles },
        { root: true }
      );
  },
  async fetchSectionSuggestionsBySeeds(
    { commit, dispatch, state },
    { seeds, sourceLanguage }
  ) {
    if (!seeds.length) {
      return;
    }

    for (const seed of seeds) {
      /** @type {SectionSuggestion} */
      const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        seed.sourceLanguage,
        seed.sourceTitle,
        seed.targetLanguage
      );

      if (suggestion) {
        commit("addSectionSuggestion", suggestion);
      }

      if (state.sectionSuggestions.length === 5) {
        break;
      }
    }

    commit("setSectionSuggestionsLoaded", true);
    if (!state.sectionSuggestions.length) {
      return;
    }

    const titles = state.sectionSuggestions.map(
      suggestion => suggestion.sourceTitle
    );
    dispatch(
      "mediawiki/fetchPageMetadata",
      { language: sourceLanguage, titles },
      { root: true }
    );
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
      /** @type {SectionSuggestion|null} */
      suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage,
        sourceTitle,
        targetLanguage
      );

      if (!suggestion) {
        return;
      }

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

    dispatch("application/setCurrentSectionSuggestion", suggestion, {
      root: true
    });
  },
  async fetchSuggestions(
    { rootGetters, dispatch },
    { sourceLanguage, targetLanguage }
  ) {
    // Published translations
    let seeds = rootGetters[
      "translator/getPublishedTranslationsForLanguagePair"
    ](sourceLanguage, targetLanguage);

    // For users that haven't published any translation with CX,
    // fetch seeds for section suggestions with additional request
    if (!seeds.length) {
      seeds = await cxSuggestionsApi.fetchSuggestionSeeds(
        sourceLanguage,
        targetLanguage
      );
    }
    dispatch("fetchSectionSuggestionsBySeeds", { seeds, sourceLanguage });

    // Disable fetch page suggestions action until we properly support
    // it in the Dashboard
    if (!new Vue().$incompleteVersion) {
      const seed = (seeds?.[0] || {})?.sourceTitle;

      dispatch("fetchPageSuggestions", {
        sourceLanguage,
        targetLanguage,
        seed
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
