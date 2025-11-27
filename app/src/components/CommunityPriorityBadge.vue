<script setup>
import { CdxInfoChip } from "@wikimedia/codex";
import { cdxIconUserGroup } from "@wikimedia/codex-icons";
</script>

<template>
  <cdx-info-chip :icon="cdxIconUserGroup" class="cx-community-priority-badge">
    {{ $i18n("cx-featured-collection-confirmation-banner-title") }}
  </cdx-info-chip>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-community-priority-badge.cdx-info-chip {
  background-color: @background-color-progressive-subtle;
  border: 0;

  & .cdx-icon {
    color: @color-progressive;
  }

  & .cdx-info-chip__text {
    font-size: @font-size-small;
    color: @color-progressive;
  }
}
</style>
