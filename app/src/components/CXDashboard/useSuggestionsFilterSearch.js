import { ref, watch } from "vue";
import { cdxIconArticles, cdxIconSearch } from "@wikimedia/codex-icons";
import usePageCollections from "./usePageCollections";
import useSearchArticles from "@/composables/useArticleSearch";
import useURLHandler from "@/composables/useURLHandler";
import {
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { useI18n } from "vue-banana-i18n";

const topicGroups = mw.loader.require("ext.cx.articletopics");

const allTopics = topicGroups.flatMap((group) =>
  group.topics.map((topic) => ({
    ...topic,
    groupId: group.groupId,
  }))
);

/**
 * @param {Ref<string>} scope - The scope to filter the suggestions, according to filters dialog tab
 * @returns {{
 *   searchInput: Ref<string>,
 *   searchResults: Ref<{
 *     topics: { label: string, value: string, description: string, thumbnail: { url: string } }[],
 *     topic_areas: { label: string, value: string, description: string, icon: string | null, filterType: string, filterId: string }[],
 *     collections: { label: string, value: string, description: string, icon: string | null, filterType: string, filterId: string }[]
 *   }>
 * }}
 */
const useSuggestionsFilterSearch = (scope) => {
  const searchInput = ref("");
  const searchResults = ref({ topics: [], topic_areas: [], collections: [] });
  const bananaI18n = useI18n();

  const { pageCollections } = usePageCollections();
  const { sourceLanguageURLParameter: sourceLanguage } = useURLHandler();

  /**
   * @param {string} query
   * @returns {{ topicId: string, label: string }[]}
   */
  const searchTopics = (query) => {
    query = query.toLowerCase(); // Convert input to lowercase for case-insensitive search

    return allTopics.filter((topic) =>
      topic.label.toLowerCase().includes(query)
    );
  };

  /**
   * @param {string} query
   * @returns {PageCollection[]}
   */
  const searchCollections = (query) => {
    query = query.toLowerCase(); // Convert input to lowercase for case-insensitive search

    return pageCollections.value.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  };

  const { searchResultsSlice } = useSearchArticles(sourceLanguage, searchInput);

  watch(searchResultsSlice, () => {
    searchResults.value.topics = searchResultsSlice.value.map((result) => ({
      label: result.title,
      value: result.title,
      description: result.description,
      thumbnail: {
        url: result.thumbnail?.source,
      },
    }));
  });

  watch([searchInput, scope], async () => {
    searchResults.value.topic_areas = searchTopics(searchInput.value).map(
      (topic) => ({
        label: topic.label,
        value: topic.label,
        description: bananaI18n.i18n(
          scope.value === "all"
            ? "cx-sx-suggestions-filter-search-results-topics-default-description"
            : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: scope.value === "all" ? cdxIconSearch : null,
        filterType:
          topic.groupId === "geography"
            ? REGIONS_SUGGESTION_PROVIDER
            : TOPIC_SUGGESTION_PROVIDER,
        filterId: topic.topicId,
      })
    );

    searchResults.value.collections = searchCollections(searchInput.value).map(
      (collection) => ({
        label: collection.name,
        value: collection.name,
        description: bananaI18n.i18n(
          scope.value === "all"
            ? "cx-sx-suggestions-filter-search-results-collections-default-description"
            : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          collection.articlesCount
        ),
        icon: scope.value === "all" ? cdxIconArticles : null,
        filterType: COLLECTIONS_SUGGESTION_PROVIDER,
        filterId: collection.name,
      })
    );
  });

  return { searchInput, searchResults };
};

export default useSuggestionsFilterSearch;
