import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";

export default {
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type Boolean */
  isSectionTitleSelectedForTranslation: false,
  /** @type String */
  currentMTProvider: "",
  /**
   *
   * Current source language for sx application.
   * Currently selected section suggestion also
   * has the same source language. It can be
   * changed by using the language selector.
   * @type String
   */
  sourceLanguage: "en",
  /**
   * Current target language for sx application.
   * Currently selected section suggestion also
   * has the same target language. It can be
   * changed by using the language selector.
   * @type String
   */
  targetLanguage: mw.config.get("wgSectionTranslationTargetLanguage") || "es",
  publishTarget: "NEW_SECTION",
  /**
   * Indicates whether user translation is in progress
   * @type Boolean
   */
  translationInProgress: false,
  /**
   * The cxserver token, mainly used for accessing external machine translation services.
   * @type String
   */
  cxServerToken: null
};
