import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import SubSection from "@/wiki/cx/models/subSection";

const mutations = {
  /**
   * This mutation empties publishFeedbackMessages array.
   * It is used inside "Pick a sentence" step, to make sure
   * that publishing issues are reset, when user goes back
   * from "Preview and publish" step.
   *
   * @param {object} state
   */
  clearPublishFeedbackMessages(state) {
    state.publishFeedbackMessages = [];
  },

  /**
   * This mutation removes all MT related feedback messages
   * from publishFeedbackMessages array
   *
   * @param {object} state
   */
  clearMTPublishFeedbackMessages(state) {
    state.publishFeedbackMessages = state.publishFeedbackMessages.filter(
      (message) => !message.isMTMessage
    );
  },

  /**
   * Given a PublishFeedbackMessage model, this mutation
   * removes all MT related feedback messages from
   * publishFeedbackMessages array, and then adds the given
   * message to the array.
   *
   * @param {object} state
   * @param {PublishFeedbackMessage} message
   */
  addMTPublishFeedbackMessage(state, message) {
    mutations.clearMTPublishFeedbackMessages(state);
    state.publishFeedbackMessages.push(message);
  },

  /**
   * Given a PublishFeedbackMessage model, this mutation adds it
   * to publishFeedbackMessages array, and then sorts all
   * messages in this array so that error messages are always
   * positioned before warnings.
   *
   * @param {object} state
   * @param {PublishFeedbackMessage} message
   */
  addPublishFeedbackMessage(state, message) {
    state.publishFeedbackMessages.push(message);
    state.publishFeedbackMessages.sort((m1, m2) => +m2.isError - +m1.isError);
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
