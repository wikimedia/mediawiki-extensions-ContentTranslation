<template>
  <mw-card class="sx-article-search__results mb-0 pa-4">
    <mw-spinner v-if="loading" />
    <sx-search-article-suggestion
      v-for="suggestion in searchResultsSlice"
      v-else-if="searchResultsSlice.length"
      :key="suggestion.pageid"
      :suggestion="suggestion"
      @click.native="$emit('suggestion-clicked', suggestion)"
    />
    <p
      v-else
      v-i18n:cx-sx-article-search-no-search-results-message="[
        searchInput,
        getAutonym(sourceLanguage)
      ]"
      class="sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
    />
  </mw-card>
</template>

<script>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion";
import { MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import pageApi from "@/wiki/mw/api/page";
import debounce from "lodash/debounce";
import { mapState } from "vuex";
import { getAutonym } from "@wikimedia/language-data";

export default {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion, MwCard, MwSpinner },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  data: () => ({
    /** @type {Page[]} */
    searchResults: [],
    maxSearchResults: 4,
    loading: false
  }),
  computed: {
    ...mapState({
      sourceLanguage: state => state.application.sourceLanguage
    }),
    searchResultsSlice: vm => vm.searchResults.slice(0, vm.maxSearchResults)
  },
  watch: {
    searchInput() {
      this.debouncedSearchForArticles();
    }
  },
  created() {
    this.debouncedSearchForArticles = debounce(this.searchForArticles, 500);
  },
  methods: {
    getAutonym,
    async searchForArticles() {
      this.loading = true;

      try {
        /** @type {Page[]} */
        this.searchResults = await pageApi.searchPagesByTitlePrefix(
          this.searchInput,
          this.sourceLanguage
        );
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
.sx-article-search__empty-search-results-message {
  text-align: center;
}
</style>
