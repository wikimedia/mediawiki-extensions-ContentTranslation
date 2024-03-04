<script setup>
import { MwIcon, MwButton, MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import MwLanguageSelector from "../MWLanguageSelector";
import {
  mwIconArrowNext,
  mwIconExpand,
} from "@/lib/mediawiki.ui/components/icons";
import { computed, inject, ref, defineProps, defineEmits } from "vue";

const props = defineProps({
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
});

const emit = defineEmits([
  "update:selectedSourceLanguage",
  "update:selectedTargetLanguage",
]);

const breakpoints = inject("breakpoints");
const fullscreen = computed(() => breakpoints.value.mobile);

/**
 * Three possible values: "source", "target" or null
 * @type {Ref<"source"|"target"|null>}
 */
const dialogSwitch = ref(null);
const dialogOn = computed(() => !!dialogSwitch.value);

const openSourceLanguageDialog = () => (dialogSwitch.value = "source");
const openTargetLanguageDialog = () => (dialogSwitch.value = "target");

const closeDialog = () => (dialogSwitch.value = null);

const dialogLanguages = computed(() => {
  if (!dialogOn.value) {
    return;
  }
  const languagesPropsNameMap = {
    source: "sourceLanguages",
    target: "targetLanguages",
  };

  const languagesPropName = languagesPropsNameMap[dialogSwitch.value];

  return props[languagesPropName];
});

const onLanguageSelected = (language) => {
  const eventMap = {
    source: "update:selectedSourceLanguage",
    target: "update:selectedTargetLanguage",
  };

  const event = eventMap[dialogSwitch.value];
  closeDialog();
  emit(event, language);
};

const allLanguagesSelectedAsSource = computed(
  () => props.selectedSourceLanguage === "all"
);

const allLanguagesSelectedAsTarget = computed(
  () => props.selectedTargetLanguage === "all"
);
</script>

<template>
  <div class="sx-translation-list-language-selector">
    <mw-row justify="center" align="center" class="ma-0">
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
      </mw-col>
    </mw-row>
    <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
    <mw-dialog
      v-model:value="dialogOn"
      animation="slide-up"
      :title="$i18n('sx-translation-list-language-selector-dialog-title')"
      :fullscreen="fullscreen"
      :header="fullscreen"
      :overlay-opacity="0"
      @close="closeDialog"
    >
      <mw-language-selector
        class="sx-translation-list-language-selector__widget col-12"
        :placeholder="$i18n('cx-sx-language-selector-placeholder')"
        :languages="dialogLanguages"
        :all-option-enabled="allOptionEnabled"
        @select="onLanguageSelected"
        @close="closeDialog"
      />
    </mw-dialog>
  </div>
</template>

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
