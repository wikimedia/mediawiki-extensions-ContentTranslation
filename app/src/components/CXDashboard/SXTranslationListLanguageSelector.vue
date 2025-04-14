<script setup>
import { MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import MwLanguageSelector from "../MWLanguageSelector";
import { computed, inject, ref } from "vue";
import { cdxIconArrowNext, cdxIconExpand } from "@wikimedia/codex-icons";
import { CdxButton, CdxIcon } from "@wikimedia/codex";

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
    default: null,
  },
  selectedTargetLanguage: {
    type: String,
    default: null,
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
const isMobile = computed(() => breakpoints.value.mobile);

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
  <div
    class="sx-translation-list-language-selector py-1"
    :class="{ 'sx-translation-list-language-selector--mobile': isMobile }"
  >
    <mw-row justify="center" align="center" class="ma-0">
      <mw-col class="flex justify-end px-0" :cols="isMobile ? 5 : null">
        <cdx-button
          class="sx-translation-list-language-selector__button"
          weight="quiet"
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
          <cdx-icon size="x-small" :icon="cdxIconExpand" />
        </cdx-button>
      </mw-col>
      <mw-col
        class="sx-translation-list-language-selector__arrow flex justify-center px-0"
        :cols="isMobile ? 2 : null"
      >
        <cdx-icon :icon="cdxIconArrowNext" />
      </mw-col>
      <mw-col class="px-0" :cols="isMobile ? 5 : null">
        <cdx-button
          class="sx-translation-list-language-selector__button"
          weight="quiet"
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
          <cdx-icon size="x-small" :icon="cdxIconExpand" />
        </cdx-button>
      </mw-col>
    </mw-row>
    <!--      TODO: Use modelValue inside mw-dialog and use v-model="" directly-->
    <mw-dialog
      v-model:value="dialogOn"
      :title="$i18n('sx-translation-list-language-selector-dialog-title')"
      :fullscreen="isMobile"
      :header="isMobile"
      overlay-mode="dark"
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
  &--mobile {
    border-top: @border-width-base @border-style-base #eaecf0;
    border-bottom: @border-width-base @border-style-base #eaecf0;
  }

  & &__button {
    line-height: normal;
    max-width: @size-full;
    .mw-ui-autonym {
      margin-right: @spacing-50;
      overflow: hidden;
      text-overflow: @text-overflow-ellipsis;
    }
  }

  .mw-ui-dialog.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__header {
      margin: @spacing-75 @spacing-100;
      button {
        padding: @spacing-0;
      }
    }

    .mw-ui-language-selector__resultscontainer {
      height: calc(@size-viewport-height-full - @size-800);
    }
  }

  // Custom styling to avoid the dialog jumping across the screen as
  // search is performed. Dialog get resized depending on the number
  // of results. But that should not cause its position change.
  .mw-ui-dialog.mw-ui-dialog--dialog {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: ~"min(50vw, 600px)";
      min-height: 50vh;
      max-height: 75vh;
    }
  }
}
</style>
