<script setup>
import { MwSpinner } from "@/lib/mediawiki.ui";
import SxContentComparatorContentHeader from "./SXContentComparatorContentHeader.vue";
import SxContentComparatorHeader from "./SXContentComparatorHeader.vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder.vue";
import useCompareContents from "./useCompareContents";
import { getDir } from "@wikimedia/language-data";
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useTargetArticlePreview from "./useTargetArticlePreview";
import usePageContentFetch from "@/composables/usePageContentFetch";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useDashboardTranslationStartInstrument from "@/composables/useDashboardTranslationStartInstrument";
import useURLHandler from "@/composables/useURLHandler";
import useEditorNavigation from "@/composables/useEditorNavigation";

const store = useStore();
const router = useRouter();

const contentTypeSelection = ref("source_section");

const { logDashboardTranslationStartEvent } =
  useDashboardTranslationStartInstrument();
const navigateToEditor = useEditorNavigation();
const goToSectionSelector = () => router.push({ name: "sx-section-selector" });

const confirmTranslation = () => {
  logDashboardTranslationStartEvent();
  navigateToEditor();
};

const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  pageURLParameter: pageTitle,
  sectionURLParameter: sectionTitle,
} = useURLHandler();

const { activeSectionTargetTitle, sourceSectionContent, targetSectionContent } =
  useCompareContents();

const targetPageContent = useTargetArticlePreview();
const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

const targetTitle = computed(() => suggestion.value.targetTitle);

const fetchPageContent = usePageContentFetch();
// watch for target title as it is not provided when the proxy suggestion object is created
// (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
watch(
  targetTitle,
  () =>
    fetchPageContent(
      targetLanguage.value,
      sourceLanguage.value,
      targetTitle.value
    ),
  { immediate: true }
);
</script>

<template>
  <section
    class="sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto"
  >
    <sx-content-comparator-header
      @translation-button-clicked="confirmTranslation"
      @close="goToSectionSelector"
    />
    <sx-content-comparator-content-header
      v-model:content-type-selection="contentTypeSelection"
      @translation-button-clicked="confirmTranslation"
    />
    <section class="sx-content-comparator__source-content">
      <template v-if="contentTypeSelection === 'source_section'">
        <mw-spinner v-if="!sourceSectionContent" />
        <!-- eslint-disable vue/no-v-html -->
        <section
          :lang="sourceLanguage"
          :dir="getDir(sourceLanguage)"
          class="pt-2 px-4"
          v-html="sourceSectionContent"
        />
        <!-- eslint-enable vue/no-v-html -->
      </template>
      <template v-else-if="contentTypeSelection === 'target_article'">
        <mw-spinner v-if="!targetPageContent" />
        <!-- eslint-disable vue/no-v-html -->
        <article
          :lang="targetLanguage"
          :dir="getDir(targetLanguage)"
          class="px-4"
          v-html="targetPageContent"
        />
        <!-- eslint-enable vue/no-v-html -->
      </template>
      <template v-else>
        <!-- eslint-disable vue/no-v-html -->
        <section class="pa-4" v-html="targetSectionContent" />
        <!-- eslint-enable vue/no-v-html -->
        <sx-content-comparator-new-section-placeholder
          class="sx-content-comparator__new-section-placeholder--present"
          :placeholder-title="
            $i18n('cx-sx-content-comparator-present-section-placeholder-title')
          "
          :placeholder-subtitle="
            $i18n(
              'cx-sx-content-comparator-present-section-placeholder-subtitle'
            )
          "
        />
      </template>
    </section>
  </section>
</template>

<style lang="less">
@import "@/styles/page.less";

.sx-content-comparator {
  background-color: @background-color-base;
  a {
    pointer-events: none;
  }
}
</style>
