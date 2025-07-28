<script setup>
import CustomInfoChip from "./CustomInfoChip.vue";
import SuggestionFilter from "@/wiki/cx/models/suggestionFilter";
import { computed, ref, watchEffect } from "vue";

const props = defineProps({
  filter: {
    type: SuggestionFilter,
    required: true,
  },
  isSelected: {
    type: Function,
    required: true,
  },
  subFilterLimit: {
    type: Number,
    default: 0,
  },
  viewMoreConfig: {
    type: Object,
    default: null,
    validator: (val) => {
      if (val === null) return true;

      return typeof val.label === "string" && typeof val.onClick === "function";
    },
  },
});

const isFilterOrChildSelected = computed(
  () =>
    props.isSelected(props.filter) ||
    props.filter.subFilters.some((subFilter) => props.isSelected(subFilter))
);

const isExpanded = ref(false);

watchEffect(() => {
  if (props.filter.expandable) {
    isExpanded.value = isFilterOrChildSelected.value;
  }
});

const emit = defineEmits(["filter-selected"]);

const onClick = () => {
  if (props.filter.expandable && isFilterOrChildSelected.value) {
    isExpanded.value = !isExpanded.value;
  } else {
    emit("filter-selected", props.filter);
  }
};

const filterLabel = computed(() => {
  const selectedSubFilter = props.filter.subFilters.find((subFilter) =>
    props.isSelected(subFilter)
  );

  let label = props.filter.chipLabel;

  if (selectedSubFilter) {
    label += `/${getSubFilterLabel(selectedSubFilter)}`;
  }

  return label;
});

/**
 * @param {SuggestionFilter} subFilter
 */
const getSubFilterLabel = (subFilter) => {
  const { label } = subFilter;
  const groupName = props.filter.label;

  // Check if the item starts with the group name
  if (label.startsWith(`${groupName}/`)) {
    // Remove the group name and capitalize the first letter of the remaining string
    return label.replace(`${groupName}/`, "");
  }

  return label; // Return the item unchanged if it doesn't start with the group name
};

const visibleSubFilters = computed(() => {
  if (props.subFilterLimit > 0) {
    return props.filter.subFilters.slice(0, props.subFilterLimit);
  }

  return props.filter.subFilters;
});

const shouldShowViewMoreLink = computed(
  () =>
    props.viewMoreConfig &&
    props.subFilterLimit > 0 &&
    props.filter.subFilters.length > props.subFilterLimit &&
    isExpanded.value
);

const handleViewMore = () => {
  if (props.viewMoreConfig && props.viewMoreConfig.onClick) {
    props.viewMoreConfig.onClick();
  }
};
</script>

<template>
  <custom-info-chip
    class="sx-suggestions-filters__filter my-1 mx-1 py-1"
    :class="{
      'sx-suggestions-filters__filter--active': isFilterOrChildSelected,
    }"
    :icon="filter.expandable ? filter.expandableIcon : filter.icon"
    :content="filterLabel"
    :expandable="!!filter.expandable"
    :expanded="isExpanded"
    @click="onClick"
  ></custom-info-chip>
  <div
    v-if="isExpanded"
    class="sx-suggestions-filters__filter__expanded-filters"
  >
    <custom-info-chip
      class="sx-suggestions-filters__filter my-1 mx-1 py-1"
      :class="{
        'sx-suggestions-filters__filter--active': isSelected(filter),
      }"
      :icon="filter.expandable ? filter.expandableIcon : filter.icon"
      :content="
        $i18n('cx-sx-suggestions-filter-collection-group-all-option-label')
      "
      @click="$emit('filter-selected', filter)"
    ></custom-info-chip>
    <custom-info-chip
      v-for="subFilter in visibleSubFilters"
      :key="subFilter.id"
      class="sx-suggestions-filters__filter my-1 mx-1 py-1"
      :class="{
        'sx-suggestions-filters__filter--active': isSelected(subFilter),
      }"
      :content="getSubFilterLabel(subFilter)"
      :icon="subFilter.icon"
      @click="$emit('filter-selected', subFilter)"
    ></custom-info-chip>
    <div
      v-if="shouldShowViewMoreLink"
      class="sx-suggestions-filters__view-more-link"
      tabindex="0"
      @click="handleViewMore"
      @keyup.enter="handleViewMore"
    >
      {{ viewMoreConfig.label }}
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters__filter__expanded-filters {
  border-inline-start: @border-style-base @border-width-thick @border-color-base;
  padding-inline-start: @spacing-25;
  margin-bottom: @spacing-75;
}

.sx-suggestions-filters__view-more-link {
  color: @color-progressive;
  cursor: @cursor-base--hover;
  font-size: @font-size-small;
  margin: @spacing-25 @spacing-50;
  padding: @spacing-25 @spacing-0;
}
</style>
