<script setup>
import { MwDialog, MwDivider } from "@/lib/mediawiki.ui";
import { CdxButton } from "@wikimedia/codex";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "continue-translation",
  "discard-translation",
]);

const closeDialog = () => emit("update:modelValue", false);

const continueTranslation = () => {
  emit("continue-translation");
  closeDialog();
};

const discardTranslation = () => {
  emit("discard-translation");
  closeDialog();
};
</script>

<template>
  <mw-dialog
    :value="modelValue"
    class="sx-confirm-back-navigation-dialog"
    :overlay-opacity="0.7"
    :overlay-color="$mwui.colors.gray700"
  >
    <template #header>
      <div class="mw-ui-dialog__header px-4 py-3">
        <span
          v-i18n:sx-confirm-back-navigation-dialog-title
          class="mw-ui-dialog__header-title"
        />
      </div>
    </template>
    <mw-divider />

    <div class="pa-4">
      <span v-i18n:sx-confirm-back-navigation-dialog-body />
    </div>
    <template #footer>
      <div
        class="flex justify-end py-2 sx-confirm-back-navigation-dialog__footer"
      >
        <cdx-button weight="quiet" @click="continueTranslation">
          {{ $i18n("sx-confirm-back-navigation-dialog-continue-button-label") }}
        </cdx-button>
        <cdx-button
          weight="quiet"
          action="destructive"
          @click="discardTranslation"
        >
          {{ $i18n("sx-confirm-back-navigation-dialog-discard-button-label") }}
        </cdx-button>
      </div>
    </template>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-confirm-back-navigation-dialog__footer {
  flex-wrap: wrap;
  row-gap: @spacing-50;
}
</style>
