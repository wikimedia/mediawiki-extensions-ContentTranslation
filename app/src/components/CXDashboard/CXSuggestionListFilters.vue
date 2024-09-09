<script setup>
import { CdxInfoChip } from "@wikimedia/codex";
import {
  cdxIconUserAvatar,
  cdxIconHeart,
  cdxIconEllipsis,
} from "@wikimedia/codex-icons";
import { MwDialog } from "@/lib/mediawiki.ui";
import { ref, inject, computed, watch  } from "vue";
import SxSuggestionsFilters from "@/components/SXSuggestionsFilters";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";

const { getFiltersSummary, selectFilter, isFilterSelected } =
  useSuggestionsFilters();

const breakpoints = inject("breakpoints");
const fullscreen = computed(() => breakpoints.value.mobile);

const dialogVisible = ref(false);
const openFiltersDialog = () => dialogVisible.value = true;
const closeFiltersDialog = () => dialogVisible.value = false;

const filterTypeToIconMap = {
  "previous-edits": cdxIconUserAvatar,
  popular: cdxIconHeart,
  topic: null,
};

const filterToChip = (filter) => ({
  id: filter.id,
  type: filter.type,
  icon: filterTypeToIconMap[filter.type],
  label: filter.label,
  action: selectFilter,
});

const filtersSummary = ref(getFiltersSummary());

// Toggling between summary filters should not reset them even when
// one is a topic and one is automatic. It should only reset when
// coming back from the filters dialog.
watch(dialogVisible, (newValue) => {
  if (!newValue) {
    filtersSummary.value = getFiltersSummary();
  }
});

const chips = computed(() => [
  ...filtersSummary.value.map(filterToChip),
  {
    id: "more",
    icon: cdxIconEllipsis,
    label: "More",
    action: openFiltersDialog,
  },
]);
</script>

<template>
  <div class="cx-suggestion-list__filters flex px-4 pb-2">
    <cdx-info-chip
      v-for="chip in chips"
      :key="chip.label"
      class="cx-suggestion-list__filter py-1 me-1"
      :class="{ 'cx-suggestion-list__filter--active': isFilterSelected(chip) }"
      :icon="chip.icon"
      @click="chip.action(chip)"
    >
      {{ chip.label }}
    </cdx-info-chip>
    <mw-dialog
      v-model:value="dialogVisible"
      animation="slide-up"
      :fullscreen="fullscreen"
      :header="false"
      :overlay-opacity="0">
      <sx-suggestions-filters @close="closeFiltersDialog" />
    </mw-dialog>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-suggestion-list__filters {
  flex-wrap: wrap;
  row-gap: @spacing-25;
  .cx-suggestion-list__filter {
    cursor: @cursor-base--hover;
    &--active {
      background-color: @background-color-progressive;
      .cdx-icon {
        color: @color-inverted;
      }
      .cdx-info-chip--text {
        color: @color-inverted;
      }
    }
  }
}
</style>
