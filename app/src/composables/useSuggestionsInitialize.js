import { useStore } from "vuex";
import useSuggestionsFetch from "@/composables/useSuggestionsFetch";
import useSuggestionsStore from "@/composables/useSuggestionsStore";
import useURLHandler from "@/composables/useURLHandler";
import useAppendixSectionTitlesFetch from "@/composables/useAppendixSectionTitlesFetch";

/**
 * This action initialize the page and section suggestions
 * inside SX Dashboard. This action is dispatched whenever
 * the user visits the dashboard, regardless if it's the first
 * time for this session or not. If suggestions are properly
 * already initialized, then both page and section suggestion
 * slices should be full. In this case (if both suggestion
 * slices are full), this action returns without doing anything.
 * If at least one slice is not full, then the appendix section
 * titles for the current target language are fetched (they are
 * needed during suggestion fetching) and the next slices for
 * both section and page suggestions are fetched.
 *
 * @return {function: Promise<void>}
 */
const useSuggestionsInitialize = () => {
  const store = useStore();
  const { fetchNextSectionSuggestionsSlice, fetchNextPageSuggestionsSlice } =
    useSuggestionsFetch();

  const { getPageSuggestionsSliceByIndex, getSectionSuggestionsSliceByIndex } =
    useSuggestionsStore();

  const { targetLanguageURLParameter: targetLanguage } = useURLHandler();
  const fetchAppendixSectionTitles = useAppendixSectionTitlesFetch();

  return async () => {
    /** @type {SectionSuggestion[]} */
    const firstSectionSuggestionsSlice = getSectionSuggestionsSliceByIndex(0);

    /** @type {ArticleSuggestion[]} */
    const firstPageSuggestionsSlice = getPageSuggestionsSliceByIndex(0);

    const { maxSuggestionsPerSlice } = store.state.suggestions;
    const isFirstSectionSuggestionsSliceFull =
      firstSectionSuggestionsSlice.length === maxSuggestionsPerSlice;
    const isFirstPageSuggestionsSliceFull =
      firstPageSuggestionsSlice.length === maxSuggestionsPerSlice;

    // If both section suggestion and page suggestion slices inside dashboard
    // are currently full, return without doing anything
    if (isFirstSectionSuggestionsSliceFull && isFirstPageSuggestionsSliceFull) {
      return;
    }
    // Fetch now so that appendix section titles are available during suggestion fetching
    await fetchAppendixSectionTitles(targetLanguage.value);

    fetchNextSectionSuggestionsSlice();
    fetchNextPageSuggestionsSlice();
  };
};

export default useSuggestionsInitialize;
