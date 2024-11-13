import { ref, watch } from "vue";
import { cdxIconArticles } from "@wikimedia/codex-icons";
import usePageCollections from "./usePageCollections";
import useSearchArticles from "@/composables/useArticleSearch";
import useURLHandler from "@/composables/useURLHandler";
import {
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { useI18n } from "vue-banana-i18n";

const topicGroups = mw.loader.require("ext.cx.articletopics");

const allTopics = topicGroups.flatMap((group) => group.topics);

const useSuggestionsFilterSearch = () => {
  const searchInput = ref("");
  const searchLoading = ref(false);
  const searchResults = ref({ topics: [], areas: [] });
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

  watch(searchInput, async () => {
    searchLoading.value = true;

    searchResults.value.areas = [
      ...searchCollections(searchInput.value).map((collection) => ({
        label: collection.name,
        value: collection.name,
        description: collection.description,
        icon: cdxIconArticles,
        filterType: COLLECTIONS_SUGGESTION_PROVIDER,
        filterId: collection.name,
      })),
      ...searchTopics(searchInput.value).map((topic) => ({
        label: topic.label,
        value: topic.label,
        description: bananaI18n.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: cdxIconArticles,
        filterType: TOPIC_SUGGESTION_PROVIDER,
        filterId: topic.topicId,
      })),
    ];

    searchLoading.value = false;
  });

  return { searchInput, searchLoading, searchResults };
};

export default useSuggestionsFilterSearch;
