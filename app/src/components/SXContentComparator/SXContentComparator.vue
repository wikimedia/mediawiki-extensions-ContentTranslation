<template>
  <section class="sx-content-comparator">
    <sx-content-comparator-header
      :discarded-sections.sync="discardedSections"
      @translation-button-clicked="translateSection"
      @close="goToSectionSelector"
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
import SxContentComparatorContentHeader from "./SXContentComparatorContentHeader";
import SxContentComparatorHeader from "./SXContentComparatorHeader";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder";
import Vue from "vue";
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
      isCurrentSectionMissing: "application/isCurrentSourceSectionMissing",
      getFirstAppendixTitleBySectionSuggestion:
        "suggestions/getFirstAppendixTitleBySectionSuggestion"
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
      // Create new div with target page content
      const contentDiv = document.createElement("div");
      contentDiv.innerHTML = this.targetPage?.content;

      const placeholderEl = this.createNewSectionPlaceholderElement();
      // If "References" section (or a similar one - e.g "See also" etc)
      // is present, position new section placeholder before that section
      const firstAppendixTitle = this.getFirstAppendixTitleBySectionSuggestion(
        this.suggestion
      );

      if (firstAppendixTitle) {
        // Find first appendix section header element
        const matchedHeaders = Array.from(
          contentDiv.querySelectorAll("h2")
        ).filter(h2 => h2.textContent.match(firstAppendixTitle));
        const firstAppendixSectionHeader = matchedHeaders[0].parentNode;

        // Insert placeholder element before first appendix section header
        firstAppendixSectionHeader.parentNode.insertBefore(
          placeholderEl,
          firstAppendixSectionHeader
        );
      } else {
        // If no "References" or similar section exists in target article,
        // append new section placeholder to the end of the target article
        contentDiv.appendChild(placeholderEl);
      }

      return contentDiv.innerHTML;
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
      return this.targetPage?.getSectionByTitle(this.activeSectionTargetTitle);
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
    createNewSectionPlaceholderElement() {
      const PlaceholderClass = Vue.extend(
        SxContentComparatorNewSectionPlaceholder
      );

      const placeholderInstance = new PlaceholderClass({
        props: {
          isMappedSection: this.isCurrentSectionMapped
        }
      });

      return placeholderInstance.$mount().$el;
    },
    goToSectionSelector() {
      this.$router.push({ name: "sx-section-selector" });
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
}
</style>
