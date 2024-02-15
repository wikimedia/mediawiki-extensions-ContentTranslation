<script setup>
import { MwMessage } from "@/lib/mediawiki.ui";
import { MwRow, MwCol } from "@/lib/mediawiki.ui/components";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-banana-i18n";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import {
  cdxIconNext,
  cdxIconPrevious,
  cdxIconAlert,
  cdxIconEye,
  cdxIconBlock,
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

const status = computed(() => activeMessage.value?.status || "default");

const reviewIcon = computed(() => {
  switch (status.value) {
    case "warning":
      return cdxIconAlert;
    case "error":
      return cdxIconBlock;
    default:
      return cdxIconEye;
  }
});
const isMessageInline = computed(() => status.value === "default");

const messageType = computed(() =>
  isMessageInline.value ? "notice" : status.value
);
const reviewInfoClass = computed(
  () => `sx-publisher__review-info--${messageType.value}`
);

const bananaI18n = useI18n();
const messageText = computed(() => activeMessage.value?.text);
const messageTitle = computed(
  () =>
    activeMessage.value?.title ||
    bananaI18n.i18n("cx-sx-publisher-review-info-error")
);

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
  <mw-message
    :type="messageType"
    class="sx-publisher__review-info ma-0 pa-4"
    :class="reviewInfoClass"
    :inline="isMessageInline"
  >
    <template #icon>
      <cdx-icon
        :icon="reviewIcon"
        class="shrink mw-ui-message__icon items-start me-1"
      />
    </template>
    <div class="sx-publisher__review-info__content">
      <template v-if="status === 'default'">
        <p v-i18n-html:cx-sx-publisher-review-info class="complementary ma-0" />
      </template>
      <template v-else>
        <h5 v-text="messageTitle" />
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
              @click="goToPreviousMessage"
            >
              <cdx-icon :icon="cdxIconPrevious" />
            </cdx-button>
            <cdx-button
              weight="quiet"
              class="pa-0 ms-1"
              @click="goToNextMessage"
            >
              <cdx-icon :icon="cdxIconNext" />
            </cdx-button>
          </mw-col>
        </mw-row>
      </template>
    </div>
  </mw-message>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher {
  .sx-publisher__review-info {
    border: none;
    border-bottom: @border-width-base @border-style-base @border-color-subtle;
    &__content {
      font-weight: @font-weight-normal;
    }
    &__learn-more-anchor {
      font-weight: @font-weight-bold;
      color: @color-progressive;
    }
  }
}
</style>
