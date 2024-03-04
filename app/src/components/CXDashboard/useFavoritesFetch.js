import suggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";

const useFavoritesFetch = () => {
  const store = useStore();

  return async () => {
    if (!!store.state.suggestions.favorites.length) {
      return;
    }
    /** @type {FavoriteSuggestion[]} */
    const favorites = await suggestionsApi.fetchFavorites();

    if (!favorites || !favorites.length) {
      // No favorites for Anon users. And logged-in users can also have no favorites.
      return;
    }

    const favoritesGroupedByLanguage = {};

    for (const favorite of favorites) {
      store.commit("suggestions/addFavoriteSuggestion", favorite);

      /** @type {SectionSuggestion|null} */
      suggestionsApi
        .fetchSectionSuggestions(
          favorite.sourceLanguage,
          favorite.title,
          favorite.targetLanguage
        )
        .then(
          (suggestion) =>
            (favorite.missingSectionsCount =
              suggestion?.missingSectionsCount || 0)
        );

      favoritesGroupedByLanguage[favorite.sourceLanguage] = [
        ...(favoritesGroupedByLanguage[favorite.sourceLanguage] || []),
        favorite,
      ];
    }

    for (const [sourceLanguage, favorites] of Object.entries(
      favoritesGroupedByLanguage
    )) {
      store.dispatch("mediawiki/fetchPageMetadata", {
        language: sourceLanguage,
        titles: favorites.map((favorite) => favorite.title),
      });
    }
  };
};

export default useFavoritesFetch;
