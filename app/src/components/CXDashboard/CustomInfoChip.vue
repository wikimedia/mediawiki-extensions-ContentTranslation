<script setup>
import { CdxInfoChip } from "@wikimedia/codex";
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: [Object, String],
    default: null,
  },
  content: {
    type: String,
    default: "",
  },
});

const slashIndex = computed(() => props.content.lastIndexOf("/"));
const firstPart = computed(() => props.content.slice(0, slashIndex.value));
const secondPart = computed(() => props.content.slice(slashIndex.value + 1));
</script>

<template>
  <cdx-info-chip :icon="icon" class="custom-info-chip">
    <div v-if="slashIndex === -1" class="cdx-info-chip__text">
      {{ content }}
    </div>
    <div v-else class="cdx-info-chip__text custom-info-chip__with-slash">
      <span class="cdx-info-chip__text custom-info-chip__with-slash__first">{{
        firstPart
      }}</span>
      <span>/</span>
      <span class="cdx-info-chip__text custom-info-chip__with-slash__second">{{
        secondPart
      }}</span>
    </div>
  </cdx-info-chip>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cdx-info-chip {
  &.custom-info-chip {
    width: auto;

    .cdx-info-chip__text {
      &.custom-info-chip__with-slash {
        display: flex;
      }
      &.custom-info-chip__with-slash__first,
      &.custom-info-chip__with-slash__second {
        text-overflow: ellipsis;
        flex: auto;
        width: auto;
        overflow: hidden;
      }
    }
  }
}
</style>
