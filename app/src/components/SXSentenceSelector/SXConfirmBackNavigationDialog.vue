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
      <div class="flex justify-end py-2 sx-confirm-back-navigation-dialog__footer">
        <mw-button
          type="text"
          :label="
            $i18n('sx-confirm-back-navigation-dialog-continue-button-label')
          "
          @click="continueTranslation"
        />
        <mw-button
          type="text"
          destructive
          :label="
            $i18n('sx-confirm-back-navigation-dialog-discard-button-label')
          "
          @click="discardTranslation"
        />
      </div>
    </template>
  </mw-dialog>
</template>

<script>
import { MwButton, MwDialog, MwDivider } from "@/lib/mediawiki.ui";

export default {
  name: "SxConfirmBackNavigationDialog",
  components: {
    MwButton,
    MwDivider,
    MwDialog,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(props, { emit }) {
    const closeDialog = () => emit("update:modelValue", false);

    const continueTranslation = () => {
      emit("continue-translation");
      closeDialog();
    };

    const discardTranslation = () => {
      emit("discard-translation");
      closeDialog();
    };

    return { continueTranslation, discardTranslation };
  },
};
</script>
<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-confirm-back-navigation-dialog__footer {
  flex-wrap: wrap;
  row-gap: @spacing-50;
}
</style>
