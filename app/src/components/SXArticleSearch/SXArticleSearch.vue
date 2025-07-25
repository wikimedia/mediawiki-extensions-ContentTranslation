<script setup>
import { MwButtonGroup, MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import SearchResultsCard from "./SearchResultsCard.vue";
import MwLanguageSelector from "../MWLanguageSelector";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard.vue";
import { ref, onMounted, computed, watch, inject } from "vue";
import getSourceLanguageOptions from "./sourceLanguageOptions";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";
import useURLHandler from "@/composables/useURLHandler";
import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useEventLogging from "@/composables/useEventLogging";
import { useSuggestionListLanguagePairUpdate } from "@/composables/useLanguageHelper";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import { CdxButton, CdxIcon, CdxSearchInput } from "@wikimedia/codex";
import { cdxIconClose } from "@wikimedia/codex-icons";
import useTranslationStart from "@/composables/useTranslationStart";
import useSuggestionPreviousEditsSeeds from "@/composables/useSuggestionPreviousEditsSeeds";
import useLanguageHistory from "./useLanguageHistory";
import pageApi from "@/wiki/mw/api/page";
import useKeyboardNavigation from "@/composables/useKeyboardNavigation";
import useSearchArticles from "@/composables/useArticleSearch";

const searchInput = ref("");
const searchInputUsed = ref(false);
const searchInputRef = ref(null);
const sourceLanguageSelectOn = ref(false);

const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

const store = useStore();
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
} = useURLHandler();
const { supportedSourceLanguageCodes } = useSupportedLanguageCodes();

const { searchResultsSlice } = useSearchArticles(sourceLanguage, searchInput);

const { getSuggestedSourceLanguages } = useSuggestedSourceLanguages();
/**
 * Array of suggested language codes based on a list of criteria.
 * Based on mw.uls.getFrequentLanguageList
 * NOTE: Suggested language codes based on user territory is not supported
 *
 * @type {ComputedRef<string[]>}
 */
const suggestedSourceLanguages = getSuggestedSourceLanguages(previousLanguages);
/**
 * Quick list of languages to select from based on previous selections.
 * This is a computed property since the list should be updated when a new
 * language is selected.
 * @type {ComputedRef<string[]>}
 */
const sourceLanguageOptions = getSourceLanguageOptions(
  suggestedSourceLanguages
);
const router = useRouter();

const { fetchAllTranslations } = useTranslationsFetch();
onMounted(async () => {
  fetchAllTranslations();
  addLanguageToHistory(sourceLanguage.value);
  searchInputRef.value?.focus();
});

const close = () => {
  router.push({ name: "dashboard" });
};

const updateLanguagePair = useSuggestionListLanguagePairUpdate();

const updateSourceLanguage = (newSourceLanguage) => {
  updateLanguagePair(newSourceLanguage, targetLanguage.value);
  addLanguageToHistory(newSourceLanguage);
};

const updateSelection = (updatedLanguage) => {
  if (updatedLanguage === "other") {
    sourceLanguageSelectOn.value = true;

    return;
  }

  updateSourceLanguage(updatedLanguage);
};

watch(
  sourceLanguage,
  () => {
    store.dispatch("mediawiki/fetchNearbyPages");
    searchInputRef.value?.focus();
  },
  { immediate: true }
);

const logEvent = useEventLogging();
// Log "dashboard_search" event only for the first time user types a search query.
watch(searchInput, () => {
  if (!searchInputUsed.value) {
    searchInputUsed.value = true;
    logEvent({
      event_type: "dashboard_search",
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });
  }
});

const onSourceLanguageDialogClose = () => {
  sourceLanguageSelectOn.value = false;
};

/**
 * Language selection handler
 * @param {string} updatedSourceLanguage
 */
const onSourceLanguageSelected = (updatedSourceLanguage) => {
  sourceLanguageSelectOn.value = false;
  updateSelection(updatedSourceLanguage);
};

const { fetchPreviousEditsInSource, previousEditsInSource } =
  useSuggestionPreviousEditsSeeds();

const previouslyEditedPages = ref([]);

/** Maximum number of suggestions based on user's recently edited translations */
const maxRecentlyEditedSuggestions = 3;
const fetchPagesFromPreviousEditsInSource = () =>
  fetchPreviousEditsInSource()
    .then(() => {
      if (previousEditsInSource.value.length > 0) {
        return pageApi.fetchPages(
          sourceLanguage.value,
          previousEditsInSource.value
        );
      }

      return [];
    })
    .then((pages) => {
      pages = pages.slice(0, maxRecentlyEditedSuggestions);
      // "previousEditsInSource" is sorted with the most recently edited titles first
      pages = pages.sort(
        (a, b) =>
          previousEditsInSource.value.indexOf(a.title) -
          previousEditsInSource.value.indexOf(b.title)
      );
      previouslyEditedPages.value = pages;
    });
fetchPagesFromPreviousEditsInSource();

const nearbyPages = computed(() => store.getters["mediawiki/getNearbyPages"]);

const breakpoints = inject("breakpoints");
const isMobile = computed(() => breakpoints.value.mobile);
const doStartTranslation = useTranslationStart();
const prevEditedPagesAvailable = computed(
  () => previouslyEditedPages.value && previouslyEditedPages.value.length
);
const nearbyPagesAvailable = computed(
  () => nearbyPages.value && nearbyPages.value.length
);

