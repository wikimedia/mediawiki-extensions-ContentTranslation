<template>
  <div v-show="active">
    <mw-card
      class="cx-translation-list--suggestions"
      :title="$i18n('cx-suggestionlist-title')"
    >
      <mw-spinner v-if="!pageSuggestionsLoaded" />
      <div
        class="row pa-0 ma-0"
        :key="`suggestion-${index}`"
        v-for="(suggestion, index) in pageSuggestionForPairSubset"
      >
        <cx-translation-suggestion
          :suggestion="suggestion"
          :from="sourceLanguage"
          :to="targetLanguage"
          class="col-12 pa-0 ma-0"
        />
      </div>
    </mw-card>
    <mw-card
      class="cx-translation-list--sx-suggestions"
      :title="$i18n('cx-suggestionlist-expand-sections-title')"
      v-if="sectionSuggestionForPair.length"
    >
      <mw-spinner v-if="!sectionSuggestionsLoaded" />
      <div
        class="row pa-0 ma-0"
        :key="`suggestion-${index}`"
        v-for="(suggestion, index) in sectionSuggestionForPair"
      >
        <cx-translation-suggestion
          :suggestion="suggestion"
          :from="suggestion.sourceLanguage"
          :to="suggestion.targetLanguage"
          class="col-12 pa-0 ma-0"
          @click="startSectionTranslation(suggestion)"
        />
      </div>
    </mw-card>
    <mw-button
      v-if="pageSuggestionsLoaded"
      :block="true"
      :label="$i18n('cx-suggestionlist-refresh')"
      :outlined="false"
      :icon="mwIconRefresh"
      v-on:click="reloadSuggestions"
    />
    <sx-article-selector
      v-if="currentSectionTranslation"
      :active="showSxArticleSelector"
      :sourceLanguage="currentSectionTranslation.sourceLanguage"
      :targetLanguage="currentSectionTranslation.targetLanguage"
      :sourceTitle="currentSectionTranslation.sourceTitle"
      @close="onSectionTranslationDialogClose"
    />
  </div>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import SxArticleSelector from "./SXArticleSelector";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import { mwIconRefresh } from "../lib/mediawiki.ui//components/icons";

export default {
  name: "cx-translation-list",
  components: {
    CxTranslationSuggestion,
    SxArticleSelector,
    MwCard,
    MwButton,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    sourceLanguage: {
      type: String,
      default: "en"
    },
    targetLanguage: {
      type: String
    }
  },
  data: () => ({
    mwIconRefresh,
    pageSuggestionsLoaded: false,
    sectionSuggestionsLoaded: true,
    showSxArticleSelector: false,
    startIndex: 0,
    currentSectionTranslation: null,
    endIndex: 3
  }),
  computed: {
    pageSuggestionForPair() {
      return this.$store.getters["suggestions/getSuggestionsForPair"](
        this.sourceLanguage,
        this.targetLanguage
      );
    },
    sectionSuggestionForPair() {
      return this.$store.getters["suggestions/getSectionSuggestionsForPair"](
        this.sourceLanguage,
        this.targetLanguage
      );
    },
    pageSuggestionForPairSubset() {
      return this.pageSuggestionForPair.slice(this.startIndex, this.endIndex);
    }
  },
  watch: {
    pageSuggestionForPair: function() {
      this.pageSuggestionsLoaded = true;
    },
    sectionSuggestionForPair: function() {
      this.sectionSuggestionsLoaded = true;
    },
    active: function() {
      if (this.active) {
        if (!this.pageSuggestionForPair?.length) {
          this.$store.dispatch("suggestions/getSuggestions", {
            sourceLanguage: this.sourceLanguage,
            targetLanguage: this.targetLanguage
          });
        }
        if (!this.sectionSuggestionForPair?.length) {
          this.$store.dispatch("suggestions/getSectionSuggestions", {
            sourceLanguage: this.sourceLanguage,
            targetLanguage: this.targetLanguage
          });
        }
      }
    }
  },
  methods: {
    reloadSuggestions() {
      this.startIndex += this.endIndex;
      this.endIndex += this.endIndex;
      if (this.pageSuggestionForPair.length <= this.startIndex) {
        // Start over?
        this.startIndex = 0;
        this.endIndex = 3;
      }
    },
    startSectionTranslation(suggestion) {
      this.showSxArticleSelector = true;
      this.currentSectionTranslation = suggestion;
    },
    onSectionTranslationDialogClose() {
      this.showSxArticleSelector = false;
    }
  },
  mounted: function() {
    const urlParams = new URLSearchParams(location.search);
    const isSectionTranslation = urlParams.get("sx");
    const sourceLanguage = urlParams.get("from");
    const targetLanguage = urlParams.get("to");
    const sourceTitle = urlParams.get("page");
    if (isSectionTranslation && sourceTitle) {
      this.$store.dispatch("suggestions/getSectionSuggestionsForArticle", {
        sourceLanguage,
        targetLanguage,
        sourceTitle
      });
      this.startSectionTranslation({
        sourceLanguage,
        targetLanguage,
        sourceTitle,
        missing: {}
      });
    }
  }
};
</script>
