import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "@/composables/useURLHandler";
import useSuggestionPreviousEditsSeeds from "@/composables/useSuggestionPreviousEditsSeeds";

const SUGGESTION_NO_SEED = "suggestion_no_seed";
const SUGGESTION_RECENT_EDIT = "suggestion_recent_edit";
const SUGGESTION_TOPIC_AREA = "suggestion_topic_area";
const SUGGESTION_SEARCH_RESULT_SEED = "suggestion_search_result_seed";
const SUGGESTION_FEATURED = "suggestion_featured";
const SUGGESTION_COLLECTIONS = "suggestion_collections";

const useDashboardSuggestionEventSource = () => {
  const { currentSuggestionFilters: currentFilter } = useURLHandler();
  const { defaultSeedsFetched } = useSuggestionPreviousEditsSeeds();

  return () => {
    const { type, id } = currentFilter.value;

    if (id === EDITS_SUGGESTION_PROVIDER) {
      return defaultSeedsFetched.value
        ? SUGGESTION_NO_SEED
        : SUGGESTION_RECENT_EDIT;
    } else if (type === TOPIC_SUGGESTION_PROVIDER) {
      return SUGGESTION_TOPIC_AREA;
    } else if (type === SEED_SUGGESTION_PROVIDER) {
      return SUGGESTION_SEARCH_RESULT_SEED;
    } else if (id === POPULAR_SUGGESTION_PROVIDER) {
      // we don't have a proper event source for most popular suggestions,
      // let's use 'suggestion_featured' for now
      // TODO: Add a new event source or rename 'suggestion_featured' for most popular suggestions
      return SUGGESTION_FEATURED;
    } else if (
      id === COLLECTIONS_SUGGESTION_PROVIDER ||
      type === COLLECTIONS_SUGGESTION_PROVIDER
    ) {
      // here we handle both "All collections" and single collection filters
      return SUGGESTION_COLLECTIONS;
    }

    throw new Error("Event source cannot be empty");
  };
};

export default useDashboardSuggestionEventSource;
