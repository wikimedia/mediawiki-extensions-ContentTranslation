<template>
  <span :class="classes" class="notranslate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width || size"
      :height="height || size"
      viewBox="0 0 20 20"
      :aria-labelledby="iconName"
      aria-hidden="true"
      role="presentation"
      @click="handleClick"
    >
      <title :id="iconName">{{ iconName }}</title>
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
    icon: {
      type: [String, Object],
      default: null
    },
    iconName: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    classes() {
      return {
        "mw-ui-icon": true,
        "mw-ui-icon--noflip": this.flip ? false : true
      };
    },
    iconImagePath() {
      return this.icon?.path || this.icon;
    },
    /**
     * Whether the icon should be flipped on RTL(Default: true)
     */
    flip() {
      return this.icon?.flippable !== false;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../variables/wikimedia-ui-base.less";
@import "../mixins/common.less";

.mw-ui-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: @size-icon;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  text-indent: 0;
  .transition(~"0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s");
  vertical-align: middle;
  user-select: none;
}

[dir="rtl"] .mw-ui-icon:not(.mw-ui-icon--noflip) svg {
  transform: scaleX(-1);
}
</style>
