import PublishResult from "../../../wiki/cx/models/publishResult";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

export default {
  resetPublishResult(state) {
    state.currentPublishResult = new PublishResult();
  },

  /**
   * @param state
   * @param {PublishResult} result
   */
  setPublishResult(state, result) {
    state.currentPublishResult = new PublishResult(result);
  },

  /**
   * This mutation is being called both for section suggestions and for
   * page suggestions. However, "currentSectionSuggestion" state variable
   * should be a instance of SectionSuggestion class. For that reason, we should
   * cast the argument to SectionSuggestion object before setting it as
   * "currentSectionSuggestion", for type integrity.
   *
   * @param {object} state
   * @param {SectionSuggestion|ArticleSuggestion|null} suggestion
   */
  setCurrentSectionSuggestion(state, suggestion) {
    state.currentSectionSuggestion =
      suggestion &&
      new SectionSuggestion({
        ...suggestion,
        missing: suggestion?.missingSections || {},
        present: suggestion?.presentSections || {}
      });
  },

  /**
   * @param state
   * @param {PageSection} section
   */
  setCurrentSourceSection(state, section) {
    state.currentSourceSection = section;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionTitleTranslation(state, translation) {
    state.currentSourceSection.translatedTitle = translation;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionEditedTranslation(state, translation) {
    state.currentSourceSection.editedTranslation = translation;
  },

  /**
   * @param state
   */
  clearSentenceSelection(state) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );

    if (sentence) {
      sentence.selected = false;
    }
  },

  /**
   * @param state
   * @param {String} id
   */
  selectSentence(state, id) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.id === id
    );
    sentence.selected = true;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setSelectedSentenceTranslation(state, translation) {
    /** @type {SectionSentence} */
    const selectedSentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );
    selectedSentence.translatedContent = translation;
  },

  /**
   * @param state
   * @param value
   */
  setIsSectionTitleSelectedForTranslation: (state, value) => {
    state.isSectionTitleSelectedForTranslation = value;
  },

  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (state, provider) => {
    state.currentMTProvider = provider;
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

  setTranslationInProgress: (state, value) => {
    state.translationInProgress = value;
  },

  setCXServerToken: (state, token) => {
    state.cxServerToken = token;
  }
};
