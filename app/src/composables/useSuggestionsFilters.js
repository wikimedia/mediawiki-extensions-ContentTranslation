import { ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

import { EDITS_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByEdits";
import { POPULAR_SUGGESTION_PROVIDER } from "@/composables/useSuggestionFetchByMostPopular";
import { TOPIC_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByTopics";
import useApplicationState from "@/composables/useApplicationState";

const topicGroups = mw.loader.require("ext.cx.articletopics");

const topicsToFilters = (topicGroup) => {
  return {
    id: topicGroup.groupId,
    label: topicGroup.label,
    filters: topicGroup.topics.map((topic) => ({
      id: topic.topicId,
      label: topic.label,
      type: TOPIC_SUGGESTION_PROVIDER,
    })),
  };
};

const useSuggestionsFilters = () => {
  const store = useStore();
  const bananaI18n = useI18n();
  const { currentSuggestionFilters: currentFilter } =
    useApplicationState(store);

  const editsFilter = {
    id: EDITS_SUGGESTION_PROVIDER,
    type: EDITS_SUGGESTION_PROVIDER,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-user-edit-label"),
  };
  const popularFilter = {
    id: POPULAR_SUGGESTION_PROVIDER,
    type: POPULAR_SUGGESTION_PROVIDER,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-most-popular-label"),
  };

  const automaticFiltersGroup = {
    id: "automatic",
    label: bananaI18n.i18n("cx-sx-suggestions-filter-default-group-label"),
    filters: [editsFilter, popularFilter],
  };

  const allFilters = ref([
    automaticFiltersGroup,
    ...topicGroups.map(topicsToFilters),
  ]);

  const getFiltersSummary = () => {
    const selectedFilter = findSelectedFilter();

    if (selectedFilter.type === TOPIC_SUGGESTION_PROVIDER) {
      return [selectedFilter, editsFilter];
    }

    return [editsFilter, popularFilter];
  };

  const selectFilter = (filter) => {
    store.commit("application/setCurrentSuggestionFilters", filter);
  };

  const findSelectedFilter = () =>
    allFilters.value
      .flatMap((group) => group.filters)
      .find(isFilterSelected);

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
