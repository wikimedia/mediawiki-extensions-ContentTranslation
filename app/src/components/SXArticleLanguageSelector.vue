<template>
  <sx-translation-list-language-selector
    class="sx-article-language-selector"
    :source-languages="availableSourceLanguages"
    :target-languages="targetLanguages"
    :selected-source-language="sourceLanguage"
    :selected-target-language="targetLanguage"
    @update:selected-source-language="onSourceLanguageSelected"
    @update:selected-target-language="onTargetLanguageSelected"
  />
</template>

<script>
import SxTranslationListLanguageSelector from "./CXDashboard/SXTranslationListLanguageSelector.vue";
import useMediawikiState from "@/composables/useMediawikiState";
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";
import { useStore } from "vuex";
import { getArticleLanguagePairUpdater } from "@/composables/useLanguageHelper";

export default {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector,
  },
  setup() {
    const { supportedLanguageCodes, enabledTargetLanguages } =
      useMediawikiState();
    const store = useStore();
    const { sourceLanguage, targetLanguage } = useApplicationState(store);
    const currentLanguageTitleGroup = computed(
      () => store.getters["application/getCurrentLanguageTitleGroup"]
    );

    /**
     * Titles are provided in the following format: { lang: "en", title: "Animal" }
     * so title.lang contains language code
     *
     * @type {ComputedRef<string[]>} array of language codes
     */
    const availableSourceLanguages = computed(
      () =>
        currentLanguageTitleGroup.value?.titles.map((title) => title.lang) || []
    );
    /**
     * If enabledTargetLanguages are set,
     * target language selection is limited to these languages
     *
     * @return {ComputedRef<string[]>} - Array of available target language codes
     */
    const targetLanguages = computed(
      () => enabledTargetLanguages.value || supportedLanguageCodes.value
    );

    const updateLanguagePair = getArticleLanguagePairUpdater(store);
    const onSourceLanguageSelected = (newSourceLanguage) =>
      updateLanguagePair(newSourceLanguage, targetLanguage.value);
    const onTargetLanguageSelected = (newTargetLanguage) =>
      updateLanguagePair(sourceLanguage.value, newTargetLanguage);

    return {
      availableSourceLanguages,
      targetLanguages,
      onSourceLanguageSelected,
      onTargetLanguageSelected,
      sourceLanguage,
      targetLanguage,
    };
  },
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-article-language-selector {
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
