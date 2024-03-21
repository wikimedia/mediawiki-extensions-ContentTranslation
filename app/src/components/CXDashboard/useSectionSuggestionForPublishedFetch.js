import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const useSectionSuggestionForPublishedFetch = () => {
  const store = useStore();

  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} sourceTitle
   * @return {Promise<SectionSuggestion|null>}
   */
  return async (sourceLanguage, targetLanguage, sourceTitle) => {
    let suggestion = store.getters[
      "suggestions/getSectionSuggestionsForArticle"
    ](sourceLanguage, targetLanguage, sourceTitle);

    if (!suggestion) {
      /** @type {SectionSuggestion|null} */
      suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage,
        sourceTitle,
        targetLanguage
      );

      if (!suggestion) {
        suggestion = new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle,
          isListable: false,
        });
      }
      store.commit("suggestions/addSectionSuggestion", suggestion);
    }

    return suggestion;
  };
};

export default useSectionSuggestionForPublishedFetch;
