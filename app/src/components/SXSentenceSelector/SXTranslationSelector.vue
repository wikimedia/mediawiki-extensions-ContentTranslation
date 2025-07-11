<script setup>
import { MwDialog, MwButton, MwCard } from "@/lib/mediawiki.ui";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import { getDir } from "@wikimedia/language-data";
import { useStore } from "vuex";
import useMTProviderUpdate from "./useMTProviderUpdate";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useURLHandler from "@/composables/useURLHandler";
import { useI18n } from "vue-banana-i18n";
import { setTargetBlank } from "@/utils/htmlHelper";

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:active"]);

const emptyTextProviderKey = MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY;
const originalTextProviderKey = MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY;
const store = useStore();

const {
  sourceSection,
  isSectionTitleSelected,
  selectedContentTranslationUnit,
} = useCurrentPageSection();
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
} = useURLHandler();

const mtProviders = computed(() =>
  store.getters["mediawiki/getSupportedMTProviders"](
    sourceLanguage.value,
    targetLanguage.value
  )
);

const apiMtProviders = computed(() => {
  const ignoredProviders = [originalTextProviderKey, emptyTextProviderKey];

  return mtProviders.value.filter(
    (provider) => !ignoredProviders.includes(provider)
  );
});

const proposedTranslations = computed(() =>
  isSectionTitleSelected.value
    ? sourceSection.value.proposedTitleTranslations
    : selectedContentTranslationUnit.value.proposedTranslations
);

const updateMTProvider = useMTProviderUpdate();

const selectProvider = (provider) => {
  updateMTProvider(provider);
  close();
};

const getMTProviderLabel = MTProviderGroup.getMTProviderLabel;

const close = () => emit("update:active", false);

const bananaI18n = useI18n();
const disabledMtMessage = setTargetBlank(
  bananaI18n.i18n("cx-tools-mt-noservices")
);
</script>

<template>
  <mw-dialog
    v-if="active"
    class="sx-sentence-selector__translation-options"
    fullscreen
  >
    <template #header>
      <div class="mw-ui-dialog__header pa-4">
        <div class="row ma-0 py-2">
          <div
            class="col grow items-center mw-ui-dialog__header-title justify-start pe-2"
          >
            <h4
              v-i18n:cx-sx-sentence-selector-translation-options-header-title
              class="mb-0"
            />
          </div>
          <div class="col shrink justify-center">
            <mw-button
              type="icon"
              :icon="mwIconClose"
              class="pa-0"
              @click="close"
            />
          </div>
        </div>
        <h6
          v-i18n:cx-sx-sentence-selector-translation-options-header-text
          class="pb-2 mb-0"
        />
      </div>
    </template>
    <mw-card
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click="selectProvider(originalTextProviderKey)"
    >
      <template #header>
        <h5
          v-i18n:cx-sx-sentence-selector-translation-options-original-card-title
          class="sx-sentence-selector__translation-options-card-title mb-4"
        />
      </template>
      <!-- eslint-disable vue/no-v-html -->
      <p
        :dir="getDir(sourceLanguage)"
        :lang="sourceLanguage"
        v-html="proposedTranslations[originalTextProviderKey]"
      />
      <!--eslint-enable vue/no-v-html -->
    </mw-card>
    <mw-card
      v-for="mtProvider in apiMtProviders"
      :key="mtProvider"
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click="selectProvider(mtProvider)"
    >
      <template #header>
        <h5
          class="sx-sentence-selector__translation-options-card-title mb-4"
          v-text="getMTProviderLabel(mtProvider)"
        />
      </template>
      <!-- eslint-disable vue/no-v-html -->
      <p v-html="proposedTranslations[mtProvider]" />
      <!--eslint-enable vue/no-v-html -->
    </mw-card>
    <mw-card
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click="selectProvider(emptyTextProviderKey)"
    >
      <template #header>
        <h5
          v-i18n:cx-sx-sentence-selector-translation-options-empty-card-title
          class="sx-sentence-selector__translation-options-card-title mb-4"
        />
      </template>
      <p class="sx-sentence-selector__empty-sentence-option__cursor">|</p>
    </mw-card>
    <mw-card
      v-if="!apiMtProviders.length"
      class="sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
    >
      <template #header>
        <h5
          class="sx-sentence-selector__translation-info-card-title"
          v-html="disabledMtMessage"
        />
      </template>
    </mw-card>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-sentence-selector__translation-options {
  .mw-ui-dialog__header {
    h6 {
      color: @color-base;
    }
  }
  // Use class twice to increase specificity so that dialog's
  // default background color is overwritten.
  .mw-ui-dialog__shell.mw-ui-dialog__shell {
    background-color: @background-color-disabled-subtle;
    .sx-sentence-selector__translation-options-card-title {
      // Should we create a variable for this one?
      color: @color-subtle;
    }
  }
}
.sx-sentence-selector__mt-provider-option-card {
  cursor: pointer;

  // disable links inside translation previews
  .mw-ui-card__content a {
    pointer-events: none;
  }
}
// Special visual treatment for MT disabled message
.sx-sentence-selector__mt-disabled-info-card {
  background-color: @background-color-neutral-subtle;
  h5 {
    color: @color-subtle;
    font-weight: @font-weight-normal;
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.sx-sentence-selector__empty-sentence-option__cursor {
  opacity: 0;
  animation: blink 1s infinite;
}
</style>
