<template>
  <mw-dialog
    class="sx-selector"
    v-show="active"
    @close="onClose()"
    animation="slide-up"
    :fullscreen="true"
  >
    <template slot="header">
      <div class="sx-selector__header pa-4">
        <div class="row justify-start ma-0 pb-3">
          <div class="col-11">
            <h3
              class="sx-selector__header-text ma-0"
              v-i18n:cx-sx-section-selector-title
            ></h3>
            <h2 class="sx-selector__title ma-0 pb-0">
              {{ suggestion.sourceTitle }}
            </h2>
          </div>
          <div class="col-1 justify-end">
            <mw-button
              class="pa-0"
              :large="true"
              type="icon"
              @click="onClose()"
              :icon="mwIconClose"
            />
          </div>
        </div>
        <h3
          class="row justify-start pt-0 ps-1 ma-0"
          v-i18n:cx-sx-section-selector-subtitle
        ></h3>
        <p
          class="row justify-start ps-1 ma-0"
          v-i18n:cx-sx-section-selector-desc
        ></p>
      </div>
    </template>
    <div class="sx-selector__body">
      <sx-article-language-selector />
      <div class="sx-selector__missing-sections py-2 px-3">
        <h4
          class="py-3 ps-1 sx-selector__list-title"
          v-i18n:cx-sx-section-selector-missing-sections-title="[
            targetLanguageAutonym
          ]"
        ></h4>
        <ul
          class="sx-selector__missing-sections-list ma-0"
          v-if="!emptyMissingSections"
        >
          <li
            class="row py-3 ma-0"
            v-for="(sourceSection, key) in suggestion.missingSections"
            :key="key"
          >
            <mw-button
              class="col-12 justify-between pa-0"
              :indicator="mwIconArrowForward"
              :label="key"
              type="text"
              :outlined="false"
              :block="true"
            />
          </li>
        </ul>
        <!--        // TODO: Complete empty missing sections state in another iteration (alignment and illustration missing)-->
        <div class="row px-4" v-if="emptyMissingSections">
          <div class="col-12 pa-0">
            <h6 v-i18n:cx-sx-section-selector-empty-missing-sections-title></h6>
          </div>
          <div class="col-12 mb-4">
            <p v-i18n:cx-sx-section-selector-empty-missing-sections-desc></p>
          </div>
          <div class="col-12 mb-4">
            <a
              v-i18n:cx-sx-section-selector-pick-other-translation-button-label
            ></a>
          </div>
        </div>
      </div>
      <div class="sx-selector__present-sections py-2 px-3">
        <h4
          class="py-3 ps-1 sx-selector__list-title"
          v-i18n:cx-sx-section-selector-present-sections-title="[
            targetLanguageAutonym
          ]"
        ></h4>
        <ul class="sx-selector__present-sections-list ma-0">
          <li
            class="row py-3 ma-0"
            v-for="(sourceSection, key) in suggestion.presentSections"
            :key="key"
          >
            <mw-button
              class="col-12 justify-between pa-0"
              :indicator="mwIconLinkExternal"
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
      <div class="py-2 px-3">
        <h4
          class="py-3 ps-1 sx-selector__list-title"
          v-i18n:cx-sx-section-selector-more-details-title="[
            targetLanguageAutonym
          ]"
        ></h4>
        <ul class="ma-0">
          <li class="row py-3 ma-0">
            <mw-button
              class="col-12 justify-between pa-0"
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
          <li class="row py-3 ma-0">
            <mw-button
              class="col-12 justify-between pa-0"
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
              href="#"
              v-i18n:cx-sx-section-selector-learn-more-anchor-label
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
              href="#"
              v-i18n:cx-sx-section-selector-learn-more-anchor-label
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
  name: "sx-section-selector",
  components: { MwIcon, MwDialog, MwButton, SxArticleLanguageSelector },
  mixins: [autonymMixin],
  data: () => ({
    mwIconClose,
    mwIconArrowForward,
    mwIconLinkExternal,
    mwIconRobot,
    mwIconLabFlask
  }),
  props: {
    active: {
      type: Boolean,
      default: false
    },
    suggestion: {
      type: SectionSuggestion
    }
  },
  computed: {
    sourceLanguageAutonym() {
      return this.getAutonym(this.suggestion.sourceLanguage);
    },
    targetLanguageAutonym() {
      return this.getAutonym(this.suggestion.targetLanguage);
    },
    emptyMissingSections() {
      return Object.keys(this.suggestion.missingSections).length === 0;
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
    color: @color-base;
    border-bottom: @border-width-base @border-style-base
      @background-color-notice--framed;
    .sx-selector__title {
      border: none;
      font-weight: bold;
    }
  }

  .sx-selector__body {
    .sx-selector__list-title {
      color: @color-base--subtle;
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
