<template>
  <mw-row class="mw-ui-radio flex items-center py-2" :class="widgetClass">
    <div class="mw-ui-radio__controls">
      <input
        :id="id"
        v-model="inputModel"
        type="radio"
        :disabled="disabled"
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
      // Note: Evan You, creator of Vue, discourages the use
      // of _uid for such purposes as it's intended for internal
      // use and maybe its behaviour changes in the future.
      // However, due to lack of a better solution (at least
      // among simple ones) I decided to go with Vuetify's solution
      // which is the current one.
      default() {
        return `radio-button-${this._uid}`;
      }
    },
    /**
     * Represents the value of the currently checked button
     * inside a radio button group
     **/
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: false,
      default: null
    },
    /**
     * Removes the ability to click or target the component.
     **/
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Sets radio button label
     **/
    label: {
      type: String,
      required: true
    },
    /**
     * Sets value attribute of current radio button
     **/
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      required: true
    },
    /**
     * Sets the name of current radio button
     **/
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    computedΝame: vm => vm.name || vm.$parent.name,
    isSelected: vm =>
      vm.value
        ? vm.value === vm.inputValue
        : vm.$parent.value === vm.inputValue,
    widgetClass: vm => ({
      "mw-ui-radio--selected": vm.isSelected,
      "mw-ui-radio--disabled": vm.disabled
    }),
    inputModel: {
      get() {
        return this.value || this.$parent.value;
      },
      set() {
        this.$emit("change", this.inputValue);
      }
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";
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
            border-color: @color-base--inverted;
          }
        }
      }
    }
    &__icon {
      background-color: @background-color-base;
      box-sizing: border-box;
      border: @border-style-base @border-width-base @border-color-base--active;
      border-radius: 100%;
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
        border-radius: 100%;
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
      border-color: @color-primary;
    }
  }
  &--disabled {
    .mw-ui-radio__controls {
      input {
        cursor: default;
      }
      &__icon {
        border-color: @border-color-base--disabled;
        background-color: @background-color-filled--disabled;
      }
    }
    label {
      cursor: default;
      color: @color-base--disabled;
    }
  }
}
</style>
