<template>
  <div
    v-if="shown"
    :class="classes"
    class="row"
    :aria-live="type !== 'error' && 'polite'"
    :aria-labelledby="`${id}-label`"
    :role="type === 'error' && 'alert'"
  >
    <slot name="icon">
      <mw-icon
        :icon="icon"
        :size="24"
        class="col shrink mw-ui-message__icon pa-1 items-start"
      />
    </slot>
    <span
      :id="`${id}-label`"
      class="col grow items-center mw-ui-message__label"
    >
      <slot />
    </span>
    <slot name="action">
      <mw-button
        v-if="dismissable"
        class="col shrink items-start mw-ui-message__action py-1"
        type="icon"
        :icon="mwIconClose"
        :icon-size="24"
        @click="shown = false"
      />
    </slot>
  </div>
</template>

<script>
import MwIcon from "../MWIcon";
import MwButton from "../MWButton";
import {
  mwIconClose,
  mwIconAlert,
  mwIconNotice,
  mwIconCheck,
  mwIconError
} from "../icons";
export default {
  name: "MwMessage",
  components: { MwIcon, MwButton },
  props: {
    type: {
      type: String,
      default: "notice",
      validator: value => {
        return ["notice", "error", "success", "warning"].indexOf(value) !== -1;
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    shown: true,
    mwIconClose,
    id: ""
  }),
  computed: {
    classes() {
      return {
        "mw-ui-message": true,
        "mw-ui-message--notice": this.type === "notice",
        "mw-ui-message--warning": this.type === "warning",
        "mw-ui-message--error": this.type === "error",
        "mw-ui-message--success": this.type === "success",
        "mw-ui-message--inline": this.inline
      };
    },
    icon() {
      const iconsMap = {
        notice: mwIconNotice,
        warning: mwIconAlert,
        success: mwIconCheck,
        error: mwIconError
      };
      return iconsMap[this.type];
    }
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-message {
  padding: 16px 24px;

  .mw-ui-message__action .mw-ui-icon {
    color: @color-base;
  }

  &--notice {
    background-color: @background-color-notice--framed;
    border: @border-notice;
    .mw-ui-icon {
      color: @color-notice;
    }
  }
  &--warning {
    background-color: @background-color-warning--framed;
    border: @border-warning;
    .mw-ui-icon {
      color: @wmui-color-yellow50;
    }
  }
  &--error {
    background-color: @background-color-error--framed;
    border: @border-error;
    .mw-ui-icon {
      color: @color-error;
    }
  }
  &--success {
    background-color: @background-color-success--framed;
    border: @border-success;
    .mw-ui-icon {
      color: @color-success;
    }
  }
}

.mw-ui-message--inline.mw-ui-message {
  border: none;
  background-color: @background-color-base;
  font-weight: @font-weight-bold;
  &--error {
    color: @color-error;
  }
  &--success {
    color: @color-success;
  }
}
</style>
