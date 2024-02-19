<script setup>
import { MwCol, MwRow } from "@/lib/mediawiki.ui";
import { useRouter } from "vue-router";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconClose, cdxIconCheck } from "@wikimedia/codex-icons";

defineProps({
  isPublishingDisabled: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["publish-translation"]);

const router = useRouter();
const onClose = () => router.push({ name: "sx-sentence-selector" });
</script>

<template>
  <mw-row class="ma-0 sx-publisher__header">
    <mw-col shrink class="me-2">
      <cdx-button class="px-3" weight="quiet" @click="onClose">
        <cdx-icon :icon="cdxIconClose" />
      </cdx-button>
    </mw-col>
    <mw-col v-i18n:cx-sx-publisher-header-title grow tag="h5" class="ma-0" />
    <mw-col shrink>
      <cdx-button
        class="px-5"
        :disabled="isPublishingDisabled"
        action="progressive"
        weight="primary"
        @click="$emit('publish-translation')"
      >
        <cdx-icon :icon="cdxIconCheck" />
      </cdx-button>
    </mw-col>
  </mw-row>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher__header {
  border-bottom: @border-width-base @border-style-base @border-color-subtle;
  button {
    height: @size-250;
    border-radius: 0;
  }
}
</style>
