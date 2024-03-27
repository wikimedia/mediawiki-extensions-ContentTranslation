import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @param {Store} store
 * @return {{currentSectionSuggestion: ComputedRef<SectionSuggestion>, previousRoute: ComputedRef<string>, currentMTProvider: *, sourceLanguageAutonym: *, targetLanguage: *, targetLanguageAutonym: *, sourceLanguage: *}}
 */
export default function (store) {
  const { sourceLanguageURLParameter, pageURLParameter } = useURLHandler();
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

  const previousRoute = computed(() => store.state.application.previousRoute);

  return {
    currentMTProvider,
    currentSectionSuggestion,
    previousRoute,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
  };
}
