import { useStore } from "vuex";

const useFavoriteTranslationStart = () => {
  const store = useStore();

  /**
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  return async (favoriteSuggestion) => {
    const suggestion = await store.dispatch(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: favoriteSuggestion.sourceLanguage,
        targetLanguage: favoriteSuggestion.targetLanguage,
        sourceTitle: favoriteSuggestion.title,
      }
    );

    return store.dispatch(
      "application/initializeSectionTranslation",
      suggestion
    );
  };
};

export default useFavoriteTranslationStart;
