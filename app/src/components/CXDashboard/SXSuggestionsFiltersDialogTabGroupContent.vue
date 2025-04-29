<script setup>
import CustomInfoChip from "@/components/CXDashboard/CustomInfoChip.vue";
import useSuggestionProvider from "@/composables/useSuggestionProvider.js";

const { getFilterProvider } = useSuggestionProvider();

const props = defineProps({
  groupLabel: {
    type: String,
    required: true,
  },
  filters: {
    type: Array,
    required: true,
  },
  filterTypeToIconMap: {
    type: Object,
    required: true,
  },
  tentativelySelectFilter: {
    type: Function,
    required: true,
  },
  isSelected: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="sx-suggestions-filters__group-label mb-3">
    {{ groupLabel }}
  </div>
  <div class="sx-suggestions-filters__group-filters mb-3">
    <custom-info-chip
      v-for="filter in filters"
      :key="filter.id"
      class="sx-suggestions-filters__filter my-1 mx-1 py-1"
      :class="{
        'sx-suggestions-filters__filter--active': isSelected(filter),
      }"
      :icon="filterTypeToIconMap[getFilterProvider(filter)]"
      :content="filter.label"
      @click="tentativelySelectFilter(filter)"
    >
    </custom-info-chip>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters {
  & &__filter {
    cursor: @cursor-base--hover;
    background-color: @background-color-base;
    border-color: @border-color-subtle;
    max-width: calc(100% - @spacing-150);

    .cdx-icon {
      color: @color-base;
    }

    .cdx-info-chip__text {
      color: @color-subtle;
    }

    &--active {
      &.cdx-info-chip {
        background-color: @background-color-progressive--active;
        border-color: @border-color-progressive--active;

        .cdx-info-chip__text {
          color: @color-inverted;
        }

        .cdx-icon {
          color: @color-inverted;
        }
      }
    }
  }
  &__group {
    &-label {
      font-weight: @font-weight-bold;
      color: @color-subtle;
    }
  }
}
</style>
