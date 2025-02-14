import pageApi from "@/wiki/mw/api/page";
import { computed, ref, watch } from "vue";
import debounce from "@/utils/debounce";

/**
 * @param {ComputedRef<string>} sourceLanguage
 * @param {ComputedRef<string>|Ref<string>} searchInput
 * @return {{searchResultsSlice: ComputedRef<Page[]>, searchResultsLoading: ComputedRef<boolean>}}
 */
const useSearchArticles = (sourceLanguage, searchInput) => {
  /**
   * Max search results to be displayed to the user
   * @type {number}
   */
  const maxSearchResults = 4;
  const searchResults = ref([]);

  const searchResultsLoading = ref(false);

  const searchResultsSlice = computed(() =>
    searchResults.value.slice(0, maxSearchResults)
  );

  const debouncedSearchForArticles = debounce(async () => {
    if (!searchInput.value) {
      searchResultsLoading.value = false;

      return;
    }

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

  const refreshSearch = () => {
    searchResultsLoading.value = true;
    searchResults.value = [];

    debouncedSearchForArticles();
  };

  watch(searchInput, refreshSearch);
  watch(sourceLanguage, refreshSearch);

  return {
    searchResultsLoading,
    searchResultsSlice,
  };
};
export default useSearchArticles;
