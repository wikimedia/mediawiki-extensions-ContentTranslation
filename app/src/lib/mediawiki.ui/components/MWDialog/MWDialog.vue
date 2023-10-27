<template>
  <transition :name="`mw-ui-animation-${animation}`" :style="cssVars">
    <div
      v-if="value"
      ref="root"
      class="mw-ui-dialog"
      :class="classes"
      tabindex="0"
      role="dialog"
      aria-modal="true"
      @keyup.esc="closeOnEscapeKey && close"
    >
      <div
        class="mw-ui-dialog__overlay"
        :style="overlayStyles"
        @click="!persistent && close"
      />
      <div class="mw-ui-dialog__shell items-stretch">
        <slot v-if="header" name="header">
          <mw-row class="mw-ui-dialog__header">
            <!-- eslint-disable vue/no-v-html -->
            <mw-col
              grow
              class="items-center mw-ui-dialog__header-title justify-start"
              v-html="title"
            />
            <!--eslint-enable vue/no-v-html -->
            <mw-col shrink class="justify-center">
              <mw-button type="icon" :icon="mwIconClose" @click="close" />
            </mw-col>
          </mw-row>
          <mw-divider />
        </slot>

        <div class="mw-ui-dialog__body">
          <slot />
        </div>
        <slot name="footer" />
      </div>
    </div>
  </transition>
</template>

<script>
import MwButton from "../MWButton";
import MwDivider from "../MWDivider";
import { MwRow, MwCol } from "../MWLayout";

import { mwIconClose } from "../icons";
import { computed, watch, ref, nextTick } from "vue";

export default {
  name: "MwDialog",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwDivider,
  },
  props: {
    /**
     * Animation
     * @values slide-right, slide-left, slide-up, slide-down
     **/
    animation: {
      type: String,
      default: "slide-left",
      validator: (value) => {
        // The value must match one of these strings
        return (
          ["slide-right", "slide-left", "slide-up", "slide-down"].indexOf(
            value
          ) !== -1
        );
      },
    },
    /**
     * Whether the dialog should be shown fullscreen or not.
     **/
    fullscreen: {
      type: Boolean,
      default: false,
    },
    /**
     * Title of the dialog
     **/
    title: {
      type: String,
      default: null,
    },
    /**
     * Whether the dialog should close on `escape` key press or not.
     **/
    closeOnEscapeKey: {
      type: Boolean,
      default: true,
    },
    /**
     * Whether the dialog should close when clicking on the overlay.
     * If false, it closes on overlay click.
     **/
    persistent: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the dialog should have header or not.
     **/
    header: {
      type: Boolean,
      default: true,
    },
    /**
     * Color of the overlay
     **/
    overlayColor: {
      type: String,
      default: "#fff",
    },
    /**
     * Opacity of the overlay
     **/
    overlayOpacity: {
      type: Number,
      default: 1.0,
    },
    value: {
      type: Boolean,
      default: true,
    },
    minHeight: {
      type: String,
      default: "200px",
    },
  },
  emits: ["input", "close"],
  setup(props, context) {
    const root = ref(null);
    const classes = computed(() => ({
      "mw-ui-dialog--fullscreen": props.fullscreen,
      "mw-ui-dialog--dialog": !props.fullscreen,
    }));

    const overlayStyles = computed(() => ({
      "background-color": props.overlayColor,
      opacity: props.overlayOpacity,
    }));

    const close = () => {
      document.body.classList.remove("mw-ui-dialog--open");
      context.emit("input", false);
      context.emit("close");
    };

    const onOpen = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    watch(
      () => props.value,
      (isOpen) => {
        if (isOpen) {
          onOpen();
          nextTick(() => {
            root.value.focus();
          });
        } else {
          close();
        }
      }
    );

    const cssVars = computed(() => ({
      "--dialog-min-height": props.minHeight,
    }));

    return {
      close,
      classes,
      cssVars,
      overlayStyles,
      mwIconClose,
      root,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import "../../components/MWLayout/animations.less";

.mw-ui-dialog {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &.mw-ui-dialog--fullscreen {
    .mw-ui-dialog__shell {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100vw;
      min-width: calc(100vw - 2px);
      min-height: calc(100vh - 2px);
      max-height: 100vh;
    }
  }

  .mw-ui-dialog__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .mw-ui-dialog__shell {
    flex-direction: column;
    background-color: @background-color-base;
    border: @border-base;
    border-radius: @border-radius-base;
    position: relative;
    max-width: calc(100vw - 100px);
    min-width: 300px;
    max-height: calc(100vh - 100px);
    min-height: var(--dialog-min-height);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }

  .mw-ui-dialog__header {
    & > .mw-ui-dialog__header-title:not(:empty) {
      max-width: 100%;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .mw-ui-dialog__body {
    flex: 1;
    height: 100%;
    overflow: auto;
  }

  .mw-ui-dialog__footer:not(:empty) {
    border-top: @border-width-base @border-style-base @border-color-base;
    max-height: 2em;
  }
}

body.mw-ui-dialog--open {
  overflow: hidden;
}
</style>
