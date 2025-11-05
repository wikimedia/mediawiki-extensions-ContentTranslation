import { computed } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";
import PageSection from "@/wiki/cx/models/pageSection";

/**
 * @return {{sectionSuggestion: ComputedRef<SectionSuggestion>, activeSectionTargetTitle: ComputedRef<string>}}
 */
const useCurrentSectionSuggestion = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sourceSectionTitle,
  } = useURLHandler();

  const sectionSuggestion = computed(() =>
    store.getters["suggestions/getSectionSuggestionsForArticle"](
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle.value
    )
  );

  const activeSectionTargetTitle = computed(() => {
    if (sourceSectionTitle.value === PageSection.LEAD_SECTION_DUMMY_TITLE) {
      return sourceSectionTitle.value;
    }

    return (
      sectionSuggestion.value.missingSections[sourceSectionTitle.value] ||
      sectionSuggestion.value.presentSections[sourceSectionTitle.value] ||
      ""
    );
  });

  return { sectionSuggestion, activeSectionTargetTitle };
};

export default useCurrentSectionSuggestion;
