import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

const useInitializeSegmentSelection = () => {
  const {
    sourceSection: currentSourceSection,
    selectedContentTranslationUnit,
  } = useCurrentPageSection();
  const { selectNextTranslationUnit, selectTranslationUnitById } =
    useTranslationUnitSelect();

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
    }
  };
};

export default useInitializeSegmentSelection;
