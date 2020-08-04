<template>
  <main class="cx-translation-dashboard">
    <nav class="h-sm-and-down">
      <mw-button-group
        :items="listSelector"
        :active="active"
        @select="active = $event"
      />
    </nav>
    <cx-suggestion-list
      class="col-12 pa-0 ma-0"
      :initial-source-language="sourceLanguage"
      :initial-target-language="targetLanguage"
      :active="active === 'suggestions'"
    />
    <cx-translation-list
      class="col-12 pa-0 ma-0"
      translation-status="published"
      :active="active === 'published'"
    />
    <cx-translation-list
      class="col-12 pa-0 ma-0"
      translation-status="draft"
      :active="active === 'draft'"
    />
    <mw-bottom-navigation
      class="h-md-and-up"
      :items="listSelector"
      :active.sync="active"
    ></mw-bottom-navigation>
  </main>
</template>

<script>
import CxTranslationList from "./CXTranslationList";
import CxSuggestionList from "./CXSuggestionList";
import { MwButtonGroup, MwBottomNavigation } from "../lib/mediawiki.ui";
import {
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "CxDashboard",
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
    this.$store.dispatch("mediawiki/fetchLanguages");
    this.$store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  }
};
</script>
