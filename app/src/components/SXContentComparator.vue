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
        <mw-row class="my-1 py-2 mx-0">
          <mw-col grow>
            <h4 class="pa-0 sx-content-comparator-header__article-title">
              {{ suggestion.sourceTitle }}
            </h4>
            <h2 class="sx-content-comparator-header__section-title pa-0 ma-0">
              {{ activeSectionSourceTitle }}
            </h2>
          </mw-col>
          <mw-col cols="2" class="items-center justify-end">
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
          </mw-col>
          <mw-col cols="12" sm="12" md="4" class="py-2 mb-1">
            <mw-button
              :icon="mwIconEdit"
              :progressive="true"
              :label="
                $i18n(
                  'cx-sx-content-comparator-translation-section-button-label'
                )
              "
              @click="translateSection"
            />
          </mw-col>
        </mw-row>
        <mw-row
          v-if="isCurrentSectionMissing"
          align="start"
          class="sx-content-comparator-header__review-contents mx-0"
        >
          <mw-col shrink class="pe-2">
            <mw-icon :icon="mwIconEye" />
          </mw-col>
          <mw-col class="ma-0">
            <strong v-i18n:cx-sx-content-comparator-review-contents-title />
            <br />
            <span v-i18n:cx-sx-content-comparator-review-contents-rest />
          </mw-col>
        </mw-row>
        <div v-else class="sx-content-comparator-header__mapped-section">
          <mw-row
            class="sx-content-comparator-header__mapped-section-header pa-2 ma-0"
          >
            <mw-col grow>
              <h6
                class="sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1"
              >
                {{
                  $i18n(
                    "cx-sx-content-comparator-mapped-section-header-title",
                    getAutonym(suggestion.targetLanguage)
                  )
                }}
                <span
                  v-if="isCurrentSectionDiscarded"
                  v-i18n:cx-sx-content-comparator-discarded-section-label
                />
              </h6>
              <h6
                class="sx-content-comparator-header__mapped-section-target-title pa-0 ms-1"
                :class="{
                  'sx-content-comparator-header__mapped-section-target-title--discarded': isCurrentSectionDiscarded
                }"
              >
                {{ activeSectionTargetTitle }}
              </h6>
            </mw-col>
            <mw-col shrink>
              <mw-button
                v-if="!isCurrentSectionDiscarded"
                class="pa-0"
                :icon="mwIconTrash"
                type="icon"
                @click="discardMapping"
              />
              <mw-button
                v-else
                class="pa-0"
                :icon="mwIconUndo"
                type="icon"
                @click="undoDiscard"
              />
            </mw-col>
          </mw-row>
          <p
            v-if="!isCurrentSectionDiscarded"
            v-i18n-html:cx-sx-content-comparator-mapped-section-clarifications
            class="sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
          />
          <p
            v-else
            v-i18n-html:cx-sx-content-comparator-discarded-section-clarifications
            class="sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
          />
        </div>
      </div>
      <div class="sx-content-comparator__source-target-selector">
        <mw-button-group
          :items="listSelector"
          :active="sourceVsTargetSelection"
          @select="sourceVsTargetSelection = $event"
        />
      </div>
    </template>
    <section
      v-if="sourceVsTargetSelection === 'source_section'"
      class="sx-content-comparator__source-content pa-4"
    >
      <mw-row
        class="sx-content-comparator__content-header justify-between ma-0 pb-2"
      >
        <h3 v-text="activeSectionSourceTitle" />
        <mw-button
          class="pa-0 pe-2"
          :icon="mwIconLinkExternal"
          type="icon"
          :href="sourceSectionPath"
          target="_blank"
        />
      </mw-row>
      <section class="pt-2" v-html="sourceSectionContent"></section>
    </section>
    <section
      v-else-if="sourceVsTargetSelection === 'target_article'"
      class="sx-content-comparator__source-content pa-4"
    >
      <mw-row
        class="sx-content-comparator__content-header justify-between ma-0 pb-2"
      >
        <h3 v-text="suggestion.targetTitle" />
        <mw-button
          class="pa-0 pe-2"
          :icon="mwIconLinkExternal"
          type="icon"
          :href="targetArticlePath"
          target="_blank"
        />
      </mw-row>
      <mw-spinner v-if="!targetPage.content" />
      <article v-html="targetPage.content"></article>
    </section>
    <section v-else class="sx-content-comparator__source-content pa-4">
      <div
        class="sx-content-comparator__content-header justify-between ma-0 pb-2"
      >
        <h3 v-text="activeSectionTargetTitle" />
        <mw-button
          class="pa-0 pe-2"
          :icon="mwIconLinkExternal"
          type="icon"
          :href="targetSectionPath"
          target="_blank"
        />
      </div>
      <section class="pa-4" v-html="targetSectionContent" />
      <section
        class="sx-content-comparator__new-section-placeholder--present pa-4 px-7"
      >
        <h5 v-i18n:cx-sx-content-comparator-present-section-placeholder-title />
        <p
          v-i18n:cx-sx-content-comparator-present-section-placeholder-subtitle
        />
      </section>
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
  mwIconTrash,
  mwIconLinkExternal,
  mwIconUndo
} from "@/lib/mediawiki.ui/components/icons";
import {
  MwCol,
  MwRow,
  MwButton,
  MwDialog,
  MwIcon,
  MwButtonGroup,
  MwSpinner
} from "@/lib/mediawiki.ui";
import autonymMixin from "@/mixins/autonym";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SxQuickTutorial from "./SXQuickTutorial";
import SxSentenceSelector from "./SXSentenceSelector";

