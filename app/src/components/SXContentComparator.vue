<template>
  <mw-dialog
    v-if="active"
    class="sx-content-comparator"
    animation="slide-left"
    :fullscreen="true"
  >
    <template slot="header">
      <div class="sx-content-comparator__header pa-4">
        <mw-button
          class="py-2 pa-0"
          :icon="mwIconArrowPrevious"
          :label="
            $i18n('cx-sx-content-comparator-back-to-sections-button-label')
          "
          type="text"
          :outlined="false"
          @click="$emit('update:active', false)"
        />
        <div class="row my-1 py-2 mx-0">
          <div class="col grow">
            <h4 class="pa-0 sx-content-comparator-header__article-title">
              {{ suggestion.sourceTitle }}
            </h4>
            <h2 class="sx-content-comparator-header__section-title pa-0 ma-0">
              {{ activeSectionSourceTitle }}
            </h2>
          </div>
          <mw-button
            class="pa-0 pe-1"
            type="icon"
            :icon="mwIconPrevious"
            @click="previousSection"
          />
          <mw-button
            class="pa-0 ps-1"
            type="icon"
            :icon="mwIconArrowForward"
            @click="nextSection"
          />
        </div>
        <div class="py-2 mb-1">
          <mw-button
            :icon="mwIconEdit"
            :progressive="true"
            :label="
              $i18n('cx-sx-content-comparator-translation-section-button-label')
            "
            @click="translateSection"
          />
        </div>
        <div
          v-if="isMissingSection"
          class="sx-content-comparator-header__review-contents flex py-2"
        >
          <div class="shrink pe-2">
            <mw-icon :icon="mwIconEye" />
          </div>
          <div>
            <p class="ma-0">
              <strong v-i18n:cx-sx-content-comparator-review-contents-title />
              <span v-i18n:cx-sx-content-comparator-review-contents-rest />
            </p>
          </div>
        </div>
        <div v-else class="sx-content-comparator-header__mapped-section">
          <div
            class="sx-content-comparator-header__mapped-section-header row pa-2 ma-0"
          >
            <div class="col grow">
              <h6
                v-i18n:cx-sx-content-comparator-mapped-section-header-title="[
                  getAutonym(suggestion.targetLanguage)
                ]"
                class="sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1"
              />
              <h6
                class="sx-content-comparator-header__mapped-section-target-title pa-0 ms-1"
              >
                {{ activeSectionTargetTitle }}
              </h6>
            </div>
            <div class="col shrink">
              <mw-button class="pa-0" :icon="mwIconTrash" type="icon" />
            </div>
          </div>
          <p
            v-i18n-html:cx-sx-content-comparator-mapped-section-clarifications
            class="sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
          />
        </div>
      </div>
    </template>
    <div class="sx-content-comparator__source-target-selector">
      <mw-button-group
        :items="listSelector"
        :active="sourceVsTargetSelection"
        @select="sourceVsTargetSelection = $event"
      />
    </div>
    <section
      v-if="sourceVsTargetSelection === 'source_section'"
      class="sx-content-comparator__source-content pa-4"
    >
      <h2>{{ activeSectionSourceTitle }}</h2>
      <p v-html="sourceSectionContent"></p>
    </section>
    <section
      v-else-if="sourceVsTargetSelection === 'target_article'"
      class="sx-content-comparator__source-content pa-4"
    >
      <mw-spinner v-if="!targetPage.content" />
      <p v-html="targetPage.content"></p>
    </section>
    <section v-else class="sx-content-comparator__source-content pa-4">
      <p v-html="targetSectionContent"></p>
    </section>
    <sx-quick-tutorial
      :active.sync="tutorialActive"
      @tutorial-completed="goToSentenceSelector"
    />
    <sx-sentence-selector
      :suggestion="suggestion"
      :section-source-title="activeSectionSourceTitle"
      :active.sync="selectSentenceActive"
    />
  </mw-dialog>
</template>

<script>
import {
  mwIconPrevious,
  mwIconArrowForward,
  mwIconArrowPrevious,
  mwIconEdit,
  mwIconEye,
  mwIconTrash
} from "../lib/mediawiki.ui/components/icons";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import MwButtonGroup from "../lib/mediawiki.ui/components/MWButtonGroup";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import autonymMixin from "../mixins/autonym";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";
import SxQuickTutorial from "./SXQuickTutorial";
import SxSentenceSelector from "./SXSentenceSelector";

