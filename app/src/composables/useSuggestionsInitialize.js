import { useStore } from "vuex";

const useSuggestionsInitialize = () => {
  const store = useStore();

  return () => {
    return store.dispatch("suggestions/initializeSuggestions");
  };
};

export default useSuggestionsInitialize;
