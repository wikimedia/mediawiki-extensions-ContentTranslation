<script setup>
import { ref, computed, inject } from "vue";
import { MwRow, MwCol, MwDialog } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon, CdxTextInput, CdxMenu } from "@wikimedia/codex";
import {
  cdxIconClose,
  cdxIconUserAvatar,
  cdxIconHeart,
  cdxIconArticles,
  cdxIconSearch,
} from "@wikimedia/codex-icons";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { getSuggestionFilterEventSource } from "@/utils/getSuggestionFilterEventSource";
import { getSuggestionFilterEventContext } from "@/utils/getSuggestionFilterEventContext";
import useSuggestionProvider from "@/composables/useSuggestionProvider";
import useEventLogging from "@/composables/useEventLogging";
import CustomInfoChip from "@/components/CXDashboard/CustomInfoChip.vue";
import useSuggestionsFilterSearch from "./useSuggestionsFilterSearch";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const filterTypeToIconMap = {
  [EDITS_SUGGESTION_PROVIDER]: cdxIconUserAvatar,
  [POPULAR_SUGGESTION_PROVIDER]: cdxIconHeart,
  [COLLECTIONS_SUGGESTION_PROVIDER]: cdxIconArticles,
  [TOPIC_SUGGESTION_PROVIDER]: null,
  [SEED_SUGGESTION_PROVIDER]: null,
};

const { allFilters, isFilterSelected, selectFilter, findSelectedFilter } =
  useSuggestionsFilters();
const logEvent = useEventLogging();

const closeDialog = () => {
  reset();
  emit("update:modelValue", false);
};

const logThenCloseDialog = () => {
  logEvent({ event_type: "suggestion_filters_close" });
  closeDialog();
};

const done = () => {
  if (tentativelySelectedFilter.value) {
    logEvent({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_context: getSuggestionFilterEventContext(
        tentativelySelectedFilter.value
      ),
    });
    selectFilter(tentativelySelectedFilter.value);
  }
  closeDialog();
};

const selectionHasChanged = ref(false);
const tentativelySelectedFilter = ref(null);

const reset = () => {
  tentativelySelectedFilter.value = null;
  selectionHasChanged.value = false;
};

/**
 * @param {{ type: string, id: string, label: string }} filter
 */
const tentativelySelectFilter = (filter) => {
  const eventPayload = {
    event_type: "suggestion_filters_select",
    event_subtype: "suggestion_filters_single_select",
    event_source: getSuggestionFilterEventSource(filter),
    event_context: getSuggestionFilterEventContext(filter),
  };

  logEvent(eventPayload);
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

const breakpoints = inject("breakpoints");
const fullscreen = computed(() => breakpoints.value.mobile);

const { getFilterProvider } = useSuggestionProvider();

const { searchInput, searchResults } = useSuggestionsFilterSearch();
const selectedFilter = computed(
  () => tentativelySelectedFilter.value || findSelectedFilter()
);

const selection = ref(null);

/**
 * @param {{ label: string }} selectedTopic
 */
const tentativelySelectSearchTopic = (selectedTopic) => {
  tentativelySelectFilter({
    type: SEED_SUGGESTION_PROVIDER,
    id: selectedTopic.label,
    label: selectedTopic.label,
  });
  searchInput.value = "";
};

/**
 * @param {{ filterType: string, filterId: string, label: string}} selectedArea
 */
const tentativelySelectSearchArea = (selectedArea) => {
  tentativelySelectFilter({
    type: selectedArea.filterType,
    id: selectedArea.filterId,
    label: selectedArea.label,
  });
  searchInput.value = "";
};
</script>

<template>
  <mw-dialog
    class="sx-suggestions-filters-dialog"
    :value="modelValue"
    :fullscreen="fullscreen"
    :header="false"
  >
    <section class="sx-suggestions-filters">
      <mw-row
        class="sx-suggestions-filters__header ma-0 py-3 px-4"
        align="stretch"
        justify="start"
      >
        <mw-col shrink align="start" class="pe-4">
          <cdx-button
            class="pa-0"
            weight="quiet"
            :aria-label="
              $i18n('cx-sx-suggestions-filters-close-button-aria-label')
            "
            @click="logThenCloseDialog"
          >
            <cdx-icon :icon="cdxIconClose" />
          </cdx-button>
        </mw-col>
        <mw-col grow align="center">
          <h5 v-i18n:cx-sx-suggestions-filters-header class="mb-0" />
        </mw-col>
        <mw-col shrink align="start">
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
      <div class="sx-suggestions-filters__active-filters px-4 py-3">
        <h5 v-i18n:cx-sx-suggestions-filter-active-group-label class="mb-3" />
        <div>
          <custom-info-chip
            class="sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1"
            :content="selectedFilter.label"
            :icon="filterTypeToIconMap[getFilterProvider(selectedFilter)]"
          ></custom-info-chip>
        </div>
      </div>
      <div class="px-4 pb-4 pt-7">
        <cdx-text-input
          v-model="searchInput"
          :placeholder="
            $i18n('cx-sx-suggestions-filter-search-input-placeholder')
          "
          input-type="search"
          :start-icon="cdxIconSearch"
          :clearable="!!searchInput"
        />
      </div>
      <div
        v-if="!searchInput"
        class="sx-suggestions-filters__filter-options pt-3 px-4"
      >
        <div
          v-for="filterGroup in allFilters"
          :key="filterGroup.id"
          class="sx-suggestions-filters__group"
        >
          <div class="sx-suggestions-filters__group-label mb-3">
            {{ filterGroup.label }}
          </div>
          <div class="sx-suggestions-filters__group-filters mb-3">
            <custom-info-chip
              v-for="filter in filterGroup.filters"
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
        </div>
      </div>
      <div v-else class="sx-suggestions-filters__search-results px-4 pt-3">
        <div v-if="searchResults.topics.length">
          <cdx-menu
            v-model:selected="selection"
            :expanded="true"
            :menu-items="searchResults.topics"
            show-thumbnail
            @menu-item-click="tentativelySelectSearchTopic"
          ></cdx-menu>
        </div>
        <div v-if="searchResults.topic_areas.length">
          <cdx-menu
            v-model:selected="selection"
            :expanded="true"
            :menu-items="searchResults.topic_areas"
            @menu-item-click="tentativelySelectSearchArea"
          ></cdx-menu>
        </div>
        <div v-if="searchResults.collections.length">
          <cdx-menu
            v-model:selected="selection"
            :expanded="true"
            :menu-items="searchResults.collections"
            @menu-item-click="tentativelySelectSearchArea"
          ></cdx-menu>
        </div>
      </div>
    </section>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters-dialog.mw-ui-dialog--dialog {
  .mw-ui-dialog__shell {
    min-width: 32rem;
    min-height: calc(100vh - 100px);
  }
}

.sx-suggestions-filters {
  &__header {
    position: sticky;
    top: 0;
    background-color: @background-color-base;
    border-bottom: @border-base;
    z-index: @z-index-above-content;
  }

  &__active-filters {
    h5 {
      color: @color-subtle;
    }
    border-bottom: @border-style-base @border-width-base @border-color-subtle;
  }

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
  &__search-results {
    .cdx-menu {
      position: relative;
      border: none;
      box-shadow: none;

      .cdx-menu-item {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>
