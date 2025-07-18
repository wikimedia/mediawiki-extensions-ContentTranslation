<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui/components";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-banana-i18n";
import { CdxButton, CdxIcon, CdxMessage } from "@wikimedia/codex";
import {
  cdxIconNext,
  cdxIconPrevious,
  cdxIconEye,
} from "@wikimedia/codex-icons";

const props = defineProps({
  publishFeedbackMessages: {
    type: Array,
    required: true,
  },
});

const activeMessageIndex = ref(0);

const learnMoreContainer = ref(null);
watch(learnMoreContainer, () => {
  const container = learnMoreContainer.value?.$el;

  if (container instanceof HTMLElement) {
    const anchor = container.querySelector("a");
    anchor && anchor.setAttribute("target", "_blank");
  }
});
const activeMessage = computed(
  () => props.publishFeedbackMessages?.[activeMessageIndex.value]
);

const status = computed(() => activeMessage.value?.status || "notice");
const isNotice = computed(() => status.value === "notice");

const reviewInfoClass = computed(
  () => `sx-publisher__review-info--${status.value}`
);

const bananaI18n = useI18n();
const messageText = computed(() => activeMessage.value?.text);
const messageTitle = computed(() => {
  if (isNotice.value) {
    return bananaI18n.i18n("cx-sx-publisher-review-info");
  }

  return (
    activeMessage.value?.title ||
    bananaI18n.i18n("cx-sx-publisher-review-info-error")
  );
});

const goToPreviousMessage = () => {
  const messagesLength = props.publishFeedbackMessages.length;
  activeMessageIndex.value =
    (activeMessageIndex.value - 1 + messagesLength) % messagesLength;
};

const goToNextMessage = () => {
  activeMessageIndex.value =
    (activeMessageIndex.value + 1) % props.publishFeedbackMessages.length;
};
</script>

<template>
  <cdx-message
    :type="status"
    class="sx-publisher__review-info"
    :class="reviewInfoClass"
    :icon="isNotice ? cdxIconEye : null"
  >
    <h5 v-text="messageTitle" />
    <template v-if="!isNotice">
      <p v-text="messageText" />
      <mw-row justify="between" class="ma-0">
        <mw-col
          ref="learnMoreContainer"
          v-i18n-html:cx-sx-publisher-review-info-learn-more
          class="sx-publisher__review-info__learn-more-anchor"
        />
        <mw-col
          v-if="publishFeedbackMessages.length > 1"
          class="sx-publisher__review-info__navigation-buttons justify-end"
          align="center"
        >
          <cdx-button
            weight="quiet"
            class="pa-0 me-1"
            :aria-label="
              $i18n('cx-sx-publisher-review-info-previous-button-aria-label')
            "
            @click="goToPreviousMessage"
          >
            <cdx-icon :icon="cdxIconPrevious" />
          </cdx-button>
          <cdx-button
            weight="quiet"
            class="pa-0 ms-1"
            :aria-label="
              $i18n('cx-sx-publisher-review-info-next-button-aria-label')
            "
            @click="goToNextMessage"
          >
            <cdx-icon :icon="cdxIconNext" />
          </cdx-button>
        </mw-col>
      </mw-row>
    </template>
  </cdx-message>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher {
  .sx-publisher__review-info {
    border: none;
    border-bottom: @border-width-base @border-style-base @border-color-subtle;
    &__learn-more-anchor {
      font-weight: @font-weight-bold;
      color: @color-progressive;
    }
  }
}
</style>
