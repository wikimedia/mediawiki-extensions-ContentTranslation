import { useStore } from "vuex";
import SubSection from "@/wiki/cx/models/subSection";
import { renderTemplateFromVE } from "@/utils/templateRenderer";
import useTranslationUnitSelect from "@/components/SXSentenceSelector/useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useTranslationSave from "@/composables/useTranslationSave";

const useEditedTranslationApply = () => {
  const store = useStore();
  const saveTranslation = useTranslationSave();
  const { selectNextTranslationUnit } = useTranslationUnitSelect();
  const { sourceSection, selectedContentTranslationUnit } =
    useCurrentPageSection();

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

    const { targetLanguage, currentMTProvider } = store.state.application;

    if (selectedContentTranslationUnit.value instanceof SubSection) {
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
    sourceSection.value.setTranslationForSelectedTranslationUnit(
      translation,
      currentMTProvider
    );
    saveTranslation();

    selectNextTranslationUnit();
  };
};

export default useEditedTranslationApply;
