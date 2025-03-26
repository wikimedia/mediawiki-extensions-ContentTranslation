<script setup>
import SxTranslationListLanguageSelector from "./CXDashboard/SXTranslationListLanguageSelector.vue";
import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";
import { computed } from "vue";
import { useArticleLanguagePairUpdate } from "@/composables/useLanguageHelper";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useURLHandler from "@/composables/useURLHandler";

const { supportedTargetLanguageCodes } = useSupportedLanguageCodes();

const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
} = useURLHandler();
const { currentLanguageTitleGroup } = useLanguageTitleGroup();

/**
 * Titles are provided in the following format: { lang: "en", title: "Animal" }
 * so title.lang contains language code
 *
 * @type {ComputedRef<string[]>} array of language codes
 */
const availableSourceLanguages = computed(
  () => currentLanguageTitleGroup.value?.titles.map((title) => title.lang) || []
);

const updateLanguagePair = useArticleLanguagePairUpdate();
const onSourceLanguageSelected = (newSourceLanguage) =>
  updateLanguagePair(newSourceLanguage, targetLanguage.value);
const onTargetLanguageSelected = (newTargetLanguage) =>
  updateLanguagePair(sourceLanguage.value, newTargetLanguage);
</script>

<template>
  <sx-translation-list-language-selector
    class="sx-article-language-selector"
    :source-languages="availableSourceLanguages"
    :target-languages="supportedTargetLanguageCodes"
    :selected-source-language="sourceLanguage"
    :selected-target-language="targetLanguage"
    @update:selected-source-language="onSourceLanguageSelected"
    @update:selected-target-language="onTargetLanguageSelected"
  />
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-article-language-selector {
  // TODO: Should we use a border-color design token here?
  border-top: @border-width-base @border-style-base @background-color-neutral;
  border-bottom: @border-width-base @border-style-base @background-color-neutral;
}
</style>
