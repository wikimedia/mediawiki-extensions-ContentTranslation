<script setup>
import SuggestionFilterChip from "./SuggestionFilterChip.vue";
import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";

const props = defineProps({
  filterGroup: {
    type: SuggestionFilterGroup,
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
  limit: {
    type: Number,
    default: 0,
  },
  getSubFilterConfig: {
    type: Function,
    default: null,
  },
});

const getLimitedFilters = () => {
  if (props.limit > 0) {
    return props.filterGroup.filters.slice(0, props.limit);
  }

  return props.filterGroup.filters;
};
</script>

<template>
  <div class="sx-suggestions-filters__group-label mb-3">
    {{ filterGroup.label }}
  </div>
  <div class="sx-suggestions-filters__group-filters mb-3">
    <suggestion-filter-chip
      v-for="filter in getLimitedFilters()"
      :key="filter.id"
      :filter="filter"
      :is-selected="isSelected"
      :sub-filter-limit="
        getSubFilterConfig ? getSubFilterConfig(filter).limit : 0
      "
      :view-more-config="
        getSubFilterConfig ? getSubFilterConfig(filter).viewMoreConfig : null
      "
      @filter-selected="tentativelySelectFilter($event)"
    >
    </suggestion-filter-chip>
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
