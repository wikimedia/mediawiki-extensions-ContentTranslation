export default {
  /**@type Array */
  mtRequestsPending: [],
  /** @type String */
  currentMTProvider: "",
  /**
   * This variable indicates whether an auto-save request is pending.
   * Auto-save requests are being debounced during sentence-by-sentence
   * translation. This variable is true when the debounce queue is non-empty.
   * @type Boolean
   */
  autoSavePending: false,
  isLoginDialogOn: false,
  /**
   * The name of the previous route (as defined in vue-router config)
   * @type String
   */
  previousRoute: null,
};
