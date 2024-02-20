<script setup>
import { MwRow } from "../../lib/mediawiki.ui";
import tutorialSvgMT from "../../assets/tutorial-mt.svg?raw";
import tutorialSvgSections from "../../assets/tutorial-sections.svg?raw";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconNext } from "@wikimedia/codex-icons";

const totalSteps = ref(2);
const activeStep = ref(1);

const goToNextStep = () => {
  if (activeStep.value < totalSteps.value) {
    activeStep.value++;
  }
};

const isActiveStep = (step) => step === activeStep.value;

const router = useRouter();
const completeTutorial = () => router.push({ name: "sx-sentence-selector" });
</script>

<template>
  <section class="sx-quick-tutorial">
    <mw-row direction="column" class="sx-quick-tutorial__body-container ma-0">
      <section class="sx-quick-tutorial__main-point py-9 px-6">
        <transition name="fade" mode="out-in">
          <h2
            v-if="isActiveStep(1)"
            key="main-point-1"
            v-i18n:sx-quick-tutorial-main-point-step-1
            class="ma-0 pa-0"
          />
          <h2
            v-else-if="isActiveStep(2)"
            key="main-point-2"
            v-i18n:sx-quick-tutorial-main-point-step-2
            class="ma-0 pa-0"
          />
        </transition>
      </section>
      <section class="sx-quick-tutorial__illustration">
        <transition name="mw-ui-animation-slide-left">
          <!--eslint-disable vue/no-v-html -->
          <div
            v-if="isActiveStep(1)"
            key="illustration-1"
            v-html="tutorialSvgSections"
          />
          <div
            v-else-if="isActiveStep(2)"
            key="illustration-2"
            v-html="tutorialSvgMT"
          />
          <!--eslint-enable vue/no-v-html -->
        </transition>
      </section>
      <div class="sx-quick-tutorial__step-indicator py-3">
        <span
          v-for="step in totalSteps"
          :key="`dot-${step}`"
          class="dot mx-1"
          :class="{ 'dot-active': isActiveStep(step) }"
          role="button"
          @click="activeStep = step"
        ></span>
      </div>
      <section class="sx-quick-tutorial__secondary-point py-4 px-6">
        <transition name="fade" mode="out-in">
          <h3
            v-if="isActiveStep(1)"
            key="secondary-point-1"
            v-i18n:sx-quick-tutorial-secondary-point-step-1
            class="ma-0"
          />
          <h3
            v-else-if="isActiveStep(2)"
            key="secondary-point-2"
            v-i18n:sx-quick-tutorial-secondary-point-step-2
            class="ma-0"
          />
        </transition>
      </section>
      <div class="sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end">
        <transition name="fade" mode="out-in">
          <cdx-button
            v-if="isActiveStep(1)"
            key="quick-tutorial-action-button-1"
            :aria-label="$i18n('sx-quick-tutorial-next-button-aria-label')"
            class="px-6 mx-4"
            action="progressive"
            weight="primary"
            @click="goToNextStep"
          >
            <cdx-icon :icon="cdxIconNext" />
          </cdx-button>
          <cdx-button
            v-else-if="isActiveStep(2)"
            key="quick-tutorial-action-button-2"
            class="mx-4"
            action="progressive"
            weight="primary"
            @click="completeTutorial"
          >
            {{ $i18n("sx-quick-tutorial-translate-button-label") }}
          </cdx-button>
        </transition>
      </div>
    </mw-row>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import "@/lib/mediawiki.ui/components/MWLayout/animations.less";

.sx-quick-tutorial {
  .sx-quick-tutorial__body-container {
    height: 100%;
  }
  .sx-quick-tutorial__main-point {
    align-self: start;
    h2 {
      border-bottom: none;
      font-weight: @font-weight-bold;
    }
  }
  .sx-quick-tutorial__illustration {
    width: 100%;
    text-align: center;
    background-color: @background-color-interactive-subtle;
    // Should be set, since absolute children lead to heightless section
    height: 200px;
    max-height: 25vh;
    div {
      // Should be absolute so that svgs "stack" one on top of the other, for the transition to work well
      position: absolute;
      width: 100%;
      svg {
        height: 100%;
        max-height: 25vh;
        max-width: 100%;
      }
    }
  }
  .sx-quick-tutorial__step-indicator {
    text-align: center;
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: @border-radius-circle;
      border: solid 1px @border-color-interactive;
      cursor: pointer;
      &.dot-active {
        // Should we create a background variable for this color?
        background-color: @color-base;
      }
    }
  }
  .sx-quick-tutorial__secondary-point {
    color: @color-base;
    h3 {
      font-weight: @font-weight-normal;
    }
    mark {
      // TODO: Fix this with token, `@background-color-warning-subtle` is not the right one.
      // Specifications document refers to this color as Yellow100.
      // Could we create a background variable for this one?
      background-color: #fef6e7;
    }
  }
  .sx-quick-tutorial__action-button {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
