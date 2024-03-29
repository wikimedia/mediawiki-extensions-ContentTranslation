<script setup>
import { CdxDialog } from "@wikimedia/codex";
import { useI18n } from "vue-banana-i18n";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  targetUrl: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateOpen = (value) => emit("update:modelValue", value);
const bananaI18n = useI18n();

const primaryAction = {
  label: bananaI18n.i18n(
    "cx-unreviewed-translation-dialog-review-translation-button-label"
  ),
  actionType: "progressive",
};

const defaultAction = {
  label: bananaI18n.i18n("cx-unreviewed-translation-dialog-close-button-label"),
};

function onPrimaryAction() {
  window.open(props.targetUrl, "_blank");
  updateOpen(false);
}
</script>

<template>
  <cdx-dialog
    class="cx-unreviewed-translation-dialog"
    :open="modelValue"
    :title="$i18n('cx-unreviewed-translation-dialog-title')"
    :close-button-label="
      $i18n('cx-unreviewed-translation-dialog-close-button-aria-label')
    "
    :primary-action="primaryAction"
    :default-action="defaultAction"
    @update:open="updateOpen($event)"
    @primary="onPrimaryAction"
    @default="updateOpen(false)"
  >
    <p v-i18n:cx-unreviewed-translation-dialog-body />
    <a
      v-i18n:cx-unreviewed-translation-dialog-learn-more-link-label
      href=""
      target="_blank"
    />
  </cdx-dialog>
</template>

<style lang="less">
.cx-unreviewed-translation-dialog {
  border: none;
}
</style>
