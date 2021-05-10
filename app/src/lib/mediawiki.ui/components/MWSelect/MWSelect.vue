<template>
  <div :class="classes" @click="focus()">
    <div class="mw-ui-select__content flex">
      <slot name="icon">
        <mw-icon
          v-if="icon"
          :icon="icon"
          :size="iconSize"
          class="mw-ui-select__icon shrink"
          @click.stop="onClick()"
        ></mw-icon>
      </slot>
      <slot name="input" v-bind="{ selectedOption }">
        <input
          ref="input"
          v-model.trim="query"
          class="mw-ui-select__input grow"
          :disabled="disabled"
          :aria-disabled="disabled"
          aria-autocomplete="list"
          :aria-expanded="optionsOpen ? 'true' : 'false'"
          role="combobox"
          :aria-label="selectedLabel || placeholder"
          :placeholder="selectedLabel || placeholder"
          v-bind="$attrs"
          @focus="onFocus"
          @keydown.down.prevent="next()"
          @keydown.up.prevent="prev()"
          @keydown.esc.prevent="close()"
          @keydown.enter="onKeyDownEnter"
          @click.stop="onClick()"
          @input="open()"
        />
      </slot>
      <slot name="indicator">
        <mw-icon
          v-if="indicator"
          :icon="indicator"
          :size="indicatorSize || iconSize"
          class="mw-ui-select__indicator shrink"
          @click.stop="toggle()"
        ></mw-icon>
      </slot>
    </div>
    <div v-show="optionsOpen" class="mw-ui-select__options" role="listbox">
      <div
        v-if="query && options_.length === 0"
        disabled="true"
        aria-disabled="true"
      >
        <slot name="no-results">
          <div class="pa-1" v-text="noResultsMessage"></div
        ></slot>
      </div>
      <slot name="list-header"></slot>
      <ul role="list">
        <li
          v-for="(option, i) in options_"
          :key="i"
          :ref="option.key"
          role="option"
          v-bind="{ option, index: i, select: this }"
          class="mw-ui-select__option pa-1"
          :aria-selected="i === selectedIndex"
          :class="i === selectedIndex ? 'mw-ui-select__option--selected' : ''"
          tabindex="-1"
          @click="onOptionClick(i)"
        >
          <slot name="option" v-bind="{ option, index: i }">
            {{ option.label }}
          </slot>
        </li>
      </ul>
      <slot name="list-footer"></slot>
    </div>
  </div>
</template>

<script>
import MwIcon from "../MWIcon";
import { mwIconExpand, mwIconSearch } from "../icons";

export default {
  name: "MwSelect",
  components: {
    MwIcon
  },
  props: {
    disabled: Boolean,
    /**
     * Make use of v-model
     * Options for the dropdown.
     */
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: true
    },
    placeholder: {
      type: String,
      default: null
    },
    /* If the passed options are array of objects,
     * the label will be taken from this key
     */
    optionLabel: {
      type: String,
      default: "label"
    },
    /**
     * If the passed options are array of objects,
     * the label will be taken from this key
     */
    optionValue: {
      type: String,
      default: "value"
    },
    icon: {
      type: String,
      default: mwIconSearch
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
    },
    noResultsMessage: {
      type: String,
      default: "No results found"
    },
    /**
     * Filter function. Should accept two params.
     * First being the object containing value and label,
     * second, the current query string
     **/
    filterBy: {
      type: Function,
      default: ({ value, label }, query) =>
        ~(label + "").toLowerCase().indexOf(query.toLowerCase()) ||
        ~(value + "").toLowerCase().indexOf(query.toLowerCase())
    }
  },
  data: () => ({
    query: "", //selectedOption && selectedOption.label
    mwIconExpand,
    optionsOpen: false,
    focused: false,
    selectedIndex: -1
  }),
  computed: {
    classes() {
      return {
        "mw-ui-select": true,
        "mw-ui-select--disabled": this.disabled,
        "mw-ui-select--focused": this.focused
      };
    },
    options_() {
      return this.filter(this.parseValues(this.value), this.query);
    },
    selectedOption() {
      if (this.selectedIndex >= 0) {
        return this.options_[this.selectedIndex];
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
    },
    onClick(e) {
      this.open();
      this.$emit("click", e);
      this.clear();
    },
    onOptionClick(index) {
      this.selectedIndex = index;
      this.close();
      this.$emit("select", this.selectedValue);
      this.query = this.selectedLabel;
    },
    clear() {
      this.query = "";
    },
    close() {
      this.optionsOpen = false;
      this.removeGlobalMouseEvents();
    },
    open() {
      this.optionsOpen = true;
      document.addEventListener("click", this.blur);
    },
    toggle() {
      this.optionsOpen ? this.close() : this.open();
    },
    focus() {
      const input = this.$refs.input;
      input?.focus();
    },
    blur() {
      this.close();
      this.focused = false;
    },
    filter(options = [], query) {
      if (!query) {
        return options;
      }

      return options.filter(option => this.filterBy.call(this, option, query));
    },
    onFocus(event) {
      this.focused = true;
      this.open();
      this.$emit("focus", event);
    },
    onKeyDownEnter() {
      this.close();
      this.$emit("select", this.selectedValue);
      this.query = this.selectedLabel;
    },
    next() {
      if (!this.optionsOpen) {
        this.open();

        return;
      }

      if (this.selectedIndex < this.options_.length) {
        this.selectedIndex++;
      } else {
        this.selectedIndex = 0;
      }
    },
    prev() {
      if (!this.optionsOpen) {
        this.open();

        return;
      }

      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      } else {
        this.selectedIndex = this.options_.length;
      }
    },
    removeGlobalMouseEvents() {
      document.removeEventListener("click", this.blur);
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-select {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  color: @color-base;
  border: @border-base;
  border-radius: @border-radius-base;
  // necessary for smooth transition
  box-shadow: inset 0 0 0 0.1em #fff;
  position: relative;
  &:hover {
    border-color: @border-color-base--active;
  }
  .mw-ui-select__content {
    padding: 0;
    margin: 4px;
    width: 100%;
  }
  .mw-ui-select__input {
    outline: none;
    border: none;
    padding: 0;

    font-family: inherit;
    font-size: inherit;
    line-height: 1.28571429em;
    vertical-align: middle;
    height: 32px;
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
      transition: color 100ms, border-color 100ms, box-shadow 100ms;
    }

    &:disabled {
      border-color: @border-color-base;
      color: @border-color-base;
    }
  }

  &.mw-ui-select--focused {
    border-color: @border-color-base;
    box-shadow: inset 0 0 0 1px @color-primary;
    outline: 0;
  }

  .mw-ui-select__input {
    height: 32px;
  }

  .mw-ui-select__option {
    line-height: @line-height-base;

    &:focus {
      background-color: @background-color-primary;
    }

    &:hover {
      background-color: @background-color-primary--hover;
    }
  }

  .mw-ui-select__option--selected {
    background-color: @background-color-primary;
    color: @color-primary;
  }

  .mw-ui-select__options {
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
    width: 100%;
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

  .mw-ui-select__icon + .mw-ui-select__input,
  .mw-ui-select__input + .mw-ui-select__indicator {
    padding: 0 8px;
  }
}
</style>
