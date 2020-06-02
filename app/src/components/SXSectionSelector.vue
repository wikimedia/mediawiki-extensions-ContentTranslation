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
      <div class="sx-selector__missing-sections pt-2">
        <h4
          class="pa-3 ps-4 sx-selector__list-title"
          v-i18n:cx-sx-section-missing-sections-title="[targetLanguageAutonym]"
        ></h4>
        <ul class="sx-selector__missing-sections-list ma-0">
          <li
            class="row pa-3 ps-4 ma-0"
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
      </div>
      <div class="sx-selector__present-sections pt-2">
        <h4
          class="pa-3 ps-4 sx-selector__list-title"
          v-i18n:cx-sx-section-present-sections-title="[targetLanguageAutonym]"
        ></h4>
        <ul class="sx-selector__present-sections-list ma-0">
          <li
            class="row pa-3 ps-4 ma-0"
            v-for="(sourceSection, key) in suggestion.presentSections"
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
      </div>
      <div class="pt-2">
        <h4
          class="pa-3 ps-4 sx-selector__list-title"
          v-i18n:cx-sx-section-more-details-title="[targetLanguageAutonym]"
        ></h4>
        <ul class="ma-0">
          <li class="row pa-3 ps-4 ma-0">
            <mw-button
              class="col-12 justify-between pa-0"
              :indicator="mwIconArrowForward"
              :label="
                $i18n(
                  'cx-sx-section-view-article-button-label',
                  sourceLanguageAutonym
                )
              "
              type="text"
              :outlined="false"
              :block="true"
            />
          </li>
          <li class="row pa-3 ps-4 ma-0">
            <mw-button
              class="col-12 justify-between pa-0"
              :indicator="mwIconArrowForward"
              :label="
                $i18n(
                  'cx-sx-section-view-article-button-label',
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
    </div>
  </mw-dialog>
</template>

<script>
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import {
  mwIconClose,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";
import SxArticleLanguageSelector from "./SXArticleLanguageSelector";
import autonymMixin from "./autonym-mixin";

export default {
  name: "sx-section-selector",
  components: { MwDialog, MwButton, SxArticleLanguageSelector },
  mixins: [autonymMixin],
  data: () => ({
    mwIconClose,
    mwIconArrowForward
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
    }
  }
}
</style>
