import useSuggestionFiltersInstrument from "./useSuggestionFiltersInstrument";
import {
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

const mockLogEvent = jest.fn();
jest.mock("@/composables/useEventLogging", () => () => mockLogEvent);

const logger = useSuggestionFiltersInstrument();
describe("useSuggestionFiltersInstrument", () => {
  beforeEach(() => {
    mockLogEvent.mockClear();
  });

  it("logs 'suggestion_filters_close' event", () => {
    logger.logSuggestionFiltersClose();
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_close",
    });
  });

  it("logs confirm event for topic filter", () => {
    const filter = { type: TOPIC_SUGGESTION_PROVIDER, id: "Art" };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: "Art",
    });
  });

  it("logs confirm event for region filter", () => {
    const filter = { type: REGIONS_SUGGESTION_PROVIDER, id: "Asia" };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: "Asia",
    });
  });

  it("logs confirm event for seed filter", () => {
    const filter = { type: SEED_SUGGESTION_PROVIDER, id: "Football" };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: "Football",
    });
  });

  it("logs confirm event for specific collection", () => {
    const filter = {
      type: COLLECTIONS_SUGGESTION_PROVIDER,
      id: "Essential articles",
    };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: "Essential articles",
    });
  });

  it("logs confirm event for 'All collections'", () => {
    const filter = { type: "automatic", id: COLLECTIONS_SUGGESTION_PROVIDER };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: "all-collections",
    });
  });

  it("logs confirm event for previous edits", () => {
    const filter = { type: "automatic", id: EDITS_SUGGESTION_PROVIDER };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: undefined,
    });
  });

  it("logs confirm event for popular articles", () => {
    const filter = { type: "automatic", id: POPULAR_SUGGESTION_PROVIDER };
    logger.logSuggestionFiltersConfirm(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: undefined,
    });
  });

  it("logs view more event", () => {
    logger.logSuggestionFiltersViewMore();
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "dashboard_suggestion_filters_view_more",
    });
  });

  it("logs quick select", () => {
    const filter = { type: TOPIC_SUGGESTION_PROVIDER, id: "Music" };
    logger.logSuggestionFiltersQuickSelect(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: "suggestion_filter_topic_area",
      event_context: "Music",
    });
  });

  it("logs filter select", () => {
    const filter = { type: REGIONS_SUGGESTION_PROVIDER, id: "Europe" };
    logger.logSuggestionFiltersSelect(filter);
    expect(mockLogEvent).toHaveBeenCalledWith({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: "suggestion_filter_region",
      event_context: "Europe",
    });
  });
});
