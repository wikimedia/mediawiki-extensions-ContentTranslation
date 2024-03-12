import { useStore } from "vuex";
import SubSection from "@/wiki/cx/models/subSection";
import { renderTemplateFromVE } from "@/utils/templateRenderer";
import useDebouncedSave from "@/composables/useDebouncedSave";
import useTranslationUnitSelect from "@/components/SXSentenceSelector/useTranslationUnitSelect";

const useEditedTranslationApply = () => {
  const store = useStore();
  const saveDebounced = useDebouncedSave();
  const { selectNextTranslationUnit } = useTranslationUnitSelect();

  /**
   * Given an edited translation string, this action applies this
   * translation to the selected translation unit, and selects
   * the next sentence.
   *
   * @param {string} translation
   */
  return async (translation) => {
    const div = document.createElement("div");
    div.innerHTML = translation;
    // Remove dummy span node if exists. This node was only added so that VE doesn't add a new paragraph (which is done
    // by default when VE initial content is empty).
    div.querySelectorAll(".sx-edit-dummy-node").forEach((el) => el.remove());
    translation = div.innerHTML;

    const { currentSourceSection, targetLanguage, currentMTProvider } =
      store.state.application;
    const { selectedContentTranslationUnit } = currentSourceSection;

    if (selectedContentTranslationUnit instanceof SubSection) {
      const currentSourcePage = store.getters["application/getCurrentPage"];
      const currentTargetPage =
        store.getters["application/getCurrentTargetPage"];

      const templateTranslationHtml = await renderTemplateFromVE(
        translation,
        currentTargetPage?.title || currentSourcePage.title,
        targetLanguage
      );
      translation = templateTranslationHtml || translation;
    }
    currentSourceSection.setTranslationForSelectedTranslationUnit(
      translation,
      currentMTProvider
    );
    saveDebounced();
    store.commit("application/setAutoSavePending", true);

    selectNextTranslationUnit();
  };
};

export default useEditedTranslationApply;
