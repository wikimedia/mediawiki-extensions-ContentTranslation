<script setup>
import { ref, computed, inject } from "vue";
import { MwRow, MwCol, MwDialog } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon, CdxInfoChip } from "@wikimedia/codex";
import {
  cdxIconClose,
  cdxIconUserAvatar,
  cdxIconHeart,
  cdxIconArticles,
} from "@wikimedia/codex-icons";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { getSuggestionFilterEventSource } from "@/utils/getSuggestionFilterEventSource";
import { getSuggestionFilterEventContext } from "@/utils/getSuggestionFilterEventContext";
import useSuggestionProvider from "@/composables/useSuggestionProvider";
import useEventLogging from "@/composables/useEventLogging";

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
};

const { allFilters, isFilterSelected, selectFilter } = useSuggestionsFilters();
const logEvent = useEventLogging();

const closeDialog = () => emit("update:modelValue", false);

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
</script>

<template>
  <mw-dialog
    :value="modelValue"
    animation="fade"
    :fullscreen="fullscreen"
    :header="false"
  >
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
      <mw-col class="px-4 py-4">
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
              :icon="filterTypeToIconMap[getFilterProvider(filter)]"
              @click="tentativelySelectFilter(filter)"
            >
              {{ filter.label }}
            </cdx-info-chip>
          </div>
        </div>
      </mw-col>
    </section>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-suggestions-filters {
  &__header {
    position: sticky;
    top: 0;
    background-color: @background-color-base;
    border-bottom: solid @border-width-base @border-color-subtle;
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
}
</style>
