<template>
  <mw-row
    ref="contentHeader"
    class="sx-content-comparator__content-header ma-0 pt-1"
    direction="column"
    align="stretch"
    :class="{ sticky: isSticky }"
    :reverse="isSticky"
  >
    <sx-content-comparator-source-vs-target-selector
      :is-mapped-section="isMappedSection"
      :selection="sourceVsTargetSelection"
      @update:selection="updateSelection"
    />
    <mw-row
      justify="between"
      class="sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
    >
      <mw-col>
        <h3 class="ma-0 pa-0" v-text="activeContentTitle" />
      </mw-col>
      <mw-col shrink>
        <mw-button
          v-if="isSticky"
          :icon="mwIconEdit"
          :progressive="true"
          :label="
            $i18n(
              'cx-sx-content-comparator-content-header-translate-button-label'
            )
          "
          @click="$emit('translation-button-clicked')"
        />
        <mw-button
          v-else
          class="sx-content-comparator__open-content-link-button pa-0 pe-2"
          :icon="mwIconLinkExternal"
          type="icon"
          :href="activeContentPath"
          target="_blank"
        />
      </mw-col>
    </mw-row>
  </mw-row>
</template>

<script>
import { MwRow, MwCol, MwButton } from "@/lib/mediawiki.ui";
import { siteMapper } from "@/utils/mediawikiHelper";

import {
  mwIconEdit,
  mwIconLinkExternal
} from "@/lib/mediawiki.ui/components/icons";
import { mapGetters, mapState } from "vuex";
import SxContentComparatorSourceVsTargetSelector from "@/components/SXContentComparator/SourceVsTargetSelector";
export default {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector,
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: true
    },
    targetSectionTitle: {
      type: String,
      required: true
    },
    isMappedSection: {
      type: Boolean,
      required: true
    },
    targetSectionAnchor: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconLinkExternal,
    mwIconEdit,
    isSticky: false
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion
    }),
    ...mapGetters({
      sourceSectionTitle: "application/getCurrentSourceSectionTitle",
      sourceSectionAnchor: "application/getCurrentSourceSectionAnchor"
    }),
    activeContentTitle() {
      switch (this.sourceVsTargetSelection) {
        case "source_section":
          return this.sourceSectionTitle;
        case "target_article":
          return this.suggestion.targetTitle;
        default:
          return this.targetSectionTitle;
      }
    },
    activeContentPath() {
      switch (this.sourceVsTargetSelection) {
        case "source_section":
          return `${siteMapper.getPageUrl(
            this.suggestion.sourceLanguage,
            this.suggestion.sourceTitle
          )}#${this.sourceSectionAnchor}`;
        case "target_article":
          return this.targetArticlePath;
        default:
          return `${this.targetArticlePath}#${this.targetSectionAnchor}`;
      }
    },
    targetArticlePath() {
      return siteMapper.getPageUrl(
        this.suggestion.targetLanguage,
        this.suggestion.targetTitle
      );
    }
  },
  mounted() {
    /**
     * Only watch for vertical intersection, as horizontal
     * intersection is happening when component is being mounted
     * due to router transitions, inserting UI glitches.
     */
    const observer = new IntersectionObserver(
      ([e]) => {
        this.isSticky = e.intersectionRect.height < e.boundingClientRect.height;
      },
      { threshold: [1] }
    );

    observer.observe(this.$refs.contentHeader.$el);
  },
  methods: {
    updateSelection(selection) {
      this.$emit("update:sourceVsTargetSelection", selection);
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-content-comparator__content-header {
  &-title {
    // No border style defined in specifications
    border-bottom: @border-style-base @border-width-base
      @border-color-base--disabled;
    .mw-ui-button.sx-content-comparator__open-content-link-button {
      color: @color-base--subtle;
    }
  }
  &.sticky {
    position: sticky;
    top: -4px;
    background-color: @background-color-base;
    box-shadow: @box-shadow-card;
    .sx-content-comparator__content-header-title {
      border-bottom: none;
    }
  }
}
</style>
