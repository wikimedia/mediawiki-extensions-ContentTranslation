import useSuggestionsFetchByEdits from "@/composables/useSuggestionsFetchByEdits";
import useSuggestionFetchByMostPopular from "@/composables/useSuggestionFetchByMostPopular";
import useSuggestionFetchByTopics from "@/composables/useSuggestionsFetchByTopics";
import useSuggestionFetchByCollections from "@/composables/useSuggestionFetchByCollections";
import useSuggestionFetchBySeed from "@/composables/useSuggestionFetchBySeed";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "@/composables/useURLHandler";

const useSuggestionProvider = () => {
  const { currentSuggestionFilters } = useURLHandler();
  const {
    fetchPageSuggestionsBasedOnEdits,
    fetchSectionSuggestionsBasedOnEdits,
  } = useSuggestionsFetchByEdits();

  const { fetchPageSuggestionsPopular, fetchSectionSuggestionsPopular } =
    useSuggestionFetchByMostPopular();

  const { fetchPageSuggestionsByTopics, fetchSectionSuggestionsByTopics } =
    useSuggestionFetchByTopics();

  const {
    fetchPageSuggestionsByCollections,
    fetchSectionSuggestionsByCollections,
  } = useSuggestionFetchByCollections();

  const { fetchPageSuggestionsBySeed, fetchSectionSuggestionsBySeed } =
    useSuggestionFetchBySeed();

  const pageSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchPageSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchPageSuggestionsPopular,
    [COLLECTIONS_SUGGESTION_PROVIDER]: fetchPageSuggestionsByCollections,
    [TOPIC_SUGGESTION_PROVIDER]: fetchPageSuggestionsByTopics,
    [SEED_SUGGESTION_PROVIDER]: fetchPageSuggestionsBySeed,
  };

  const sectionSuggestionProviders = {
    [EDITS_SUGGESTION_PROVIDER]: fetchSectionSuggestionsBasedOnEdits,
    [POPULAR_SUGGESTION_PROVIDER]: fetchSectionSuggestionsPopular,
    [COLLECTIONS_SUGGESTION_PROVIDER]: fetchSectionSuggestionsByCollections,
    [TOPIC_SUGGESTION_PROVIDER]: fetchSectionSuggestionsByTopics,
    [SEED_SUGGESTION_PROVIDER]: fetchSectionSuggestionsBySeed,
  };

  /**
   * @param {{ type: string, id: string }} filter
   * @returns {string}
   */
  const getFilterProvider = (filter) =>
    filter.type === AUTOMATIC_SUGGESTION_PROVIDER_GROUP
      ? filter.id
      : filter.type;

  const getCurrentPageSuggestionProvider = () =>
    pageSuggestionProviders[getFilterProvider(currentSuggestionFilters.value)];

  const getCurrentSectionSuggestionProvider = () =>
    sectionSuggestionProviders[
      getFilterProvider(currentSuggestionFilters.value)
    ];

  return {
    getFilterProvider,
    getCurrentPageSuggestionProvider,
    getCurrentSectionSuggestionProvider,
  };
};

export default useSuggestionProvider;
