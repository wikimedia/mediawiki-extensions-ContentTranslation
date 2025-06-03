<script setup>
import { ref, computed, inject } from "vue";
import { useI18n } from "vue-banana-i18n";
import { MwRow, MwCol, MwDialog } from "@/lib/mediawiki.ui";
import {
  CdxButton,
  CdxIcon,
  CdxTextInput,
  CdxMenu,
  CdxTabs,
  CdxTab,
} from "@wikimedia/codex";
import { cdxIconClose, cdxIconSearch } from "@wikimedia/codex-icons";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import {
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";
import { getSuggestionFilterEventSource } from "@/utils/getSuggestionFilterEventSource";
import { getSuggestionFilterEventContext } from "@/utils/getSuggestionFilterEventContext";
import useEventLogging from "@/composables/useEventLogging";
import CustomInfoChip from "@/components/CXDashboard/CustomInfoChip.vue";
import SxSuggestionsFiltersDialogTabGroupContent from "@/components/CXDashboard/SXSuggestionsFiltersDialogTabGroupContent.vue";
import useSuggestionsFilterSearch from "./useSuggestionsFilterSearch";
import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";
import SuggestionFilter from "@/wiki/cx/models/suggestionFilter";
const bananaI18n = useI18n();

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * @type {ComputedRef<{name: string, searchPlaceholder: string, label: string, filterGroups: SuggestionFilterGroup[]}[]>}
 */
const tabs = computed(() => [
  {
    name: "all",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-all"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder"
    ),
    filterGroups: allFilters.value.map(
      (filterGroup) =>
        new SuggestionFilterGroup({
          id: filterGroup.id,
          label: filterGroup.label,
          filters: getMainTabFilters(filterGroup.id),
        })
    ),
  },
  {
    name: "collections",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-collections"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-collections"
    ),
    filterGroups: [getFilterGroup("collections")].filter(Boolean),
  },
  {
    name: "geography",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-regions"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-regions"
    ),
    filterGroups: [getFilterGroup("geography")].filter(Boolean),
  },
  {
    name: "topics",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-topics"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-topics"
    ),
    filterGroups: allFilters.value.filter((filterGroup) =>
      isTopicsFilterGroup(filterGroup.id)
    ),
  },
]);
const switchCurrentTab = (tabName) => (searchScope.value = tabName);

const showPartialFiltersList = (group) => {
  const chipsNumberLimit = 6;
  const collections = getFilterGroup(COLLECTIONS_SUGGESTION_PROVIDER);
  const regions = getFilterGroup(REGIONS_SUGGESTION_PROVIDER);

  if (
    group === COLLECTIONS_SUGGESTION_PROVIDER &&
    collections.filters.length > chipsNumberLimit
  ) {
    return true;
  }

  return (
    group === REGIONS_SUGGESTION_PROVIDER &&
    regions.filters.length > chipsNumberLimit
  );
};

const { allFilters, isFilterSelected, selectFilter, findSelectedFilter } =
  useSuggestionsFilters();

/**
 * @param {string} target
 * @returns {SuggestionFilterGroup}
 */
const getFilterGroup = (target) => {
  if (target === REGIONS_SUGGESTION_PROVIDER) {
    const group = allFilters.value.find((group) => group.id === target);
    group.filters = group.filters.map(
      (filter) =>
        new SuggestionFilter({
          ...filter,
          type: REGIONS_SUGGESTION_PROVIDER,
        })
    );

    return group;
  }

  return allFilters.value.find((group) => group.id === target);
};

/**
 * @param {string} groupName
 * @returns {SuggestionFilter[]}
 */
const getMainTabFilters = (groupName) => {
  const group = getFilterGroup(groupName);

  if (showPartialFiltersList(groupName)) {
    return group.filters.slice(0, 4);
  }

  return group.filters;
};

/**
 * @param {string} group
 * @returns {boolean}
 */
const isTopicsFilterGroup = (group) =>
  group !== REGIONS_SUGGESTION_PROVIDER &&
  group !== COLLECTIONS_SUGGESTION_PROVIDER &&
  group !== AUTOMATIC_SUGGESTION_PROVIDER_GROUP;
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

    if (tentativelySelectedFilter.value.type === REGIONS_SUGGESTION_PROVIDER) {
      selectFilter({
        type: TOPIC_SUGGESTION_PROVIDER,
        id: tentativelySelectedFilter.value.id,
        label: tentativelySelectedFilter.value.label,
      });
    } else {
      selectFilter(tentativelySelectedFilter.value);
    }
  }
  closeDialog();
};

