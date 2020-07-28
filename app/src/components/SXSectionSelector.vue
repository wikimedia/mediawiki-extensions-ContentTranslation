<template>
  <mw-dialog
    v-show="active"
    class="sx-selector"
    animation="slide-up"
    :fullscreen="true"
    @close="onClose()"
  >
    <template slot="header">
      <div class="sx-selector__header pa-4">
        <div class="row justify-start ma-0 pb-3">
          <div class="col">
            <h6
              v-i18n:cx-sx-section-selector-title
              class="sx-selector__header-text ma-0"
            ></h6>
            <h2 class="sx-selector__title ma-0 py-0">
              {{ suggestion.sourceTitle }}
            </h2>
          </div>
          <div class="col shrink justify-end">
            <mw-button
              class="pa-0"
              :large="true"
              type="icon"
              :icon="mwIconClose"
              @click="onClose()"
            />
          </div>
        </div>
        <h4 v-i18n:cx-sx-section-selector-subtitle class="pt-0 ma-0"></h4>
        <p v-i18n:cx-sx-section-selector-desc class="ma-0"></p>
      </div>
    </template>
    <div class="sx-selector__body">
      <sx-article-language-selector />
      <div class="sx-selector__missing-sections py-2">
        <h4
          v-i18n:cx-sx-section-selector-missing-sections-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        ></h4>
        <ul
          v-if="!emptyMissingSections"
          class="sx-selector__missing-sections-list ma-0 pa-0"
        >
          <li
            v-for="(targetSection, sourceSection) in suggestion.missingSections"
            :key="sourceSection"
            class="row ma-0"
          >
            <mw-button
              class="col-12 justify-between py-3 px-4"
              :indicator="mwIconArrowForward"
              :label="sourceSection"
              type="text"
              :outlined="false"
              :block="true"
              @click="selectSection(sourceSection)"
            />
          </li>
        </ul>
        <div
          v-if="emptyMissingSections"
          class="sx-selector__empty-missing-sections row px-4 my-0"
        >
          <div class="col py-6 justify-center" v-html="sadRobotSVG" />
          <div class="sx-selector__empty-missing-sections-details col-12 pa-0">
            <h6 v-i18n:cx-sx-section-selector-empty-missing-sections-title />
          </div>
          <div
            class="sx-selector__empty-missing-sections-details col-12 pa-0 mb-2"
          >
            <p v-i18n:cx-sx-section-selector-empty-missing-sections-desc />
          </div>
          <div class="col-12 pa-0 mb-2">
            <mw-button
              v-i18n:cx-sx-section-selector-pick-other-translation-button-label
              class="sx-selector__empty-missing-sections__close-button px-0"
              type="text"
              @click="onClose()"
            ></mw-button>
          </div>
        </div>
      </div>
      <div class="sx-selector__present-sections py-2">
        <h4
          v-i18n:cx-sx-section-selector-present-sections-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        ></h4>
        <ul class="sx-selector__present-sections-list ma-0 pa-0">
          <li
            v-for="(targetSection, sourceSection) in suggestion.presentSections"
            :key="sourceSection"
            class="row ma-0"
            @click="selectSection(sourceSection)"
          >
            <mw-button
              class="col-12 justify-between items-center py-3 px-4"
              :indicator="mwIconArrowForward"
              type="text"
              :outlined="false"
              :block="true"
            >
              <div class="sx-selector__present-section-button-content">
                <h5 class="sx-selector__present-section-button-source">
                  {{ sourceSection }}
                </h5>
                <h6 class="sx-selector__present-section-button-target">
                  {{ targetSection }}
                </h6>
              </div>
            </mw-button>
          </li>
        </ul>
      </div>
      <div class="py-2">
        <h4
          v-i18n:cx-sx-section-selector-more-details-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        ></h4>
        <ul class="ma-0 pa-0">
          <li class="row ma-0">
            <mw-button
              :href="sourceArticlePath"
              target="_blank"
              class="col-12 justify-between py-3 px-4"
              :indicator="mwIconLinkExternal"
              :label="
                $i18n(
                  'cx-sx-section-selector-view-article-button-label',
                  sourceLanguageAutonym
                )
              "
              type="text"
              :outlined="false"
              :block="true"
            />
          </li>
          <li class="row ma-0">
            <mw-button
              :href="targetArticlePath"
              target="_blank"
              class="col-12 justify-between py-3 px-4"
              :indicator="mwIconLinkExternal"
              :label="
                $i18n(
                  'cx-sx-section-selector-view-article-button-label',
                  targetLanguageAutonym
                )
              "
              type="text"
              :outlined="false"
              :block="true"
            />
          </li>
        </ul>
      </div>
      <div class="row sx-selector__additional-considerations ma-0">
        <div class="col-md-6 col-12">
          <div class="pa-3 pt-5">
            <h6>
              <mw-icon :icon="mwIconRobot" />
              {{
                $i18n("cx-sx-section-selector-automatic-section-matching-title")
              }}
            </h6>
            <p
              v-i18n:cx-sx-section-selector-automatic-section-matching-description
            ></p>
            <a
              v-i18n:cx-sx-section-selector-learn-more-anchor-label
              href="#"
            ></a>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="pa-3 pt-5">
            <h6>
              <mw-icon :icon="mwIconLabFlask" />
              {{ $i18n("cx-sx-section-selector-unsupported-sections-title") }}
            </h6>
            <p>
              {{
                $i18n("cx-sx-section-selector-unsupported-sections-description")
              }}
            </p>
            <a
              v-i18n:cx-sx-section-selector-learn-more-anchor-label
              href="#"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <sx-content-comparator
      :active.sync="contentComparatorActive"
      :suggestion="suggestion"
      :active-section-source-title="selectedSectionKey"
    />
  </mw-dialog>
