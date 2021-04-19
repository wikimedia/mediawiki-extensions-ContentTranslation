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
  </section>
</template>

<script>
import { MwInput } from "@/lib/mediawiki.ui";
import { mapState } from "vuex";
import { mwIconSearch, mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "@/mixins/autonym";

export default {
  name: "SxArticleSearch",
  components: { MwInput },
  mixins: [autonymMixin],
  data: () => ({
    mwIconSearch,
    mwIconClose,
    searchInput: ""
  }),
  computed: {
    ...mapState({
      sourceLanguage: state => state.application.sourceLanguage,
      targetLanguage: state => state.application.targetLanguage
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
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>
