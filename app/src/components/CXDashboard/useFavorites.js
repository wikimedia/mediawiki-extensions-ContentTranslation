import store from "@/store";

/**
 * @param {FavoriteSuggestion} suggestion
 */
const unmarkFavoriteSectionSuggestion = async suggestion =>
  store.dispatch("suggestions/removeFavoriteSuggestion", suggestion);

export { unmarkFavoriteSectionSuggestion };
