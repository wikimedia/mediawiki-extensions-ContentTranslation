import { useStore } from "vuex";
import useDebouncedSave from "@/composables/useDebouncedSave";

const useProposedTranslationApply = () => {
  const store = useStore();
  const saveDebounced = useDebouncedSave();

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
    store.dispatch("application/selectNextTranslationUnit");
  };
};

export default useProposedTranslationApply;
