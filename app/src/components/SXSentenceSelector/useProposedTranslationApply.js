import { useStore } from "vuex";

const useProposedTranslationApply = () => {
  const store = useStore();

  return async () => {
    const translation =
      store.getters["application/getCurrentProposedTranslation"];
    const { currentSourceSection, currentMTProvider } = store.state.application;
    currentSourceSection.setTranslationForSelectedTranslationUnit(
      translation,
      currentMTProvider
    );
    const debouncedSave = await store.dispatch(
      "application/getDebouncedSaveTranslation"
    );
    debouncedSave();
    store.commit("application/setAutoSavePending", true);
    store.dispatch("application/selectNextTranslationUnit");
  };
};

export default useProposedTranslationApply;
