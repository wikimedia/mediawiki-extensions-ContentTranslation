import useEventLogging from "@/composables/useEventLogging";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

const SUGGESTION_FILTER_TOPIC_AREA = "suggestion_filter_topic_area";
const SUGGESTION_FILTER_SEARCH_RESULT_SEED =
  "suggestion_filter_search_result_seed";
const SUGGESTION_FILTER_COLLECTIONS = "suggestion_filter_collections";
const SUGGESTION_FILTER_PREVIOUS_EDITS = "suggestion_filter_previous_edits";
const SUGGESTION_FILTER_POPULAR_ARTICLES = "suggestion_filter_popular_articles";
const SUGGESTION_FILTER_REGION = "suggestion_filter_region";

/**
 * @param {{ type: string, id: string }} filter
 * @returns {*|string}
 */
const getSuggestionFilterEventContext = (filter) => {
  if (
    filter.type === TOPIC_SUGGESTION_PROVIDER ||
    filter.type === REGIONS_SUGGESTION_PROVIDER ||
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

/**
 * @param {{ type: string, id: string }} filter
 * @returns {string}
 */
const getSuggestionFilterEventSource = (filter) => {
  if (filter.type === TOPIC_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_TOPIC_AREA;
  }

  if (filter.type === REGIONS_SUGGESTION_PROVIDER) {
    return SUGGESTION_FILTER_REGION;
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

export default () => {
  const logEvent = useEventLogging();

  const logSuggestionFiltersClose = () =>
    logEvent({ event_type: "suggestion_filters_close" });

  /**
   * @param {{ type: string, id: string }} filter
   */
  const logSuggestionFiltersConfirm = (filter) =>
    logEvent({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: getSuggestionFilterEventContext(filter),
    });

  /**
   * @param {{ type: string, id: string }} filter
   */
  const logSuggestionFiltersSelect = (filter) =>
    logEvent({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: getSuggestionFilterEventSource(filter),
      event_context: getSuggestionFilterEventContext(filter),
    });

  const logSuggestionFiltersQuickSelect = (filter) =>
    logEvent({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: getSuggestionFilterEventSource(filter),
      event_context: getSuggestionFilterEventContext(filter),
    });

  const logSuggestionFiltersViewMore = () =>
    logEvent({ event_type: "dashboard_suggestion_filters_view_more" });

  return {
    logSuggestionFiltersClose,
    logSuggestionFiltersConfirm,
    logSuggestionFiltersSelect,
    logSuggestionFiltersQuickSelect,
    logSuggestionFiltersViewMore,
  };
};
