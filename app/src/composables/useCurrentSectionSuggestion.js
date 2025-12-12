import { computed } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";
import PageSection from "@/wiki/cx/models/pageSection";
import useSuggestionLoad from "./useSuggestionLoad";

/**
 * @return {{sectionSuggestion: ComputedRef<SectionSuggestion|null>, activeSectionTargetTitle: ComputedRef<string>}}
 */
const useCurrentSectionSuggestion = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sourceSectionTitle,
  } = useURLHandler();
  const { getLoadedSuggestion } = useSuggestionLoad();

  const sectionSuggestion = computed(() =>
    getLoadedSuggestion(
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
