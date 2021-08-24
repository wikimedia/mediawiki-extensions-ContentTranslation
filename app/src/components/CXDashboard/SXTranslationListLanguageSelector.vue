<template>
  <div
    class="row sx-translation-list-language-selector ma-0 justify-center items-center"
  >
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
          :dir="getDir(selectedSourceLanguage)"
          v-text="getAutonym(selectedSourceLanguage)"
        />
      </mw-button>

      <mw-dialog
        v-if="sourceLanguageSelectOn"
        animation="slide-up"
        :title="$i18n('sx-translation-list-language-selector-dialog-title')"
        :fullscreen="fullscreen"
        :header="fullscreen"
        :overlay-opacity="0"
        @close="onSourceLanguageDialogClose"
      >
        <mw-language-selector
          class="sx-translation-list-language-selector__widget col-12"
          :placeholder="$i18n('cx-sx-language-selector-placeholder')"
          :languages="sourceLanguages"
          @select="onSourceLanguageSelected"
          @close="onSourceLanguageDialogClose"
        />
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
        :disabled="targetLanguages.length < 2"
        @click.stop="openTargetLanguageDialog"
      >
        <span
          class="mw-ui-autonym"
          :dir="getDir(selectedTargetLanguage)"
          v-text="getAutonym(selectedTargetLanguage)"
        />
      </mw-button>
      <mw-dialog
        v-if="targetLanguageSelectOn"
        animation="slide-up"
        :fullscreen="fullscreen"
        :header="fullscreen"
        :overlay-opacity="0"
        :title="$i18n('sx-translation-list-language-selector-dialog-title')"
        @close="onTargetLanguageDialogClose"
      >
        <mw-language-selector
          class="sx-translation-list-language-selector__widget col-12"
          :placeholder="$i18n('cx-sx-language-selector-placeholder')"
          :languages="targetLanguages"
          @select="onTargetLanguageSelected"
          @close="onTargetLanguageDialogClose"
        />
      </mw-dialog>
    </div>
  </div>
</template>

<script>
import { MwIcon, MwButton, MwDialog } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import MwLanguageSelector from "../MWLanguageSelector";
import {
  mwIconArrowNext,
  mwIconExpand
} from "@/lib/mediawiki.ui/components/icons";
import { mapState } from "vuex";

export default {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwButton
  },
  props: {
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
  computed: {
    ...mapState({
      selectedSourceLanguage: state => state.application.sourceLanguage,
      selectedTargetLanguage: state => state.application.targetLanguage
    }),
    fullscreen() {
      return this.$mwui.breakpoint.mdAndDown;
    }
  },
  methods: {
    getAutonym,
    getDir,
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
      this.$emit("source-language-selected", sourceLanguage);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.targetLanguageSelectOn = false;
      this.$emit("target-language-selected", targetLanguage);
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-translation-list-language-selector {
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
  .mw-ui-dialog.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__header {
      margin: 12px 16px;
      button {
        padding: 0;
      }
    }
  }

  // Custom styling to avoid the dialog jumping across the screen as
  // search is performced. Dialog get resized depending on the number
  // of results. But that should not cause its position change.
  .mw-ui-dialog.mw-ui-dialog--dialog {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 10vh;
      left: 25vw;
      min-width: 50vw;
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
