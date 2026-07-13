import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import useURLHandler from "@/composables/useURLHandler";

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
    const {
      sourceLanguageURLParameter: sourceLanguage,
      targetLanguageURLParameter: targetLanguage,
    } = useURLHandler();

    const storageKey = MTProviderGroup.getStorageKey(
      sourceLanguage.value,
      targetLanguage.value
    );

    mw.storage.set(storageKey, provider);
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
};

export default mutations;
