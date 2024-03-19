import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";

/**
 * @param {Store} store
 * @return {{currentSectionSuggestion: ComputedRef<SectionSuggestion>, previousRoute: ComputedRef<string>, currentMTProvider: *, sourceLanguageAutonym: *, targetLanguage: *, currentTargetPage: *, targetLanguageAutonym: *, sourceLanguage: *, currentSourcePage: *}}
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

  const sourceLanguageAutonym = computed(() =>
    getAutonym(sourceLanguage.value)
  );

  const targetLanguageAutonym = computed(() =>
    getAutonym(targetLanguage.value)
  );

  const currentSourcePage = computed(
    () => store.getters["application/getCurrentPage"]
  );

  const currentTargetPage = computed(
    () => store.getters["application/getCurrentTargetPage"]
  );

  const previousRoute = computed(() => store.state.application.previousRoute);

  return {
    currentMTProvider,
    currentSectionSuggestion,
    currentSourcePage,
    currentTargetPage,
    previousRoute,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
  };
}
