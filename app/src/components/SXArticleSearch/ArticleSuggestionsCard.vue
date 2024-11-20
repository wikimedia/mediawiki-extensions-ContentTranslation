<script setup>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion.vue";
import { MwCard } from "../../lib/mediawiki.ui";

defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  suggestions: {
    type: Array,
    required: true,
  },
});

defineEmits(["suggestion-clicked"]);
</script>

<template>
  <mw-card class="sx-article-search__suggestions mb-0 pa-4">
    <template #header>
      <h5
        class="ma-0 pb-1 sx-article-search__suggestions-header"
        v-text="cardTitle"
      />
    </template>
    <sx-search-article-suggestion
      v-for="suggestion in suggestions"
      :key="suggestion.pageid"
      :suggestion="suggestion"
      @click="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-article-search__suggestions {
  &.mw-ui-card {
    box-shadow: none;
  }
  &-header {
    color: #72777d;
  }
}
</style>
