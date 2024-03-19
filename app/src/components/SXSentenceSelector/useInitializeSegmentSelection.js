import { useStore } from "vuex";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

const useInitializeSegmentSelection = () => {
  const {
    sourceSection: currentSourceSection,
    selectedContentTranslationUnit,
  } = useCurrentPageSection();
  const store = useStore();
  const { selectNextTranslationUnit, selectTranslationUnitById } =
    useTranslationUnitSelect();

  return () => {
    const { currentTranslation } = store.state.application;

    if (!currentSourceSection.value) {
      return;
    }

    // if this is a restored draft translation and there is no currently
    // selected translation unit (which happens when the translation inside
    // "Pick a sentence" step starts)
    if (!!currentTranslation && !selectedContentTranslationUnit.value) {
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
