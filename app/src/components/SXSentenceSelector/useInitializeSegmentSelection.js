import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";

const useInitializeSegmentSelection = () => {
  const store = useStore();

  return () => {
    const { currentTranslation } = store.state.application;
    const { currentSourceSection } = useApplicationState(store);

    if (!!currentTranslation) {
      const { lastTranslatedContentTranslationUnit } =
        currentSourceSection.value;
      currentSourceSection.value.selectTranslationUnitById(
        lastTranslatedContentTranslationUnit?.id || 0
      );
      store.dispatch("application/selectNextTranslationUnit");
    } else {
      const { selectedContentTranslationUnit } = useApplicationState(store);

      if (!selectedContentTranslationUnit.value) {
        // If no sentence is selected, select title
        store.dispatch("application/selectTranslationUnitById", 0);
      }
    }
  };
};

export default useInitializeSegmentSelection;
