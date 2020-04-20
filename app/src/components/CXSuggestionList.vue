<template>
  <div v-show="active">
    <mw-card
      class="cx-translation-list--suggestions"
      :title="$i18n('cx-suggestionlist-title')"
    >
      <mw-spinner v-if="!loaded" />
      <div
        class="row pa-0 ma-0"
        :key="`suggestion-${index}`"
        v-for="(suggestion, index) in suggestionsForPairSubset"
      >
        <cx-translation-suggestion
          :suggestion="suggestion"
          :from="sourceLanguage"
          :to="targetLanguage"
          class="col-12 pa-0 ma-0"
        />
      </div>
    </mw-card>
    <mw-button
      v-if="loaded"
      :block="true"
      :label="$i18n('cx-suggestionlist-refresh')"
      :outlined="false"
      :icon="mwIconRefresh"
      v-on:click="reloadSuggestions"
    />
  </div>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import { mwIconRefresh } from "../lib/mediawiki.ui//components/icons";
import { mapState } from "vuex";

export default {
  name: "cx-translation-list",
  components: {
    CxTranslationSuggestion,
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
    loaded: false,
    startIndex: 0,
    endIndex: 3
  }),
  computed: {
    ...mapState({
      suggestions: state => state.suggestions.suggestions
    }),
    suggestionsForPair() {
      const key = `${this.sourceLanguage}/${this.targetLanguage}`;
      const suggestions = this.suggestions[key]?.suggestions;
      return suggestions || [];
    },
    suggestionsForPairSubset() {
      return this.suggestionsForPair.slice(this.startIndex, this.endIndex);
    }
  },
  watch: {
    suggestions: function() {
      this.loaded = true;
    }
  },
  methods: {
    reloadSuggestions() {
      this.startIndex += this.endIndex;
      this.endIndex += this.endIndex;
      if (this.suggestionsForPair.length <= this.startIndex) {
        // Start over?
        this.startIndex = 0;
        this.endIndex = 3;
      }
    }
  },
  created: function() {
    this.$store.dispatch("suggestions/getSuggestions", {
      from: this.sourceLanguage,
      to: this.targetLanguage
    });
  }
};
</script>
