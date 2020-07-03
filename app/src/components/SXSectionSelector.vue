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
          class="sx-selector__missing-sections-list ma-0"
        >
          <li
            v-for="(sourceSection, key) in suggestion.missingSections"
            :key="key"
            class="row ma-0"
          >
            <mw-button
              class="col-12 justify-between py-3 px-4"
              :indicator="mwIconArrowForward"
              :label="key"
              type="text"
              :outlined="false"
              :block="true"
            />
          </li>
        </ul>
        <div
          v-if="emptyMissingSections"
          class="sx-selector__empty-missing-sections row px-4 my-0"
        >
          <div class="col py-6 justify-center">
            <svg
              width="136px"
              height="136px"
              viewBox="0 0 136 136"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>sad-robot</title>
              <g
                id="sad-robot"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Group">
                  <circle
                    id="Oval"
                    fill="#EAECF0"
                    cx="68"
                    cy="68"
                    r="68"
                  ></circle>
                  <path
                    id="Mask"
                    d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z"
                    fill="#54595D"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="sx-selector__empty-missing-sections-details col-12 pa-0">
            <h6
              v-i18n:cx-sx-section-selector-empty-missing-sections-title
              class=""
            ></h6>
          </div>
          <div
            class="sx-selector__empty-missing-sections-details col-12 pa-0 mb-2"
          >
            <p v-i18n:cx-sx-section-selector-empty-missing-sections-desc></p>
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
        <ul class="sx-selector__present-sections-list ma-0">
          <li
            v-for="(sourceSection, key) in suggestion.presentSections"
            :key="key"
            class="row ma-0"
          >
            <mw-button
              class="col-12 justify-between py-3 px-4"
              :indicator="mwIconArrowForward"
              type="text"
              :outlined="false"
              :block="true"
            >
              <div class="sx-selector__present-section-button-content">
                <p class="sx-selector__present-section-button-source mb-0">
                  {{ key }}
                </p>
                <p class="sx-selector__present-section-button-target mb-0">
                  {{ sourceSection }}
                </p>
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
        <ul class="ma-0">
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
import autonymMixin from "../lib/mediawiki.ui/mixins/autonym";

export default {
  name: "SxSectionSelector",
  components: { MwIcon, MwDialog, MwButton, SxArticleLanguageSelector },
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
    mwIconLabFlask
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
    onSectionSelectorClick() {
      this.$emit("section-selector-button-click");
      this.$emit("section-listing-open");
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
      font-weight: bold;
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
          font-weight: normal;
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
