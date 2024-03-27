import { computed, ref } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentPages from "@/composables/useCurrentPages";

const useCompareContents = () => {
  const discardedSections = ref([]);
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

  const isCurrentSectionMissing = computed(() =>
    suggestion.value?.missingSections.hasOwnProperty(sectionURLParameter.value)
  );
  /**
   * A section is mapped if it's neither missing nor discarded
   * @type {ComputedRef<boolean>}
   */
  const isCurrentSectionMapped = computed(
    () =>
      !isCurrentSectionMissing.value &&
      !discardedSections.value.includes(activeSectionTargetTitle.value)
  );

  return {
    activeSectionTargetTitle,
    discardedSections,
    isCurrentSectionMapped,
    sourceSectionContent,
    targetSectionAnchor,
    targetSectionContent,
  };
};

export default useCompareContents;
