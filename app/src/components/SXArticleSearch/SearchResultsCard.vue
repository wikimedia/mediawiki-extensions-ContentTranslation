<template>
  <mw-card class="sx-article-search__results mb-0 pa-4">
    <mw-spinner v-if="searchResultsLoading" />
    <p
      v-else-if="searchResultsSlice.length === 0"
      v-i18n:cx-sx-article-search-no-search-results-message="[
        searchInput,
        sourceLanguageAutonym
      ]"
      class="sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
    />
    <sx-search-article-suggestion
      v-for="suggestion in searchResultsSlice"
      :key="suggestion.pageid"
      :suggestion="suggestion"
      @click.native="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<script>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion";
import { MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import { getAutonym } from "@wikimedia/language-data";
import { computed } from "@vue/composition-api";
import useSearchArticles from "./useArticleSearch";
import useApplicationState from "@/composables/useApplicationState";
export default {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion, MwCard, MwSpinner },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const { sourceLanguage } = useApplicationState();
    const searchInput = computed(() => props.searchInput);
    const sourceLanguageAutonym = getAutonym(sourceLanguage.value);

    const { searchResultsLoading, searchResultsSlice } = useSearchArticles(
      searchInput
    );

    return {
      searchResultsLoading,
      /** @type {Ref<Page[]>} */
      searchResultsSlice,
      sourceLanguageAutonym
    };
  }
};
</script>

<style>
.sx-article-search__empty-search-results-message {
  text-align: center;
}
</style>
