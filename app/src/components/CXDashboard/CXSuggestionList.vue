<script setup>
import CxTranslationSuggestion from "./CXTranslationSuggestion.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import CxSuggestionListFilters from "./CXSuggestionListFilters.vue";
import useSuggestions from "./useSuggestions";
import { computed, inject, ref } from "vue";
import useEventLogging from "@/composables/useEventLogging";
import { useSuggestionListLanguagePairUpdate } from "@/composables/useLanguageHelper";
import useTranslationStart from "@/composables/useTranslationStart";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconReload } from "@wikimedia/codex-icons";
import useSuggestionsBookmark from "@/composables/useSuggestionsBookmark";
import useDashboardSuggestionEventSource from "@/composables/useDashboardSuggestionEventSource";
import useURLHandler from "@/composables/useURLHandler";
import CxListEmptyPlaceholder from "@/components/CXDashboard/CXListEmptyPlaceholder.vue";
import { useStore } from "vuex";
import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  currentSuggestionFilters,
} = useURLHandler();

const { supportedSourceLanguageCodes, supportedTargetLanguageCodes } =
  useSupportedLanguageCodes();
const updateLanguagePair = useSuggestionListLanguagePairUpdate();
const updateSourceLanguage = (newSourceLanguage) =>
  updateLanguagePair(newSourceLanguage, targetLanguage.value);
const updateTargetLanguage = (newTargetLanguage) =>
  updateLanguagePair(sourceLanguage.value, newTargetLanguage);

const getEventSourceForDashboardSuggestion =
  useDashboardSuggestionEventSource();

const doStartTranslation = useTranslationStart();

/**
 * @param {SectionSuggestion|ArticleSuggestion} suggestion
 * @return {Promise<void>}
 */
const startTranslation = (suggestion) => {
  doStartTranslation(
    suggestion.sourceTitle,
    suggestion.sourceLanguage,
    suggestion.targetLanguage,
    getEventSourceForDashboardSuggestion(),
    currentSuggestionFilters.value.id
  );
};

const {
  currentPageSuggestionsSlice,
  currentSectionSuggestionsSlice,
  discardPageSuggestion,
  discardSectionSuggestion,
  onSuggestionRefresh,
  pageSuggestionsLoading,
  sectionSuggestionsLoading,
  isCurrentPageSuggestionsSliceFull,
  isCurrentSectionSuggestionsSliceFull,
} = useSuggestions();

const pageSuggestionsList = ref(null);
const logEvent = useEventLogging();

const refreshSuggestions = () => {
  logEvent({
    event_type: "dashboard_refresh_suggestions",
    translation_source_language: sourceLanguage.value,
    translation_target_language: targetLanguage.value,
  });
  onSuggestionRefresh();
  pageSuggestionsList.value.$el.scrollIntoView({ behavior: "smooth" });
};

const { markFavoriteSectionSuggestion, markFavoritePageSuggestion } =
  useSuggestionsBookmark();

const breakpoints = inject("breakpoints");
const isMobile = computed(() => breakpoints.value.mobile);
const headerWrapperClass = computed(() =>
  isMobile.value ? null : "pb-2 flex justify-between items-center"
);

const store = useStore();

const isPageSuggestionsFetchPending = computed(
  () => store.state.suggestions.isPageSuggestionsFetchPending
);
const isSectionSuggestionsFetchPending = computed(
  () => store.state.suggestions.isSectionSuggestionsFetchPending
);

const showPageSuggestionLoadingIndicator = computed(
  () =>
    isPageSuggestionsFetchPending.value ||
    (pageSuggestionsLoading.value && !isCurrentPageSuggestionsSliceFull.value)
);

const showSectionSuggestionLoadingIndicator = computed(
  () =>
    isSectionSuggestionsFetchPending.value ||
    (sectionSuggestionsLoading.value &&
      !isCurrentSectionSuggestionsSliceFull.value)
);

const showPageSuggestionsList = computed(
  () =>
    isPageSuggestionsFetchPending.value ||
    pageSuggestionsLoading.value ||
    currentPageSuggestionsSlice.value.length > 0
);
const showSectionSuggestionsList = computed(
  () =>
    isSectionSuggestionsFetchPending.value ||
    sectionSuggestionsLoading.value ||
    currentSectionSuggestionsSlice.value.length > 0
);

