<template>
  <section class="sx-selector">
    <div class="sx-selector__header pa-4">
      <mw-row class="ma-0 pb-3">
        <mw-col>
          <h6
            v-i18n:cx-sx-section-selector-title
            class="sx-selector__header-text ma-0"
          />
          <h2
            class="sx-selector__title ma-0 py-0"
            v-text="suggestion.sourceTitle"
          />
        </mw-col>
        <mw-col shrink class="justify-end">
          <mw-button
            class="pa-0"
            :large="true"
            type="icon"
            :icon="mwIconClose"
            @click="onClose()"
          />
        </mw-col>
      </mw-row>
      <h4 v-i18n:cx-sx-section-selector-subtitle class="pt-0 ma-0" />
      <p v-i18n:cx-sx-section-selector-desc class="ma-0" />
    </div>
    <section class="sx-selector__body">
      <sx-article-language-selector />
      <section class="sx-selector__missing-sections py-2">
        <h4
          v-i18n:cx-sx-section-selector-missing-sections-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        />
        <ul
          v-if="!emptyMissingSections"
          class="sx-selector__missing-sections-list ma-0 pa-0"
        >
          <mw-row
            v-for="(targetSection, sourceSection) in suggestion.missingSections"
            :key="sourceSection"
            tag="li"
            class="ma-0"
          >
            <mw-button
              class="col justify-between py-3 px-4"
              :indicator="mwIconArrowForward"
              :label="sourceSection"
              type="text"
              :outlined="false"
              @click="selectSection(sourceSection)"
            />
          </mw-row>
        </ul>
        <mw-row
          v-if="emptyMissingSections"
          class="sx-selector__empty-missing-sections px-4 my-0"
        >
          <mw-col class="py-6 justify-center" v-html="sadRobotSVG" />
          <mw-col
            cols="12"
            class="sx-selector__empty-missing-sections-details pa-0"
          >
            <h6 v-i18n:cx-sx-section-selector-empty-missing-sections-title />
          </mw-col>
          <mw-col
            cols="12"
            class="sx-selector__empty-missing-sections-details pa-0 mb-2"
          >
            <p v-i18n:cx-sx-section-selector-empty-missing-sections-desc />
          </mw-col>
          <mw-col cols="12" class="pa-0 mb-2">
            <mw-button
              v-i18n:cx-sx-section-selector-pick-other-translation-button-label
              class="sx-selector__empty-missing-sections__close-button px-0"
              type="text"
              @click="onClose()"
            />
          </mw-col>
        </mw-row>
      </section>
      <section class="sx-selector__present-sections py-2">
        <h4
          v-i18n:cx-sx-section-selector-present-sections-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        />
        <ul class="sx-selector__present-sections-list ma-0 pa-0">
          <mw-row
            v-for="(targetSection, sourceSection) in suggestion.presentSections"
            :key="sourceSection"
            tag="li"
            class="ma-0"
            @click="selectSection(sourceSection)"
          >
            <mw-button
              class="col justify-between items-center py-3 px-4"
              :indicator="mwIconArrowForward"
              type="text"
              :outlined="false"
            >
              <div class="sx-selector__present-section-button-content">
                <h5
                  class="sx-selector__present-section-button-source"
                  v-text="sourceSection"
                />
                <h6
                  class="sx-selector__present-section-button-target"
                  v-text="targetSection"
                />
              </div>
            </mw-button>
          </mw-row>
        </ul>
      </section>
      <section class=" py-2">
        <h4
          v-i18n:cx-sx-section-selector-more-details-title="[
            targetLanguageAutonym
          ]"
          class="sx-selector__list-title mb-0 pb-0 py-3 px-4"
        />
        <ul class="ma-0 pa-0">
          <mw-row tag="li" class="ma-0">
            <mw-button
              :href="sourceArticlePath"
              target="_blank"
              class="col justify-between py-3 px-4"
              :indicator="mwIconLinkExternal"
              :label="
                $i18n(
                  'cx-sx-section-selector-view-article-button-label',
                  sourceLanguageAutonym
                )
              "
              type="text"
              :outlined="false"
            />
          </mw-row>
          <mw-row tag="li" class="ma-0">
            <mw-button
              :href="targetArticlePath"
              target="_blank"
              class="col justify-between py-3 px-4"
              :indicator="mwIconLinkExternal"
              :label="
                $i18n(
                  'cx-sx-section-selector-view-article-button-label',
                  targetLanguageAutonym
                )
              "
              type="text"
              :outlined="false"
            />
          </mw-row>
        </ul>
      </section>
      <mw-row class="sx-selector__additional-considerations ma-0">
        <mw-col cols="12" md="6" class="px-4 pt-5 pb-4">
          <h6 class="sx-selector__additional-consideration-title">
            <mw-icon :icon="mwIconRobot" class="pe-2" />
            {{
              $i18n("cx-sx-section-selector-automatic-section-matching-title")
            }}
          </h6>
          <p
            v-i18n:cx-sx-section-selector-automatic-section-matching-description
          />
          <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
        </mw-col>
        <mw-col cols="12" md="6" class="px-4 py-5">
          <h6 class="sx-selector__additional-consideration-title">
            <mw-icon :icon="mwIconLabFlask" class="pe-2" />
            {{ $i18n("cx-sx-section-selector-unsupported-sections-title") }}
          </h6>
          <p v-i18n:cx-sx-section-selector-unsupported-sections-description />
          <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
        </mw-col>
      </mw-row>
    </section>
  </section>
</template>

<script>
import { MwButton, MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconClose,
  mwIconArrowForward,
  mwIconLinkExternal,
  mwIconRobot,
  mwIconLabFlask
} from "@/lib/mediawiki.ui/components/icons";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import autonymMixin from "../../mixins/autonym";
import { mapState } from "vuex";

export default {
  name: "SxSectionSelector",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwButton,
    SxArticleLanguageSelector
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconClose,
    mwIconArrowForward,
    mwIconLinkExternal,
    mwIconRobot,
    mwIconLabFlask,
    sadRobotSVG: require("!html-loader!../../assets/sad-robot.svg")
  }),
  computed: {
    ...mapState({
      suggestion: state => state.suggestions.currentSectionSuggestion
    }),
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
      this.$router.go(-1);
    },
    selectSection(sourceSection) {
      this.$router.push({
        name: "sx-content-comparator",
        params: { sourceSectionTitle: sourceSection }
      });
    }
  }
};
</script>
<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

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
    .sx-selector__additional-consideration-title {
      .mw-ui-icon {
        display: inherit;
      }
    }
  }
}
</style>
