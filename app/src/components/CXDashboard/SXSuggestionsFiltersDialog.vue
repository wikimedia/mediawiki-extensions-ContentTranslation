<script setup>
import { ref, computed, inject, watch } from "vue";
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
    filterGroups: getFilterGroups([
      AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
      COLLECTIONS_SUGGESTION_PROVIDER,
      REGIONS_SUGGESTION_PROVIDER,
      TOPIC_SUGGESTION_PROVIDER,
    ]),
  },
  {
    name: "collections",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-collections"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-collections"
    ),
    filterGroups: getFilterGroups([COLLECTIONS_SUGGESTION_PROVIDER]),
  },
  {
    name: "geography",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-regions"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-regions"
    ),
    filterGroups: getFilterGroups([REGIONS_SUGGESTION_PROVIDER]),
  },
  {
    name: "topics",
    label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-topics"),
    searchPlaceholder: bananaI18n.i18n(
      "cx-sx-suggestions-filter-search-input-placeholder-topics"
    ),
    filterGroups: getFilterGroups([TOPIC_SUGGESTION_PROVIDER]),
  },
]);
const switchCurrentTab = (tabName) => (searchScope.value = tabName);

const getSubFilterConfig = (filter, tabName) => {
  // Only regions on 'all' tab with >7 subfilters get limited
  if (tabName === "all" && filter.type === REGIONS_SUGGESTION_PROVIDER) {
    return {
      limit: 7,
      viewMoreConfig: {
        label: bananaI18n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          filter.label
        ),
        onClick: () => switchCurrentTab("geography"),
      },
    };
  }

  return { limit: 0 }; // Show all
};

const showPartialFiltersList = (tab, group) => {
  // Shorter filters list only applies to the 'all' tab
  if (tab !== "all") {
    return false;
  }

  // More than 6 collections
  if (group === COLLECTIONS_SUGGESTION_PROVIDER) {
    const collectionGroups = getFilterGroups([COLLECTIONS_SUGGESTION_PROVIDER]);

    return collectionGroups.length && collectionGroups[0].filters.length > 6;
  }

  // In the other groups, only regions shows the 'view more' link
  return group === REGIONS_SUGGESTION_PROVIDER;
};

const { allFilters, isFilterSelected, selectFilter, findSelectedFilter } =
  useSuggestionsFilters();

/**
 * @param {string[]} filterGroupTypes
 * @returns {SuggestionFilterGroup[]}
 */
const getFilterGroups = (filterGroupTypes) => {
  return filterGroupTypes
    .flatMap((type) => allFilters.value.filter((group) => group.type === type))
    .filter(Boolean);
};

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

const { searchInput, searchScope, searchResults, searchResultsLoading } =
  useSuggestionsFilterSearch();
const selectedFilter = computed(
  () => tentativelySelectedFilter.value || findSelectedFilter()
);

const selection = ref(null);

watch(selection, () => {
  if (!selection.value) {
    return;
  }
  /** @type {SuggestionFilterSearchResult} */
  const selectedItem = combinedResults.value.find(
    (item) => item.value === selection.value
  );

  tentativelySelectFilter({
    type: selectedItem.filterType,
    id: selectedItem.filterId,
    label: selectedItem.label,
  });
  searchInput.value = "";
});

const viewAllLabels = {
  [COLLECTIONS_SUGGESTION_PROVIDER]:
    "cx-sx-suggestions-filters-view-all-collections-group",
  [REGIONS_SUGGESTION_PROVIDER]:
    "cx-sx-suggestions-filters-view-all-regions-group",
};

/**
 * @type {ComputedRef<SuggestionFilterSearchResult[]>}
 */
const combinedResults = computed(() =>
  searchResults.value.flatMap((group) => group.items)
);
const resultMenusInTabs = ref({});

const activeResultsMenu = computed(
  () => resultMenusInTabs.value[searchScope.value]
);

const activeResultDescendant = computed(() => {
  const highlightedItem = activeResultsMenu.value?.getHighlightedMenuItem();

  return highlightedItem?.id;
});

/**
 * Copied from Codex examples: https://doc.wikimedia.org/codex/latest/components/demos/menu.html
 *
 * Delegate most keydowns on the text input to the Menu component. This
 * allows the Menu component to enable keyboard navigation of the menu.
 *
 * @param {KeyboardEvent} e The keyboard event
 */
const onKeydown = (e) => {
  // The menu component enables the space key to open and close the
  // menu. However, for text inputs with menus, the space key should
  // always insert a new space character in the input.
  if (e.key === " ") {
    return;
  }

  // Delegate all other key events to the Menu component.
  if (activeResultsMenu.value) {
    activeResultsMenu.value.delegateKeyNavigation(e);
  }
};

const addTabResultMenu = (menuComponent, tabName) => {
  resultMenusInTabs.value[tabName] = menuComponent;
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
              role="combobox"
              :aria-activedescendant="activeResultDescendant"
              aria-controls="sx-suggestions-filters__search-results__menu"
              aria-autocomplete="none"
              :placeholder="tab.searchPlaceholder"
              input-type="search"
              :start-icon="cdxIconSearch"
              :clearable="!!searchInput"
              @keydown="onKeydown"
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
                :limit="
                  showPartialFiltersList(tab.name, filterGroup.type) ? 4 : 0
                "
                :get-sub-filter-config="
                  (filter) => getSubFilterConfig(filter, tab.name)
                "
              ></sx-suggestions-filters-dialog-tab-group-content>
              <div
                v-if="showPartialFiltersList(tab.name, filterGroup.type)"
                class="sx-suggestions-filters__group-view-all mb-3"
                tabindex="0"
                @keyup.enter="switchCurrentTab(filterGroup.id)"
                @click="switchCurrentTab(filterGroup.id)"
              >
                <span>
                  {{ $i18n(viewAllLabels[filterGroup.id]) }}
                </span>
              </div>
            </div>
          </div>
          <div v-else class="sx-suggestions-filters__search-results px-4 pt-3">
            <cdx-menu
              id="sx-suggestions-filters__search-results__menu"
              :ref="(el) => addTabResultMenu(el, tab.name)"
              v-model:selected="selection"
              :show-pending="searchResultsLoading"
              expanded
              :menu-items="combinedResults"
            >
              <template #pending>
                <div
                  v-i18n:cx-sx-suggestions-filter-search-results-loading
                  class="sx-suggestions-filters__search-results-pending"
                />
              </template>
              <template #no-results>
                <div
                  v-if="!searchResultsLoading"
                  class="sx-suggestions-filters__search-results-empty"
                >
                  <span
                    v-i18n:cx-sx-suggestions-filter-search-results-empty-primary
                    class="sx-suggestions-filters__search-results-empty-primary"
                  />
                  <span
                    v-i18n:cx-sx-suggestions-filter-search-results-empty-secondary
                    class="sx-suggestions-filters__search-results-empty-secondary"
                  />
                </div>
              </template>
            </cdx-menu>
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
    &-pending {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      font-weight: @font-weight-bold;
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
