<template>
  <span class="mw-ui-icon notranslate" :class="classes">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 20 20"
      :aria-labelledby="iconName"
      aria-hidden="true"
      role="presentation"
      @click="handleClick"
    >
      <title v-if="iconName" :id="iconName">{{ iconName }}</title>
      <g :fill="iconColor">
        <path :d="iconImagePath" />
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MWIcon",
  props: {
    /**
     * Icon - An svg path or an object with path and flippable properties.
     **/
    icon: {
      type: [String, Object],
      default: null
    },
    iconName: {
      type: String,
      default: null
    },
    /**
     * Icon color
     **/
    iconColor: {
      type: String,
      default: "currentColor"
    },
    /**
     * Icon size
     **/
    size: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    classes: vm => ({
      "mw-ui-icon--noflip": !vm.flip
    }),
    iconImagePath: vm => vm.icon?.path || vm.icon,
    /**
     * Whether the icon should be flipped on RTL(Default: true)
     */
    flip: vm => vm.icon?.flippable !== false
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

span.mw-ui-icon {
  // Selector specificity for avoidiong conflict with MW Vector
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: @size-icon;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  text-indent: 0;
  transition: ~"0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s";
  vertical-align: middle;
  user-select: none;
  min-height: unset;
  min-width: unset;
}

[dir="rtl"] .mw-ui-icon:not(.mw-ui-icon--noflip) svg {
  transform: scaleX(-1);
}
</style>
