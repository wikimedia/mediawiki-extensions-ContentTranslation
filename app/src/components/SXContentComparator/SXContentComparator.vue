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
          :is-mapped-section="isCurrentSectionMapped"
          :i18n="i18n"
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
import { useI18n } from "vue-banana-i18n";

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
      if (store.getters["translator/hasSectionTranslations"]) {
        router.push({ name: "sx-sentence-selector" });

        return;
      }
      router.push({ name: "sx-quick-tutorial" });
    };

    const bananaI18n = useI18n();
    const i18n = bananaI18n.i18n.bind(bananaI18n);
    const {
      activeSectionTargetTitle,
      discardedSections,
      isCurrentSectionMapped,
      sourceSectionContent,
      targetSectionContent,
    } = useCompareContents(store);

    const targetPageContent = useTargetArticlePreview(store, i18n);

    const {
      currentSectionSuggestion: suggestion,
      sourceLanguage,
      targetLanguage,
    } = useApplicationState(store);

    const targetTitle = computed(() => suggestion.value.targetTitle);

    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    watch(
      targetTitle,
      () =>
        store.dispatch("mediawiki/fetchPageContent", {
          sourceLanguage: targetLanguage.value,
          targetLanguage: sourceLanguage.value,
          sourceTitle: targetTitle.value,
        }),
      { immediate: true }
    );

    return {
      i18n,
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
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "@/styles/page.less";

.sx-content-comparator {
  a {
    pointer-events: none;
  }
}
</style>
