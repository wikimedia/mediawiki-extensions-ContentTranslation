<script setup>
import { computed } from "vue";
import { mwIconAlert, mwIconCheck } from "@/lib/mediawiki.ui/components/icons";
import { MwIcon, MwCircleProgressBar } from "@/lib/mediawiki.ui";

const props = defineProps({
  isTemplateAdapted: {
    type: Boolean,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  strokeWidth: {
    type: Number,
    required: true,
  },
});

const cssVars = computed(() => ({ "--size": props.size }));
const statusIcon = computed(() =>
  !props.isTemplateAdapted || props.percentage === 0 ? mwIconAlert : mwIconCheck
);
</script>

<template>
  <div class="block-template-status-indicator" :style="cssVars">
    <mw-circle-progress-bar
      :percentage="percentage"
      :size="size"
      :stroke-width="strokeWidth"
    />
    <mw-icon
      :icon="statusIcon"
      :size="size / 2"
      :style="{
        left: `calc(50% - ${size / 4}px)`,
        top: `calc(50% - ${size / 4}px)`,
      }"
    />
  </div>
</template>

<style lang="less">
.block-template-status-indicator {
  display: block;
  height: var(--size);
  width: var(--size);
  position: relative;
  line-height: 0;
  .mw-ui-icon {
    position: absolute;
  }
}
</style>
