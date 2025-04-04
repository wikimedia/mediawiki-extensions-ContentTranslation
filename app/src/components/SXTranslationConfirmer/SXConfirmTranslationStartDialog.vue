<script setup>
import { MwDialog, MwSpinner } from "@/lib/mediawiki.ui";
import { CdxButton } from "@wikimedia/codex";
import translatorApi from "@/wiki/cx/api/translator";
import { ref } from "vue";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useEditorNavigation from "@/composables/useEditorNavigation";
import useDashboardTranslationContinueInstrument from "@/composables/useDashboardTranslationContinueInstrument";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const closeDialog = () => emit("update:modelValue", false);
const navigateToEditor = useEditorNavigation();
const logDashboardTranslationContinueEvent =
  useDashboardTranslationContinueInstrument();
const loading = ref(false);
const { currentTranslation: translation } = useCurrentDraftTranslation();

const startTranslation = async () => {
  loading.value = true;
  let success = false;

  try {
    success = await translatorApi.splitTranslation(
      translation.value.translationId
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
  logDashboardTranslationContinueEvent();
  navigateToEditor();
  closeDialog();
};
</script>

<template>
  <mw-dialog
    :value="modelValue"
    :persistent="loading"
    class="sx-confirm-translation-start-dialog"
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
        <cdx-button
          v-if="!loading"
          class="sx-confirm-translation-start-dialog__confirm-button grow"
          size="large"
          @click="startTranslation"
        >
          {{ $i18n("sx-confirm-draft-translation-start-button-label") }}
        </cdx-button>
        <mw-spinner v-else />
      </div>
    </template>
  </mw-dialog>
</template>

<style lang="less">
.sx-confirm-translation-start-dialog {
  button&__confirm-button {
    border: none;
    max-width: 100%;
  }
}
</style>
