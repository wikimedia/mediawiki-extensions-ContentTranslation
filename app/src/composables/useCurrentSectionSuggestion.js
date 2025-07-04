import { computed } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @return {{sectionSuggestion: ComputedRef<SectionSuggestion>, isCurrentSectionPresent: ComputedRef<boolean>}}
 */
const useCurrentSectionSuggestion = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sectionTitle,
  } = useURLHandler();
  const sectionSuggestion = computed(() =>
    store.getters["suggestions/getSectionSuggestionsForArticle"](
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle.value
    )
  );

  const isCurrentSectionPresent = computed(
    () =>
      !!sectionSuggestion.value?.presentSections.hasOwnProperty(
        sectionTitle.value
      )
  );

  return { sectionSuggestion, isCurrentSectionPresent };
};

export default useCurrentSectionSuggestion;
