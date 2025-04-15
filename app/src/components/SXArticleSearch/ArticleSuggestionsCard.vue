<script setup>
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion.vue";
import { MwCard } from "../../lib/mediawiki.ui";
import { ref } from "vue";

const props = defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  suggestions: {
    type: Array,
    required: true,
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

const emit = defineEmits(["suggestion-clicked"]);
</script>

<template>
  <mw-card class="sx-article-search__suggestions pa-0">
    <template #header>
      <h5
        class="ma-0 px-4 pb-1 sx-article-search__suggestions-header"
        v-text="cardTitle"
      />
    </template>
    <sx-search-article-suggestion
      v-for="suggestion in suggestions"
      :key="suggestion.pageId"
      :suggestion="suggestion"
      :class="{
        'sx-article-search__suggestions-selected': isSelected(suggestion),
      }"
      @mouseenter="onMouseEnter(suggestion.pageId)"
      @mouseleave="onMouseLeave"
      @click="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-article-search__suggestions {
  margin-top: @spacing-100;
  margin-bottom: @spacing-50;

  // As described in T241590, the second suggestions card should only have a margin-top of 8px
  & ~ .sx-article-search__suggestions {
    margin-top: @spacing-50;
  }

  &.mw-ui-card {
    box-shadow: none;
  }
  &-header {
    color: #72777d;
  }
  &-selected {
    background-color: @background-color-neutral-subtle;
  }
}
</style>
