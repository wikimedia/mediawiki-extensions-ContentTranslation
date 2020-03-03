<template>
  <span class="mw-ui-icon notranslate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width || size"
      :height="height || size"
      viewBox="0 0 24 24"
      :aria-labelledby="iconName"
      aria-hidden="true"
      role="presentation"
      @click="handleClick"
    >
      <title :id="iconName">{{ iconName }}</title>
      <g :fill="iconColor">
        <path :d="iconPath" />
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MWIcon",
  props: {
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
    iconPath: function() {
      if (this.$slots.default) {
        return this.$slots.default[0].text.trim();
      }
      return null;
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
@import "../variables/icons.less";
@import "../mixins/common.less";

.mw-ui-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: @iconSize;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  text-indent: 0;
  .transition(~"0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s");
  vertical-align: middle;
  user-select: none;
}
</style>
