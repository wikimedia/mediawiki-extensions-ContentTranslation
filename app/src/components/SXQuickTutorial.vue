<template>
  <mw-dialog
    v-if="active"
    class="sx-quick-tutorial"
    animation="slide-up"
    :fullscreen="true"
    :header="false"
  >
    <div class="sx-quick-tutorial__body-container column ma-0">
      <div class="sx-quick-tutorial__main-point py-9 px-7">
        <transition name="fade" mode="out-in">
          <h2
            v-if="isActiveStep(1)"
            key="main-point-1"
            v-i18n:sx-quick-tutorial-main-point-step-1
            class="ma-0 pa-0"
          />
          <h2
            v-if="isActiveStep(2)"
            key="main-point-2"
            v-i18n:sx-quick-tutorial-main-point-step-2
            class="ma-0 pa-0"
          />
        </transition>
      </div>
      <div class="sx-quick-tutorial__illustration">
        <transition name="fade" mode="out-in">
          <div
            v-if="isActiveStep(1)"
            key="illustration-1"
            v-html="tutorialSvgMT"
          />
          <div
            v-if="isActiveStep(2)"
            key="illustration-2"
            v-html="tutorialSvgSections"
          />
        </transition>
      </div>
      <div class="sx-quick-tutorial__step-indicator py-3">
        <span
          v-for="step in totalSteps"
          :key="`dot-${step}`"
          class="dot mx-1"
          :class="{ 'dot-active': isActiveStep(step) }"
        ></span>
      </div>
      <div class="sx-quick-tutorial__secondary-point py-4 px-6">
        <transition name="fade" mode="out-in">
          <h3
            v-if="isActiveStep(1)"
            key="secondary-point-1"
            v-i18n-html:sx-quick-tutorial-secondary-point-step-1
            class="ma-0"
          />
          <h3
            v-if="isActiveStep(2)"
            key="secondary-point-2"
            v-i18n-html:sx-quick-tutorial-secondary-point-step-2
            class="ma-0"
          />
        </transition>
      </div>
      <div class="sx-quick-tutorial__action-button pa-4 pb-6">
        <transition name="fade" mode="out-in">
          <mw-button
            v-if="isActiveStep(1)"
            key="button-1"
            class="px-8"
            :icon="mwIconArrowForward"
            :progressive="true"
            @click="goToNextStep"
          ></mw-button>
          <mw-button
            v-if="isActiveStep(2)"
            key="button-2"
            :label="$i18n('sx-quick-tutorial-translate-button-label')"
            :progressive="true"
            @click="completeTutorial"
          ></mw-button>
        </transition>
      </div>
    </div>
  </mw-dialog>
</template>

<script>
import { MwDialog, MwButton } from "../lib/mediawiki.ui";
import { mwIconArrowForward } from "../lib/mediawiki.ui/components/icons";
export default {
  name: "SxQuickTutorial",
  components: {
    MwButton,
    MwDialog
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    mwIconArrowForward,
    totalSteps: 2,
    activeStep: 1,
    tutorialSvgMT: require("!html-loader!../assets/tutorial-mt.svg"),
    tutorialSvgSections: require("!html-loader!../assets/tutorial-sections.svg")
  }),
  methods: {
    goToNextStep() {
      this.activeStep = 2;
    },
    isActiveStep(step) {
      return step === this.activeStep;
    },
    completeTutorial() {
      this.$emit("update:active", false);
      this.$emit("tutorial-completed");
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-quick-tutorial {
  .sx-quick-tutorial__body-container {
    height: 100%;
  }
  .sx-quick-tutorial__main-point {
    h2 {
      border-bottom: none;
    }
  }
  .sx-quick-tutorial__illustration {
    text-align: center;
    background-color: @background-color-framed;
    svg {
      height: 100%;
      max-width: 100%;
    }
  }
  .sx-quick-tutorial__step-indicator {
    text-align: center;
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: solid 1px @border-color-base--active;
      &.dot-active {
        // Should we create a background variable for this color?
        background-color: @color-base;
      }
    }
  }
  .sx-quick-tutorial__secondary-point {
    color: @color-base;
    h3 {
      font-weight: 400;
    }
    mark {
      // TODO: Fix this with variable. Specifications document refers to this color as Yellow30.
      // Could we create a background variable for this one?
      background-color: @wmui-color-yellow90;
    }
  }
  .sx-quick-tutorial__action-button {
    text-align: end;
    margin-top: auto;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
