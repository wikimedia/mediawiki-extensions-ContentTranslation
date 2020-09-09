<template>
  <mw-row
    ref="contentHeader"
    class="sx-content-comparator__content-header ma-0 pt-1"
    direction="column"
    align="stretch"
    :class="{ sticky: isSticky }"
  >
    <div class="sx-content-comparator__source-target-selector">
      <mw-button-group
        :items="listSelector"
        :active="sourceVsTargetSelection"
        @select="updateSelection"
      />
    </div>
    <mw-row
      justify="between"
      class="sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
    >
      <mw-col>
        <h3 v-text="activeContentTitle" />
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
import { MwRow, MwCol, MwButton, MwButtonGroup } from "@/lib/mediawiki.ui";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import autonymMixin from "@/mixins/autonym";
const sitemapper = new mw.cx.SiteMapper();

import {
  mwIconEdit,
  mwIconLinkExternal
} from "@/lib/mediawiki.ui/components/icons";
export default {
  name: "SxContentComparatorContentHeader",
  components: {
    MwRow,
    MwCol,
    MwButton,
    MwButtonGroup
  },
  mixins: [autonymMixin],
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: true
    },
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    sourceSectionTitle: {
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
    sourceSectionAnchor: {
      type: String,
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
          return `${sitemapper.getPageUrl(
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
      return sitemapper.getPageUrl(
        this.suggestion.targetLanguage,
        this.suggestion.targetTitle
      );
    },
    listSelector() {
      const sourceSelectorItem = {
        value: "source_section",
        props: {
          label: this.$i18n(
            "cx-sx-content-comparator-source-selector-title",
            this.getAutonym(this.suggestion.sourceLanguage)
          ),
          type: "text"
        }
      };

      let targetSelectorItem;
      switch (true) {
        case this.isMappedSection:
          targetSelectorItem = {
            value: "target_section",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-target-section-title",
                this.getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text"
            }
          };
          break;
        default:
          targetSelectorItem = {
            value: "target_article",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-full-article-title",
                this.getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text"
            }
          };
      }
      return [sourceSelectorItem, targetSelectorItem];
    }
  },
  watch: {
    /**
     * Watch for isMappedSection prop so that we can update
     * sourceVsTarget selection accordingly, when isMappedSection
     * is updated and previous sourceVsTarget selection is no
     * longer a valid option.
     */
    isMappedSection() {
      if (!this.listSelector.map(item => item.value).includes(this.sourceVsTargetSelection)) {
        this.updateSelection(this.listSelector[0].value);
      }
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([e]) => (this.isSticky = e.intersectionRatio < 1),
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
  .sx-content-comparator__content-header-title {
    // No border style defined in specifications
    border-bottom: @border-style-base @border-width-base
      @border-color-base--disabled;
    .mw-ui-icon.sx-content-comparator__open-content-link-button {
      color: @color-base--subtle;
    }
  }
  &.sticky {
    position: sticky;
    top: -4px;
    flex-flow: column-reverse;
    background-color: @background-color-base;
    box-shadow: @box-shadow-card;
    .sx-content-comparator__content-header-title {
      border-bottom: none;
    }
  }
  .sx-content-comparator__source-target-selector {
    // Color should be base80
    border-top: @border-style-base @border-width-base
      @border-color-base--disabled;
    border-bottom: @border-style-base @border-width-base
      @border-color-base--disabled;
    .mw-ui-button-group {
      background: @background-color-framed;
      color: @color-base;
    }
  }
}
</style>
