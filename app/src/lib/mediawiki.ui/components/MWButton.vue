<template>
  <component
    :is="component"
    :id="id"
    :class="classes"
    :href="href"
    :disabled="disabled"
    @click="handleClick"
  >
    <mw-icon
      v-if="icon"
      :icon="icon"
      :size="large ? 28 : iconSize"
      class="mw-ui-button__icon me-2"
    ></mw-icon>
    <slot>
      <span
        v-if="type !== 'icon' && label"
        class="mw-ui-button__label"
        v-text="label"
      />
    </slot>
    <mw-icon
      v-if="indicator"
      :icon="indicator"
      :size="large ? 28 : indicatorSize || iconSize"
      class="mw-ui-button__indicator ms-2"
    ></mw-icon>
  </component>
</template>

<script>
import MwIcon from "./MWIcon";

export default {
  name: "MwButton",
  components: {
    MwIcon
  },
  props: {
    id: String,
    label: String,
    disabled: Boolean,
    depressed: Boolean,
    block: Boolean,
    large: Boolean,
    icon: [Object, String],
    iconSize: {
      type: [Number, String]
    },
    indicatorSize: {
      type: [Number, String]
    },
    indicator: [Object, String],
    href: String,
    accessKey: String,
    outlined: Boolean,
    progressive: Boolean,
    destructive: Boolean,
    type: {
      type: String,
      default: "button",
      validator: value => {
        // The value must match one of these strings
        return ["button", "toggle", "icon", "text"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    component() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    },
    classes() {
      return {
        "mw-ui-button": true,
        "mw-ui-button--block": this.block,
        "mw-ui-button--depressed": this.depressed || this.outlined,
        "mw-ui-button--disabled": this.disabled,
        "mw-ui-button--fab": this.fab,
        "mw-ui-button--large": this.large,
        "mw-ui-button--progressive": this.progressive,
        "mw-ui-button--destructive": this.destructive,
        "mw-ui-button--icon": this.type === "icon",
        "mw-ui-button--outlined": this.outlined,
        "mw-ui-button--text": this.type === "text"
      };
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
@import "../mixins/buttons.less";
@import "../mixins/common.less";
@import "../variables/wikimedia-ui-base.less";

// Neutral button styling
//
// These are the main actions on the page/workflow. The page should have only one of progressive and destructive buttons, the rest being quiet.
//
// Styleguide 2.1.
.mw-ui-button {
  background-color: @background-color-framed;
  color: @color-base;
  .mw-ui-button();
  .mw-ui-button-states();
  // Progressive buttons
  //
  // Use progressive buttons for actions which lead to a next step in the process.
  //
  // Styleguide 2.1.2.
  &.mw-ui-button--progressive {
    .mw-ui-button-colors-primary(
      @color-primary,
      @color-primary--hover,
      @color-primary--active
    );
  }

  .mw-ui-button__icon + .mw-ui-button__label,
  .mw-ui-button__label + .mw-ui-button__indicator {
    padding-left: 8px;
  }

  // Do not break words in buttons.
  .mw-ui-button__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Destructive buttons
  //
  // Use destructive buttons for actions that remove or limit, such as deleting a page or blocking a user.
  // This should not be used for cancel buttons.
  // Styleguide 2.1.3.
  &.mw-ui-button--destructive {
    .mw-ui-button-colors-primary(
      @color-destructive,
      @color-destructive--hover,
      @color-destructive--active
    );
  }

  // Buttons that act like links
  &.mw-ui-button--icon,
  &.mw-ui-button--text {
    color: @color-base;
    border-color: transparent;
    background-color: transparent;
    min-width: 0;

    &:hover {
      background-color: transparent;
      color: @color-primary--hover;
    }

    &:active {
      color: @color-primary--active;
    }

    &:focus {
      background-color: transparent;
      color: @color-primary--focus;
    }
  }

  &.mw-ui-button--active {
    color: @color-primary--active;
  }

  &.mw-ui-button--depressed {
    color: @color-primary--active;
  }

  // Big buttons
  // Styleguide 2.1.4.
  &.mw-ui-button--large {
    font-size: 1.3em;
  }

  // Block buttons
  //
  // Some buttons might need to be stacked.
  // Styleguide 2.1.5.
  &.mw-ui-button--block {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
