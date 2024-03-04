import suggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useSuggestionsFetch from "@/composables/useSuggestionsFetch";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";

const useSuggestionsBookmark = () => {
  const store = useStore();

  const { fetchNextSectionSuggestionsSlice, fetchNextPageSuggestionsSlice } =
    useSuggestionsFetch();

  /**
   * @param {SectionSuggestion|ArticleSuggestion} suggestion
   * @return {Promise<void>}
   */
  const doMarkSuggestionAsFavorite = async (suggestion) => {
    await suggestionsApi.markFavorite(suggestion);
    const { sourceTitle: title, sourceLanguage, targetLanguage } = suggestion;
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
    store.commit("suggestions/removeSectionSuggestion", sectionSuggestion);
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

  return {
    markFavoritePageSuggestion,
    markFavoriteSectionSuggestion,
    removeFavoriteSuggestion,
  };
};

export default useSuggestionsBookmark;
