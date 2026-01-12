import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "@/composables/useURLHandler";

const SUGGESTION_NO_SEED = "suggestion_no_seed";
const SUGGESTION_RECENT_EDIT = "suggestion_recent_edit";
const SUGGESTION_PREVIOUS_EDITS = "suggestion_previous_edits";
const SUGGESTION_TOPIC_AREA = "suggestion_topic_area";
const SUGGESTION_SEARCH_RESULT_SEED = "suggestion_search_result_seed";
const SUGGESTION_FEATURED = "suggestion_featured";
const SUGGESTION_POPULAR_ARTICLES = "suggestion_popular_articles";
const SUGGESTION_COLLECTIONS = "suggestion_collections";
const SUGGESTION_REGION = "suggestion_region";

const useDashboardSuggestionEventSource = () => {
  const { currentSuggestionFilters: currentFilter } = useURLHandler();

  return (suggestionSeed = null) => {
    const { type, id } = currentFilter.value;

    if (id === EDITS_SUGGESTION_PROVIDER) {
      return suggestionSeed
        ? SUGGESTION_PREVIOUS_EDITS
        : SUGGESTION_NO_SEED;
    } else if (type === TOPIC_SUGGESTION_PROVIDER) {
      return SUGGESTION_TOPIC_AREA;
    } else if (type === REGIONS_SUGGESTION_PROVIDER) {
      return SUGGESTION_REGION;
    } else if (type === SEED_SUGGESTION_PROVIDER) {
      return SUGGESTION_SEARCH_RESULT_SEED;
    } else if (id === POPULAR_SUGGESTION_PROVIDER) {
      return SUGGESTION_POPULAR_ARTICLES;
    } else if (
      id === COLLECTIONS_SUGGESTION_PROVIDER ||
      type === COLLECTIONS_SUGGESTION_PROVIDER
    ) {
      // here we handle both "All collections" and single collection filters
      return SUGGESTION_COLLECTIONS;
    }
    const error = new Error(
      `[CX] No matching event source found for filter with type ${type} and id ${id}`
    );
    mw.errorLogger.logError(error, "error.contenttranslation");

    throw error;
  };
};

export default useDashboardSuggestionEventSource;
