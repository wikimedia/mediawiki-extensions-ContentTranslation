<script setup>
import {
  MwButtonGroup,
  MwDialog,
  MwInput,
  MwRow,
  MwCol,
} from "@/lib/mediawiki.ui";
import { mwIconSearch } from "@/lib/mediawiki.ui/components/icons";
import SearchResultsCard from "./SearchResultsCard.vue";
import MwLanguageSelector from "../MWLanguageSelector";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard.vue";
import { ref, onMounted, computed, watch, inject } from "vue";
import getSourceLanguageOptions from "./sourceLanguageOptions";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";
import useApplicationState from "@/composables/useApplicationState";
import usePageTranslationStart from "./usePageTranslationStart";
import useMediaWikiState from "../../composables/useMediaWikiState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useEventLogging } from "../../plugins/eventlogging";
import {
  useSuggestionListLanguagePairUpdate,
  useApplicationLanguagesInitialize,
} from "@/composables/useLanguageHelper";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconClose } from "@wikimedia/codex-icons";

const searchInput = ref("");
const searchInputUsed = ref(false);
const searchInputRef = ref(null);
const sourceLanguageSelectOn = ref(false);

/**
 * Previously used languages by user. These languages are set in local
 * storage by MediaWiki ULS extension. Since it is NOT guaranteed that
 * these items are set in local storage, these languages are allowed
 * to be empty
 *
 * @type {Ref<string[]>}
 */
const previousLanguages = ref([]);

const store = useStore();
const { sourceLanguage, targetLanguage } = useApplicationState(store);
const { supportedLanguageCodes } = useMediaWikiState();

/**
 * Array of suggested language codes based on a list of criteria.
 * Based on mw.uls.getFrequentLanguageList
 * NOTE: Suggested language codes based on user territory is not supported
 *
 * @type {ComputedRef<string[]>}
 */
const suggestedSourceLanguages = useSuggestedSourceLanguages(
  sourceLanguage,
  targetLanguage,
  previousLanguages
);
/**
 * Quick list of languages to select from based on previous selections.
 * This is a computed property since the list should be updated when a new
 * language is selected.
 * @type {ComputedRef<string[]>}
 */
const sourceLanguageOptions = getSourceLanguageOptions(
  sourceLanguage,
  suggestedSourceLanguages
);
const router = useRouter();

const { fetchAllTranslations } = useTranslationsFetch();
onMounted(async () => {
  const initializeLanguages = useApplicationLanguagesInitialize();
  await initializeLanguages();

  fetchAllTranslations();

  try {
    previousLanguages.value.push(
      ...JSON.parse(localStorage.getItem("uls-previous-languages"))
    );
  } catch (e) {}
  searchInputRef.value?.focus();
});

const close = () => {
  router.push({ name: "dashboard" });
};

const updateLanguagePair = useSuggestionListLanguagePairUpdate();
const updateSourceLanguage = (newSourceLanguage) =>
  updateLanguagePair(newSourceLanguage, targetLanguage.value);

const updateSelection = (updatedLanguage) => {
  if (updatedLanguage === "other") {
    sourceLanguageSelectOn.value = true;

    return;
  }
  updateSourceLanguage(updatedLanguage);
};

watch(sourceLanguage, () => store.dispatch("mediawiki/fetchNearbyPages"), {
  immediate: true,
});

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
  previousLanguages.value.push(updatedSourceLanguage);
  updateSelection(updatedSourceLanguage);
};

const recentlyEditedPages = computed(
  () => store.getters["mediawiki/getRecentlyEditedPages"]
);

const nearbyPages = computed(() => store.getters["mediawiki/getNearbyPages"]);

const breakpoints = inject("breakpoints");
const fullscreen = computed(() => breakpoints.value.tabletAndDown);

const {
  startRecentlyEditedSectionTranslation,
  startNearbySectionTranslation,
  startSearchResultSectionTranslation,
} = usePageTranslationStart();
</script>

<template>
  <section class="sx-article-search">
    <mw-row
      class="sx-article-search__header ma-0 py-3"
      align="stretch"
      justify="start"
    >
      <mw-col grow class="px-4" align="center">
        <h5 v-i18n:cx-sx-article-search-header class="mb-0" />
      </mw-col>
      <mw-col shrink align="start" class="pe-4">
        <cdx-button class="pa-0 ms-4" weight="quiet" @click="close">
          <cdx-icon :icon="cdxIconClose" />
        </cdx-button>
      </mw-col>
    </mw-row>
    <!--      TODO: Use modelValue inside mw-input and use v-model="" directly-->
    <mw-input
      ref="searchInputRef"
      v-model:value="searchInput"
      :icon-size="20"
      :icon="mwIconSearch"
      :placeholder="$i18n('cx-sx-article-search-input-placeholder')"
      type="search"
    />
    <mw-button-group
      class="sx-article-search__language-button-group"
      :items="sourceLanguageOptions"
      :active="sourceLanguage"
      @select="updateSelection"
    />
    <template v-if="!searchInput">
      <article-suggestions-card
        v-if="recentlyEditedPages && recentlyEditedPages.length"
        :card-title="$i18n('cx-sx-article-search-recently-edited-title')"
        :suggestions="recentlyEditedPages"
        @suggestion-clicked="startRecentlyEditedSectionTranslation"
      />
      <article-suggestions-card
        v-else-if="nearbyPages && nearbyPages.length"
        :card-title="$i18n('cx-sx-article-search-nearby-title')"
        :suggestions="nearbyPages"
        @suggestion-clicked="startNearbySectionTranslation"
      />
      <p
        v-else
        v-i18n:cx-sx-article-search-no-suggestions-message
        class="sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
      />
    </template>
    <search-results-card
      v-show="!!searchInput"
      :search-input="searchInput"
      @suggestion-clicked="startSearchResultSectionTranslation"
    />
    <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
    <mw-dialog
      v-model:value="sourceLanguageSelectOn"
      class="sx-article-search-language-selector"
      animation="slide-up"
      :fullscreen="fullscreen"
      :header="fullscreen"
      :overlay-opacity="0"
      :title="$i18n('sx-article-search-language-selector-dialog-title')"
      @close="onSourceLanguageDialogClose"
    >
      <mw-language-selector
        class="sx-article-search-language-selector__widget col-12"
        :languages="supportedLanguageCodes"
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
  &__language-button-group {
    &.mw-ui-button-group {
      background-color: @background-color-interactive;
    }
    border-top: @border-style-base @border-width-base #eaecf0;
    border-bottom: @border-style-base @border-width-base #eaecf0;
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
  &__empty-suggestions-message {
    text-align: center;
    color: #72777d;
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
      top: 10vh;
      left: 25vw;
      min-width: ~"min(50vw, 600px)";
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
