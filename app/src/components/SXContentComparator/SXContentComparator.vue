<template>
  <section class="sx-content-comparator">
    <sx-content-comparator-header
      :discarded-sections.sync="discardedSections"
      @translation-button-clicked="translateSection"
      @close="goToSectionSelector"
    />
    <sx-content-comparator-content-header
      :is-mapped-section="isCurrentSectionMapped"
      :source-vs-target-selection.sync="sourceVsTargetSelection"
      @translation-button-clicked="translateSection"
    />
    <section class="sx-content-comparator__source-content">
      <template v-if="sourceVsTargetSelection === 'source_section'">
        <mw-spinner v-if="!sourceSectionContent" />
        <section
          :lang="sourceLanguage"
          :dir="getDir(sourceLanguage)"
          class="pt-2 px-4"
          v-html="sourceSectionContent"
        />
      </template>
      <template v-else-if="sourceVsTargetSelection === 'target_article'">
        <mw-spinner v-if="!targetPageContent" />
        <article
          :lang="targetLanguage"
          :dir="getDir(targetLanguage)"
          class="px-4"
          v-html="targetPageContent"
        />
      </template>
      <template v-else>
        <section class="pa-4" v-html="targetSectionContent" />
        <sx-content-comparator-new-section-placeholder
          :is-mapped-section="isCurrentSectionMapped"
        />
      </template>
    </section>
  </section>
</template>

<script>
import { MwSpinner } from "@/lib/mediawiki.ui";
import SxContentComparatorContentHeader from "./SXContentComparatorContentHeader";
import SxContentComparatorHeader from "./SXContentComparatorHeader";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder";
import useCompareContents from "./useCompareContents";
import { getDir } from "@wikimedia/language-data";
import { ref, computed, watch } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder,
    SxContentComparatorHeader,
    SxContentComparatorContentHeader,
    MwSpinner
  },
  setup(props, context) {
    const store = context.root.$store;
    const router = context.root.$router;

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

    const {
      activeSectionTargetTitle,
      discardedSections,
      isCurrentSectionMapped,
      sourceSectionContent,
      targetPageContent,
      targetSectionContent
    } = useCompareContents();

    const {
      currentSectionSuggestion: suggestion,
      sourceLanguage,
      targetLanguage
    } = useApplicationState();

    const targetTitle = computed(() => suggestion.value.targetTitle);

    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    watch(
      targetTitle,
      () =>
        store.dispatch("mediawiki/fetchPageContent", {
          sourceLanguage: targetLanguage.value,
          targetLanguage: sourceLanguage.value,
          sourceTitle: targetTitle.value
        }),
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
      targetLanguage
    };
  }
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
