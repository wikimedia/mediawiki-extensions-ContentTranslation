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
import SxTranslationListLanguageSelector from "./CXDashboard/SXTranslationListLanguageSelector";
import useMediawikiState from "@/composables/useMediawikiState";
import { computed } from "@vue/composition-api";

export default {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector
  },
  setup(props, context) {
    const {
      supportedLanguageCodes,
      enabledTargetLanguages
    } = useMediawikiState();
    const store = context.root.$store;

    const currentLanguageTitleGroup = computed(
      () => store.getters["application/getCurrentLanguageTitleGroup"]
    );

    // titles are provided in the following format: { lang: "en", title: "Animal" }
    // so title.lang contains language code
    const availableSourceLanguages = computed(
      () =>
        currentLanguageTitleGroup.value?.titles.map(title => title.lang) || []
    );
    /**
     * If enabledTargetLanguages are set,
     * target language selection is limited to these languages
     *
     * @return {Object[]} - Array of available target language options
     */
    const targetLanguages = computed(
      () => enabledTargetLanguages.value || supportedLanguageCodes.value
    );

    const onSourceLanguageSelected = sourceLanguage =>
      store.dispatch("application/updateSourceLanguage", sourceLanguage);
    const onTargetLanguageSelected = targetLanguage =>
      store.dispatch("application/updateTargetLanguage", targetLanguage);

    return {
      availableSourceLanguages,
      targetLanguages,
      onSourceLanguageSelected,
      onTargetLanguageSelected
    };
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
