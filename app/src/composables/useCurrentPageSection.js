import { computed } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPages from "@/composables/useCurrentPages";

const useCurrentPageSection = () => {
  const store = useStore();
  const { currentSourcePage, currentTargetPage } = useCurrentPages();
  const { currentMTProvider } = useApplicationState(store);

  const { sectionURLParameter: sourceSectionTitle } = useURLHandler();

  /**
   * @type {ComputedRef<PageSection|null>}
   */
  const sourceSection = computed(() => {
    if (!sourceSectionTitle.value) {
      return currentSourcePage.value?.leadSection;
    }

    return currentSourcePage.value?.getSectionByTitle(sourceSectionTitle.value);
  });

  const isSectionTitleSelected = computed(
    () => sourceSection.value?.isTitleSelected
  );

  const selectedContentTranslationUnit = computed(
    () => sourceSection.value?.selectedContentTranslationUnit
  );

  /**
   * Machine translation of currently selected translation unit (title or sentence)
   * for currently selected MT provider
   */
  const currentProposedTranslation = computed(() =>
    sourceSection.value?.getProposedTranslationByMtProvider(
      currentMTProvider.value
    )
  );

  const targetPageTitleForPublishing = computed(() => {
    if (!sourceSection.value.isLeadSection) {
      return currentTargetPage.value.title;
    }

    return sourceSection.value.title;
  });

  return {
    sourceSection,
    isSectionTitleSelected,
    selectedContentTranslationUnit,
    currentProposedTranslation,
    targetPageTitleForPublishing,
  };
};

export default useCurrentPageSection;
