import { computed } from "@vue/composition-api";
import store from "@/store";
import { getAutonym } from "@wikimedia/language-data";

export default function() {
  const sourceLanguage = computed(() => store.state.application.sourceLanguage);
  const targetLanguage = computed(() => store.state.application.targetLanguage);

  const currentSectionSuggestion = computed(
    () => store.state.application.currentSectionSuggestion
  );

  const currentSourceSection = computed(
    () => store.state.application.currentSourceSection
  );

  const sourceLanguageAutonym = computed(() =>
    getAutonym(currentSectionSuggestion.value.sourceLanguage)
  );

  const targetLanguageAutonym = computed(() =>
    getAutonym(currentSectionSuggestion.value.targetLanguage)
  );

  return {
    currentSectionSuggestion,
    currentSourceSection,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym
  };
}
