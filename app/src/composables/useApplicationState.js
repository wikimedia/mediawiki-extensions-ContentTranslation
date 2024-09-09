import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";

/**
 * @param {Store} store
 * @return {{previousRoute: ComputedRef<string>, currentMTProvider: *, sourceLanguageAutonym: *, targetLanguage: *, targetLanguageAutonym: *, sourceLanguage: *, currentSuggestionFilters: *}}
 */
export default function (store) {
  const sourceLanguage = computed(() => store.state.application.sourceLanguage);
  const targetLanguage = computed(() => store.state.application.targetLanguage);
  const currentMTProvider = computed(
    () => store.state.application.currentMTProvider
  );

  const sourceLanguageAutonym = computed(() =>
    getAutonym(sourceLanguage.value)
  );

  const targetLanguageAutonym = computed(() =>
    getAutonym(targetLanguage.value)
  );

  const previousRoute = computed(() => store.state.application.previousRoute);

  const currentSuggestionFilters = computed(
    () => store.state.application.currentSuggestionFilters
  );

  return {
    currentMTProvider,
    previousRoute,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
    currentSuggestionFilters,
  };
}
