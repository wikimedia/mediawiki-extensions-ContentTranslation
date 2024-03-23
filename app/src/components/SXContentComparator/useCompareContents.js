import { computed, ref } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";
import useApplicationState from "@/composables/useApplicationState";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

const useCompareContents = () => {
  const store = useStore();
  const discardedSections = ref([]);
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

  const { currentTargetPage: targetPage } = useApplicationState(store);

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
