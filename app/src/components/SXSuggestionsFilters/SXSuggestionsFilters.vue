<script setup>
import { ref, defineEmits } from "vue";
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon, CdxInfoChip } from "@wikimedia/codex";
import {
  cdxIconClose,
  cdxIconUserAvatar,
  cdxIconHeart,
} from "@wikimedia/codex-icons";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";

const emit = defineEmits(["close"])

const filterTypeToIconMap = {
  "previous-edits": cdxIconUserAvatar,
  popular: cdxIconHeart,
  topic: null,
};

const { allFilters, isFilterSelected, selectFilter } = useSuggestionsFilters();

const close = () => {
  emit("close");
};

const done = () => {
  if (tentativelySelectedFilter.value) {
    selectFilter(tentativelySelectedFilter.value);
  }
  close();
};

const selectionHasChanged = ref(false);
const tentativelySelectedFilter = ref(null);

const tentativelySelectFilter = (filter) => {
  tentativelySelectedFilter.value = filter;
  selectionHasChanged.value = true;
};

const isSelected = (filter) => {
  if (tentativelySelectedFilter.value) {
    return (
      tentativelySelectedFilter.value.id === filter.id &&
      tentativelySelectedFilter.value.type === filter.type
    );
  }

  return isFilterSelected(filter);
};
</script>

<template>
  <section class="sx-suggestions-filters">
    <mw-row
      class="sx-suggestions-filters__header ma-0 py-3"
      align="stretch"
      justify="start"
    >
      <mw-col shrink align="start" class="pe-4">
        <cdx-button
          class="pa-0 ms-4"
          weight="quiet"
          :aria-label="$i18n('cx-sx-suggestions-filters-close-button-aria-label')"
          @click="close"
        >
          <cdx-icon :icon="cdxIconClose" />
        </cdx-button>
      </mw-col>
      <mw-col grow class="px-4" align="center">
        <h5 v-i18n:cx-sx-suggestions-filters-header class="mb-0" />
      </mw-col>
      <mw-col shrink align="start" class="pe-4">
        <cdx-button
          v-show="selectionHasChanged"
          class="ms-4"
          weight="primary"
          action="progressive"
          @click="done"
        >
          {{ $i18n("cx-sx-suggestions-filters-done-button-label") }}
        </cdx-button>
      </mw-col>
    </mw-row>
    <mw-col class="px-4">
      <div
        v-for="filterGroup in allFilters"
        :key="filterGroup.id"
        class="sx-suggestions-filters__group"
      >
        <div class="sx-suggestions-filters__group-label mb-3">
          {{ filterGroup.label }}
        </div>
        <div class="sx-suggestions-filters__group-filters mb-3">
          <cdx-info-chip
            v-for="filter in filterGroup.filters"
            :key="filter.id"
            class="sx-suggestions-filters__filter my-1 mx-1 py-1"
            :class="{
              'sx-suggestions-filters__filter--active': isSelected(filter),
            }"
            :icon="filterTypeToIconMap[filter.type]"
            @click="tentativelySelectFilter(filter)"
          >
            {{ filter.label }}
          </cdx-info-chip>
        </div>
      </div>
    </mw-col>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters {
  &__filter {
    cursor: pointer;

    &--active {
      &.cdx-info-chip {
        background-color: @background-color-progressive;

        .cdx-info-chip--text {
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