</template>

<script>
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";

import {
  mwIconClose,
  mwIconArrowForward,
  mwIconLinkExternal,
  mwIconRobot,
  mwIconLabFlask
} from "../lib/mediawiki.ui/components/icons";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";
import SxArticleLanguageSelector from "./SXArticleLanguageSelector";
import autonymMixin from "../mixins/autonym";
import SxContentComparator from "./SXContentComparator";

export default {
  name: "SxSectionSelector",
  components: {
    SxContentComparator,
    MwIcon,
    MwDialog,
    MwButton,
    SxArticleLanguageSelector
  },
  mixins: [autonymMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    suggestion: {
      type: SectionSuggestion
    }
  },
  data: () => ({
    mwIconClose,
    mwIconArrowForward,
    mwIconLinkExternal,
    mwIconRobot,
    mwIconLabFlask,
    contentComparatorActive: false,
    selectedSectionKey: "",
    sectionToTranslate: null,
    sadRobotSVG: require("!html-loader!../assets/sad-robot.svg")
  }),
  computed: {
    sourceLanguageAutonym() {
      return this.getAutonym(this.suggestion.sourceLanguage);
    },
    targetLanguageAutonym() {
      return this.getAutonym(this.suggestion.targetLanguage);
    },
    emptyMissingSections() {
      return Object.keys(this.suggestion.missingSections).length === 0;
    },
    sourceArticlePath() {
      return `https://${this.suggestion.sourceLanguage}.wikipedia.org/wiki/${this.suggestion.sourceTitle}`;
    },
    targetArticlePath() {
      return `https://${this.suggestion.targetLanguage}.wikipedia.org/wiki/${this.suggestion.targetTitle}`;
    }
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    selectSection(sourceSection) {
      this.contentComparatorActive = true;
      this.selectedSectionKey = sourceSection;
    }
  }
};
</script>
<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-selector {
  .sx-selector__header {
    border-bottom: @border-width-base @border-style-base
      @background-color-notice--framed;
    .sx-selector__title {
      color: @color-base;
      border: none;
    }
    .sx-selector__header-text {
      color: @color-base;
    }
  }

  .sx-selector__body {
    .sx-selector__list-title {
      color: @color-base--subtle;
    }

    /*Fix this to be base20*/
    .sx-selector__empty-missing-sections-details {
      h6 {
        color: @color-base--subtle;
      }
    }

    .sx-selector__empty-missing-sections__close-button {
      color: @color-primary;
    }

    .sx-selector__present-sections {
      background-color: @background-color-framed;
      .sx-selector__present-section-button-content {
        text-align: start;
        .sx-selector__present-section-button-target {
          // TODO: Fix this to be @base20 color - currently base30
          color: @color-base--subtle;
        }
      }
    }
  }
  .sx-selector__additional-considerations {
    // TODO: fix border color to be base80
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
  }
}
</style>
