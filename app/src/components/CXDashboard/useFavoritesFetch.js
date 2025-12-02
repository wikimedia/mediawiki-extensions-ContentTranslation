import suggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import useFeaturedCollectionFlag from "@/composables/useFeaturedCollectionFlag";

const useFavoritesFetch = () => {
  const store = useStore();
  const fetchPageMetadata = usePageMetadataFetch();
  const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();

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
      /** @type {SectionSuggestion|null} */
      suggestionsApi
        .fetchSectionSuggestion(
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
      fetchPageMetadata(
        sourceLanguage,
        favorites.map((favorite) => favorite.title)
      );
    }

    await addFeaturedCollectionFlag(favorites, {
      titleGetter: (fav) => fav.title,
    });

    for (const favorite of favorites) {
      store.commit("suggestions/addFavoriteSuggestion", favorite);
    }
  };
};

export default useFavoritesFetch;
