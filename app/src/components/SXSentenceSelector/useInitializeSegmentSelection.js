import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useSectionPresenceStatus from "@/composables/useSectionPresenceStatus";

const useInitializeSegmentSelection = () => {
  const {
    sourceSection: currentSourceSection,
    selectedContentTranslationUnit,
  } = useCurrentPageSection();
  const { selectNextTranslationUnit, selectTranslationUnitById } =
    useTranslationUnitSelect();
  const { isPresentLeadSection } = useSectionPresenceStatus();

  const { currentTranslation } = useCurrentDraftTranslation();

  return () => {
    if (!currentSourceSection.value) {
      return;
    }

    // if this is a restored draft translation and there is no currently
    // selected translation unit (which happens when the translation inside
    // "Pick a sentence" step starts)
    if (!!currentTranslation.value && !selectedContentTranslationUnit.value) {
      const { lastTranslatedContentTranslationUnit } =
        currentSourceSection.value;
      currentSourceSection.value.selectTranslationUnitById(
        lastTranslatedContentTranslationUnit?.id || 0
      );
      selectNextTranslationUnit();
    } else if (!selectedContentTranslationUnit.value) {
      // If no sentence is selected, select title
      selectTranslationUnitById(0);

      if (isPresentLeadSection.value) {
        selectNextTranslationUnit();
      }
    }
  };
};

export default useInitializeSegmentSelection;
