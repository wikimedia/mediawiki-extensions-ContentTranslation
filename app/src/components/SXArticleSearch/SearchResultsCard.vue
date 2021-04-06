<template>
  <mw-card class="sx-article-search__results pa-0 mb-0 pa-4">
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
import { MwCard } from "@/lib/mediawiki.ui";
import pageApi from "@/wiki/mw/api/page";
import debounce from "lodash/debounce";
import { mapState } from "vuex";

export default {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion, MwCard },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  data: () => ({
    /** @type {Page[]} */
    searchResults: [],
    maxSearchResults: 4
  }),
  computed: {
    ...mapState({
      sourceLanguage: state => state.application.sourceLanguage
    }),
    searchResultsSlice: vm => vm.searchResults.slice(0, vm.maxSearchResults)
  },
  watch: {
    async searchInput() {
      this.debouncedSearchForArticles();
    }
  },
  created() {
    this.debouncedSearchForArticles = debounce(this.searchForArticles, 500);
  },
  methods: {
    async searchForArticles() {
      /**
       * @type {Page[]}
       */
      this.searchResults = await pageApi.searchPagesByTitlePrefix(
        this.searchInput,
        this.sourceLanguage
      );
    }
  }
};
</script>
