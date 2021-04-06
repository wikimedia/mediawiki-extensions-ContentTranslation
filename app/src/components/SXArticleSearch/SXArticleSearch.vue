<template>
  <section class="sx-article-search">
    <mw-input
      v-model="searchInput"
      :icon-size="20"
      :outlined="false"
      :icon="mwIconSearch"
      :placeholder="$i18n('cx-sx-article-search-input-placeholder')"
      type="search"
      :indicator="mwIconClose"
      :indicator-size="20"
      @indicator-clicked="close"
    />
    <mw-button-group
      class="sx-article-search__language-button-group"
      :items="sourceLanguageOptions"
      :active="sourceLanguage"
      @select="updateSelection"
    />
    <!--    Nearby search suggestions will also be added inside this template-->
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
          :key="suggestion.pageid"
          :suggestion="suggestion"
          @click.native="startSectionTranslation(suggestion)"
        />
      </mw-card>
      <nearby-suggestions-card @suggestion-clicked="startSectionTranslation" />
    </template>
  </section>
</template>

<script>
import { MwInput, MwButtonGroup, MwCard } from "@/lib/mediawiki.ui";
import { mapGetters, mapState } from "vuex";
import {
  mwIconSearch,
  mwIconClose,
  mwIconEllipsis
} from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "@/mixins/autonym";
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion";
import NearbySuggestionsCard from "./NearbySuggestionsCard";

export default {
  name: "SxArticleSearch",
  components: {
    NearbySuggestionsCard,
    SxSearchArticleSuggestion,
    MwInput,
    MwButtonGroup,
    MwCard
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconSearch,
    mwIconClose,
    mwIconEllipsis,
    searchInput: "",
    sourceLanguageOptions: []
  }),
  computed: {
    ...mapState({
      sourceLanguage: state => state.application.sourceLanguage,
      targetLanguage: state => state.application.targetLanguage
    }),
    ...mapGetters({
      recentlyEditedPages: "mediawiki/getRecentlyEditedPages"
    }),

    /**
     * Returns an array of suggested language codes
     * based on a list of criteria. Based on mw.uls.getFrequentLanguageList
     * NOTE: Suggested language codes based on user territory is not supported
     *
     * @return {string[]}
     */
    getSuggestedSourceLanguages: vm => {
      /**
       * According to design specification, language selector inside
       * "search for an article" screen, contains three options, including
       * current source language. So we need exactly 2 additional suggested
       * source languages to display.
       *
       * @type {number}
       */
      const sliceSize = 2;

      /**
       * Previously used languages by user. These languages are set in local
       * storage by Mediawiki ULS extension. Since it is NOT guaranteed that
       * these items are set in local storage, these languages are allowed
       * to be empty
       *
       * @type {string[]}
       */
      const previousLanguages = [];
      try {
        previousLanguages.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (e) {}

      /**
       * Browser user interface language or the system language.
       * This language code can be like "en" or "en_US", so we need
       * to split it by hyphen and only keep first segment
       * @type {string}
       */
      const browserLanguage = (navigator.language || "").split("-")[0];

      /**
       * Browser accept-languages. Accept language codes can be like "en" or "en_US",
       * so we need to split them by hyphen and only keep first segment
       * @type {string[]}
       */
      const acceptLanguages = (
        mw.config.get("wgULSAcceptLanguageList") ||
        navigator.languages ||
        []
      ).map(languageCode => languageCode.split("-")[0]);

      const suggestedLanguages = [
        // User's current interface language
        mw.config.get("wgUserLanguage"),
        // Current wiki's content language
        mw.config.get("wgContentLanguage"),
        browserLanguage,
        ...previousLanguages,
        ...acceptLanguages
      ];

      // Filter out duplicate languages using Set.
      // Also filter out source, target and invalid
      // languages (i.e. languages that do not have
      // a valid autonym).
      // Finally return a slice of these languages
      // equal to sliceSize (current value is 2)
      return [...new Set(suggestedLanguages)]
        .filter(
          language =>
            language !== vm.sourceLanguage &&
            language !== vm.targetLanguage &&
            vm.getAutonym(language) !== language
        )
        .slice(0, sliceSize);
    }
  },
  mounted() {
    this.sourceLanguageOptions = [
      ...[this.sourceLanguage, ...this.getSuggestedSourceLanguages].map(
        language => ({
          value: language,
          props: {
            label: this.getAutonym(language),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        })
      ),
      {
        value: "other",
        props: {
          icon: mwIconEllipsis,
          type: "icon",
          class: "px-0 py-4 me-4 ms-auto"
        }
      }
    ];
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    updateSelection(sourceLanguage) {
      if (sourceLanguage === "other") {
        // TODO: Toggle ULS
        return;
      }
      this.$store.dispatch("application/updateSourceLanguage", sourceLanguage);
    },
    /**
     * @param {Page} searchSuggestion
     * @return {Promise<void>}
     */
    async startSectionTranslation(searchSuggestion) {
      const suggestion = await this.$store.dispatch(
        "application/createNewSectionSuggestion",
        searchSuggestion.title
      );
      this.$store.dispatch("application/startSectionTranslation", suggestion);
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
      color: @wmui-color-base30;
    }
  }
}
</style>
