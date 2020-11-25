<template>
  <section class="sx-content-comparator">
    <sx-content-comparator-header
      :suggestion="suggestion"
      :target-section-title="activeSectionTargetTitle"
      :discarded-sections.sync="discardedSections"
      :section-source-titles="sectionSourceTitles"
      @translation-button-clicked="translateSection"
      @close="close"
    />
    <sx-content-comparator-content-header
      :source-vs-target-selection.sync="sourceVsTargetSelection"
      :is-mapped-section="isCurrentSectionMapped"
      :target-section-title="activeSectionTargetTitle"
      :target-section-anchor="targetSectionAnchor"
      @translation-button-clicked="translateSection"
    />
    <section class="sx-content-comparator__source-content">
      <template v-if="sourceVsTargetSelection === 'source_section'">
        <mw-spinner v-if="!sourceSectionContent" />
        <section class="pt-2 px-4" v-html="sourceSectionContent" />
      </template>
      <template v-else-if="sourceVsTargetSelection === 'target_article'">
        <mw-spinner v-if="!targetPageContent" />
        <article class="px-4" v-html="targetPageContent" />
        <sx-content-comparator-new-section-placeholder
          :is-mapped-section="isCurrentSectionMapped"
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
import { mapGetters, mapState } from "vuex";
import SxContentComparatorContentHeader from "@/components/SXContentComparator/SXContentComparatorContentHeader";
import SxContentComparatorHeader from "@/components/SXContentComparator/SXContentComparatorHeader";
import SxContentComparatorNewSectionPlaceholder from "@/components/SXContentComparator/NewSectionPlaceholder";

export default {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder,
    SxContentComparatorHeader,
    SxContentComparatorContentHeader,
    MwSpinner
  },
  data: () => ({
    sourceVsTargetSelection: "source_section",
    discardedSections: []
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      sourceSection: state => state.application.currentSourceSection
    }),
    ...mapGetters({
      sourceSectionTitle: "application/getCurrentSourceSectionTitle",
      isCurrentSectionMissing: "application/isCurrentSourceSectionMissing"
    }),
    targetSectionAnchor() {
      return (this.targetSection?.title || "").replace(/ /g, "_");
    },
    sourcePage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    },
    targetPage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.targetLanguage,
        this.targetTitle
      );
    },
    targetPageContent() {
      return this.targetPage?.content;
    },
    // Needed so that it can be easily watched
    targetTitle() {
      return this.suggestion.targetTitle;
    },
    activeSectionTargetTitle() {
      return (
        this.suggestion.missingSections[this.sourceSectionTitle] ||
        this.suggestion.presentSections[this.sourceSectionTitle] ||
        ""
      );
    },
    targetSection() {
      return this.$store.getters["mediawiki/getPageSection"](
        this.targetPage,
        this.activeSectionTargetTitle
      );
    },
    sourceSectionContent() {
      return this.sourceSection?.html;
    },
    targetSectionContent() {
      return this.targetSection?.html;
    },
    isCurrentSectionMapped() {
      return !this.isCurrentSectionMissing && !this.isCurrentSectionDiscarded;
    },
    isCurrentSectionDiscarded() {
      return this.discardedSections.includes(this.activeSectionTargetTitle);
    },
    sectionSourceTitles() {
      return [
        ...Object.keys(this.suggestion.missingSections),
        ...Object.keys(this.suggestion.presentSections)
      ];
    }
  },
  watch: {
    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    targetTitle: {
      immediate: true,
      handler: function() {
        this.$store.dispatch("mediawiki/fetchPageContent", {
          sourceLanguage: this.suggestion.targetLanguage,
          targetLanguage: this.suggestion.sourceLanguage,
          sourceTitle: this.targetTitle
        });
      }
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    translateSection() {
      if (this.$store.getters["translator/hasSectionTranslations"]()) {
        this.goToSentenceSelector();
        return;
      }
      this.goToTutorial();
    },
    goToTutorial() {
      this.$router.push({ name: "sx-quick-tutorial" });
    },
    goToSentenceSelector() {
      this.$router.push({ name: "sx-sentence-selector" });
    }
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
  .sx-content-comparator__new-section-placeholder--present {
    background-color: @background-color-primary;
    color: @color-primary--active;
    // No color for accent-50 with 0.5 opacity present in UI library
    box-shadow: 0 1px 3px rgba(51, 102, 204, 0.5),
      0 -1px 3px rgba(51, 102, 204, 0.5);
    h5 {
      color: @color-primary--active;
    }
  }
}
</style>
