<script setup>
import { cdxIconEllipsis } from "@wikimedia/codex-icons";
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-banana-i18n";
import SxSuggestionsFilters from "./SXSuggestionsFiltersDialog.vue";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import { MwSpinner } from "@/lib/mediawiki.ui";
import CustomInfoChip from "./CustomInfoChip.vue";
import useSuggestionFiltersInstrument from "./useSuggestionFiltersInstrument";

const bananaI18n = useI18n();
const { logSuggestionFiltersQuickSelect, logSuggestionFiltersViewMore } =
  useSuggestionFiltersInstrument();

const {
  getFiltersSummary,
  selectFilter,
  isFilterSelected,
  waitingForPageCollectionsFetch,
  validateURLFilterWithCollections,
} = useSuggestionsFilters();

const dialogVisible = ref(false);

const openFiltersDialog = () => {
  logSuggestionFiltersViewMore();
  dialogVisible.value = true;
};

const logAndSelectFilter = (filter) => {
  logSuggestionFiltersQuickSelect(filter);
  selectFilter(filter);
};

const filtersSummary = ref(getFiltersSummary());

// Toggling between summary filters should not reset them even when
// one is a topic and one is automatic. It should only reset when
// coming back from the filters dialog.
watch(dialogVisible, (newValue) => {
  if (!newValue) {
    filtersSummary.value = getFiltersSummary();
  }
});

watch(waitingForPageCollectionsFetch, (newValue) => {
  if (!newValue) {
    validateURLFilterWithCollections();
    filtersSummary.value = getFiltersSummary();
  }
});
</script>

<template>
  <mw-spinner v-if="waitingForPageCollectionsFetch" />
  <div v-else class="cx-suggestion-list__filters flex px-4 pb-2">
    <custom-info-chip
      v-for="filter in filtersSummary"
      :key="filter.label"
      class="cx-suggestion-list__filter py-1 me-1"
      :class="{
        'cx-suggestion-list__filter--active': isFilterSelected(filter),
      }"
      :icon="filter.icon"
      :content="filter.label"
      @click="logAndSelectFilter(filter)"
    ></custom-info-chip>
    <custom-info-chip
      class="cx-suggestion-list__filter py-1 me-1"
      :icon="cdxIconEllipsis"
      :content="bananaI18n.i18n('cx-sx-suggestions-filter-more-label')"
      @click="openFiltersDialog"
    ></custom-info-chip>
    <sx-suggestions-filters v-model="dialogVisible" />
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-suggestion-list__filters {
  flex-wrap: wrap;
  row-gap: @spacing-25;

  .cx-suggestion-list__filter {
    cursor: @cursor-base--hover;
    background-color: @background-color-base;
    border-color: @border-color-subtle;
    max-width: calc(100% - @spacing-125);

    .cdx-icon {
      color: @color-base;
    }

    .cdx-info-chip__text {
      color: @color-subtle;
    }

    &--active {
      background-color: @background-color-progressive--active;
      border-color: @border-color-progressive--active;

      .cdx-icon {
        color: @color-inverted;
      }

      .cdx-info-chip__text {
        color: @color-inverted;
      }
    }
  }
}
</style>
