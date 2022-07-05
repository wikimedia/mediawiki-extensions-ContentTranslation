import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import SubSection from "@/wiki/cx/models/subSection";

const mutations = {
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
        present: suggestion?.presentSections || {},
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

  setProposedTranslationForTranslationUnitById(
    state,
    { id, provider, proposedTranslation }
  ) {
    if (id === 0) {
      state.currentSourceSection.proposedTitleTranslations[provider] =
        proposedTranslation;

      return;
    }
    const unit = state.currentSourceSection.getContentTranslationUnitById(id);

    if (unit instanceof SubSection) {
      unit.blockTemplateProposedTranslations[provider] = proposedTranslation;
    } else if (unit instanceof SectionSentence) {
      unit.addProposedTranslation(provider, proposedTranslation);
    }
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
  },
};

export default mutations;
