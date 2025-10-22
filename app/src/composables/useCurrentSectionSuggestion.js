import { computed } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @return {{sectionSuggestion: ComputedRef<SectionSuggestion>}}
 */
const useCurrentSectionSuggestion = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
  } = useURLHandler();
  const sectionSuggestion = computed(() =>
    store.getters["suggestions/getSectionSuggestionsForArticle"](
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle.value
    )
  );

  return { sectionSuggestion };
};

export default useCurrentSectionSuggestion;
