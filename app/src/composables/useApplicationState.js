import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";

/**
 * @param {Store} store
 */
export default function (store) {
  const sourceLanguage = computed(() => store.state.application.sourceLanguage);
  const targetLanguage = computed(() => store.state.application.targetLanguage);
  const currentMTProvider = computed(
    () => store.state.application.currentMTProvider
  );

  const currentSectionSuggestion = computed(
    () => store.state.application.currentSectionSuggestion
  );

  const currentSourceSection = computed(
    () => store.state.application.currentSourceSection
  );

  const sourceLanguageAutonym = computed(() =>
    getAutonym(sourceLanguage.value)
  );

  const targetLanguageAutonym = computed(() =>
    getAutonym(targetLanguage.value)
  );

  const isSectionTitleSelected = computed(
    () => currentSourceSection.value?.isTitleSelected
  );

  const publishFeedbackMessages = computed(
    () => store.state.application.publishFeedbackMessages
  );

  const selectedContentTranslationUnit = computed(
    () => currentSourceSection.value?.selectedContentTranslationUnit
  );

  const proposedTranslation = computed(
    () => store.getters["application/getCurrentProposedTranslation"]
  );

  return {
    currentMTProvider,
    currentSectionSuggestion,
    currentSourceSection,
    isSectionTitleSelected,
    proposedTranslation,
    publishFeedbackMessages,
    selectedContentTranslationUnit,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
  };
}
