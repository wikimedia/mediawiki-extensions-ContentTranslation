<template>
  <mw-row
    v-if="shown"
    :class="classes"
    class="mw-ui-message"
    :aria-live="type !== 'error' ? 'polite' : null"
    :aria-labelledby="`${id}-label`"
    :role="type === 'error' ? 'alert' : null"
    align="normal"
  >
    <!-- @slot Use this slot for custom icon -->
    <slot name="icon">
      <mw-icon
        :icon="icon"
        :size="24"
        class="col shrink mw-ui-message__icon pa-1 items-start"
      />
    </slot>
    <mw-col
      :id="`${id}-label`"
      tag="span"
      grow
      align="center"
      class="mw-ui-message__label"
    >
      <!-- @slot Message content -->
      <slot />
    </mw-col>
    <!-- @slot Use this slot for custom action for the message -->
    <!--    Add hideMessage method as slot prop, so that message can be hidden even when -->
    <!--    action slot is being overridden -->
    <slot name="action" :hideMessage="hideMessage">
      <mw-button
        v-if="dismissable"
        class="col shrink items-start mw-ui-message__action py-1"
        type="icon"
        :icon="mwIconClose"
        :icon-size="24"
        @click="hideMessage"
      />
    </slot>
  </mw-row>
</template>

<script>
import {
  mwIconClose,
  mwIconAlert,
  mwIconNotice,
  mwIconCheck,
  mwIconError,
} from "../icons";
import { MwRow, MwCol, MwIcon, MwButton } from "../";
export default {
  name: "MwMessage",
  components: { MwCol, MwRow, MwIcon, MwButton },
  props: {
    /**
     * Type of the message.
     * @values notice, error, success, warning
     **/
    type: {
      type: String,
      default: "notice",
      validator: (value) => {
        return ["notice", "error", "success", "warning"].indexOf(value) !== -1;
      },
    },
    /**
     * Inline messages does not have borders
     **/
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the message can be dismissed by clicking the close button.
     **/
    dismissable: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    shown: true,
    mwIconClose,
    id: "",
  }),
  computed: {
    classes: (vm) => ({
      "mw-ui-message--notice": vm.type === "notice",
      "mw-ui-message--warning": vm.type === "warning",
      "mw-ui-message--error": vm.type === "error",
      "mw-ui-message--success": vm.type === "success",
      "mw-ui-message--inline": vm.inline,
    }),
    icon: (vm) => {
      const iconsMap = {
        notice: mwIconNotice,
        warning: mwIconAlert,
        success: mwIconCheck,
        error: mwIconError,
      };

      return iconsMap[vm.type];
    },
  },
  mounted() {
    this.id = this.type + Math.floor(Math.random() * 100);
  },
  methods: {
    hideMessage() {
      this.shown = false;
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.mw-ui-message {
  border-width: @border-width-base;
  border-style: @border-style-base;
  padding: 16px 24px;

  .mw-ui-message__action .mw-ui-icon {
    color: @color-base;
  }

  &--notice {
    background-color: @background-color-notice-subtle;
    border-color: @border-color-notice;
    .mw-ui-message__icon {
      color: @color-notice;
    }
  }
  &--warning {
    background-color: @background-color-warning-subtle;
    border-color: @border-color-warning;
    .mw-ui-message__icon {
      color: @color-warning;
    }
  }
  &--error {
    background-color: @background-color-error-subtle;
    border-color: @border-color-error;
    .mw-ui-message__icon {
      color: @color-error;
    }
  }
  &--success {
    background-color: @background-color-success-subtle;
    border-color: @border-color-success;
    .mw-ui-message__icon {
      color: @color-success;
    }
  }
  &--inline {
    border: none;
    background-color: @background-color-base;
    font-weight: @font-weight-bold;
    &.mw-ui-message--error {
      color: @color-error;
    }
    &.mw-ui-message--success {
      color: @color-success;
    }
  }
}
</style>
