<script setup>
import CustomInfoChip from "./CustomInfoChip.vue";
import SuggestionFilter from "@/wiki/cx/models/suggestionFilter";
import { computed, ref } from "vue";

const props = defineProps({
  filter: {
    type: SuggestionFilter,
    required: true,
  },
  isSelected: {
    type: Function,
    required: true,
  },
});

const isInitiallyExpanded = () => {
  // If the filter or one of its subfilters is selected, it should be expanded by default
  if (!props.filter.expandable) {
    return false;
  }

  if (props.isSelected(props.filter)) {
    return true;
  }

  if (props.filter.subFilters) {
    return props.filter.subFilters.some((subFilter) =>
      props.isSelected(subFilter)
    );
  }

  return false;
};

const isExpanded = ref(isInitiallyExpanded());
const emit = defineEmits(["filter-selected"]);

const onClick = () => {
  if (props.filter.expandable) {
    isExpanded.value = !isExpanded.value;
  }
  emit("filter-selected", props.filter);
};

const filterLabel = computed(() => props.filter.chipLabel);

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
</script>

<template>
  <custom-info-chip
    class="sx-suggestions-filters__filter my-1 mx-1 py-1"
    :class="{
      'sx-suggestions-filters__filter--active': isSelected(filter),
    }"
    :icon="filter.expandable ? filter.expandableIcon : filter.icon"
    :content="filterLabel"
    :expandable="!!filter.expandable"
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
      v-for="subFilter in filter.subFilters"
      :key="subFilter.id"
      class="sx-suggestions-filters__filter my-1 mx-1 py-1"
      :class="{
        'sx-suggestions-filters__filter--active': isSelected(subFilter),
      }"
      :content="getSubFilterLabel(subFilter)"
      :icon="subFilter.icon"
      @click="$emit('filter-selected', subFilter)"
    ></custom-info-chip>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters__filter__expanded-filters {
  border-inline-start: @border-style-base @border-width-thick @border-color-base;
  padding-inline-start: @spacing-25;
  margin-bottom: @spacing-75;
}
</style>
