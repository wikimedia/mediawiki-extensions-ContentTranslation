import { useStore } from "vuex";
import useSuggestionSeedsInitialize from "@/composables/useSuggestionSeedsInitialize";

const useSuggestionsInitialize = () => {
  const store = useStore();
  const initializeSuggestionSeeds = useSuggestionSeedsInitialize();

  return async () => {
    await initializeSuggestionSeeds();

    return store.dispatch("suggestions/initializeSuggestions");
  };
};

export default useSuggestionsInitialize;
