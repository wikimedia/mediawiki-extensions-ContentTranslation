<template>
  <section class="sx-content-comparator">
    <sx-content-comparator-header
      :suggestion="suggestion"
      :target-section-title="activeSectionTargetTitle"
      :source-section-title.sync="sourceSectionTitle"
      :discarded-sections.sync="discardedSections"
      :is-missing-section="isCurrentSectionMissing"
      :section-source-titles="sectionSourceTitles"
      @translation-button-clicked="translateSection"
      @close="close"
    />
    <sx-content-comparator-content-header
      ref="contentHeader"
      :source-vs-target-selection.sync="sourceVsTargetSelection"
      :suggestion="suggestion"
      :is-mapped-section="isCurrentSectionMapped"
      :source-section-title="sourceSectionTitle"
      :target-section-title="activeSectionTargetTitle"
      :source-section-anchor="sourceSectionAnchor"
      :target-section-anchor="targetSectionAnchor"
      @translation-button-clicked="translateSection"
    />
    <section class="sx-content-comparator__source-content px-4">
      <template v-if="sourceVsTargetSelection === 'source_section'">
        <section class="pt-2" v-html="sourceSectionContent" />
      </template>
      <template v-else-if="sourceVsTargetSelection === 'target_article'">
        <mw-spinner v-if="!targetPageContent" />
        <article v-html="targetPageContent" />
      </template>
      <template v-else>
        <section class="pa-4" v-html="targetSectionContent" />
        <section
          class="sx-content-comparator__new-section-placeholder--present pa-4 px-7"
        >
          <h5
            v-i18n:cx-sx-content-comparator-present-section-placeholder-title
          />
          <p
            v-i18n:cx-sx-content-comparator-present-section-placeholder-subtitle
          />
        </section>
      </template>
    </section>
  </section>
</template>

<script>
import { MwSpinner } from "@/lib/mediawiki.ui";
import { mapState } from "vuex";
import SxContentComparatorContentHeader from "@/components/SXContentComparator/SXContentComparatorContentHeader";
import SxContentComparatorHeader from "@/components/SXContentComparator/SXContentComparatorHeader";

export default {
  name: "SxContentComparator",
  components: {
    SxContentComparatorHeader,
    SxContentComparatorContentHeader,
    MwSpinner
  },
  data() {
    return {
      sourceVsTargetSelection: "source_section",
      discardedSections: [],
      sourceSectionTitle: this.$route.params.sourceSectionTitle
    };
  },
  computed: {
    ...mapState({
      suggestion: state => state.suggestions.currentSectionSuggestion
    }),
    sourceSectionAnchor() {
      return (this.sourceSection?.title || "").replace(/ /g, "_");
    },
    targetSectionAnchor() {
      return (this.targetSection?.title || "").replace(/ /g, "_");
    },
    /**
     * @return {PageSection[]}
     */
    sourcePageSections() {
      return this.sourcePage?.sections;
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
    missingSections() {
      return this.suggestion.missingSections;
    },
    activeSectionTargetTitle() {
      return (
        this.missingSections[this.sourceSectionTitle] ||
        this.suggestion.presentSections[this.sourceSectionTitle]
      );
    },
    sourceSection() {
      return this.$store.getters["mediawiki/getPageSection"](
        this.sourcePage,
        this.sourceSectionTitle
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
    isCurrentSectionMissing() {
      return this.missingSections.hasOwnProperty(this.sourceSectionTitle);
    },
    isCurrentSectionMapped() {
      return !this.isCurrentSectionMissing && !this.isCurrentSectionDiscarded;
    },
    isCurrentSectionDiscarded() {
      return this.discardedSections.includes(this.activeSectionTargetTitle);
    },
    sectionSourceTitles() {
      return [
        ...Object.keys(this.missingSections),
        ...Object.keys(this.suggestion.presentSections)
      ];
    }
  },
  watch: {
    sourcePage() {
      this.$store.dispatch("mediawiki/fetchPageSections", this.suggestion);
    },
    targetPage() {
      this.$store.dispatch("mediawiki/fetchPageSections", {
        sourceLanguage: this.suggestion.targetLanguage,
        targetLanguage: this.suggestion.sourceLanguage,
        sourceTitle: this.suggestion.targetTitle
      });
    },
    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    targetTitle: {
      immediate: true,
      handler: function() {
        this.$store.dispatch("mediawiki/fetchPageContent", {
          language: this.suggestion.targetLanguage,
          title: this.targetTitle
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
      this.$router.push({
        name: "sx-quick-tutorial",
        params: { sourceSectionTitle: this.sourceSectionTitle }
      });
    },
    goToSentenceSelector() {
      this.$router.push({
        name: "sx-sentence-selector",
        params: { sourceSectionTitle: this.sourceSectionTitle }
      });
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-content-comparator {
  .sx-content-comparator__source-content {
    line-height: 1.3;
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
