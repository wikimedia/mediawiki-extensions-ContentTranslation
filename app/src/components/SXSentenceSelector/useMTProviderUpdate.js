import useCurrentPageSection from "@/composables/useCurrentPageSection";
import { useStore } from "vuex";
import useTranslationUnitTranslate from "./useTranslationUnitTranslate";

const useMTProviderUpdate = () => {
  const { sourceSection } = useCurrentPageSection();
  const store = useStore();
  const { translateTranslationUnitById } = useTranslationUnitTranslate();

  /**
   * Given a valid MT provider, this action updates the
   * currently selected MT provider and translates the
   * currently selected translation unit (section title
   * or section sentence) using this MT provider.
   *
   * @param {string} provider
   */
  return (provider) => {
    store.commit("application/setCurrentMTProvider", provider);
    const id = sourceSection.value.selectedTranslationUnitId;
    translateTranslationUnitById(id, provider);
  };
};

export default useMTProviderUpdate;
