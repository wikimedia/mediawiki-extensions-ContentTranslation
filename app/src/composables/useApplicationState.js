import { computed } from "@vue/composition-api";
import store from "@/store";
import { getAutonym } from "@wikimedia/language-data";

export default function() {
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
    () => store.state.application.isSectionTitleSelectedForTranslation
  );

  const publishResult = computed(
    () => store.state.application.currentPublishResult
  );

  return {
    currentMTProvider,
    currentSectionSuggestion,
    currentSourceSection,
    isSectionTitleSelected,
    publishResult,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym
  };
}
