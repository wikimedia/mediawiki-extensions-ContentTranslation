<template>
  <div class="row sx-translation-list-language-selector ma-0 justify-center">
    <div class="col-5 justify-end">
      <mw-button
        :indicator="mwIconExpand"
        :outlined="false"
        class="pa-3 sx-translation-list-language-selector__button"
        type="text"
        @click.stop="openSourceLanguageDialog"
      >
        <span
          class="mw-ui-autonym"
          :dir="getDirection(selectedSourceLanguage)"
          v-text="getAutonym(selectedSourceLanguage)"
        ></span>
      </mw-button>
      <mw-dialog
        v-show="sourceLanguageSelectOn"
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        animation="slide-up"
        :fullscreen="true"
        @close="onSourceLanguageDialogClose"
      >
        <div class="row">
          <mw-language-selector
            v-if="sourceLanguageSelectOn"
            class="sx-translation-list-language-selector__widget col-12"
            :languages="sourceLanguages"
            @select="onSourceLanguageSelected"
          ></mw-language-selector>
        </div>
      </mw-dialog>
    </div>
    <div
      class="sx-translation-list-language-selector__arrow col-2 justify-center"
    >
      <mw-icon :icon="mwIconArrowNext" />
    </div>
    <div class="col-5 justify-start">
      <mw-button
        :indicator="mwIconExpand"
        :outlined="false"
        class="pa-3 sx-translation-list-language-selector__button"
        type="text"
        @click.stop="openTargetLanguageDialog"
      >
        <span
          class="mw-ui-autonym"
          :dir="getDirection(selectedTargetLanguage)"
          v-text="getAutonym(selectedTargetLanguage)"
        ></span>
      </mw-button>
      <mw-dialog
        v-show="targetLanguageSelectOn"
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        animation="slide-up"
        :fullscreen="true"
        @close="onTargetLanguageDialogClose"
      >
        <div class="row">
          <mw-language-selector
            v-if="targetLanguageSelectOn"
            class="sx-translation-list-language-selector__widget col-12"
            :languages="targetLanguages"
            @select="onTargetLanguageSelected"
          ></mw-language-selector>
        </div>
      </mw-dialog>
    </div>
  </div>
</template>

<script>
import {
  MwLanguageSelector,
  MwDialog,
  MwIcon,
  MwButton
} from "../lib/mediawiki.ui";
import autonymMixin from "../mixins/autonym";
import {
  mwIconArrowNext,
  mwIconExpand
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwButton
  },
  mixins: [autonymMixin],
  props: {
    selectedSourceLanguage: {
      type: String,
      required: true
    },
    selectedTargetLanguage: {
      type: String,
      required: true
    },
    sourceLanguages: {
      type: Array,
      required: true
    },
    targetLanguages: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    mwIconArrowNext,
    mwIconExpand,
    sourceLanguageSelectOn: false,
    targetLanguageSelectOn: false
  }),
  methods: {
    openSourceLanguageDialog() {
      this.sourceLanguageSelectOn = true;
    },
    openTargetLanguageDialog() {
      this.targetLanguageSelectOn = true;
    },
    onSourceLanguageDialogClose() {
      this.sourceLanguageSelectOn = false;
    },
    onTargetLanguageDialogClose() {
      this.targetLanguageSelectOn = false;
    },
    onSourceLanguageSelected(sourceLanguage) {
      this.sourceLanguageSelectOn = false;
      this.$emit("update:selected-source-language", sourceLanguage);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.targetLanguageSelectOn = false;
      this.$emit("update:selected-target-language", targetLanguage);
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-translation-list-language-selector {
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