const showEmptyPlaceholder = computed(
  () => !showPageSuggestionsList.value && !showSectionSuggestionsList.value
);

const showRefreshButton = computed(
  () =>
    !sectionSuggestionsLoading.value &&
    !pageSuggestionsLoading.value &&
    !isPageSuggestionsFetchPending.value &&
    !isSectionSuggestionsFetchPending.value &&
    !showEmptyPlaceholder.value
);
</script>

<template>
  <div v-show="active" class="cx-suggestion-list">
    <mw-card class="cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0">
      <template #header>
        <div
          class="cx-suggestion-list__header-card__header px-4"
          :class="headerWrapperClass"
        >
          <h3
            v-i18n:cx-suggestionlist-title
            class="mw-ui-card__title mb-0"
            :class="{ 'py-3': isMobile }"
          />
          <sx-translation-list-language-selector
            v-if="!isMobile"
            :source-languages="supportedSourceLanguageCodes"
            :target-languages="supportedTargetLanguageCodes"
            :selected-source-language="sourceLanguage"
            :selected-target-language="targetLanguage"
            @update:selected-source-language="updateSourceLanguage"
            @update:selected-target-language="updateTargetLanguage"
          />
        </div>
        <cx-suggestion-list-filters />
      </template>
      <sx-translation-list-language-selector
        v-if="isMobile"
        :source-languages="supportedSourceLanguageCodes"
        :target-languages="supportedTargetLanguageCodes"
        :selected-source-language="sourceLanguage"
        :selected-target-language="targetLanguage"
        @update:selected-source-language="updateSourceLanguage"
        @update:selected-target-language="updateTargetLanguage"
      />
    </mw-card>
    <mw-card
      v-if="showPageSuggestionsList"
      ref="pageSuggestionsList"
      class="cx-suggestion-list__page-suggestions pa-0 mb-0"
    >
      <h5
        v-i18n:cx-suggestion-list-new-pages-division
        class="cx-suggestion-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentPageSuggestionsSlice"
        :key="`page-suggestion-${index}`"
        :suggestion="suggestion"
        @close="discardPageSuggestion(suggestion)"
        @click="startTranslation(suggestion)"
        @bookmark="markFavoritePageSuggestion(suggestion)"
      />
      <mw-spinner v-if="showPageSuggestionLoadingIndicator" />
    </mw-card>
    <mw-card
      v-if="showSectionSuggestionsList"
      class="cx-suggestion-list__section-suggestions pa-0 mb-0"
    >
      <h5
        v-i18n:cx-suggestionlist-expand-sections-title
        class="cx-suggestion-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentSectionSuggestionsSlice"
        :key="`section-suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @close="discardSectionSuggestion(suggestion)"
        @click="startTranslation(suggestion)"
        @bookmark="markFavoriteSectionSuggestion(suggestion)"
      />
      <mw-spinner v-if="showSectionSuggestionLoadingIndicator" />
    </mw-card>
    <cx-list-empty-placeholder
      v-if="showEmptyPlaceholder"
      :title="$i18n('cx-sx-suggestion-list-empty-title')"
      :description="$i18n('cx-sx-suggestion-list-empty-description')"
    />
    <div class="cx-suggestion-list__refresh-button-container justify-center">
      <cdx-button
        v-if="showRefreshButton"
        class="px-4"
        weight="quiet"
        action="progressive"
        size="large"
        @click="refreshSuggestions"
      >
        <cdx-icon class="me-1" :icon="cdxIconReload" />
        {{ $i18n("cx-suggestionlist-refresh") }}
      </cdx-button>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-suggestion-list {
  .mw-ui-card {
    border-radius: @border-radius-sharp;
  }
  .sx-translation-list-language-selector {
    &:not(.sx-translation-list-language-selector--mobile) {
      margin-top: @spacing-35; // used for better alignment with "Suggestions" title
    }
  }
  &__header-card {
    border-bottom: @border-style-base @border-width-base @border-color-subtle;
    &__header {
      flex-wrap: wrap;
    }
  }
  &__division-title {
    background: @background-color-interactive-subtle;
    color: @color-subtle;
  }
  .cx-list-empty-placeholder {
    background-color: @background-color-base;
  }
  &__refresh-button-container {
    background: @background-color-base;
    border-top: @border-width-base @border-style-base #eaecf0;
  }
}
</style>