const { next, prev, keyboardNavigationContainer, selectedItem } =
  useKeyboardNavigation(searchInput, searchResultsSlice, previouslyEditedPages);

/**
 * @param {Page} page
 * @returns {Promise<void>}
 */
const startTranslation = (page) =>
  doStartTranslation(
    page.title,
    sourceLanguage.value,
    targetLanguage.value,
    eventSource.value
  );

const eventSource = computed(() => {
  if (!!searchInput.value) {
    return "search_result";
  } else if (prevEditedPagesAvailable.value) {
    return "suggestion_recent_edit";
  } else if (nearbyPagesAvailable.value) {
    return "suggestion_nearby";
  }

  return "";
});
</script>

<template>
  <section
    ref="keyboardNavigationContainer"
    class="sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto"
    @keydown.tab.stop.prevent="next"
    @keydown.down.stop.prevent="next"
    @keydown.up.stop.prevent="prev"
    @keydown.esc.stop.prevent="close"
    @keydown.enter.stop.prevent="startTranslation(selectedItem)"
  >
    <mw-row
      class="sx-article-search__header ma-0 py-3"
      align="stretch"
      justify="start"
    >
      <mw-col grow class="px-4" align="center">
        <h5 v-i18n:cx-sx-article-search-header class="mb-0" />
      </mw-col>
      <mw-col shrink align="start" class="pe-4">
        <cdx-button
          class="pa-0 ms-4"
          weight="quiet"
          :aria-label="$i18n('sx-article-search-close-button-aria-label')"
          @click="close"
        >
          <cdx-icon :icon="cdxIconClose" />
        </cdx-button>
      </mw-col>
    </mw-row>
    <cdx-search-input
      ref="searchInputRef"
      v-model="searchInput"
      class="sx-article-search__search-input"
      :placeholder="$i18n('cx-sx-article-search-input-placeholder')"
    />
    <mw-button-group
      class="sx-article-search__language-button-group"
      :items="sourceLanguageOptions"
      :active="sourceLanguage"
      @select="updateSelection"
    />
    <template v-if="!searchInput">
      <article-suggestions-card
        v-if="prevEditedPagesAvailable"
        :card-title="$i18n('cx-sx-article-search-recently-edited-title')"
        :suggestions="previouslyEditedPages"
        :selected-item="selectedItem"
        @suggestion-clicked="startTranslation($event)"
      />
      <article-suggestions-card
        v-else-if="nearbyPagesAvailable"
        :card-title="$i18n('cx-sx-article-search-nearby-title')"
        :suggestions="nearbyPages"
        @suggestion-clicked="startTranslation($event)"
      />
      <p
        v-else
        v-i18n:cx-sx-article-search-no-suggestions-message
        class="sx-article-search__empty-state"
      />
    </template>
    <search-results-card
      v-show="!!searchInput"
      :search-input="searchInput"
      :selected-item="selectedItem"
      @suggestion-clicked="startTranslation($event)"
    />
    <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
    <mw-dialog
      v-model:value="sourceLanguageSelectOn"
      class="sx-article-search-language-selector"
      :fullscreen="isMobile"
      :header="isMobile"
      :title="$i18n('sx-article-search-language-selector-dialog-title')"
      @close="onSourceLanguageDialogClose"
    >
      <mw-language-selector
        class="sx-article-search-language-selector__widget col-12"
        :languages="supportedSourceLanguageCodes"
        :suggestions="suggestedSourceLanguages"
        :placeholder="$i18n('cx-sx-language-selector-placeholder')"
        @select="onSourceLanguageSelected"
        @close="onSourceLanguageDialogClose"
      />
    </mw-dialog>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-article-search {
  background-color: @background-color-base;
  & &__search-input {
    .cdx-text-input__input {
      padding-block: @spacing-75;

      &:not(:enabled:focus) {
        border: none;
        border-top: @border-style-base @border-width-base
          @background-color-neutral;
      }
    }
  }

  &__language-button-group {
    &.mw-ui-button-group {
      background-color: @background-color-neutral-subtle;
    }
    border-top: @border-style-base @border-width-base @background-color-neutral;
    border-bottom: @border-style-base @border-width-base
      @background-color-neutral;
  }
  &__recently-edited,
  &__nearby {
    &.mw-ui-card {
      box-shadow: none;
    }
    &-header {
      color: #72777d;
    }
  }
  &__empty-state {
    text-align: center;
    color: @color-placeholder;
    margin-block: @spacing-0;
    padding: @spacing-100;
    box-sizing: content-box;
    min-height: @size-800;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.sx-article-search-language-selector {
  &.mw-ui-dialog.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__header {
      margin: 12px 16px;
      button {
        padding: 0;
      }
    }

    .mw-ui-language-selector__resultscontainer {
      height: calc(100vh - 8em);
    }
  }

  // Custom styling to avoid the dialog jumping across the screen as
  // search is performed. Dialog get resized depending on the number
  // of results. But that should not cause its position change.
  &.mw-ui-dialog.mw-ui-dialog--dialog {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: ~"min(50vw, 600px)";
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
