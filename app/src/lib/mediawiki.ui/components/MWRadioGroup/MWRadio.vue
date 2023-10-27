<template>
  <mw-row class="mw-ui-radio flex items-center py-2" :class="widgetClass">
    <div class="mw-ui-radio__controls">
      <input
        :id="id"
        v-model="inputModel"
        type="radio"
        :disabled="disabled || null"
        :name="name"
        :value="inputValue"
      />
      <span class="mw-ui-radio__controls__icon" />
    </div>
    <label :for="id" class="ps-2" v-text="label" />
  </mw-row>
</template>

<script>
import "../MWLayout/grid.scss";
import { MwRow } from "../index";

export default {
  name: "MwRadio",
  components: { MwRow },
  props: {
    /**
     * Id of current radio button. If not provided
     * an id will automatically created
     **/
    id: {
      type: String,
      required: false,
      default() {
        // use a random id
        const id = Math.floor(Math.random() * 10000);

        return `radio-button-${id}`;
      },
    },
    /**
     * Represents the value of the currently checked button
     * inside a radio button group
     **/
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: false,
      default: null,
    },
    /**
     * Removes the ability to click or target the component.
     **/
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Sets radio button label
     **/
    label: {
      type: String,
      required: true,
    },
    /**
     * Sets value attribute of current radio button
     **/
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      required: true,
    },
    /**
     * Sets the name of current radio button
     **/
    name: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    isSelected: (vm) =>
      vm.value
        ? vm.value === vm.inputValue
        : vm.$parent.value === vm.inputValue,
    widgetClass: (vm) => ({
      "mw-ui-radio--selected": vm.isSelected,
      "mw-ui-radio--disabled": vm.disabled,
    }),
    inputModel: {
      get() {
        return this.value || this.$parent.value;
      },
      set() {
        this.$emit("change", this.inputValue);
      },
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.mw-ui-radio {
  &__controls {
    display: inline-flex;
    flex: 0 0 auto;
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      user-select: none;
      margin: 0;
      z-index: 1;
      &:focus {
        & + .mw-ui-radio__controls__icon {
          &:before {
            border-color: @border-color-inverted;
          }
        }
      }
    }
    &__icon {
      background-color: @background-color-base;
      box-sizing: border-box;
      border: @border-style-base @border-width-base @border-color-interactive;
      border-radius: @border-radius-circle;
      width: 100%;
      height: 100%;
      position: absolute;
      &:before {
        content: " ";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 1px solid transparent;
        border-radius: @border-radius-circle;
      }
    }
  }
  label {
    cursor: pointer;
  }

  &--selected {
    .mw-ui-radio__controls__icon {
      transition: background-color @transition-duration-base,
        border-color @transition-duration-base,
        border-width @transition-duration-base;
      border-width: 6px;
      border-color: @border-color-progressive;
    }
  }
  &--disabled {
    .mw-ui-radio__controls {
      input {
        cursor: default;
      }
      &__icon {
        border-color: @border-color-disabled;
        background-color: @background-color-disabled;
      }
    }
    label {
      cursor: default;
      color: @color-disabled;
    }
  }
}
</style>
