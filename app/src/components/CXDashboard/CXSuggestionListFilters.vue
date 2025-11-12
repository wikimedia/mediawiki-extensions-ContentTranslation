<script setup>
import { cdxIconEllipsis } from "@wikimedia/codex-icons";
import { ref, computed, watch, inject } from "vue";
import { useI18n } from "vue-banana-i18n";
import SxSuggestionsFilters from "./SXSuggestionsFiltersDialog.vue";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import { MwSpinner } from "@/lib/mediawiki.ui";
import CustomInfoChip from "./CustomInfoChip.vue";
import useSuggestionFiltersInstrument from "./useSuggestionFiltersInstrument";
import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import useURLHandler from "@/composables/useURLHandler";

const bananaI18n = useI18n();
const { logSuggestionFiltersQuickSelect, logSuggestionFiltersViewMore } =
  useSuggestionFiltersInstrument();
const { targetLanguageURLParameter: targetLanguage } = useURLHandler();

const {
  getFiltersSummary,
  selectFilter,
  isFilterSelected,
  waitingForPageCollectionsFetch,
  validateURLFilterWithCollections,
  setFeaturedCollectionFilterIfNeeded,
} = useSuggestionsFilters();

const { initializeFeaturedCollectionWatcher } = useFeaturedCollectionFilter();
initializeFeaturedCollectionWatcher();

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
const breakpoints = inject("breakpoints");

const responsiveFiltersSummary = computed(() => {
  if (breakpoints.value.desktopAndUp) {
    // filters summary can contain up to 4 filters, if featured collection exists and
    // the currently selected filter is not the edit or the popular filter.
    // Up to 3 should be displayed
    return filtersSummary.value.slice(0, 3);
  } else {
    const croppedFilters = filtersSummary.value.slice(0, 2);
    const currentFilterPresentInCropped = croppedFilters.some((filter) =>
      isFilterSelected(filter)
    );

    if (currentFilterPresentInCropped) {
      return croppedFilters;
    } else {
      // the first two filters can miss the currently selected filter, which should always be displayed.
      // Make sure that the current filter is always included
      const currentFilter = filtersSummary.value.find((filter) =>
        isFilterSelected(filter)
      );

      return [filtersSummary.value[0], currentFilter];
    }
  }
});

// Toggling between summary filters should not reset them even when
// one is a topic and one is automatic. It should only reset when
// coming back from the filters dialog.
watch(dialogVisible, (newValue) => {
  if (!newValue) {
    filtersSummary.value = getFiltersSummary();
  }
});

watch([waitingForPageCollectionsFetch, targetLanguage], ([newWaitingValue]) => {
  if (!newWaitingValue) {
    validateURLFilterWithCollections();
    setFeaturedCollectionFilterIfNeeded();
    filtersSummary.value = getFiltersSummary();
  }
});
</script>

<template>
  <mw-spinner v-if="waitingForPageCollectionsFetch" />
  <div v-else class="cx-suggestion-list__filters flex mx-4 pb-2">
    <custom-info-chip
      v-for="filter in responsiveFiltersSummary"
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
  flex-wrap: nowrap;
  row-gap: @spacing-25;
  overflow-x: auto;

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
