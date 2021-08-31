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
        <mw-button
          class="pa-0"
          type="icon"
          :icon="mwIconClose"
          :icon-size="20"
          @click="close"
        />
      </mw-col>
    </mw-row>
    <mw-input
      ref="searchInputRef"
      v-model="searchInput"
      :icon-size="20"
      :outlined="false"
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
    <mw-dialog
      v-if="sourceLanguageSelectOn"
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
        :languages="availableSourceLanguages"
        :suggestions="suggestedSourceLanguages"
        :placeholder="$i18n('cx-sx-language-selector-placeholder')"
        @select="onSourceLanguageSelected"
        @close="onSourceLanguageDialogClose"
      />
    </mw-dialog>
  </section>
</template>

<script>
import {
  MwButtonGroup,
  MwDialog,
  MwInput,
  MwRow,
  MwCol,
  MwButton
} from "@/lib/mediawiki.ui";
import { mwIconSearch, mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import SearchResultsCard from "./SearchResultsCard";
import MwLanguageSelector from "../MWLanguageSelector";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard";
import { ref, onMounted, computed, watch } from "@vue/composition-api";
import getSourceLanguageOptions from "./sourceLanguageOptions";
import getSuggestedSourceLanguages from "./suggestedSourceLanguages";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard,
    SearchResultsCard,
    MwInput,
    MwDialog,
    MwLanguageSelector,
    MwButtonGroup,
    MwRow,
    MwCol,
    MwButton
  },
  setup(props, context) {
    const searchInput = ref("");
    const searchInputUsed = ref(false);
    const searchInputRef = ref(null);
    const sourceLanguageSelectOn = ref(false);

    /**
     * Previously used languages by user. These languages are set in local
     * storage by Mediawiki ULS extension. Since it is NOT guaranteed that
     * these items are set in local storage, these languages are allowed
     * to be empty
     *
     * @type {string[]}
     */
    const previousLanguages = ref([]);

    const store = context.root.$store;
    const mediawikiStore = store.state.mediawiki;

    const { sourceLanguage, targetLanguage } = useApplicationState();

    /** @type {string[]} */
    const supportedLanguageCodes = computed(
      () => mediawikiStore.supportedLanguageCodes || []
    );

    /** @type {string[]} */
    const availableSourceLanguages = computed(() =>
      supportedLanguageCodes.value.filter(
        languageCode => languageCode !== targetLanguage.value
      )
    );

    /**
     * Array of suggested language codes based on a list of criteria.
     * Based on mw.uls.getFrequentLanguageList
     * NOTE: Suggested language codes based on user territory is not supported
     *
     * @type {string[]}
     */
    const suggestedSourceLanguages = getSuggestedSourceLanguages(
      previousLanguages
    );
    /**
     * Quick list of languages to select from based on previous selections.
     * This is a computed propery since the list should be updated when a new
     * language is selected.
     * @type {string[]}
     */
    const sourceLanguageOptions = getSourceLanguageOptions(
      suggestedSourceLanguages
    );

    onMounted(() => {
      store.dispatch("application/initializeDashboardContext");

      try {
        previousLanguages.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (e) {}
      searchInputRef.value.focus();
    });

    const router = context.root.$router;

    const close = () => {
      router.push({ name: "dashboard" });
    };

    const updateSelection = updatedLanguage => {
      if (updatedLanguage === "other") {
        sourceLanguageSelectOn.value = true;

        return;
      }
      store.dispatch("application/updateSourceLanguage", updatedLanguage);
    };

    watch(sourceLanguage, () => store.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: true
    });

    // Log "dashboard_search" event only for the first time user types a search query.
    watch(searchInput, () => {
      if (!searchInputUsed.value) {
        searchInputUsed.value = true;
        context.root.$logEvent({ event_type: "dashboard_search" });
      }
    });

    /**
     * @param {Page} suggestedPage
     * @return {Promise<void>}
     */
    const startSectionTranslation = async suggestedPage => {
      const suggestion = await store.dispatch(
        "suggestions/loadSectionSuggestion",
        {
          sourceLanguage: sourceLanguage.value,
          targetLanguage: targetLanguage.value,
          sourceTitle: suggestedPage.title
        }
      );

      store.dispatch("application/initializeSectionTranslation", suggestion);
      router.push({ name: "sx-translation-confirmer" });
    };

    const startRecentlyEditedSectionTranslation = suggestedPage => {
      startSectionTranslation(suggestedPage);
      context.root.$logEvent({
        event_type: "dashboard_translation_start",
        event_source: "suggestion_recent_edit"
      });
    };

    const startNearbySectionTranslation = suggestedPage => {
      startSectionTranslation(suggestedPage);
      context.root.$logEvent({
        event_type: "dashboard_translation_start",
        event_source: "suggestion_nearby"
      });
    };

    const startSearchResultSectionTranslation = suggestedPage => {
      startSectionTranslation(suggestedPage);
      context.root.$logEvent({
        event_type: "dashboard_translation_start",
        event_source: "search_result"
      });
    };

    const onSourceLanguageDialogClose = () => {
      sourceLanguageSelectOn.value = false;
    };

    /**
     * Language selection handler
     * @param {string} updatedSourceLanguage
     */
    const onSourceLanguageSelected = updatedSourceLanguage => {
      sourceLanguageSelectOn.value = false;
      previousLanguages.value.push(updatedSourceLanguage);
      updateSelection(updatedSourceLanguage);
    };

    const recentlyEditedPages = computed(
      () => store.getters["mediawiki/getRecentlyEditedPages"]
    );

    const nearbyPages = computed(
      () => store.getters["mediawiki/getNearbyPages"]
    );

    return {
      availableSourceLanguages,
      close,
      mwIconClose,
      mwIconSearch,
      nearbyPages,
      onSourceLanguageDialogClose,
      onSourceLanguageSelected,
      recentlyEditedPages,
      searchInput,
      searchInputRef,
      sourceLanguage,
      sourceLanguageOptions,
      sourceLanguageSelectOn,
      startNearbySectionTranslation,
      startRecentlyEditedSectionTranslation,
      startSearchResultSectionTranslation,
      suggestedSourceLanguages,
      updateSelection
    };
  },
  computed: {
    fullscreen() {
      return this.$mwui.breakpoint.mdAndDown;
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-article-search {
  &__language-button-group {
    &.mw-ui-button-group {
      background-color: @wmui-color-base90;
    }
    border-top: @border-style-base @border-width-base @wmui-color-base80;
    border-bottom: @border-style-base @border-width-base @wmui-color-base80;
  }
  &__recently-edited,
  &__nearby {
    &.mw-ui-card {
      box-shadow: none;
    }
    &-header {
      color: @color-base--subtle;
    }
  }
  &__empty-suggestions-message {
    text-align: center;
    color: @color-base--subtle;
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
  }

  // Custom styling to avoid the dialog jumping across the screen as
  // search is performced. Dialog get resized depending on the number
  // of results. But that should not cause its position change.
  &.mw-ui-dialog.mw-ui-dialog--dialog {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 10vh;
      left: 25vw;
      min-width: 50vw;
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
