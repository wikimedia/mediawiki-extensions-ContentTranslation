<script setup>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion.vue";
import { MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import useSearchArticles from "./useArticleSearch";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";

const props = defineProps({
  searchInput: {
    type: String,
    default: null,
  },
});

defineEmits(["suggestion-clicked"]);

const { sourceLanguage, sourceLanguageAutonym } = useApplicationState(
  useStore()
);
const searchInput = computed(() => props.searchInput);

const { searchResultsLoading, searchResultsSlice } = useSearchArticles(
  sourceLanguage,
  searchInput
);
</script>

<template>
  <mw-card class="sx-article-search__results mb-0 pa-4">
    <mw-spinner v-if="searchResultsLoading" />
    <p
      v-else-if="searchResultsSlice.length === 0"
      v-i18n:cx-sx-article-search-no-search-results-message="[
        searchInput,
        sourceLanguageAutonym,
      ]"
      class="sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
    />
    <sx-search-article-suggestion
      v-for="suggestion in searchResultsSlice"
      :key="suggestion.pageid"
      :suggestion="suggestion"
      @click="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<style>
.sx-article-search__empty-search-results-message {
  text-align: center;
}
</style>
