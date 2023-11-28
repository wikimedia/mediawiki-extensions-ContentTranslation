<template>
  <svg
    class="mw-circle-progress-bar"
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    :viewport="`0 0 ${size} ${size}`"
    :style="cssVars"
  >
    <circle
      class="mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive"
      :r="radius"
      :cx="size / 2"
      :cy="size / 2"
      fill="transparent"
      :stroke-dasharray="dashArray"
      stroke-dashoffset="0"
    ></circle>
    <circle
      class="mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active"
      :r="radius"
      :cx="size / 2"
      :cy="size / 2"
      fill="transparent"
      :stroke-dasharray="dashArray"
      stroke-dashoffset="0"
      :style="{ strokeDashoffset: `${strokeDashOffset}px` }"
    ></circle>
  </svg>
</template>

<script>
import colors from "@/lib/mediawiki.ui/variables/colors";
import { computed } from "vue";

export default {
  name: "MwCircleProgressBar",
  props: {
    size: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    activeColor: {
      type: String,
      default: colors.blue600,
    },
    inactiveColor: {
      type: String,
      default: colors.gray300,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    const radius = computed(() => (props.size / 2) * 0.9);
    const dashArray = computed(() => Math.PI * (radius.value * 2));
    const strokeDashOffset = computed(
      () => ((100 - props.percentage) / 100) * dashArray.value
    );
    const cssVars = computed(() => ({
      "--active-color": props.activeColor,
      "--inactive-color": props.inactiveColor,
      "--stroke-width": `${props.strokeWidth}px`,
    }));

    const path = `M ${props.size} 0 A ${props.size} ${props.size} 0 1 1 19 0`;

    return {
      cssVars,
      dashArray,
      path,
      radius,
      strokeDashOffset,
    };
  },
};
</script>

<style lang="less">
.mw-circle-progress-bar {
  transform: rotate(270deg);
  &__circle {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s linear;
    stroke-width: var(--stroke-width);
    &--inactive {
      stroke: var(--inactive-color);
    }
    &--active {
      stroke: var(--active-color);
    }
  }
}
</style>