const selectionHasChanged = ref(false);
/** @type {Ref<UnwrapRef<SuggestionFilter>>} */
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

/**
 * @param {SuggestionFilter} filter
 * @returns {boolean}
 */
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

const { searchInput, searchScope, searchResults } =
  useSuggestionsFilterSearch();
const selectedFilter = computed(
  () => tentativelySelectedFilter.value || findSelectedFilter()
);

const selection = ref(null);

/**
 * @param {{ label: string, filterType: string, filterId: string }} item
 */
const tentativelySelectSearchItem = (item) => {
  tentativelySelectFilter({
    type: item.filterType,
    id: item.filterId,
    label: item.label,
  });
  searchInput.value = "";
};

const viewAllLabels = {
  [COLLECTIONS_SUGGESTION_PROVIDER]:
    "cx-sx-suggestions-filters-view-all-collections-group",
  [REGIONS_SUGGESTION_PROVIDER]:
    "cx-sx-suggestions-filters-view-all-regions-group",
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
            :icon="selectedFilter.icon"
          ></custom-info-chip>
        </div>
      </div>
      <cdx-tabs
        v-model:active="searchScope"
        class="sx-suggestions-filters__tabs"
        @update:active="switchCurrentTab"
      >
        <cdx-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :name="tab.name"
          :label="tab.label"
        >
          <div class="px-4 pb-4 pt-7">
            <cdx-text-input
              v-model="searchInput"
              :placeholder="tab.searchPlaceholder"
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
              v-for="filterGroup in tab.filterGroups"
              :key="filterGroup.id"
              class="sx-suggestions-filters__group"
            >
              <sx-suggestions-filters-dialog-tab-group-content
                :filter-group="filterGroup"
                :tentatively-select-filter="tentativelySelectFilter"
                :is-selected="isSelected"
              ></sx-suggestions-filters-dialog-tab-group-content>
              <div
                v-if="
                  tab.name === 'all' && showPartialFiltersList(filterGroup.id)
                "
                class="sx-suggestions-filters__group-view-all mb-3"
                @click="switchCurrentTab(filterGroup.id)"
              >
                <span>
                  {{ $i18n(viewAllLabels[filterGroup.id]) }}
                </span>
              </div>
            </div>
          </div>
          <div v-else class="sx-suggestions-filters__search-results px-4 pt-3">
            <div v-if="searchResults.length">
              <cdx-menu
                v-for="resultGroup in searchResults"
                :key="resultGroup.key"
                v-model:selected="selection"
                :expanded="true"
                :menu-items="resultGroup.items"
                :show-thumbnail="resultGroup.showThumbnail || false"
                @menu-item-click="tentativelySelectSearchItem"
              ></cdx-menu>
            </div>
            <div v-else>
              <div class="sx-suggestions-filters__search-results-empty">
                <span
                  class="sx-suggestions-filters__search-results-empty-primary"
                  >{{
                    $i18n(
                      "cx-sx-suggestions-filter-search-results-empty-primary"
                    )
                  }}</span
                >
                <span
                  class="sx-suggestions-filters__search-results-empty-secondary"
                  >{{
                    $i18n(
                      "cx-sx-suggestions-filter-search-results-empty-secondary"
                    )
                  }}</span
                >
              </div>
            </div>
          </div>
        </cdx-tab>
      </cdx-tabs>
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

  &__tabs {
    z-index: @z-index-base;
    position: relative;
    &.cdx-tabs {
      .cdx-tabs__list {
        width: 100%;
        justify-content: space-evenly;
      }

      .cdx-tabs__list__item {
        font-weight: @font-weight-normal;
      }
    }
  }
  &__group {
    &-view-all {
      color: @color-progressive;
      cursor: pointer;
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
        &__text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &__description {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    &-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;

      &-primary {
        font-weight: @font-weight-bold;
      }

      &-secondary {
        font-size: @font-size-small;
        color: @color-subtle;
      }
    }
  }

  li {
    // See T391554 for context
    list-style-type: none;
  }
}
</style>
