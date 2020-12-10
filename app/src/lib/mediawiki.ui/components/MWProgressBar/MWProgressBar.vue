<template>
  <div
    class="mw-progress-bar"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
    :style="containerStyles"
    :class="containerClass"
  >
    <div
      class="mw-progress-bar__bar"
      :style="barStyles"
      :class="barClass"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MwProgressBar",
  props: {
    value: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: "1rem"
    },
    width: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "#36c"
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: null
    }
  },
  computed: {
    containerStyles: vm => ({
      height: vm.height,
      width: vm.width || "unset",
      "background-color": vm.background
    }),
    containerClass: vm => ({
      "mw-progress-bar--pending": vm.pending
    }),
    barStyles: vm => ({
      width: `${vm.percentage}%`,
      "background-color": vm.color
    }),
    percentage: vm => (vm.value / vm.maxValue) * 100,
    barClass: vm => ({
      "mw-progress-bar__bar--indeterminate": vm.indeterminate
    })
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";
@keyframes progress-bar-slide {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(300%);
  }
}
@keyframes progress-bar-background-stripes {
  0% {
    background-position: -1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}
.mw-progress-bar {
  border: @border-base;
  border-radius: 1rem;
  box-shadow: @box-shadow-card;
  overflow: hidden;
  &--pending {
    background-color: @wmui-color-base50;
    background-size: 1rem;
    background-image: linear-gradient(
      135deg,
      #fff 25%,
      transparent 25%,
      transparent 50%,
      #fff 50%,
      #fff 75%,
      transparent 75%,
      transparent
    );
    animation: progress-bar-background-stripes 650ms linear infinite;
  }
  &__bar {
    height: inherit;
    &--indeterminate {
      animation: progress-bar-slide 2s infinite linear;
    }
  }
}
</style>
