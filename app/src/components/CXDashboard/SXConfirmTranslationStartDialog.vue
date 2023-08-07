<script setup>
import { MwButton, MwDialog } from "@/lib/mediawiki.ui";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import useDraftTranslationStart from "@/components/CXDashboard/useDraftTranslationStart";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  translation: {
    type: DraftTranslation,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);
const closeDialog = () => emit("update:modelValue", false);
const doStartTranslation = useDraftTranslationStart();

const startTranslation = () => {
  doStartTranslation(props.translation);
  closeDialog();
};
</script>

<template>
  <mw-dialog
    :value="modelValue"
    class="sx-confirm-back-navigation-dialog"
    :overlay-opacity="0.7"
    :overlay-color="$mwui.colors.base10"
    min-height="unset"
    :title="$i18n('sx-confirm-draft-translation-start-dialog-title')"
    @close="closeDialog"
  >
    <div class="pa-4">
      <p v-i18n:sx-confirm-draft-translation-start-dialog-subtitle />
      <p
        v-i18n:sx-confirm-draft-translation-start-dialog-explanation-first-line
      />
      <p>
        <strong
          v-i18n:sx-confirm-draft-translation-start-dialog-explanation-second-line
        />
      </p>
      <p
        v-i18n:sx-confirm-draft-translation-start-dialog-explanation-third-line
      />
    </div>
    <template #footer>
      <div class="flex pt-2">
        <mw-button
          class="grow py-3"
          large
          :label="$i18n('sx-confirm-draft-translation-start-button-label')"
          @click="startTranslation"
        />
      </div>
    </template>
  </mw-dialog>
</template>
