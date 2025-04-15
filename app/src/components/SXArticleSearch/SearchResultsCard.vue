<script setup>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion.vue";
import { MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import { computed, ref } from "vue";
import useSearchArticles from "@/composables/useArticleSearch";
import useURLHandler from "@/composables/useURLHandler";
import { getAutonym } from "@wikimedia/language-data";

const { sourceLanguageURLParameter: sourceLanguage } = useURLHandler();

const sourceLanguageAutonym = computed(() => getAutonym(sourceLanguage.value));

const props = defineProps({
  searchInput: {
    type: String,
    default: null,
  },
  selectedItem: {
    type: [Object, String],
    required: false,
    default: null,
  },
});

const hoveredItemId = ref(null);
const onMouseEnter = (pageId) => (hoveredItemId.value = pageId);
const onMouseLeave = () => (hoveredItemId.value = null);

const isSelected = (suggestion) => {
  return (
    (props.selectedItem?.title === suggestion.title && !hoveredItemId.value) ||
    hoveredItemId.value === suggestion.pageId
  );
};

defineEmits(["suggestion-clicked"]);

const searchInput = computed(() => props.searchInput);

const { searchResultsLoading, searchResultsSlice } = useSearchArticles(
  sourceLanguage,
  searchInput
);
</script>

<template>
  <mw-card class="sx-article-search__results mb-0 pa-0">
    <mw-spinner
      v-if="searchResultsLoading"
      class="sx-article-search__empty-state"
    />
    <p
      v-else-if="searchResultsSlice.length === 0"
      v-i18n:cx-sx-article-search-no-search-results-message="[
        searchInput,
        sourceLanguageAutonym,
      ]"
      class="sx-article-search__empty-state"
    />
    <sx-search-article-suggestion
      v-for="suggestion in searchResultsSlice"
      :key="suggestion.pageId"
      :suggestion="suggestion"
      :class="{
        'sx-article-search__results-selected': isSelected(suggestion),
      }"
      @mouseenter="onMouseEnter(suggestion.pageId)"
      @mouseleave="onMouseLeave"
      @click="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
.sx-article-search__results-selected {
  background-color: @background-color-neutral-subtle;
}
</style>
