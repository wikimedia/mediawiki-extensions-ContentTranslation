<template>
  <div :class="classes" @click="focus()">
    <div class="mw-ui-input__content d-flex row">
      <mw-icon
        v-if="icon"
        :icon="icon"
        :size="large ? 28 : iconSize"
        class="mw-ui-input__icon"
      ></mw-icon>
      <div class="mw-ui-input__wrapper">
        <component
          class="mw-ui-input__input"
          :is="type === 'textarea' ? type : 'input'"
          ref="input"
          :disabled="disabled"
          :aria-disabled="disabled"
          :value.prop="valueModel"
          :placeholder="placeholder"
          v-bind="$attrs"
          v-on="$listeners"
          :type="type"
          @input="$emit('update', $event.target.value)"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onKeyTab"
          @click="onClick"
        />

        <input
          v-if="showSuggestion"
          class="mw-ui-input__suggestion"
          :value="suggestion"
          disabled
        />
      </div>
      <mw-icon
        v-if="indicator"
        :icon="indicator"
        :size="large ? 28 : indicatorSize || iconSize"
        class="mw-ui-input__indicator"
      ></mw-icon>
    </div>
  </div>
</template>

<script>
import MwIcon from "./MWIcon";

export default {
  name: "mw-input",
  components: {
    MwIcon
  },
  data: () => ({
    focused: false
  }),
  props: {
    disabled: Boolean,
    large: Boolean,
    value: {},
    placeholder: String,
    icon: String,
    iconSize: {
      type: [Number, String],
      default: "24"
    },
    indicatorSize: {
      type: [Number, String],
      default: "24"
    },
    indicator: String,
    suggestion: {
      type: [String, Number],
      default: null
    },
    selectAll: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "input",
      validator: value => {
        // The value must match one of these strings
        return ["input", "search", "textarea"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      return {
        "mw-ui-input": true,
        container: true, // This is a sub flex system
        "mw-ui-input--disabled": this.disabled,
        "mw-ui-input--large": this.large,
        "mw-ui-input--focused": this.focused
      };
    },
    showSuggestion() {
      return (
        this.suggestion !== null &&
        this.suggestion !== this.value &&
        this.focused &&
        this.value
      );
    },
    valueModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update", value);
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    focus() {
      const input = this.$refs.input;
      input.focus();
      if (this.selectAll) {
        input.setSelectionRange(0, input.value.length);
      }
    },
    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onKeyTab(event) {
      if (this.showSuggestion) {
        this.valueModel = this.suggestion;
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
};
</script>

<style lang="less">
@import "../mixins/common.less";
@import "../variables/colors.less";
@import "../variables/borders.less";

.mw-ui-input {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: auto;
  color: @colorGray1;
  border: 1px solid @colorFieldBorder;
  border-radius: @borderRadius;
  // necessary for smooth transition
  box-shadow: inset 0 0 0 0.1em #fff;
  &:hover {
    border-color: @colorGray7;
  }
  .mw-ui-input__content {
    padding: 0;
    margin: 4px;
  }
  .mw-ui-input__wrapper {
    position: relative;
    flex: auto 1 1;
  }
  .mw-ui-input__input {
    outline: none;
    border: none;
    padding: 6px 8px;

    font-family: inherit;
    font-size: inherit;
    line-height: 1.28571429em;
    vertical-align: middle;
    &:not(textarea) {
      height: 32px;
    }
    // Normalize & style placeholder text, see T139034
    &::placeholder {
      color: @colorGray7;
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
      border-color: @colorGray14;
      color: @colorGray12;
    }

    // Normalize styling for `<input type="search">`
    &[type="search"] {
      // Support: Safari/iOS `none` needed, Chrome would accept `textfield` as well.
      -webkit-appearance: none;
      // Support: Firefox.
      -moz-appearance: textfield;

      // Remove proprietary clear button in IE 10-11, Edge 12+
      &::-ms-clear {
        display: none;
      }

      // Remove the inner padding and cancel buttons in Chrome on OS X and Safari on OS X
      &::-webkit-search-cancel-button,
      &::-webkit-search-decoration {
        -webkit-appearance: none;
      }
    }
  }

  &.mw-ui-input--focused {
    border-color: @colorProgressive;
    box-shadow: inset 0 0 0 1px @colorProgressive;
    outline: 0;
  }

  textarea.mw-ui-input__input {
    padding: 8px;
    resize: vertical;
    min-height: 8em;
    box-sizing: border-box;
    line-height: 18px;
  }
  input.mw-ui-input__input {
    height: 32px;
  }
  .mw-ui-input__suggestion {
    outline: none;
    border: none;
    padding: 6px 8px;
    font-family: inherit;
    font-size: inherit;
    line-height: 1.28571429em;
    vertical-align: middle;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: transparent;
    // FIXME
    color: @colorGray7;
    pointer-events: none;
  }

  .mw-ui-input__icon + .mw-ui-input__label,
  .mw-ui-input__label + .mw-ui-input__indicator {
    padding-left: 8px;
  }
  // mw-ui-input-large
  //
  // Use mw-ui-input-large with mw-ui-input in cases where there are multiple inputs on a screen and you
  // want to draw attention to one instance. For example, replying with a subject line and more text.
  // Currently in draft status and subject to change. When used on an input field, the text is styled
  // in a large font. When used alongside another mw-ui-input large they are pushed together to form one
  // contiguous block.
  //
  &.mw-ui-input--large {
    margin-top: 0;
    margin-bottom: 0;

    // When two large inputs are together, we make them flush by hiding one of the borders
    & + .mw-ui-input-large {
      margin-top: -1px;
    }
    // When focusing, make the input relative to raise it above any attached inputs to unhide its borders
    &:focus {
      position: relative;
    }

    input.mw-ui-input__input {
      padding: 8px;
      font-size: 1.75em;
      font-weight: bold;
      line-height: 1.25em;
    }
  }
}
</style>
