import { computed } from "vue";
import { getAutonym } from "@wikimedia/language-data";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @param {Store} store
 * @return {{currentSectionSuggestion: ComputedRef<SectionSuggestion>, previousRoute: ComputedRef<string>, currentMTProvider: *, sourceLanguageAutonym: *, targetLanguage: *, currentTargetPage: *, targetLanguageAutonym: *, sourceLanguage: *, currentSourcePage: *}}
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

  const currentSourcePage = computed(
    () => store.getters["application/getCurrentPage"]
  );

  const currentSourcePageFromURL = computed(() =>
    store.getters["mediawiki/getPage"](
      sourceLanguageURLParameter.value,
      pageURLParameter.value
    )
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
    currentSourcePageFromURL,
    previousRoute,
    sourceLanguage,
    sourceLanguageAutonym,
    targetLanguage,
    targetLanguageAutonym,
  };
}
