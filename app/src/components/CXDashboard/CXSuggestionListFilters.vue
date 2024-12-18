<script setup>
import {
  cdxIconUserAvatar,
  cdxIconHeart,
  cdxIconEllipsis,
  cdxIconArticles,
} from "@wikimedia/codex-icons";
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-banana-i18n";
import SxSuggestionsFilters from "./SXSuggestionsFiltersDialog.vue";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import useSuggestionProvider from "@/composables/useSuggestionProvider";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { getSuggestionFilterEventSource } from "@/utils/getSuggestionFilterEventSource";
import { getSuggestionFilterEventContext } from "@/utils/getSuggestionFilterEventContext";
import { MwSpinner } from "@/lib/mediawiki.ui";
import useEventLogging from "@/composables/useEventLogging";
import CustomInfoChip from "@/components/CXDashboard/CustomInfoChip.vue";

const bananaI18n = useI18n();
const logEvent = useEventLogging();

const {
  getFiltersSummary,
  selectFilter,
  isFilterSelected,
  waitingForPageCollectionsFetch,
} = useSuggestionsFilters();

const dialogVisible = ref(false);

const openFiltersDialog = () => {
  logEvent({ event_type: "dashboard_suggestion_filters_view_more" });
  dialogVisible.value = true;
};

const logAndSelectFilter = (filter) => {
  const payload = {
    event_type: "dashboard_suggestion_filters_quick_select",
    event_source: getSuggestionFilterEventSource(filter),
    event_context: getSuggestionFilterEventContext(filter),
  };

  logEvent(payload);
  selectFilter(filter);
};

const filterTypeToIconMap = {
  [EDITS_SUGGESTION_PROVIDER]: cdxIconUserAvatar,
  [POPULAR_SUGGESTION_PROVIDER]: cdxIconHeart,
  [COLLECTIONS_SUGGESTION_PROVIDER]: cdxIconArticles,
  [TOPIC_SUGGESTION_PROVIDER]: null,
};

const { getFilterProvider } = useSuggestionProvider();
const filterToChip = (filter) => ({
  id: filter.id,
  type: filter.type,
  icon: filterTypeToIconMap[getFilterProvider(filter)],
  label: filter.label,
  action: logAndSelectFilter,
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

watch(waitingForPageCollectionsFetch, (newValue) => {
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
  <mw-spinner v-if="waitingForPageCollectionsFetch" />
  <div v-else class="cx-suggestion-list__filters flex px-4 pb-2">
    <custom-info-chip
      v-for="chip in chips"
      :key="chip.label"
      class="cx-suggestion-list__filter py-1 me-1"
      :class="{ 'cx-suggestion-list__filter--active': isFilterSelected(chip) }"
      :icon="chip.icon"
      :content="chip.label"
      @click="chip.action(chip)"
    >
    </custom-info-chip>
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
    max-width: calc(100% - @spacing-125);

    .cdx-icon {
      color: @color-base;
    }

    .cdx-info-chip__text {
      color: @color-subtle;
    }

    &--active {
      background-color: @background-color-progressive--active;
      border-color: @border-color-progressive--active;

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
