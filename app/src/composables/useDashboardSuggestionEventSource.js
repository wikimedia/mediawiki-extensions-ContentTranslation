import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "@/composables/useURLHandler";
import useSuggestionSeeds from "@/composables/useSuggestionSeeds";

const useDashboardSuggestionEventSource = () => {
  const { currentSuggestionFilters: currentFilter } = useURLHandler();
  const { defaultSeedsFetched } = useSuggestionSeeds();

  return () => {
    const { type, id } = currentFilter.value;

    if (id === EDITS_SUGGESTION_PROVIDER) {
      return defaultSeedsFetched.value
        ? "suggestion_no_seed"
        : "suggestion_recent_edit";
    } else if (type === TOPIC_SUGGESTION_PROVIDER) {
      return "suggestion_topic_area";
    } else if (id === POPULAR_SUGGESTION_PROVIDER) {
      // we don't have a proper event source for most popular suggestions,
      // let's use 'suggestion_featured' for now
      // TODO: Add a new event source or rename 'suggestion_featured' for most popular suggestions
      return "suggestion_featured";
    } else if (id === COLLECTIONS_SUGGESTION_PROVIDER) {
      return "suggestion_collections";
    }

    throw new Error("Event source cannot be empty");
  };
};

export default useDashboardSuggestionEventSource;
