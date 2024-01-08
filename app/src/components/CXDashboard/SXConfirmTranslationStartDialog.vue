<script setup>
import { MwButton, MwDialog, MwSpinner } from "@/lib/mediawiki.ui";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import useDraftTranslationStart from "@/components/CXDashboard/useDraftTranslationStart";
import translatorApi from "@/wiki/cx/api/translator";
import { ref } from "vue";

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
const loading = ref(false);

const startTranslation = async () => {
  loading.value = true;
  let success = false;

  try {
    success = await translatorApi.splitTranslation(
      props.translation.translationId
    );
  } catch (error) {
    mw.log.error(
      "[CX] Error while splitting the translation into section translations",
      error
    );
  }

  loading.value = false;

  if (!success) {
    return;
  }

  doStartTranslation(props.translation);
  closeDialog();
};
</script>

<template>
  <mw-dialog
    :value="modelValue"
    :persistent="loading"
    class="sx-confirm-translation-start-dialog"
    :overlay-opacity="0.7"
    :overlay-color="$mwui.colors.gray700"
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
          v-if="!loading"
          class="grow py-3"
          large
          :label="$i18n('sx-confirm-draft-translation-start-button-label')"
          @click="startTranslation"
        />
        <mw-spinner v-else />
      </div>
    </template>
  </mw-dialog>
</template>
