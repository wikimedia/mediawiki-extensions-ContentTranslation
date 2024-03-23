<template>
  <section class="sx-content-comparator">
    <sx-content-comparator-header
      v-model:discarded-sections="discardedSections"
      @translation-button-clicked="translateSection"
      @close="goToSectionSelector"
    />
    <sx-content-comparator-content-header
      v-model:source-vs-target-selection="sourceVsTargetSelection"
      :is-mapped-section="isCurrentSectionMapped"
      @translation-button-clicked="translateSection"
    />
    <section class="sx-content-comparator__source-content">
      <template v-if="sourceVsTargetSelection === 'source_section'">
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
      <template v-else-if="sourceVsTargetSelection === 'target_article'">
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

<script>
import { MwSpinner } from "@/lib/mediawiki.ui";
import SxContentComparatorContentHeader from "./SXContentComparatorContentHeader.vue";
import SxContentComparatorHeader from "./SXContentComparatorHeader.vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder.vue";
import useCompareContents from "./useCompareContents";
import { getDir } from "@wikimedia/language-data";
import { ref, computed, watch } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useTargetArticlePreview from "./useTargetArticlePreview";
import { isQuickTutorialForced } from "@/utils/urlHandler";
import usePageContentFetch from "@/composables/usePageContentFetch";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

export default {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder,
    SxContentComparatorHeader,
    SxContentComparatorContentHeader,
    MwSpinner,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const sourceVsTargetSelection = ref("source_section");

    const goToSectionSelector = () =>
      router.push({ name: "sx-section-selector" });

    const translateSection = () => {
      const shouldDisplayQuickTutorial =
        isQuickTutorialForced() ||
        !store.getters["translator/userHasSectionTranslations"];

      if (shouldDisplayQuickTutorial) {
        router.push({ name: "sx-quick-tutorial" });
      } else {
        router.push({ name: "sx-sentence-selector" });
      }
    };

    const {
      activeSectionTargetTitle,
      discardedSections,
      isCurrentSectionMapped,
      sourceSectionContent,
      targetSectionContent,
    } = useCompareContents();

    const targetPageContent = useTargetArticlePreview();
    const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

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

    return {
      getDir,
      activeSectionTargetTitle,
      discardedSections,
      goToSectionSelector,
      isCurrentSectionMapped,
      sourceSectionContent,
      sourceVsTargetSelection,
      targetPageContent,
      targetSectionContent,
      translateSection,
      sourceLanguage,
      targetLanguage,
    };
  },
};
</script>

<style lang="less">
@import "@/styles/page.less";

.sx-content-comparator {
  a {
    pointer-events: none;
  }
}
</style>
