import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import SuggestionSeedCollection from "@/wiki/cx/models/suggestionSeedCollection";

const useSuggestionSeedsInitialize = () => {
  const store = useStore();

  return async () => {
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    let seeds = await cxSuggestionsApi.fetchSuggestionSeeds(
      sourceLanguage.value,
      targetLanguage.value
    );

    // filter out favorite/published translations
    const favoriteTitles = store.getters[
      "suggestions/getFavoriteTitlesByLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    /** @type {Translation[]} */
    const publishedTranslations = store.getters[
      "translator/getPublishedTranslationsForLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    const publishedTitles = publishedTranslations.map((t) => t.sourceTitle);

    seeds = seeds.filter(
      (seed) =>
        !favoriteTitles.includes(seed) && !publishedTitles.includes(seed)
    );

    const seedCollection = new SuggestionSeedCollection({
      sourceLanguage,
      targetLanguage,
      seeds,
    });
    store.commit("suggestions/addSuggestionSeedCollection", seedCollection);

    return seedCollection;
  };
};

export default useSuggestionSeedsInitialize;
