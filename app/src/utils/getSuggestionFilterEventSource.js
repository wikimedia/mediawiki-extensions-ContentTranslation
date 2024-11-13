import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

const SUGGESTION_FILTER_TOPIC_AREA = "suggestion_filter_topic_area";
const SUGGESTION_FILTER_SEARCH_RESULT_SEED =
  "suggestion_filter_search_result_seed";
const SUGGESTION_FILTER_COLLECTIONS = "suggestion_filter_collections";
const SUGGESTION_FILTER_PREVIOUS_EDITS = "suggestion_filter_previous_edits";
const SUGGESTION_FILTER_POPULAR_ARTICLES = "suggestion_filter_popular_articles";

export const getSuggestionFilterEventSource = (filter) => {
  if (filter.type === TOPIC_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_TOPIC_AREA;
  }

  if (filter.type === SEED_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_SEARCH_RESULT_SEED;
  }

  if (
    filter.id === COLLECTIONS_SUGGESTION_PROVIDER ||
    filter.type === COLLECTIONS_SUGGESTION_PROVIDER
  ) {
    // Here we handle both "All collections" and single collection filters
    return SUGGESTION_FILTER_COLLECTIONS;
  }

  if (filter.id === EDITS_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_PREVIOUS_EDITS;
  }

  if (filter.id === POPULAR_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_POPULAR_ARTICLES;
  }
};
