import { computed } from "@vue/composition-api";
import store from "@/store";

export default function() {
  const sourceLanguage = computed(() => store.state.application.sourceLanguage);
  const targetLanguage = computed(() => store.state.application.targetLanguage);

  const currentSectionSuggestion = computed(
    () => store.state.application.currentSectionSuggestion
  );

  return {
    sourceLanguage,
    targetLanguage,
    currentSectionSuggestion
  };
}
