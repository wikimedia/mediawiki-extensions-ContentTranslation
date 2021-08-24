<template>
  <transition :name="`mw-ui-animation-${animation}`">
    <div
      v-show="value"
      class="mw-ui-dialog"
      :class="classes"
      tabindex="0"
      role="dialog"
      aria-modal="true"
      @keyup.esc="closeOnEscapeKey && close()"
    >
      <div
        class="mw-ui-dialog__overlay"
        :style="overlayStyles"
        @click="close()"
      />
      <div class="mw-ui-dialog__shell items-stretch">
        <slot v-if="header" name="header">
          <mw-row class="mw-ui-dialog__header">
            <mw-col
              grow
              class="items-center mw-ui-dialog__header-title justify-start"
              v-html="title"
            />
            <mw-col shrink class="justify-center">
              <mw-button type="icon" :icon="mwIconClose" @click="close()" />
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

export default {
  name: "MwDialog",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwDivider
  },
  props: {
    /**
     * Animation
     * @values slide-right, slide-left, slide-up, slide-down
     **/
    animation: {
      type: String,
      default: "slide-left",
      validator: value => {
        // The value must match one of these strings
        return (
          ["slide-right", "slide-left", "slide-up", "slide-down"].indexOf(
            value
          ) !== -1
        );
      }
    },
    /**
     * Whether the dialog should be shown fullscreen or not.
     **/
    fullscreen: {
      type: Boolean,
      default: false
    },
    /**
     * Title of the dialog
     **/
    title: {
      type: String,
      default: null
    },
    /**
     * Whether the dialog should have closed on `escape` key press or not.
     **/
    closeOnEscapeKey: {
      type: Boolean,
      default: true
    },
    /**
     * Whether the dialog should have header or not.
     **/
    header: {
      type: Boolean,
      default: true
    },
    /**
     * Color of the overlay
     **/
    overlayColor: {
      type: String,
      default: "#fff"
    },
    /**
     * Opacity of the overlay
     **/
    overlayOpacity: {
      type: Number,
      default: 1.0
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mwIconClose
  }),
  computed: {
    classes: vm => ({
      "mw-ui-dialog--fullscreen": vm.fullscreen,
      "mw-ui-dialog--dialog": !vm.fullscreen
    }),
    overlayStyles() {
      return {
        "background-color": this.overlayColor,
        opacity: this.overlayOpacity
      };
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.$nextTick(() => {
          this.$el.focus();
        });
      }
    }
  },
  methods: {
    close() {
      this.$emit("input", false);
      this.$emit("close");
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";
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
    min-height: 200px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }

  .mw-ui-dialog__header {
    & > .mw-ui-dialog__header-title:not(:empty) {
      max-height: 2em;
      max-width: 100%;
      font-weight: bold;
      white-space: nowrap;
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
</style>
