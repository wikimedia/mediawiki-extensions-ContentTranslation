<template>
  <mw-row
    justify="center"
    align="center"
    class="sx-translation-list-language-selector ma-0"
  >
    <mw-col class="flex justify-end" cols="5">
      <mw-button
        :indicator="mwIconExpand"
        class="pa-3 sx-translation-list-language-selector__button"
        type="text"
        @click.stop="openSourceLanguageDialog"
      >
        <span
          v-if="allLanguagesSelectedAsSource"
          v-i18n:cx-translation-list-all-languages-option-label
          class="mw-ui-autonym"
        />
        <span
          v-else
          class="mw-ui-autonym"
          :lang="selectedSourceLanguage"
          :dir="getDir(selectedSourceLanguage)"
          v-text="getAutonym(selectedSourceLanguage)"
        />
      </mw-button>
      <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
      <mw-dialog
        v-model:value="sourceLanguageSelectOn"
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
          :all-option-enabled="allOptionEnabled"
          @select="onSourceLanguageSelected"
          @close="onSourceLanguageDialogClose"
        />
      </mw-dialog>
    </mw-col>
    <mw-col
      class="sx-translation-list-language-selector__arrow flex justify-center"
      cols="2"
    >
      <mw-icon :icon="mwIconArrowNext" />
    </mw-col>
    <mw-col cols="5">
      <mw-button
        :indicator="mwIconExpand"
        class="pa-3 sx-translation-list-language-selector__button"
        type="text"
        :disabled="targetLanguages.length < 2"
        @click.stop="openTargetLanguageDialog"
      >
        <span
          v-if="allLanguagesSelectedAsTarget"
          v-i18n:cx-translation-list-all-languages-option-label
          class="mw-ui-autonym"
        />
        <span
          v-else
          class="mw-ui-autonym"
          :lang="selectedTargetLanguage"
          :dir="getDir(selectedTargetLanguage)"
          v-text="getAutonym(selectedTargetLanguage)"
        />
      </mw-button>
      <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
      <mw-dialog
        v-model:value="targetLanguageSelectOn"
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
          :all-option-enabled="allOptionEnabled"
          @select="onTargetLanguageSelected"
          @close="onTargetLanguageDialogClose"
        />
      </mw-dialog>
    </mw-col>
  </mw-row>
</template>

<script>
import { MwIcon, MwButton, MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import MwLanguageSelector from "../MWLanguageSelector";
import {
  mwIconArrowNext,
  mwIconExpand,
} from "@/lib/mediawiki.ui/components/icons";
import { computed, inject, ref } from "vue";

export default {
  name: "SxTranslationListLanguageSelector",
  components: {
    MwCol,
    MwRow,
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwButton,
  },
  props: {
    /** @type string[] array of language codes */
    sourceLanguages: {
      type: Array,
      required: true,
      validator: (languages) =>
        languages.every((language) => typeof language === "string"),
    },
    /** @type string[] array of language codes */
    targetLanguages: {
      type: Array,
      required: true,
      validator: (languages) =>
        languages.every((language) => typeof language === "string"),
    },
    selectedSourceLanguage: {
      type: String,
      required: true,
    },
    selectedTargetLanguage: {
      type: String,
      required: true,
    },
    allOptionEnabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:selectedSourceLanguage", "update:selectedTargetLanguage"],
  setup(props, { emit }) {
    const breakpoints = inject("breakpoints");
    const fullscreen = computed(() => breakpoints.value.mobile);

    const sourceLanguageSelectOn = ref(false);
    const targetLanguageSelectOn = ref(false);

    const openSourceLanguageDialog = () =>
      (sourceLanguageSelectOn.value = true);
    const openTargetLanguageDialog = () =>
      (targetLanguageSelectOn.value = true);
    const onSourceLanguageDialogClose = () =>
      (sourceLanguageSelectOn.value = false);
    const onTargetLanguageDialogClose = () =>
      (targetLanguageSelectOn.value = false);

    const onSourceLanguageSelected = (sourceLanguage) => {
      sourceLanguageSelectOn.value = false;
      emit("update:selectedSourceLanguage", sourceLanguage);
    };

    const onTargetLanguageSelected = (targetLanguage) => {
      targetLanguageSelectOn.value = false;
      emit("update:selectedTargetLanguage", targetLanguage);
    };

    const allLanguagesSelectedAsSource = computed(
      () => props.selectedSourceLanguage === "all"
    );

    const allLanguagesSelectedAsTarget = computed(
      () => props.selectedTargetLanguage === "all"
    );

    return {
      fullscreen,
      getAutonym,
      getDir,
      mwIconArrowNext,
      mwIconExpand,
      onSourceLanguageDialogClose,
      onSourceLanguageSelected,
      onTargetLanguageDialogClose,
      onTargetLanguageSelected,
      openSourceLanguageDialog,
      openTargetLanguageDialog,
      sourceLanguageSelectOn,
      targetLanguageSelectOn,
      allLanguagesSelectedAsSource,
      allLanguagesSelectedAsTarget,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-list-language-selector {
  border-top: @border-width-base @border-style-base #eaecf0;
  border-bottom: @border-width-base @border-style-base #eaecf0;
  .mw-ui-dialog.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__header {
      margin: 12px 16px;
      button {
        padding: 0;
      }
    }

    .mw-ui-language-selector__resultscontainer {
      height: calc(100vh - 8em);
    }
  }

  // Custom styling to avoid the dialog jumping across the screen as
  // search is performed. Dialog get resized depending on the number
  // of results. But that should not cause its position change.
  .mw-ui-dialog.mw-ui-dialog--dialog {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 10vh;
      left: 25vw;
      min-width: ~"min(50vw, 600px)";
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
