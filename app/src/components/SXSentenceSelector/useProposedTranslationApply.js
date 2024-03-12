import { useStore } from "vuex";
import useDebouncedSave from "@/composables/useDebouncedSave";
import useTranslationUnitSelect from "./useTranslationUnitSelect";

const useProposedTranslationApply = () => {
  const store = useStore();
  const saveDebounced = useDebouncedSave();
  const { selectNextTranslationUnit } = useTranslationUnitSelect();

  return async () => {
    const translation =
      store.getters["application/getCurrentProposedTranslation"];
    const { currentSourceSection, currentMTProvider } = store.state.application;
    currentSourceSection.setTranslationForSelectedTranslationUnit(
      translation,
      currentMTProvider
    );

    saveDebounced();
    store.commit("application/setAutoSavePending", true);
    selectNextTranslationUnit();
  };
};

export default useProposedTranslationApply;
