import { useStore } from "vuex";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useApplicationState from "@/composables/useApplicationState";

const useInitializeSegmentSelection = () => {
  const store = useStore();
  const { selectNextTranslationUnit, selectTranslationUnitById } =
    useTranslationUnitSelect();

  return () => {
    const { currentTranslation } = store.state.application;
    const { currentSourceSection, selectedContentTranslationUnit } =
      useApplicationState(store);

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
