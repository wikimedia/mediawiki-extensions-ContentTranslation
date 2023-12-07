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
    const existingSuggestion = store.getters[
      "suggestions/getSectionSuggestionsForArticle"
    ](sourceLanguage, targetLanguage, sourceTitle);

    const existingSuggestionForPublished = store.getters[
      "suggestions/getSectionSuggestionsForPublishedArticle"
    ](sourceLanguage, targetLanguage, sourceTitle);

    let suggestion = existingSuggestion || existingSuggestionForPublished;

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
        });
      }
      store.commit("suggestions/addSectionSuggestionForPublished", suggestion);
    }

    return suggestion;
  };
};

export default useSectionSuggestionForPublishedFetch;