export default {
  name: "SxContentComparator",
  components: {
    MwButtonGroup,
    MwIcon,
    MwButton,
    MwDialog,
    MwSpinner,
    SxQuickTutorial,
    SxSentenceSelector
  },
  mixins: [autonymMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    activeSectionSourceTitle: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconEye,
    mwIconEdit,
    mwIconPrevious,
    mwIconArrowForward,
    mwIconArrowPrevious,
    mwIconTrash,
    contentComparatorActive: false,
    sourceVsTargetSelection: "source_section",
    tutorialActive: false,
    selectSentenceActive: false
  }),
  computed: {
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
    /**
     * @return {PageSection[]}
     */
    targetPageSections() {
      return this.targetPage?.sections;
    },
    targetPage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.targetLanguage,
        this.suggestion.targetTitle
      );
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
        this.missingSections[this.activeSectionSourceTitle] ||
        this.suggestion.presentSections[this.activeSectionSourceTitle]
      );
    },
    sourceSectionContent() {
      return (this.sourcePageSections || []).find(
        section => section.line === this.activeSectionSourceTitle
      )?.text;
    },
    targetSectionContent() {
      return (this.targetPageSections || []).find(
        section => section.line === this.activeSectionSourceTitle
      )?.text;
    },
    isMissingSection() {
      return this.missingSections.hasOwnProperty(this.activeSectionSourceTitle);
    },
    isPresentSection() {
      return !this.isMissingSection && true;
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
      const targetSelectorItem = this.isPresentSection
        ? {
            value: "target_section",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-target-section-title",
                this.getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text"
            }
          }
        : {
            value: "target_article",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-full-article-title",
                this.getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text"
            }
          };
      return [sourceSelectorItem, targetSelectorItem];
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
      this.$store.dispatch("mediawiki/fetchPageSections", {
        language: this.suggestion.sourceLanguage,
        title: this.suggestion.sourceTitle
      });
    },
    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    targetTitle() {
      this.$store.dispatch("mediawiki/fetchPageContent", {
        language: this.suggestion.targetLanguage,
        title: this.suggestion.targetTitle
      });
    }
  },
  methods: {
    translateSection() {
      if (this.$store.getters["translator/hasSectionTranslations"]()) {
        this.goToSentenceSelector();
        return;
      }
      this.goToTutorial();
    },
    goToTutorial() {
      this.tutorialActive = true;
    },
    goToSentenceSelector() {
      this.selectSentenceActive = true;
    },
    previousSection() {
      const currentIndex = this.sectionSourceTitles.indexOf(
        this.activeSectionSourceTitle
      );
      const previousIndex =
        currentIndex === 0
          ? this.sectionSourceTitles.length - 1
          : currentIndex - 1;
      this.$emit(
        "update:active-section-source-title",
        this.sectionSourceTitles[previousIndex]
      );
    },
    nextSection() {
      const currentIndex = this.sectionSourceTitles.indexOf(
        this.activeSectionSourceTitle
      );
      const nextIndex =
        currentIndex === this.sectionSourceTitles.length - 1
          ? 0
          : currentIndex + 1;
      this.$emit(
        "update:active-section-source-title",
        this.sectionSourceTitles[nextIndex]
      );
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-content-comparator {
  .sx-content-comparator-header__section-title {
    border: none;
  }

  .sx-content-comparator-header__review-contents {
    color: @color-base;
  }
  .sx-content-comparator-header__mapped-section {
    background-color: @background-color-base--disabled;
    border-radius: @border-radius-base;
    .sx-content-comparator-header__mapped-section-header {
      border-bottom: @border-width-base @border-style-base
        @border-color-base--disabled;
      .sx-content-comparator-header__mapped-section-header-title {
        // No typography style for this font-size in UI library
        font-size: 14px;
        // TODO: Fix this to be base20
        color: @color-base--subtle;
      }
      .sx-content-comparator-header__mapped-section-target-title {
        color: @color-base;
      }
    }
    .sx-content-comparator-header__mapped-section-clarifications {
      color: @color-base;
      line-height: 1.3;
    }
  }
  .sx-content-comparator__source-target-selector {
    .mw-ui-button-group {
      background: @background-color-framed;
      color: @color-base;
    }
  }
  .sx-content-comparator__source-content {
    line-height: 1.3;
  }
}
</style>
