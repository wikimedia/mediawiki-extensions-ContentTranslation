<template>
  <main class="cx-translation-dashboard">
    <nav class="d-xs-only-none d-sm-only-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
      />
    </nav>
    <cx-suggestion-list
      class="col-12 pa-0 ma-0"
      :sourceLanguage="sourceLanguage"
      :targetLanguage="targetLanguage"
      :active="active === 'suggestions'"
    />
    <cx-translation-list
      class="col-12 pa-0 ma-0"
      :sourceLanguage="sourceLanguage"
      :targetLanguage="targetLanguage"
      translationStatus="published"
      :active="active === 'published'"
    />
    <cx-translation-list
      class="col-12 pa-0 ma-0"
      :sourceLanguage="sourceLanguage"
      :targetLanguage="targetLanguage"
      translationStatus="draft"
      :active="active === 'draft'"
    />
    <mw-bottom-navigation class="d-xs-only-flex d-sm-only-flex d-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
    /></mw-bottom-navigation>
  </main>
</template>

<script>
import CxTranslationList from "./CXTranslationList";
import CxSuggestionList from "./CXSuggestionList";
import MwButtonGroup from "../lib/mediawiki.ui/components/MWButtonGroup";
import MwBottomNavigation from "../lib/mediawiki.ui/components/MWBottomNavigation";
import {
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit
} from "../lib/mediawiki.ui/components/icons";
import { mapState } from "vuex";

export default {
  name: "cx-dashboard",
  components: {
    CxSuggestionList,
    CxTranslationList,
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
    active: "draft",
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
    }
  },
  watch: {
    active: function() {
      window.scrollTo(0, 0);
    }
  },
  mounted: function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isSectionTranslation = urlParams.get("sx");
    if (isSectionTranslation) {
      this.active = "suggestions";
    }
  },
  created: function() {
    this.$store.dispatch("translator/init");
    this.$store.dispatch("mediawiki/fetchLanguageInfo");
    this.$store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  }
};
</script>
