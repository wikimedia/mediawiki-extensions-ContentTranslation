<script setup>
import { MwButton, MwDialog } from "@/lib/mediawiki.ui";
import Translation from "@/wiki/cx/models/translation";
import useDraftTranslationDelete from "./useDraftTranslationDelete";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  translation: {
    type: Translation,
    default: null,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "continue-translation",
  "discard-translation",
]);

const closeDialog = () => emit("update:modelValue", false);

const doDeleteTranslation = useDraftTranslationDelete();

const deleteTranslation = () => {
  doDeleteTranslation(props.translation);
  closeDialog();
};
</script>

<template>
  <mw-dialog
    :value="modelValue"
    class="sx-confirm-back-navigation-dialog"
    :header="false"
    min-height="unset"
  >
    <div class="pa-4">
      <span v-i18n:sx-confirm-translation-deletion-dialog-body />
    </div>
    <template #footer>
      <div class="flex justify-end sx-confirm-delete-dialog__footer pt-2">
        <mw-button
          class="grow py-3"
          large
          :label="$i18n('sx-translation-deletion-cancel-button-label')"
          @click="closeDialog"
        />
        <mw-button
          class="grow py-3"
          large
          destructive
          :label="$i18n('sx-translation-deletion-confirm-button-label')"
          @click="deleteTranslation"
        />
      </div>
    </template>
  </mw-dialog>
</template>

<style lang="less">
.sx-confirm-delete-dialog__footer {
  flex-wrap: wrap;
}
</style>
