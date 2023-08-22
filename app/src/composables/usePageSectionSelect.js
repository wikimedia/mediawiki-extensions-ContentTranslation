import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import useContentReferencesResolve from "@/composables/useContentReferencesResolve";

const usePageSectionSelect = () => {
  const store = useStore();

  const { currentSectionSuggestion: suggestion, currentSourcePage } =
    useApplicationState(store);

  const resolvePageContentReferences = useContentReferencesResolve();

  const doSelectPageSection = async (getter, setter) => {
    // if section doesn't exist, fetch page content and resolve references
    if (!getter()) {
      store.commit("application/increaseTranslationDataLoadingCounter");
      await store.dispatch("mediawiki/fetchPageContent", suggestion.value);
      // Resolve references and update page sections to include
      // these resolved references
      await resolvePageContentReferences(
        suggestion.value.sourceLanguage,
        suggestion.value.sourceTitle
      );
      store.commit("application/decreaseTranslationDataLoadingCounter");
    }
    setter();
  };

  /**
   * Given a section title this method sets the page section with the matching
   * title as current page section, if it exists. If not, the method fetches page
   * sections from the API, then sets the corresponding page section as current.
   * In case when no page section with the given title exists, null is set as
   * currentPageSection.
   *
   * @param {string} sectionTitle
   * @return {Promise<void>}
   */
  const selectPageSectionByTitle = (sectionTitle) => {
    const getter = () =>
      currentSourcePage.value.getSectionByTitle(sectionTitle);
    const setter = () =>
      store.commit("application/setCurrentSourceSection", getter());

    return doSelectPageSection(getter, setter);
  };

  /**
   * Given the index of a page section inside the current page's sections array,
   * this method sets the corresponding page section as current page section,
   * if it exists. If not, the method fetches page sections from the API, then sets
   * the corresponding page section as current. In case when no page section with
   * the given index, null is set as currentPageSection
   * @param {number} index
   * @return {Promise<void>}
   */
  const selectPageSectionByIndex = (index) => {
    const getter = () => currentSourcePage.value.sections?.[index];

    const setter = () => {
      const section = getter();

      // If this section is a lead section, set the source page title as original section title
      if (index === 0) {
        section.originalTitle = currentSourcePage.value.title;
      }
      store.commit("application/setCurrentSourceSection", section);
    };

    return doSelectPageSection(getter, setter);
  };

  return {
    selectPageSectionByIndex,
    selectPageSectionByTitle,
  };
};

export default usePageSectionSelect;
