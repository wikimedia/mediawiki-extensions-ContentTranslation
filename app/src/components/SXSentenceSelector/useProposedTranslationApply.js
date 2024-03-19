import { useStore } from "vuex";
import useDebouncedSave from "@/composables/useDebouncedSave";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useApplicationState from "@/composables/useApplicationState";

const useProposedTranslationApply = () => {
  const store = useStore();
  const saveDebounced = useDebouncedSave();
  const { currentMTProvider } = useApplicationState(store);
  const { sourceSection, currentProposedTranslation } = useCurrentPageSection();

  const { selectNextTranslationUnit } = useTranslationUnitSelect();

  return async () => {
    sourceSection.value.setTranslationForSelectedTranslationUnit(
      currentProposedTranslation.value,
      currentMTProvider.value
    );

    saveDebounced();
    store.commit("application/setAutoSavePending", true);
    selectNextTranslationUnit();
  };
};

export default useProposedTranslationApply;
