import pageApi from "@/wiki/mw/api/page";
import debounce from "lodash/debounce";
import { computed, ref, watch } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";

const useSearchArticles = searchInput => {
  /**
   * Max search results to be displayed to the user
   * @type {number}
   */
  const maxSearchResults = 4;
  const { sourceLanguage } = useApplicationState();

  const searchResults = ref([]);

  const searchResultsLoading = ref(false);

  const searchResultsSlice = computed(() =>
    searchResults.value.slice(0, maxSearchResults)
  );

  const debouncedSearchForArticles = debounce(async () => {
    searchResultsLoading.value = true;

    try {
      /** @type {Page[]} */
      searchResults.value = await pageApi.searchPagesByTitlePrefix(
        searchInput.value,
        sourceLanguage.value
      );
    } finally {
      searchResultsLoading.value = false;
    }
  }, 500);

  watch(searchInput, debouncedSearchForArticles);

  return {
    searchResultsLoading,
    searchResultsSlice
  };
};
export default useSearchArticles;
