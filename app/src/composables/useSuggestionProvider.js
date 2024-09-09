import { useStore } from "vuex";
import useSuggestionsFetchByEdits, {
  EDITS_SUGGESTION_PROVIDER,
} from "@/composables/useSuggestionsFetchByEdits";
import useSuggestionFetchByMostPopular, {
  POPULAR_SUGGESTION_PROVIDER,
} from "@/composables/useSuggestionFetchByMostPopular";
import useSuggestionFetchByTopics, {
  TOPIC_SUGGESTION_PROVIDER,
} from "@/composables/useSuggestionsFetchByTopics";
import useApplicationState from "@/composables/useApplicationState";

const useSuggestionProvider = () => {
  const store = useStore();
  const { currentSuggestionFilters } = useApplicationState(store);
  const {
    fetchPageSuggestionsBasedOnEdits,
    fetchSectionSuggestionsBasedOnEdits,
  } = useSuggestionsFetchByEdits();

  const { fetchPageSuggestionsPopular, fetchSectionSuggestionsPopular } =
    useSuggestionFetchByMostPopular();

  const { fetchPageSuggestionsByTopics, fetchSectionSuggestionsByTopics } =
    useSuggestionFetchByTopics();

  const pageSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchPageSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchPageSuggestionsPopular,
    [TOPIC_SUGGESTION_PROVIDER]: fetchPageSuggestionsByTopics,
  };

  const sectionSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchSectionSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchSectionSuggestionsPopular,
    [TOPIC_SUGGESTION_PROVIDER]: fetchSectionSuggestionsByTopics,
  };

  const getCurrentPageSuggestionProvider = () =>
    pageSuggestionProviders[currentSuggestionFilters.value.type];

  const getCurrentSectionSuggestionProvider = () =>
    sectionSuggestionProviders[currentSuggestionFilters.value.type];

  return {
    getCurrentPageSuggestionProvider,
    getCurrentSectionSuggestionProvider,
  };
};

export default useSuggestionProvider;
