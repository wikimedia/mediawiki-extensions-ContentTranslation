<template>
  <sx-translation-list-language-selector
    class="sx-article-language-selector"
    :source-languages="availableSourceLanguages"
    :target-languages="targetLanguages"
    @source-language-selected="onSourceLanguageSelected"
    @target-language-selected="onTargetLanguageSelected"
  />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import autonymMixin from "../mixins/autonym";
import SxTranslationListLanguageSelector from "./CXDashboard/SXTranslationListLanguageSelector";

export default {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector
  },
  mixins: [autonymMixin],
  computed: {
    ...mapState({
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || [],
      sourceLanguage: state => state.application.sourceLanguage,
      targetLanguage: state => state.application.targetLanguage
    }),
    ...mapGetters({
      currentLanguageTitleGroup: "application/getCurrentLanguageTitleGroup"
    }),
    // titles are provided in the following format: { lang: "en", title: "Animal" }
    // so title.lang contains language code
    availableSourceLanguages: vm =>
      vm.currentLanguageTitleGroup?.titles
        .filter(title => title.lang !== vm.targetLanguage)
        .map(title => vm.createLanguageOption(title.lang)) || [],

    /**
     * If SectionTranslationTargetLanguage configuration parameter is set,
     * target language selection is disabled (only available target
     * language is the one set in SectionTranslationTargetLanguage).
     * @return {Object[]} - Array of available target language options
     */
    targetLanguages: vm => {
      const mwTargetLanguage = mw.config.get(
        "wgSectionTranslationTargetLanguage"
      );
      const supportedCodes = mwTargetLanguage
        ? [mwTargetLanguage]
        : vm.supportedLanguageCodes;
      return supportedCodes
        .filter(languageCode => languageCode !== vm.sourceLanguage)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            vm.createLanguageOption(languageCode)
          ],
          []
        );
    }
  },
  methods: {
    createLanguageOption(code) {
      return { name: this.getAutonym(code), code };
    },
    onSourceLanguageSelected(sourceLanguage) {
      this.$store.dispatch("application/updateSourceLanguage", sourceLanguage);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.$store.dispatch("application/updateTargetLanguage", targetLanguage);
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-article-language-selector {
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
