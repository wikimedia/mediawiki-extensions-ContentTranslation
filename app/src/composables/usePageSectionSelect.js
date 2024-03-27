import { useStore } from "vuex";
import useContentReferencesResolve from "@/composables/useContentReferencesResolve";
import usePageContentFetch from "@/composables/usePageContentFetch";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPages from "@/composables/useCurrentPages";

const usePageSectionSelect = () => {
  const store = useStore();

  const { currentSourcePage } = useCurrentPages();

  const resolvePageContentReferences = useContentReferencesResolve();
  const fetchPageContent = usePageContentFetch();

  const {
    setSectionURLParam,
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
  } = useURLHandler();

  const doSelectPageSection = async (getter, setter) => {
    // if section doesn't exist, fetch page content and resolve references
    if (!getter()) {
      store.commit("application/increaseTranslationDataLoadingCounter");
      await fetchPageContent(
        sourceLanguage.value,
        targetLanguage.value,
        sourceTitle.value
      );
      // Resolve references and update page sections to include
      // these resolved references
      await resolvePageContentReferences(
        sourceLanguage.value,
        sourceTitle.value
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

    const setter = () => {
      setSectionURLParam(sectionTitle);
    };

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
      } else {
        setSectionURLParam(section.originalTitle);
      }
    };

    return doSelectPageSection(getter, setter);
  };

  return {
    selectPageSectionByIndex,
    selectPageSectionByTitle,
  };
};

export default usePageSectionSelect;
