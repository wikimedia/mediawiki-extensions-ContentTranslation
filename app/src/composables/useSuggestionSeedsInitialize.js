import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import SuggestionSeedCollection from "@/wiki/cx/models/suggestionSeedCollection";

const useSuggestionSeedsInitialize = () => {
  const store = useStore();

  return async () => {
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    const seeds = await cxSuggestionsApi.fetchSuggestionSeeds(
      sourceLanguage.value,
      targetLanguage.value
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
