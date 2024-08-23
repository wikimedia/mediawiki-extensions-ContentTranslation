import { useStore } from "vuex";
import useSuggestionsFetchByEdits, {
  EDITS_SUGGESTION_PROVIDER,
} from "@/composables/useSuggestionsFetchByEdits";
import useSuggestionFetchByMostPopular, {
  POPULAR_SUGGESTION_PROVIDER,
} from "@/composables/useSuggestionFetchByMostPopular";

const useSuggestionProvider = () => {
  const store = useStore();

  const {
    fetchPageSuggestionsBasedOnEdits,
    fetchSectionSuggestionsBasedOnEdits,
  } = useSuggestionsFetchByEdits();

  const { fetchPageSuggestionsPopular, fetchSectionSuggestionsPopular } =
    useSuggestionFetchByMostPopular();

  const pageSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchPageSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchPageSuggestionsPopular,
  };

  const sectionSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchSectionSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchSectionSuggestionsPopular,
  };

  const getCurrentPageSuggestionProvider = () =>
    pageSuggestionProviders[store.state.application.currentSuggestionProvider];

  const getCurrentSectionSuggestionProvider = () =>
    sectionSuggestionProviders[
      store.state.application.currentSuggestionProvider
    ];

  return {
    getCurrentPageSuggestionProvider,
    getCurrentSectionSuggestionProvider,
  };
};

export default useSuggestionProvider;
