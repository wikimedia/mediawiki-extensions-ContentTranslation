import { computed, ref } from "vue";
import useApplicationState from "@/composables/useApplicationState";

const useCompareContents = (store) => {
  const discardedSections = ref([]);

  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection: sourceSection,
    currentTargetPage: targetPage,
  } = useApplicationState(store);

  const sourceSectionTitle = computed(
    () => store.getters["application/getCurrentSourceSectionTitle"]
  );

  const activeSectionTargetTitle = computed(
    () =>
      suggestion.value.missingSections[sourceSectionTitle.value] ||
      suggestion.value.presentSections[sourceSectionTitle.value] ||
      ""
  );

  const targetSectionAnchor = computed(() =>
    (targetSection.value?.title || "").replace(/ /g, "_")
  );

  const targetSection = computed(() =>
    targetPage.value?.getSectionByTitle(activeSectionTargetTitle.value)
  );

  const sourceSectionContent = computed(() => sourceSection.value?.html);
  const targetSectionContent = computed(() => targetSection.value?.html);

  /**
   * A section is mapped if it's neither missing nor discarded
   * @type {ComputedRef<boolean>}
   */
  const isCurrentSectionMapped = computed(
    () =>
      !store.getters["application/isCurrentSourceSectionMissing"] &&
      !discardedSections.value.includes(activeSectionTargetTitle.value)
  );

  return {
    activeSectionTargetTitle,
    discardedSections,
    isCurrentSectionMapped,
    sourceSectionContent,
    sourceSectionTitle,
    targetSectionAnchor,
    targetSectionContent,
  };
};

export default useCompareContents;
