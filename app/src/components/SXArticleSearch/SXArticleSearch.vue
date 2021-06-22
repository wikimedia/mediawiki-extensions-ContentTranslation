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
      <mw-card
        v-if="recentlyEditedPages.length"
        class="sx-article-search__recently-edited pa-0 mb-0 pa-4"
      >
        <template #header>
          <h5
            v-i18n:cx-sx-article-search-recently-edited-title
            class="ma-0 pb-1 sx-article-search__recently-edited-header"
          />
        </template>
        <sx-search-article-suggestion
          v-for="suggestion in recentlyEditedPages"
          :key="suggestion.pageId"
          :suggestion="suggestion"
          @click.native="startSectionTranslation(suggestion)"
        />
      </mw-card>
      <nearby-suggestions-card @suggestion-clicked="startSectionTranslation" />
    </template>
    <search-results-card
      v-show="!!searchInput"
      :search-input="searchInput"
      @suggestion-clicked="startSectionTranslation"
    />
    <mw-dialog
      v-if="sourceLanguageSelectOn"
      class="sx-article-search-language-selector"
      animation="slide-up"
      :fullscreen="true"
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
  MwCard,
  MwDialog,
  MwInput,
  MwRow,
  MwCol,
  MwButton
} from "@/lib/mediawiki.ui";
import { mwIconSearch, mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion";
import NearbySuggestionsCard from "./NearbySuggestionsCard";
import SearchResultsCard from "./SearchResultsCard";
import MwLanguageSelector from "../MWLanguageSelector";
import { ref, onMounted, computed } from "@vue/composition-api";
import getSourceLanguageOptions from "./sourceLanguageOptions";
import getSuggestedSourceLanguages from "./suggestedSourceLanguages";

export default {
  name: "SxArticleSearch",
  components: {
    SearchResultsCard,
    NearbySuggestionsCard,
    SxSearchArticleSuggestion,
    MwInput,
    MwDialog,
    MwLanguageSelector,
    MwButtonGroup,
    MwCard,
    MwRow,
    MwCol,
    MwButton
  },
  setup(props, context) {
    const searchInput = ref("");
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
    const applicationStore = store.state.application;
    const mediawikiStore = store.state.mediawiki;

    const sourceLanguage = computed(() => applicationStore.sourceLanguage);
    const targetLanguage = computed(() => applicationStore.targetLanguage);
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
      previousLanguages,
      sourceLanguage,
      targetLanguage
    );
    /**
     * Quick list of languages to select from based on previous selections.
     * This is a computed propery since the list should be updated when a new
     * language is selected.
     * @type {string[]}
     */
    const sourceLanguageOptions = getSourceLanguageOptions(
      sourceLanguage,
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

    const close = () => {
      context.root.$router.go(-1);
    };

    const updateSelection = updatedLanguage => {
      if (updatedLanguage === "other") {
        sourceLanguageSelectOn.value = true;

        return;
      }
      store.dispatch("application/updateSourceLanguage", updatedLanguage);
    };

    /**
     * @param {Page} searchSuggestion
     * @return {Promise<void>}
     */
    const startSectionTranslation = async searchSuggestion => {
      const suggestion = await store.dispatch(
        "suggestions/loadSectionSuggestion",
        {
          sourceLanguage: sourceLanguage.value,
          targetLanguage: targetLanguage.value,
          sourceTitle: searchSuggestion.title
        }
      );
      store.dispatch("application/startSectionTranslation", suggestion);
    };

    const onSourceLanguageDialogClose = () => {
      sourceLanguageSelectOn.value = false;
    };

    /**
     * Language selection handler
     * @param {string} sourceLanguage
     */
    const onSourceLanguageSelected = sourceLanguage => {
      sourceLanguageSelectOn.value = false;
      previousLanguages.value.push(sourceLanguage);
      updateSelection(sourceLanguage);
    };

    const recentlyEditedPages = computed(
      () => store.getters["mediawiki/getRecentlyEditedPages"]
    );

    return {
      availableSourceLanguages,
      close,
      mwIconClose,
      mwIconSearch,
      onSourceLanguageDialogClose,
      onSourceLanguageSelected,
      recentlyEditedPages,
      searchInput,
      searchInputRef,
      sourceLanguage,
      sourceLanguageOptions,
      sourceLanguageSelectOn,
      startSectionTranslation,
      suggestedSourceLanguages,
      updateSelection
    };
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
      color: @wmui-color-base30;
    }
  }
  &-language-selector.mw-ui-dialog.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__header {
      margin: 12px 16px;
      button {
        padding: 0;
      }
    }
  }
}
</style>
