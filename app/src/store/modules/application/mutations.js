import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";

const mutations = {
  /**
   * @param state
   * @param {string|0} value
   */
  addMtRequestsPending(state, value) {
    state.mtRequestsPending.push(value);
  },

  /**
   * @param state
   * @param {string|0} value
   */
  removeMtRequestsPending(state, value) {
    state.mtRequestsPending = state.mtRequestsPending.filter(
      (item) => item !== value
    );
  },

  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (state, provider) => {
    state.currentMTProvider = provider;
    const { sourceLanguage, targetLanguage } = state;

    const storageKey = MTProviderGroup.getStorageKey(
      sourceLanguage,
      targetLanguage
    );

    mw.storage.set(storageKey, provider);
  },

  setSourceLanguage: (state, language) => {
    state.sourceLanguage = language;
  },

  setTargetLanguage: (state, language) => {
    state.targetLanguage = language;
  },

  /**
   * @param state
   * @param {("NEW_SECTION"|"SANDBOX_SECTION")} target
   */
  setPublishTarget: (state, target) => {
    const validTargets = ["NEW_SECTION", "SANDBOX_SECTION"];

    if (!validTargets.includes(target)) {
      throw "Invalid publish target";
    }
    state.publishTarget = target;
  },

  /**
   * @param {object} state
   * @param {boolean} value
   */
  setAutoSavePending: (state, value) => {
    state.autoSavePending = value;
  },

  setCXServerToken: (state, token) => {
    state.cxServerToken = token;
  },

  /**
   * @param {object} state
   * @param {boolean} value
   */
  setIsLoginDialogOn: (state, value) => {
    state.isLoginDialogOn = value;
  },

  setPreviousRoute: (state, route) => {
    state.previousRoute = route;
  },

  dismissBanner: (state) => {
    state.bannerDismissed = true;
  },
};

export default mutations;
