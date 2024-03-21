import suggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useSuggestionsFetch from "@/composables/useSuggestionsFetch";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";

const useSuggestionsBookmark = () => {
  const store = useStore();
  const { fetchNextSectionSuggestionsSlice, fetchNextPageSuggestionsSlice } =
    useSuggestionsFetch();

  /**
   *
   * @param sourceLanguage
   * @param targetLanguage
   * @param sourceTitle
   * @return {ArticleSuggestion|null}
   */
  const getPageSuggestion = (sourceLanguage, targetLanguage, sourceTitle) =>
    store.state.suggestions.pageSuggestions.find(
      (suggestionItem) =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.sourceTitle === sourceTitle
    );

  /**
   * @param {SectionSuggestion|ArticleSuggestion} suggestion
   * @return {Promise<void>}
   */
  const doMarkSuggestionAsFavorite = async (suggestion) => {
    const { sourceTitle: title, sourceLanguage, targetLanguage } = suggestion;
    await suggestionsApi.markFavorite(title, sourceLanguage, targetLanguage);
    const favoriteSuggestion = new FavoriteSuggestion({
      title,
      sourceLanguage,
      targetLanguage,
    });
    store.commit("suggestions/addFavoriteSuggestion", favoriteSuggestion);
  };

  /**
   * @param {SectionSuggestion} sectionSuggestion
   */
  const markFavoriteSectionSuggestion = (sectionSuggestion) => {
    store.commit(
      "suggestions/removeSectionSuggestionFromList",
      sectionSuggestion
    );
    fetchNextSectionSuggestionsSlice();
    doMarkSuggestionAsFavorite(sectionSuggestion);
  };

  /**
   * @param {ArticleSuggestion} pageSuggestion
   */
  const markFavoritePageSuggestion = (pageSuggestion) => {
    store.commit("suggestions/removePageSuggestion", pageSuggestion);
    fetchNextPageSuggestionsSlice();
    doMarkSuggestionAsFavorite(pageSuggestion);
  };

  /**
   * @param {FavoriteSuggestion} suggestion
   * @return {Promise}
   */
  const removeFavoriteSuggestion = (suggestion) => {
    store.commit("suggestions/removeFavoriteSuggestion", suggestion);

    return suggestionsApi.unmarkFavorite(suggestion);
  };

  /**
   * This method can be used to replace both "markFavoritePageSuggestion"
   * and "markFavoriteSectionSuggestion" methods.
   *
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @return {Promise<void>}
   */
  const markFavoriteSuggestion = async (
    sourceTitle,
    sourceLanguage,
    targetLanguage
  ) => {
    const existingPageSuggestion = getPageSuggestion(
      sourceLanguage,
      targetLanguage,
      sourceTitle
    );

    if (existingPageSuggestion) {
      store.commit("suggestions/removePageSuggestion", existingPageSuggestion);
      fetchNextPageSuggestionsSlice();
    }

    const existingSectionSuggestion = store.getters[
      "suggestions/getSectionSuggestionsForArticle"
    ](sourceLanguage, targetLanguage, sourceTitle);

    if (existingSectionSuggestion?.isListable) {
      store.commit(
        "suggestions/removeSectionSuggestionFromList",
        existingSectionSuggestion
      );
      fetchNextSectionSuggestionsSlice();
    }

    await suggestionsApi.markFavorite(
      sourceTitle,
      sourceLanguage,
      targetLanguage
    );
    const favoriteSuggestion = new FavoriteSuggestion({
      title: sourceTitle,
      sourceLanguage,
      targetLanguage,
    });
    store.commit("suggestions/addFavoriteSuggestion", favoriteSuggestion);
  };

  return {
    markFavoritePageSuggestion,
    markFavoriteSectionSuggestion,
    markFavoriteSuggestion,
    removeFavoriteSuggestion,
  };
};

export default useSuggestionsBookmark;
