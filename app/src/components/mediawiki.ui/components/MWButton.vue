<template>
  <button
    class="mw-ui-button"
    :id="id"
    :name="name"
    :disabled="disabled"
    :large="large"
    :active="active"
    :text="text"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MWButton",
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
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
@import "../variables/colors.less";
@import "../variables/borders.less";

// Neutral button styling
//
// These are the main actions on the page/workflow. The page should have only one of progressive and destructive buttons, the rest being quiet.
//
// Markup:
// <div>
//   <mw-button>Button</mw-button>
// </div>
//
// Styleguide 2.1.
.mw-ui-button {
  background-color: @colorGray15;
  color: @colorButtonText;
  .mw-ui-button();
  .mw-ui-button-states();
  // Progressive buttons
  //
  // Use progressive buttons for actions which lead to a next step in the process.
  //
  // Markup:
  // <div>
  //   <mw-button type="progressive">Progressive button</mw-button>
  // </div>
  //
  // Styleguide 2.1.2.

  &[type="progressive"] {
    .mw-ui-button-colors-primary(
      @colorProgressive,
      @colorProgressiveHighlight,
      @colorProgressiveActive
    );
  }

  // Destructive buttons
  //
  // Use destructive buttons for actions that remove or limit, such as deleting a page or blocking a user.
  // This should not be used for cancel buttons.
  // Styleguide 2.1.3.
  &[type="destructive"] {
    .mw-ui-button-colors-primary(
      @colorDestructive,
      @colorDestructiveHighlight,
      @colorDestructiveActive
    );
  }

  // Buttons that act like links
  &[text="true"] {
    color: @colorButtonText;
    border-color: transparent;

    &:hover {
      background-color: transparent;
      color: @colorProgressiveHighlight;
    }

    &:active {
      color: @colorProgressiveActive;
    }

    &:focus {
      background-color: transparent;
      color: @colorProgressive;
    }
  }

  &[active="true"] {
    color: @colorProgressiveHighlight;
  }

  // Big buttons
  // Styleguide 2.1.4.
  &[large="true"] {
    font-size: 1.3em;
  }

  // Block buttons
  //
  // Some buttons might need to be stacked.
  // Styleguide 2.1.5.
  &[block="true"] {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
