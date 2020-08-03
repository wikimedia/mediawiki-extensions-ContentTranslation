<template>
  <div :class="classes" @click="onFocus()">
    <div
      class="mw-ui-dropdown__content flex ma-1 pa-0"
      aria-haspopup="listbox"
      @click.stop="toggle()"
    >
      <slot name="icon">
        <mw-icon
          v-if="icon"
          :icon="icon"
          :size="iconSize"
          class="mw-ui-select__icon shrink"
        ></mw-icon
      ></slot>
      <slot name="trigger" v-bind="{ selectedOption }">
        <span
          ref="trigger"
          class="mw-ui-dropdown__trigger flex grow"
          :disabled="disabled"
          :aria-disabled="disabled"
          aria-autocomplete="list"
          :aria-expanded="optionsOpen ? 'true' : 'false'"
          :aria-label="label"
          v-bind="$attrs"
          v-text="label"
        />
      </slot>
      <slot name="indicator">
        <mw-icon
          v-if="indicator"
          :icon="indicator"
          :size="indicatorSize || iconSize"
          class="mw-ui-dropdown__indicator shrink"
        ></mw-icon>
      </slot>
    </div>
    <div v-show="optionsOpen" class="mw-ui-dropdown__options" role="listbox">
      <ul role="list">
        <li
          v-for="(option, i) in options"
          :key="i"
          role="option"
          v-bind="{ option, index: i, dropdown: this }"
          class="mw-ui-dropdown__option pa-1"
          :aria-selected="i === selectedIndex"
          :class="i === selectedIndex ? 'mw-ui-dropdown__option--selected' : ''"
          tabindex="-1"
          @click="onOptionClick(i)"
        >
          <slot name="option" v-bind="{ option, index: i }">
            {{ option.label }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MwIcon from "../MWIcon";
import { mwIconExpand } from "../icons";

export default {
  name: "MwDropdown",
  components: {
    MwIcon
  },
  props: {
    disabled: Boolean,
    /**
     * Make use of v-model
     * Options for the dropdown.
     *
     */
    value: {},
    label: String,
    /* If the passed options are array of objects,
     * the label will be taken from this key
     */
    optionLabel: {
      type: String,
      default: "label"
    },
    /* If the passed options are array of objects,
     * the label will be taken from this key
     */
    optionValue: {
      type: String,
      default: "value"
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: "24"
    },
    indicatorSize: {
      type: [Number, String],
      default: "24"
    },
    indicator: {
      type: String,
      default: mwIconExpand
    }
  },
  data: () => ({
    mwIconExpand,
    optionsOpen: false,
    focused: false,
    selectedIndex: -1
  }),
  computed: {
    classes() {
      return {
        "mw-ui-dropdown": true,
        "mw-ui-dropdown--disabled": this.disabled,
        "mw-ui-dropdown--focused": this.focused
      };
    },
    options() {
      return this.parseValues(this.value);
    },
    selectedOption() {
      if (this.selectedIndex >= 0) {
        return this.options[this.selectedIndex];
      }
      return null;
    },
    selectedValue() {
      return this.selectedOption?.value;
    },
    selectedLabel() {
      return this.selectedOption?.label;
    }
  },
  methods: {
    parseValues(values) {
      // Check if the values are array of strings
      // Example: ["Apple", "Banana", "Carrot", "Orange"]
      if (
        Array.isArray(values) &&
        values.length &&
        typeof values[0] === "string"
      ) {
        return values.map(option => ({
          label: option,
          value: option
        }));
      }
      // Check if the values are array of objects
      // Example: [{label:"Apple", value="a"},{label:"Banana", value="b"}]
      // The keys, label and value are configurable using optionLabel and optionValue props.
      if (
        Array.isArray(values) &&
        values.length &&
        typeof values[0] === "object" &&
        values[0][this.optionLabel] &&
        values[0][this.optionValue]
      ) {
        return values.map(option => ({
          label: option[this.optionLabel],
          value: option[this.optionValue]
        }));
      }

      // Check if the values are array of objects
      // Example: {a:"Apple",b:"Banana",c:"Carrot"}
      // The keys, label and value are configurable using optionLabel and optionValue props.
      if (typeof values === "object") {
        const keys = Object.keys(values);
        return keys.map(key => ({
          value: key,
          label: values[key]
        }));
      }
      throw new Error("Passed value format is not supported");
      return [];
    },
    onClick(e) {
      this.open();
      this.$emit("click", e);
    },
    onOptionClick(index) {
      this.selectedIndex = index;
      this.close();
      this.$emit("select", this.selectedValue);
      this.query = this.selectedLabel;
    },
    close() {
      this.optionsOpen = false;
      this.removeGlobalMouseEvents();
    },
    open() {
      this.optionsOpen = true;
      this.focused = true;
      document.addEventListener("click", this.blur);
    },
    toggle() {
      this.optionsOpen ? this.close() : this.open();
    },
    blur() {
      this.close();
      this.focused = false;
    },
    onFocus(event) {
      this.focused = true;
      this.open();
      this.$emit("focus", event);
    },
    removeGlobalMouseEvents() {
      document.removeEventListener("click", this.blur);
    }
  }
};
</script>

<style lang="less">
@import "../../mixins/common.less";
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-dropdown {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: auto;
  color: @color-base;
  border: @border-base;
  border-radius: @border-radius-base;
  // necessary for smooth transition
  box-shadow: inset 0 0 0 0.1em #fff;
  position: relative;
  &:hover {
    border-color: @border-color-base--active;
  }
  .mw-ui-dropdown__content {
    width: 100%;
  }
  .mw-ui-dropdown__trigger {
    outline: none;
    border: none;
    padding: 0;

    font-family: inherit;
    font-size: inherit;
    line-height: 1.28571429em;
    vertical-align: middle;
    height: 32px;

    flex-direction: column;
    justify-content: center;
    // Normalize & style placeholder text, see T139034
    &::placeholder {
      color: @border-color-base--active;
      opacity: 1;
    }
    &:-moz-focus-inner {
      border: 0;
    }
    // Firefox: Remove red outline when `required` attribute set and invalid content.
    // See https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid
    // This should come before `:focus` so latter rules take preference.
    &:invalid {
      box-shadow: none;
    }

    // `:not()` is used exclusively for `transition`s as both are not supported by IE < 9.
    &:not(:disabled) {
      .transition(~"color 100ms, border-color 100ms, box-shadow 100ms");
    }

    &:disabled {
      border-color: @border-color-base;
      color: @border-color-base;
    }
  }

  &.mw-ui-dropdown--focused {
    border-color: @border-color-base;
    box-shadow: inset 0 0 0 1px @color-primary;
    outline: 0;
  }

  .mw-ui-dropdown__trigger {
    height: 32px;
  }

  .mw-ui-dropdown__option {
    line-height: @line-height-base;

    &:focus {
      background-color: @background-color-primary;
    }

    &:hover {
      background-color: @background-color-primary--hover;
    }
  }

  .mw-ui-dropdown__option--selected {
    background-color: @background-color-primary;
    color: @color-primary;
  }

  .mw-ui-dropdown__options {
    outline: none;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: 1.28571429em;
    vertical-align: middle;
    position: absolute;
    z-index: 1;
    top: 2.5em;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 200px;
    background-color: @background-color-base;
    border: @border-base;
    border-radius: @border-radius-base;
    // necessary for smooth transition
    box-shadow: inset 0 0 0 0.1em #fff;
    outline: 0;
    ul {
      padding: 0;
      margin: 0;
    }
  }

  .mw-ui-dropdown__icon + .mw-ui-dropdown__trigger,
  .mw-ui-dropdown__trigger + .mw-ui-dropdown__indicator {
    padding: 0 8px;
  }
}
</style>
