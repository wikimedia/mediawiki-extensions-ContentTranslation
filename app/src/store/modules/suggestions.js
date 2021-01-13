import cxSuggestionsApi from "../../wiki/cx/api/suggestions";

const state = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
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
  async fetchSectionSuggestions(
    { commit, dispatch, rootGetters, getters },
    { sourceLanguage, targetLanguage }
  ) {
    const publishedTranslations = rootGetters[
      "translator/getPublishedTranslationsForLanguagePair"
    ](sourceLanguage, targetLanguage);

    if (!publishedTranslations.length) {
      return;
    }

    /** @type {SectionSuggestion[]} */
    const suggestions = await cxSuggestionsApi.fetchSectionSuggestionsBySeeds(
      publishedTranslations
    );

    if (!suggestions.length) {
      return;
    }

    suggestions.forEach(suggestion =>
      commit("addSectionSuggestion", suggestion)
    );

    const titles = suggestions.map(suggestion => suggestion.sourceTitle);
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
    const publishedTranslations = rootGetters[
      "translator/getPublishedTranslationsForLanguagePair"
    ](sourceLanguage, targetLanguage);
    const seed = (publishedTranslations?.[0] || {})?.sourceTitle;

    dispatch("fetchPageSuggestions", {
      sourceLanguage,
      targetLanguage,
      seed
    });

    dispatch("fetchSectionSuggestions", {
      sourceLanguage,
      targetLanguage
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
