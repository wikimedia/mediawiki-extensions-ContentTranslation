import Vue from "vue";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import router from "../../../router";
import siteApi from "../../../wiki/mw/api/site";

export default {
  /**
   * @param dispatch
   * @param state
   * @param commit
   * @return {Promise<String>}
   */
  async getCXServerToken({ dispatch, state, commit }) {
    if (!state.cxServerToken) {
      await siteApi.fetchCXServerToken().then(
        token => {
          // Make sure token.age is configured to a valid value.
          if (token.age <= 30) {
            // Set the default token age
            token.age = 3600;
          }
          const now = Math.floor(Date.now() / 1000);
          // We use `age` instead of `exp` because it is more reliable, as user's
          // clocks might be set to wrong time.
          token.refreshAt = now + token.age - 30;
          commit("setCXServerToken", token);
        },
        errorCode => {
          if (errorCode === "token-impossible") {
            // Likely CX extension has not been configured properly.
            // To make development and testing easier, assume that
            // no token is needed.
            const now = Math.floor(Date.now() / 1000);
            // Set a dummy token with higher `refreshAt` time
            commit("setCXServerToken", { jwt: "", refreshAt: now + 3600 * 10 });
          }
        }
      );
    }

    const now = Math.floor(Date.now() / 1000);
    if (state.cxServerToken?.refreshAt <= now) {
      commit("setCXServerToken", null);
      return dispatch("getCXServerToken");
    }
    return state.cxServerToken?.jwt;
  },

  async initializeDashboardContext({ dispatch, state }) {
    dispatch("mediawiki/fetchLanguages", {}, { root: true });
    dispatch("mediawiki/fetchSupportedLanguageCodes", {}, { root: true });
    const suggestion = await dispatch("loadSectionSuggestionFromUrl");
    if (suggestion) {
      dispatch("startSectionTranslation", suggestion);
      return;
    }

    await dispatch("translator/fetchTranslations", {}, { root: true });

    const { sourceLanguage, targetLanguage } = state;
    dispatch(
      "suggestions/fetchSuggestions",
      { sourceLanguage, targetLanguage },
      { root: true }
    );
  },

  /**
   * @param commit
   * @param {SectionSuggestion} suggestion
   */
  startSectionTranslation({ commit, dispatch }, suggestion) {
    dispatch("getCXServerToken");
    router.push({ name: "sx-article-selector" });
    commit("setCurrentSectionSuggestion", suggestion);
  },
  updateSourceLanguage({ commit, state, getters, dispatch }, sourceLanguage) {
    commit("setSourceLanguage", sourceLanguage);
    if (sourceLanguage === state.targetLanguage) {
      commit("setTargetLanguage", null);
    }

    // If translation has not started yet, re-fetch suggestions
    if (!state.currentSectionSuggestion) {
      dispatch(
        "suggestions/fetchSuggestions",
        { sourceLanguage, targetLanguage: state.targetLanguage },
        { root: true }
      );
      return;
    }

    const sourceTitle = getters.getCurrentLanguageTitleGroup.getTitleForLanguage(
      sourceLanguage
    );
    const suggestion = new SectionSuggestion({
      sourceLanguage,
      targetLanguage: state.targetLanguage,
      sourceTitle,
      missing: {}
    });

    if (
      getters.getCurrentLanguageTitleGroup.hasLanguage(state.targetLanguage)
    ) {
      dispatch("suggestions/loadSectionSuggestion", suggestion, { root: true });
      return;
    }

    commit("setCurrentSectionSuggestion", suggestion);
  },
  updateTargetLanguage({ commit, state, getters, dispatch }, targetLanguage) {
    commit("setTargetLanguage", targetLanguage);

    // If translation has not started yet, re-fetch suggestions
    if (!state.currentSectionSuggestion) {
      dispatch(
        "suggestions/fetchSuggestions",
        { sourceLanguage: state.sourceLanguage, targetLanguage },
        { root: true }
      );
      return;
    }

    const suggestion = new SectionSuggestion({
      sourceLanguage: state.sourceLanguage,
      targetLanguage,
      sourceTitle: state.currentSectionSuggestion.sourceTitle,
      missing: {}
    });

    if (getters.getCurrentLanguageTitleGroup.hasLanguage(targetLanguage)) {
      dispatch("suggestions/loadSectionSuggestion", suggestion, { root: true });
      return;
    }
    commit("setCurrentSectionSuggestion", suggestion);
  },
  /**
   * @return {SectionSuggestion|void}
   */
  loadSectionSuggestionFromUrl({ commit, rootGetters, state, dispatch }) {
    const urlParams = new URLSearchParams(location.search);
    const isSectionTranslation = urlParams.get("sx");
    const sourceTitle = urlParams.get("page");
    const sourceLanguage = urlParams.get("from");
    const targetLanguage = urlParams.get("to");
    const targetLanguageConfig = mw.config.get(
      "wgSectionTranslationTargetLanguage"
    );
    if (!targetLanguageConfig) {
      targetLanguage && commit("setTargetLanguage", targetLanguage);
    }

    if (sourceLanguage !== targetLanguageConfig) {
      sourceLanguage && commit("setSourceLanguage", sourceLanguage);
    }

    if (!isSectionTranslation || !sourceTitle) {
      return;
    }

    /** Get corresponding suggestion for requested language pair and article title, if exists */
    let suggestion = rootGetters["suggestions/getSectionSuggestionsForArticle"](
      state.sourceLanguage,
      state.targetLanguage,
      sourceTitle
    );

    if (!suggestion) {
      suggestion = new SectionSuggestion({
        sourceLanguage: state.sourceLanguage,
        targetLanguage: state.targetLanguage,
        sourceTitle,
        missing: {}
      });
      dispatch("suggestions/loadSectionSuggestion", suggestion, { root: true });
    }
    return suggestion;
  },
  async fetchCurrentSectionSuggestionLanguageTitles({ dispatch, state }) {
    const { sourceLanguage, sourceTitle } = state.currentSectionSuggestion;
    const payload = { language: sourceLanguage, title: sourceTitle };
    await dispatch("mediawiki/fetchLanguageTitles", payload, { root: true });
  },
  setTranslationURLParams({ state }) {
    if (!history.pushState) {
      return;
    }
    let url = new URL(location.href);
    const params = new URLSearchParams(location.search);
    params.set("page", state.currentSectionSuggestion?.sourceTitle);
    params.set("from", state.currentSectionSuggestion?.sourceLanguage);
    params.set("to", state.currentSectionSuggestion?.targetLanguage);
    params.set("sx", true);
    url.search = params;
    url = url.toString();
    history.replaceState({ url }, null, url);
  },
  setCurrentSectionSuggestion({ commit }, suggestion) {
    commit("setCurrentSectionSuggestion", suggestion);
  },
  async selectPageSection(
    { state, commit, dispatch, rootGetters, getters },
    { sectionTitle }
  ) {
    const suggestion = state.currentSectionSuggestion;
    const page = getters.getCurrentPage;
    let section = rootGetters["mediawiki/getPageSection"](page, sectionTitle);

    if (!section) {
      await dispatch("mediawiki/fetchPageSections", suggestion, { root: true });

      section = rootGetters["mediawiki/getPageSection"](page, sectionTitle);
    }
    commit("setCurrentSourceSection", section);
  },

  /**
   * @param commit
   * @param dispatch
   * @param state
   * @param id
   */
  selectSentenceForCurrentSection({ commit, dispatch, state }, { id }) {
    commit("clearSentenceSelection");
    commit("setIsSectionTitleSelectedForTranslation", false);
    if (id) {
      commit("selectSentence", id);
      dispatch("translateSelectedSegment", {
        provider: state.currentMTProvider
      });
    }
  },

  applyTranslationToSelectedSegment(
    { state, commit, dispatch },
    { translation }
  ) {
    commit("setTranslationInProgress", true);
    const mutation = state.isSectionTitleSelectedForTranslation
      ? "setCurrentSourceSectionTitleTranslation"
      : "setSelectedSentenceTranslation";
    commit(mutation, translation);
    dispatch("selectNextSentence");
  },

  applyProposedTranslationToSelectedSegment({ dispatch, getters }) {
    const translation = getters.getCurrentProposedTranslation;
    dispatch("applyTranslationToSelectedSegment", { translation });
  },

  applyEditedTranslationToSelectedSegment(
    { state, dispatch },
    { translation }
  ) {
    const div = document.createElement("div");
    div.innerHTML = translation;
    // Remove dummy span node if exists. This node was only added so that VE doesn't add a new paragraph (which is done
    // by default when VE initial content is empty).
    div.querySelectorAll(".sx-edit-dummy-node").forEach(el => el.remove());
    translation = div.innerHTML;

    dispatch("applyTranslationToSelectedSegment", { translation });
  },

  /**
   * If no sentence is selected, findIndex will return -1
   * and first sentence in array will be selected
   * @param getters
   * @param dispatch
   * @param commit
   */
  selectNextSentence({ getters, dispatch, commit }) {
    commit("setIsSectionTitleSelectedForTranslation", false);
    const sentences = getters.getCurrentSourceSectionSentences;
    const nextIndex = getters.getCurrentSelectedSentenceIndex + 1;
    if (nextIndex >= sentences.length) {
      return;
    }
    dispatch("selectSentenceForCurrentSection", sentences[nextIndex]);
  },

  selectPreviousSegment({ getters, dispatch }) {
    if (getters.isCurrentSentenceFirst) {
      dispatch("selectSectionTitleForTranslation");
      return;
    }
    const sentences = getters.getCurrentSourceSectionSentences;
    let selectedIndex = getters.getCurrentSelectedSentenceIndex;
    selectedIndex = (selectedIndex + sentences.length - 1) % sentences.length;
    dispatch("selectSentenceForCurrentSection", sentences[selectedIndex]);
  },

  /**
   * Checks if current MT provider exists and is valid for the
   * given language pair. If not, selects the first provider
   * among the supported ones and sets it as the current MT
   * provider.
   * @return {Promise<void>}
   */
  async initializeMTProviders({ state, dispatch, rootGetters, commit }) {
    const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
    await dispatch(
      "mediawiki/fetchMTProviders",
      { sourceLanguage, targetLanguage },
      { root: true }
    );
    const supportedProviders = rootGetters["mediawiki/getSupportedMTProviders"](
      sourceLanguage,
      targetLanguage
    );

    const currentProvider = state.currentMTProvider;
    if (currentProvider && supportedProviders.includes(currentProvider)) {
      return;
    }

    commit("setCurrentMTProvider", supportedProviders[0]);
  },

  /**
   * @param commit
   * @param dispatch
   * @param provider
   */
  updateMTProvider({ commit, dispatch }, { provider }) {
    commit("setCurrentMTProvider", provider);
    dispatch("translateSelectedSegment", provider);
  },

  /**
   * Dispatched when SXSentenceSelector SFC is mounted
   * to set section title as selected translation segment
   * when no sentence is already selected.
   * @param getters
   * @param commit
   * @param state
   * @param dispatch
   */
  selectInitialTranslationSegment({ getters, commit, state, dispatch }) {
    /**
     * When component is mounted and no sentence is selected, translation
     * should start with section title.
     */
    if (!getters.getCurrentSelectedSentence) {
      commit("setIsSectionTitleSelectedForTranslation", true);
      dispatch("translateSelectedSegment", {
        provider: state.currentMTProvider
      });
    }
  },

  /**
   * Dispatched when section title is being clicked
   * inside "Pick a sentence" step
   * @param commit
   */
  selectSectionTitleForTranslation({ commit }) {
    commit("clearSentenceSelection");
    commit("setIsSectionTitleSelectedForTranslation", true);
  },

  /**
   * @param getters
   * @param commit
   * @param state
   * @param dispatch
   * @param provider
   */
  translateSelectedSegment({ getters, commit, state, dispatch }, { provider }) {
    dispatch("translateFollowingSentence", { provider });
    if (state.isSectionTitleSelectedForTranslation) {
      dispatch("translateSectionTitle", { provider });
      return;
    }

    dispatch("translateSelectedSentence", { provider });
  },

  /**
   * @param state
   * @param getters
   * @param dispatch
   * @param provider
   * @return {Promise<void>}
   */
  async translateSectionTitle({ state, getters, dispatch }, { provider }) {
    if (state.currentSourceSection.translatedTitle) {
      return;
    }
    const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
    const originalContent = state.currentSourceSection.originalTitle;
    const translation = await dispatch(
      "mediawiki/translateSegment",
      { sourceLanguage, targetLanguage, provider, originalContent },
      { root: true }
    );

    Vue.set(
      state.currentSourceSection.proposedTitleTranslations,
      provider,
      translation
    );
  },

  /**
   * @param getters
   * @param dispatch
   * @param {String} provider
   * @return {Promise<void>}
   */
  async translateSelectedSentence({ getters, dispatch, state }, { provider }) {
    const selectedSentence = getters.getCurrentSelectedSentence;

    if (!selectedSentence || selectedSentence.proposedTranslations[provider]) {
      return;
    }

    const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
    const { originalContent } = selectedSentence;

    const translation = await dispatch(
      "mediawiki/translateSegment",
      { sourceLanguage, targetLanguage, provider, originalContent },
      { root: true }
    );

    Vue.set(selectedSentence.proposedTranslations, provider, translation);
  },

  /**
   * @param getters
   * @param dispatch
   * @param provider
   * @return {Promise<void>}
   */
  async translateFollowingSentence({ getters, dispatch, state }, { provider }) {
    const nextIndex = getters.getCurrentSelectedSentenceIndex + 1;
    const sentences = getters.getCurrentSourceSectionSentences;
    if (nextIndex >= sentences.length) {
      return;
    }

    const nextSentence = sentences[nextIndex];
    const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
    const { originalContent } = nextSentence;

    const translation = await dispatch(
      "mediawiki/translateSegment",
      { sourceLanguage, targetLanguage, provider, originalContent },
      { root: true }
    );
    Vue.set(nextSentence.proposedTranslations, provider, translation);
  },

  /**
   * Dispatched when translation for all available MT providers
   * is needed (e.g. when user wants to select among available
   * MT translations)
   * @param rootGetters
   * @param dispatch
   */
  translateSegmentForAllProviders({ rootGetters, dispatch }) {
    const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
    const mtProviders = rootGetters["mediawiki/getSupportedMTProviders"](
      sourceLanguage,
      targetLanguage
    );
    mtProviders.forEach(provider =>
      dispatch("translateSelectedSegment", { provider })
    );
  },

  clearCurrentSectionSuggestion({ commit }) {
    commit("setCurrentSectionSuggestion", null);
  }
};