export default {
  name: "SxContentComparator",
  components: {
    MwCol,
    MwRow,
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
    mwIconLinkExternal,
    mwIconUndo,
    contentComparatorActive: false,
    sourceVsTargetSelection: "source_section",
    tutorialActive: false,
    selectSentenceActive: false,
    discardedSections: []
  }),
  computed: {
    targetArticlePath() {
      return `https://${this.suggestion.targetLanguage}.wikipedia.org/wiki/${this.suggestion.targetTitle}`;
    },
    targetSectionPath() {
      return `${this.targetArticlePath}#${this.targetSection?.anchor}`;
    },
    sourceSectionPath() {
      return `https://${this.suggestion.sourceLanguage}.wikipedia.org/wiki/${this.suggestion.sourceTitle}#${this.sourceSection.anchor}`;
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
    sourceSection() {
      return (this.sourcePageSections || []).find(
        section => section.line === this.activeSectionSourceTitle
      );
    },
    targetSection() {
      return (this.targetPageSections || []).find(
        section => section.line === this.activeSectionTargetTitle
      );
    },
    sourceSectionContent() {
      return this.sourceSection?.text;
    },
    targetSectionContent() {
      return this.targetSection?.text;
    },
    isCurrentSectionMissing() {
      return this.missingSections.hasOwnProperty(this.activeSectionSourceTitle);
    },
    isCurrentSectionMapped() {
      return !this.isCurrentSectionMissing && !this.isCurrentSectionDiscarded;
    },
    isCurrentSectionDiscarded() {
      return this.discardedSections.includes(this.activeSectionTargetTitle);
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
      const targetSelectorItem = this.isCurrentSectionMapped
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
    targetPage() {
      this.$store.dispatch("mediawiki/fetchPageSections", {
        language: this.suggestion.targetLanguage,
        title: this.suggestion.targetTitle
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
    },
    discardMapping() {
      if (!this.isCurrentSectionDiscarded) {
        this.discardedSections.push(this.activeSectionTargetTitle);
      }
    },
    undoDiscard() {
      if (this.isCurrentSectionDiscarded) {
        this.discardedSections = this.discardedSections.filter(
          sectionTitle => sectionTitle !== this.activeSectionTargetTitle
        );
      }
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
        &.sx-content-comparator-header__mapped-section-target-title--discarded {
          text-decoration: line-through;
        }
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
  .sx-content-comparator__content-header {
    // Not border style defined in specifications
    border-bottom: @border-style-base @border-width-base
      @border-color-base--disabled;
    .mw-ui-icon {
      color: @color-base--subtle;
    }
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
