import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

export const getSuggestionFilterEventSource = (filter) => {
  if (filter.type === TOPIC_SUGGESTION_PROVIDER) {
    return "suggestion_filter_topic_area";
  }

  if (
    filter.id === COLLECTIONS_SUGGESTION_PROVIDER ||
    filter.type === COLLECTIONS_SUGGESTION_PROVIDER
  ) {
    // Here we handle both "All collections" and single collection filters
    return "suggestion_filter_collections";
  }

  if (filter.id === EDITS_SUGGESTION_PROVIDER) {
    return "suggestion_filter_previous_edits";
  }

  if (filter.id === POPULAR_SUGGESTION_PROVIDER) {
    return "suggestion_filter_popular_articles";
  }
};
