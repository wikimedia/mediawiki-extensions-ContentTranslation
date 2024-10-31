<script setup>
import { CdxInfoChip } from "@wikimedia/codex";
import {
  cdxIconUserAvatar,
  cdxIconHeart,
  cdxIconEllipsis,
} from "@wikimedia/codex-icons";
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-banana-i18n";
import SxSuggestionsFilters from "./SXSuggestionsFiltersDialog.vue";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";

const bananaI18n = useI18n();

const { getFiltersSummary, selectFilter, isFilterSelected } =
  useSuggestionsFilters();

const dialogVisible = ref(false);
const openFiltersDialog = () => (dialogVisible.value = true);

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
    label: bananaI18n.i18n("cx-sx-suggestions-filter-more-label"),
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

    .cdx-icon {
      color: @color-base;
    }

    .cdx-info-chip__text {
      color: @color-subtle;
    }

    &--active {
      background-color: @background-color-progressive;

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
