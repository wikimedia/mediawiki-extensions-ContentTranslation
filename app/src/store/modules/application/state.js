export default {
  /**@type Array */
  mtRequestsPending: [],
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type Translation */
  currentTranslation: null,
  /** @type String */
  currentMTProvider: "",
  /**
   *
   * Current source language for sx application.
   * Currently selected section suggestion also
   * has the same source language. It can be
   * changed by using the language selector.
   * @type {String|null}
   */
  sourceLanguage: null,
  /**
   * Current target language for sx application.
   * Currently selected section suggestion also
   * has the same target language. It can be
   * changed by using the language selector.
   * @type {String|null}
   */
  targetLanguage: null,
  publishTarget: "NEW_SECTION",
  /**
   * This variable holds the number of auto-save requests that are currently
   * in progress. Auto-save HTTP requests take some time to be completed.
   * This variable indicates how many auto-save requests has been sent but
   * not yet been completed.
   * @type Number
   */
  autoSaveInProgressCounter: 0,
  /**
   * This variable indicates whether an auto-save request is pending.
   * Auto-save requests are being debounced during sentence-by-sentence
   * translation. This variable is true when the debounce queue is non-empty.
   * @type Boolean
   */
  autoSavePending: false,
  /**
   * The cxserver token, mainly used for accessing external machine translation services.
   * @type String
   */
  cxServerToken: null,
};
