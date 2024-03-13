import { useStore } from "vuex";
import useTranslationUnitTranslate from "./useTranslationUnitTranslate";

const useTranslationUnitSelect = () => {
  const store = useStore();
  const { translateTranslationUnitById } = useTranslationUnitTranslate();

  /**
   * Given an id, this action selects a translation unit for translation.
   * Such translation units are the section title and the section sentences.
   * If the given id is equal to 0, then the section title will be selected.
   *
   * @param {string|number} id
   * @return {Promise}
   */
  const selectTranslationUnitById = async (id) => {
    const { currentSourceSection, currentMTProvider } = store.state.application;

    currentSourceSection.selectTranslationUnitById(id);
    await translateTranslationUnitById(id, currentMTProvider);
    const { followingTranslationUnit } = currentSourceSection;

    if (followingTranslationUnit) {
      await translateTranslationUnitById(
        followingTranslationUnit.id,
        currentMTProvider
      );
    }
  };

  /**
   * This action clear current selection and selects the following
   * sentence inside section contents.
   *
   * @return {Promise}
   */
  const selectNextTranslationUnit = () => {
    const { currentSourceSection } = store.state.application;
    const { followingTranslationUnit } = currentSourceSection;

    if (!followingTranslationUnit) {
      return Promise.resolve();
    }

    return selectTranslationUnitById(followingTranslationUnit.id);
  };

  /**
   * This action clears current selection and selects
   * the previous sentence inside section contents,
   * or the section title, in case the first section
   * sentence is currently selected.
   */
  const selectPreviousTranslationUnit = () => {
    const { selectedContentTranslationUnitIndex, contentTranslationUnits } =
      store.state.application.currentSourceSection;
    const previousIndex = selectedContentTranslationUnitIndex - 1;
    // Id for section title
    let previousId = 0;

    if (previousIndex > -1) {
      previousId = contentTranslationUnits[previousIndex].id;
    }

    return selectTranslationUnitById(previousId);
  };

  return {
    selectNextTranslationUnit,
    selectPreviousTranslationUnit,
    selectTranslationUnitById,
  };
};

export default useTranslationUnitSelect;
