import { computed } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentPages from "@/composables/useCurrentPages";

const useCompareContents = () => {
  const { currentTargetPage: targetPage } = useCurrentPages();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

  const { sectionURLParameter } = useURLHandler();

  const activeSectionTargetTitle = computed(
    () =>
      suggestion.value.missingSections[sectionURLParameter.value] ||
      suggestion.value.presentSections[sectionURLParameter.value] ||
      ""
  );

  const targetSectionAnchor = computed(() =>
    (targetSection.value?.title || "").replace(/ /g, "_")
  );

  const targetSection = computed(() =>
    targetPage.value?.getSectionByTitle(activeSectionTargetTitle.value)
  );

  const { sourceSection } = useCurrentPageSection();
  const sourceSectionContent = computed(() => sourceSection.value?.html);
  const targetSectionContent = computed(() => targetSection.value?.html);

  return {
    activeSectionTargetTitle,
    sourceSectionContent,
    targetSectionAnchor,
    targetSectionContent,
  };
};

export default useCompareContents;
