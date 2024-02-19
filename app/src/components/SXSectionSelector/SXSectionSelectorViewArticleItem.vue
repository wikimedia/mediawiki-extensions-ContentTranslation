<script setup>
import { CdxIcon } from "@wikimedia/codex";
import { cdxIconLinkExternal } from "@wikimedia/codex-icons";

defineProps({
  path: {
    type: String,
    required: true,
  },
  autonym: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="sx-section-selector-view-article-item ma-0">
    <a
      :href="path"
      target="_blank"
      class="justify-between items-center py-3 px-4"
    >
      {{ $i18n("cx-sx-section-selector-view-article-button-label", autonym) }}
      <cdx-icon size="x-small" :icon="cdxIconLinkExternal" />
    </a>
  </li>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector-view-article-item {
  a {
    color: @color-base;
    font-weight: @font-weight-bold;
  }
}
</style>
