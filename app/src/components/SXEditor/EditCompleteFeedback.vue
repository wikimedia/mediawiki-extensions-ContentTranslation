<template>
  <div v-if="showFeedback" class="sx-editor__feedback-overlay fill-height">
    <div class="sx-editor__feedback-overlay-content px-4">
      <div
        class="sx-editor__feedback-overlay-content__happy-robot mb-4"
        v-html="happyRobotSVG"
      />
      <h2
        v-i18n:sx-editor-feedback-overlay-title
        class="sx-editor__feedback-overlay-content__title"
      />
      <p
        v-i18n:sx-editor-feedback-overlay-clarification
        class="sx-editor__feedback-overlay-content__clarification mb-1"
      />
      <p
        v-i18n-html:sx-editor-feedback-overlay-stats="[mtScore]"
        class="sx-editor__feedback-overlay-content__stats"
        :class="modificationPercentageClass"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import mtValidator from "@/utils/mtValidator";

export default {
  name: "EditCompleteFeedback",
  props: {
    showFeedback: {
      type: Boolean,
      required: true
    },
    editedTranslation: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const route = context.root.$route;
    const proposedTranslation = route.params.content;

    const mtScore = computed(() =>
      mtValidator.calculateScore(props.editedTranslation, proposedTranslation)
    );
    const modificationStatus = computed(() => {
      const status = mtValidator.getScoreStatus(mtScore.value);

      if (status === "failure") {
        return mtScore.value === 0 ? "failure" : "warning";
      }

      return status;
    });
    const modificationPercentageClass = computed(
      () =>
        `sx-editor__feedback-overlay-content__stats--${modificationStatus.value}`
    );

    const happyRobotSVG = require("!html-loader!@/assets/happy-robot.svg");

    return {
      happyRobotSVG,
      modificationPercentageClass,
      mtScore
    };
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-editor__feedback-overlay {
  position: absolute;
  opacity: 0.95;
  background-color: @background-color-base;
  z-index: 99;
  width: 100%;
  &-content {
    position: fixed;
    box-sizing: border-box;
    top: calc(50% - 8.5rem);
    text-align: center;
    width: 100%;
    &__happy-robot {
      display: inline-block;
    }
    &__title {
      color: @color-base;
    }
    &__clarification {
      color: @color-base;
    }
    &__stats {
      color: @wmui-color-base20;
      &--failure {
        span {
          color: @wmui-color-red50;
        }
      }
      &--warning {
        span {
          color: @wmui-color-yellow30;
        }
      }
      &--success {
        span {
          color: @wmui-color-green30;
        }
      }
    }
  }
}
</style>
