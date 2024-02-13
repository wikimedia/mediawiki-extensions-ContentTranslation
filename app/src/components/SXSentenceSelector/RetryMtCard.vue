<script setup>
import { MwCol, MwRow } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import {
  cdxIconMenu,
  cdxIconReload,
  cdxIconAlert,
} from "@wikimedia/codex-icons";

defineEmits(["configure-options", "retry-translation"]);
</script>

<template>
  <div class="mt-retry-body pb-5">
    <div class="retry-body__message">
      <cdx-icon class="me-2" :icon="cdxIconAlert" />
      <span v-i18n:cx-sx-proposed-translation-not-available-message />
    </div>
    <mw-row class="retry-body__action-buttons ma-0 pt-4">
      <mw-col cols="6">
        <cdx-button
          class="retry-body__retry-action-button"
          weight="quiet"
          action="progressive"
          @click="$emit('retry-translation')"
        >
          <cdx-icon class="me-1" :icon="cdxIconReload" />
          {{ $i18n("cx-sx-proposed-translation-retry-button") }}
        </cdx-button>
      </mw-col>
      <mw-col cols="6">
        <cdx-button
          class="retry-body__other-options-action-button"
          weight="quiet"
          action="progressive"
          @click="$emit('configure-options')"
        >
          <cdx-icon class="me-1" :icon="cdxIconMenu" />
          {{ $i18n("cx-sx-proposed-translation-other-options-button") }}
        </cdx-button>
      </mw-col>
    </mw-row>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.retry-body__message {
  font-weight: @font-weight-bold;
  color: @color-disabled;
  & .cdx-icon {
    color: @color-disabled;
  }
}
</style>
