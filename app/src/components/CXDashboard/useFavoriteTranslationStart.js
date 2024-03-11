import { useStore } from "vuex";
import useSuggestionLoad from "@/composables/useSuggestionLoad";

// TODO: This composable can be removed and "useSectionTranslationStart" can be used instead
const useFavoriteTranslationStart = () => {
  const store = useStore();
  const loadSuggestion = useSuggestionLoad();

  /**
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  return async (favoriteSuggestion) => {
    const suggestion = await loadSuggestion(
      favoriteSuggestion.sourceLanguage,
      favoriteSuggestion.targetLanguage,
      favoriteSuggestion.title
    );

    return store.dispatch(
      "application/initializeSectionTranslation",
      suggestion
    );
  };
};

export default useFavoriteTranslationStart;
