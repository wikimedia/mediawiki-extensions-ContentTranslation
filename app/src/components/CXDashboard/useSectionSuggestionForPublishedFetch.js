import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

/**
 * Holds all the source language, target language, source title combinations that
 * have been fetched until now.
 * @type {{sourceLanguage: string, targetLanguage: string, sourceTitle: string}[]}
 */
const archive = [];

const existsInArchive = (sourceLanguage, targetLanguage, sourceTitle) =>
  archive.some(
    (item) =>
      item.sourceLanguage === sourceLanguage &&
      item.targetLanguage === targetLanguage &&
      item.sourceTitle === sourceTitle
  );

const addToArchive = (sourceLanguage, targetLanguage, sourceTitle) => {
  const entry = { sourceLanguage, targetLanguage, sourceTitle };
  archive.push(entry);
};

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

    if (
      !suggestion &&
      !existsInArchive(sourceLanguage, targetLanguage, sourceTitle)
    ) {
      /** @type {SectionSuggestion|null} */
      suggestion = await cxSuggestionsApi.fetchSectionSuggestion(
        sourceLanguage,
        sourceTitle,
        targetLanguage
      );

      addToArchive(sourceLanguage, targetLanguage, sourceTitle);

      if (suggestion) {
        suggestion.isListable = false;
        store.commit("suggestions/addSectionSuggestion", suggestion);
      }
    }

    return suggestion;
  };
};

export default useSectionSuggestionForPublishedFetch;
