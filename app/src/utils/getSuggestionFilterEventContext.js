import {
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

export const getSuggestionFilterEventContext = (filter) => {
  if (
    filter.type === TOPIC_SUGGESTION_PROVIDER ||
    filter.type === COLLECTIONS_SUGGESTION_PROVIDER ||
    filter.type === SEED_SUGGESTION_PROVIDER
  ) {
    return filter.id;
  }

  // Handle "All collections" filter
  if (filter.id === COLLECTIONS_SUGGESTION_PROVIDER) {
    return "all-collections";
  }
};
