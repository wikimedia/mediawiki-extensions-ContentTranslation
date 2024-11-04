import { ref } from "vue";
import { useI18n } from "vue-banana-i18n";
import {
  TOPIC_SUGGESTION_PROVIDER,
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "./useURLHandler";
import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";

const topicGroups = mw.loader.require("ext.cx.articletopics");

/**
 * @param {{ groupId: string, label: string, topics: { topicId: string, label: string }[] }} topicGroup
 * @returns {{ id: string, label: string, filters: { id: string, label: string, type: string }[] }}
 */
const topicGroupToFilterGroup = (topicGroup) =>
  new SuggestionFilterGroup({
    id: topicGroup.groupId,
    label: topicGroup.label,
    filters: topicGroup.topics.map((topic) => ({
      id: topic.topicId,
      label: topic.label,
      type: TOPIC_SUGGESTION_PROVIDER,
    })),
  });

const useSuggestionsFilters = () => {
  const bananaI18n = useI18n();
  const { currentSuggestionFilters: currentFilter, setFilterURLParams } =
    useURLHandler();

  const editsFilter = {
    id: EDITS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-user-edit-label"),
  };
  const popularFilter = {
    id: POPULAR_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-most-popular-label"),
  };

  const automaticFiltersGroup = new SuggestionFilterGroup({
    id: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [editsFilter, popularFilter],
  });

  const allFilters = ref([
    automaticFiltersGroup,
    ...topicGroups.map(topicGroupToFilterGroup),
  ]);

  const getFiltersSummary = () => {
    const selectedFilter = findSelectedFilter();

    if (selectedFilter.type === TOPIC_SUGGESTION_PROVIDER) {
      return [selectedFilter, editsFilter];
    }

    return [editsFilter, popularFilter];
  };

  /**
   * @param {{type: string, id: string|null}} filter
   */
  const selectFilter = (filter) => {
    setFilterURLParams(filter.type, filter.id);
  };

  const findSelectedFilter = () =>
    allFilters.value.flatMap((group) => group.filters).find(isFilterSelected);

  const isFilterSelected = (filter) =>
    currentFilter.value.type === filter.type &&
    currentFilter.value.id === filter.id;

  const getOresTopics = (topicId) => {
    const allTopics = topicGroups.flatMap((group) => group.topics);
    const topic = allTopics.find((t) => t.topicId === topicId);

    return topic ? topic.orestopics : [];
  };

  return {
    allFilters,
    getFiltersSummary,
    selectFilter,
    isFilterSelected,
    getOresTopics,
  };
};

export default useSuggestionsFilters;
