<template>
  <component
    :is="component"
    class="mw-ui-button"
    :class="classes"
    :href="href"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>
      <span class="mw-ui-button__content">
        <mw-icon
          v-if="icon"
          :icon="icon"
          :size="large ? 28 : iconSize"
          class="mw-ui-button__icon"
          :class="iconClass"
        />
        <span
          v-if="!isIcon && label"
          class="mw-ui-button__label"
          v-text="label"
        />
        <mw-icon
          v-if="indicator"
          :icon="indicator"
          :size="large ? 28 : indicatorSize"
          class="mw-ui-button__indicator"
          :class="indicatorClass"
          @[indicatorClickEvent].stop="$emit('indicator-icon-clicked')"
        />
      </span>
    </slot>
  </component>
</template>

<script>
import MwIcon from "../MWIcon";

export default {
  name: "MwButton",
  components: {
    MwIcon
  },
  props: {
    /**
     * Button label
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Whether to disable button
     */
    disabled: Boolean,
    depressed: Boolean,
    /**
     * Whether to have large button
     */
    large: Boolean,
    icon: {
      type: [Object, String],
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: 20
    },
    indicatorSize: {
      type: [Number, String],
      default: 12
    },
    indicator: {
      type: [Object, String],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    outlined: Boolean,
    /**
     * Progressive button used for primary, constructive actions
     */
    progressive: {
      type: Boolean,
      default: false
    },
    /**
     * Progressive button used for primary, destructive actions
     */
    destructive: {
      type: Boolean,
      default: false
    },
    /**
     * Type of the button. Can be one of "button", "toggle", "icon" or "text"
     */
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
    component: vm => (vm.href ? "a" : "button"),
    classes: vm => ({
      "mw-ui-button--depressed": vm.depressed || vm.outlined,
      "mw-ui-button--disabled": vm.disabled,
      "mw-ui-button--large": vm.large,
      "mw-ui-button--progressive": vm.progressive,
      "mw-ui-button--destructive": vm.destructive,
      "mw-ui-button--icon": vm.isIcon,
      "mw-ui-button--outlined": vm.outlined,
      "mw-ui-button--text": vm.type === "text"
    }),
    hasIndicatorClickListener: vm => !!vm.$listeners["indicator-icon-clicked"],
    isIcon: vm => vm.type === "icon",
    iconClass: vm => !vm.isIcon && "pe-2",
    indicatorClass: vm => !vm.isIcon && "ps-2",
    indicatorClickEvent: vm => (vm.hasIndicatorClickListener ? "click" : null)
  },
  methods: {
    /**
     * Passthrough click event
     * @type {Event}
     */
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "./buttons.less";
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-button-text-colors(@color, @highlightColor, @activeColor, @focusColor ) {
  background-color: transparent;
  border-color: transparent;
  color: @color;
  &:hover {
    background-color: transparent;
    border-color: transparent;
    color: @highlightColor;
  }
  &:active {
    background-color: transparent;
    border-color: transparent;
    color: @activeColor;
  }
  &:focus {
    background-color: transparent;
    border-color: transparent;
    color: @focusColor;
  }
}
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

  .mw-ui-button__content {
    display: flex;
    align-items: center;
    color: inherit;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
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
  &.mw-ui-button--text {
    .mw-ui-button-text-colors(
      @color-base,
      @color-primary--hover,
      @color-primary--active,
      @color-primary--focus
    );
    &.mw-ui-button--progressive {
      .mw-ui-button-text-colors(
        @color-primary,
        @color-primary--hover,
        @color-primary--active,
        @color-primary--focus
      );
    }
    &.mw-ui-button--destructive {
      .mw-ui-button-text-colors(
        @color-destructive,
        @color-destructive--hover,
        @color-destructive--active,
        @color-destructive--focus
      );
    }
    &.mw-ui-button--disabled {
      color: @color-base--disabled;
      &:hover,
      &:focus {
        color: @color-base--disabled;
      }
    }
  }

  &.mw-ui-button--icon {
    min-width: 0;
    border-color: transparent;
    background-color: transparent;
    &.mw-ui-button--progressive {
      color: @color-primary;
    }

    &.mw-ui-button--destructive {
      color: @color-destructive;
    }

    &:hover {
      background-color: transparent;
      border-color: transparent;
    }
    &:active {
      background-color: transparent;
      border-color: transparent;
    }
    &:focus {
      background-color: transparent;
      border-color: transparent;
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
  // Font size for all large buttons in our application is set to 18px
  &.mw-ui-button--large {
    font-size: 1.125em; // 18px
  }
}
</style>
