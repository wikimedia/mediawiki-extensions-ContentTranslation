import PublishResult from "../../../wiki/cx/models/publishResult";

const enabledTargetLanguagesByConfig = mw.config.get(
  "wgSectionTranslationTargetLanguages"
);
const targetLanguage = enabledTargetLanguagesByConfig?.[0] || "es";

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
  targetLanguage,
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
  cxServerToken: null,
  /**
   * Current publish result for application. When publish action fails,
   * this result is being updated to contain warnings/errors inside messages property
   * @type {PublishResult}
   */
  currentPublishResult: new PublishResult()
};
