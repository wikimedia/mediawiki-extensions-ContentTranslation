<template>
  <div v-show="active">
    <mw-card class="cx-translation-list--suggestions pa-0 mb-0">
      <template slot="header">
        <h3
          class="mw-ui-card__title pa-4 pt-5 mb-0"
          v-text="$i18n('cx-suggestionlist-title')"
        />
      </template>
      <sx-translation-list-language-selector
        :source-languages="availableSourceLanguages"
        :target-languages="availableTargetLanguages"
        @source-language-selected="updateSourceLanguage"
        @target-language-selected="updateTargetLanguage"
      />
    </mw-card>
    <mw-card v-if="!$incompleteVersion" class="pa-0 mb-0">
      <div class="cx-translation-list__division">
        <h5 v-i18n:cx-suggestion-list-new-pages-division class="ma-0 pa-4" />
      </div>
      <mw-spinner v-if="!pageSuggestionsLoaded" />
      <cx-translation-suggestion
        v-for="(suggestion, index) in pageSuggestionsForPairSubset"
        :key="`suggestion-${index}`"
        :suggestion="suggestion"
      />
    </mw-card>
    <mw-card class="cx-translation-list--sx-suggestions pa-0 mb-0">
      <div class="cx-translation-list__division">
        <h5 v-i18n:cx-suggestionlist-expand-sections-title class="ma-0 pa-4" />
      </div>
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentSectionSuggestionsSlice"
        :key="`suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @close="discardSuggestion(suggestion)"
        @click.native="startSectionTranslation(suggestion)"
      />
      <mw-spinner v-if="sectionSuggestionsLoading" />
    </mw-card>
    <div
      class="cx-suggestion-list__refresh-button-container d-flex justify-center"
    >
      <mw-button
        v-if="showRefreshButton"
        class="ma-0 pa-4"
        type="text"
        :label="$i18n('cx-suggestionlist-refresh')"
        :outlined="false"
        :icon="mwIconRefresh"
        @click="onSuggestionRefresh"
      />
    </div>
  </div>
</template>

<script>
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import { MwSpinner, MwCard, MwButton } from "@/lib/mediawiki.ui";
import { mwIconRefresh } from "@/lib/mediawiki.ui/components/icons";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector";
import { computed, watch, ref } from "@vue/composition-api";
import useSuggestionListLanguages from "./useSuggestionListLanguages";
import useSuggestions from "./useSuggestions";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector,
    CxTranslationSuggestion,
    MwCard,
    MwButton,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const store = context.root.$store;

    const sectionSuggestionsLoading = computed(
      () => store.state.suggestions.sectionSuggestionsLoadingCount > 0
    );
    const pageSuggestionsLoaded = ref(false);

    const showRefreshButton = computed(() =>
      context.root.$incompleteVersion
        ? !sectionSuggestionsLoading.value
        : !pageSuggestionsLoaded.value
    );

    const {
      sourceLanguage: selectedSourceLanguage,
      targetLanguage: selectedTargetLanguage
    } = useApplicationState();

    const {
      availableSourceLanguages,
      availableTargetLanguages
    } = useSuggestionListLanguages();

    const {
      currentSectionSuggestionsSlice,
      discardSuggestion,
      pageSuggestionsForPair,
      pageSuggestionsForPairSubset,
      showMoreSectionSuggestions,
      showMoreSuggestions
    } = useSuggestions(store);

    const onSuggestionRefresh = () => {
      context.root.$incompleteVersion
        ? showMoreSectionSuggestions()
        : showMoreSuggestions();
    };

    watch(pageSuggestionsForPair, () => {
      if (context.root.$incompleteVersion) {
        return;
      }

      pageSuggestionsLoaded.value = true;
    });

    const updatePageSuggestions = () => {
      if (context.root.$incompleteVersion) {
        return;
      }
      store.dispatch("suggestions/fetchPageSuggestions", {
        sourceLanguage: selectedSourceLanguage.value,
        targetLanguage: selectedTargetLanguage.value
      });
      pageSuggestionsLoaded.value = false;
    };

    watch(selectedSourceLanguage, updatePageSuggestions);
    watch(selectedTargetLanguage, updatePageSuggestions);

    const updateSourceLanguage = sourceLanguage => {
      store.dispatch("application/updateSourceLanguage", sourceLanguage);
    };

    const updateTargetLanguage = targetLanguage => {
      store.dispatch("application/updateTargetLanguage", targetLanguage);
    };

    const startSectionTranslation = suggestion => {
      store.dispatch("application/startSectionTranslation", suggestion);
    };

    return {
      availableSourceLanguages,
      availableTargetLanguages,
      currentSectionSuggestionsSlice,
      discardSuggestion,
      mwIconRefresh,
      onSuggestionRefresh,
      pageSuggestionsForPairSubset,
      pageSuggestionsLoaded,
      sectionSuggestionsLoading,
      showRefreshButton,
      startSectionTranslation,
      updateSourceLanguage,
      updateTargetLanguage
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-translation-list--suggestions {
  .mw-ui-card__title {
    height: auto;
  }
}
.cx-translation-list__division {
  background: @background-color-framed;
  // Fix this to be base20 (currently base30)
  h6 {
    color: @color-base--subtle;
  }
}
.cx-suggestion-list__refresh-button-container {
  background: @background-color-base;
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
