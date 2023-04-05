import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";

/**
 * @param {Store} store
 * @return {{currentSectionSuggestion: ComputedRef<PageSection>, proposedTranslation: *, currentMTProvider: *, currentSourceSection: *, sourceLanguageAutonym: *, targetLanguage: *, currentTargetPage: *, targetLanguageAutonym: *, isSectionTitleSelected: *, selectedContentTranslationUnit: *, sourceLanguage: *, currentSourcePage: *}}
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

  const selectedContentTranslationUnit = computed(
    () => currentSourceSection.value?.selectedContentTranslationUnit
  );

  const proposedTranslation = computed(
    () => store.getters["application/getCurrentProposedTranslation"]
  );

  const currentSourcePage = computed(
    () => store.getters["application/getCurrentPage"]
  );

  const currentTargetPage = computed(
    () => store.getters["application/getCurrentTargetPage"]
  );

  return {
    currentMTProvider,
    currentSectionSuggestion,
    currentSourcePage,
    currentSourceSection,
    currentTargetPage,
    isSectionTitleSelected,
    proposedTranslation,
    selectedContentTranslationUnit,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
  };
}
