<script setup>
import CxTranslationSuggestion from "./CXTranslationSuggestion.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import CxSuggestionListFilters from "./CXSuggestionListFilters.vue";
import useSuggestionListLanguages from "./useSuggestionListLanguages";
import useSuggestions from "./useSuggestions";
import { useStore } from "vuex";
import { ref } from "vue";
import { useEventLogging } from "@/plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import { useSuggestionListLanguagePairUpdate } from "@/composables/useLanguageHelper";
import useSectionTranslationStart from "@/composables/useSectionTranslationStart";
import usePageTranslationStart from "@/components/SXArticleSearch/usePageTranslationStart";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconReload } from "@wikimedia/codex-icons";
import useSuggestionsBookmark from "@/composables/useSuggestionsBookmark";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const store = useStore();
const { sourceLanguage, targetLanguage } = useApplicationState(store);

const { supportedLanguageCodes, availableTargetLanguages } =
  useSuggestionListLanguages();

const updateLanguagePair = useSuggestionListLanguagePairUpdate();
const updateSourceLanguage = (newSourceLanguage) =>
  updateLanguagePair(newSourceLanguage, targetLanguage.value);
const updateTargetLanguage = (newTargetLanguage) =>
  updateLanguagePair(sourceLanguage.value, newTargetLanguage);

const doStartSectionTranslation = useSectionTranslationStart();
/**
 * @param {SectionSuggestion} suggestion
 * @return {Promise<void>}
 */
const startSectionTranslation = (suggestion) =>
  doStartSectionTranslation(
    suggestion.sourceTitle,
    suggestion.sourceLanguage,
    suggestion.targetLanguage,
    "suggestion_no_seed"
  );

const { startPageSuggestion } = usePageTranslationStart();

const {
  currentPageSuggestionsSlice,
  currentSectionSuggestionsSlice,
  discardPageSuggestion,
  discardSectionSuggestion,
  onSuggestionRefresh,
  pageSuggestionsLoading,
  sectionSuggestionsLoading,
  showRefreshButton,
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
</script>

<template>
  <div v-show="active">
    <mw-card class="cx-translation-list--suggestions pa-0 mb-0">
      <template #header>
        <h3
          class="mw-ui-card__title pa-4 pt-5 mb-0"
          v-text="$i18n('cx-suggestionlist-title')"
        />
        <cx-suggestion-list-filters />
      </template>
      <sx-translation-list-language-selector
        :source-languages="supportedLanguageCodes"
        :target-languages="availableTargetLanguages"
        :selected-source-language="sourceLanguage"
        :selected-target-language="targetLanguage"
        @update:selected-source-language="updateSourceLanguage"
        @update:selected-target-language="updateTargetLanguage"
      />
    </mw-card>
    <mw-card
      ref="pageSuggestionsList"
      class="cx-translation-list--page-suggestions pa-0 mb-0"
    >
      <h5
        v-i18n:cx-suggestion-list-new-pages-division
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentPageSuggestionsSlice"
        :key="`page-suggestion-${index}`"
        :suggestion="suggestion"
        @close="discardPageSuggestion(suggestion)"
        @click="startPageSuggestion(suggestion)"
        @bookmark="markFavoritePageSuggestion(suggestion)"
      />
      <mw-spinner v-if="pageSuggestionsLoading" />
    </mw-card>
    <mw-card class="cx-translation-list--sx-suggestions pa-0 mb-0">
      <h5
        v-i18n:cx-suggestionlist-expand-sections-title
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentSectionSuggestionsSlice"
        :key="`section-suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @close="discardSectionSuggestion(suggestion)"
        @click="startSectionTranslation(suggestion)"
        @bookmark="markFavoriteSectionSuggestion(suggestion)"
      />
      <mw-spinner v-if="sectionSuggestionsLoading" />
    </mw-card>
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

.cx-translation-list__division-title {
  background: @background-color-interactive-subtle;
  color: @color-subtle;
}
.cx-suggestion-list__refresh-button-container {
  background: @background-color-base;
  border-top: @border-width-base @border-style-base #eaecf0;
}
</style>
