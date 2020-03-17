<template>
  <main class="cx-translation-list-container">
    <nav class="d-xs-only-none d-sm-only-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
      />
    </nav>
    <mw-card
      class="cx-translation-list--published"
      v-show="active === 'published'"
      :title="$i18n('cx-translation-label-published')"
    >
      <mw-spinner v-if="!publishedTranslationsLoaded" />
      <div
        class="row pa-0 ma-0"
        :key="`published-${index}`"
        v-for="(item, index) in publishedTranslations"
      >
        <cx-translation-work
          class="col-12 pa-0 ma-0"
          :translation="item.translation"
        />
      </div>
    </mw-card>
    <mw-card
      class="cx-translation-list--draft"
      v-show="active === 'draft'"
      :title="$i18n('cx-translation-label-draft')"
    >
      <mw-spinner v-if="!draftTranslationsLoaded" />
      <div
        class="row pa-0 ma-0"
        :key="`published-${index}`"
        v-for="(item, index) in draftTranslations"
      >
        <cx-translation-work
          class="col-12 pa-0 ma-0"
          :translation="item.translation"
        />
      </div>
    </mw-card>
    <mw-card
      class="cx-translation-list--suggestions"
      v-show="active === 'suggestions'"
      :title="$i18n('cx-suggestionlist-title')"
    >
      <mw-spinner v-if="!suggestionsLoaded" />
      <div
        class="row pa-0 ma-0"
        :key="`published-${index}`"
        v-for="(suggestion, index) in suggestionsForPair"
      >
        <cx-translation-suggestion
          :suggestion="suggestion"
          :from="sourceLanguage"
          :to="targetLanguage"
          class="col-12 pa-0 ma-0"
        />
      </div>
    </mw-card>
    <mw-bottom-navigation class="d-xs-only-flex d-sm-only-flex d-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
    /></mw-bottom-navigation>
  </main>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationWork from "./CXTranslationWork";
import CxTranslationSuggestion from "./CXTranslationSuggestion";

import MwButtonGroup from "../lib/mediawiki.ui/components/MWButtonGroup";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import MwBottomNavigation from "../lib/mediawiki.ui/components/MWBottomNavigation";
import {
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit
} from "../lib/mediawiki.ui//components/icons";
import { mapState } from "vuex";

export default {
  name: "cx-translation-list",
  components: {
    CxTranslationWork,
    CxTranslationSuggestion,
    MwCard,
    MwSpinner,
    MwButtonGroup,
    MwBottomNavigation
  },
  data: () => ({
    mwIconArticleCheck,
    mwIconLightBulb,
    mwIconEdit,
    suggestionsLoaded: false,
    publishedTranslationsLoaded: false,
    draftTranslationsLoaded: false,
    active: "suggestions",
    sourceLanguage: "en",
    targetLanguage: "ml"
  }),
  computed: {
    listSelector() {
      return [
        {
          value: "suggestions",
          props: {
            label: this.$i18n("cx-translation-filter-suggested-translations"),
            icon: mwIconLightBulb,
            type: "text"
          }
        },
        {
          value: "draft",
          props: {
            label: this.$i18n("cx-translation-filter-draft-translations"),
            icon: mwIconEdit,
            type: "text"
          }
        },
        {
          value: "published",
          props: {
            label: this.$i18n("cx-translation-filter-published-translations"),
            icon: mwIconArticleCheck,
            type: "text"
          }
        }
      ];
    },
    ...mapState({
      draftTranslations: state => state.translator.draftTranslations,
      publishedTranslations: state => state.translator.publishedTranslations,
      suggestions: state => state.suggestions.suggestions
    }),
    suggestionsForPair() {
      const key = `${this.sourceLanguage}/${this.targetLanguage}`;
      const suggestions = this.suggestions[key]?.suggestions;
      return suggestions || [];
    }
  },
  watch: {
    active: function() {
      window.scrollTo(0, 0);
    },
    suggestions: function() {
      this.suggestionsLoaded = true;
    },
    publishedTranslations: function() {
      this.publishedTranslationsLoaded = true;
    },
    draftTranslations: function() {
      this.draftTranslationsLoaded = true;
    }
  },
  created: function() {
    this.$store.dispatch("translator/init");
    this.$store.dispatch("wikipedia/fetchLanguageInfo");
    this.$store.dispatch("suggestions/getSuggestions", {
      from: this.sourceLanguage,
      to: this.targetLanguage
    });
  }
};
</script>
