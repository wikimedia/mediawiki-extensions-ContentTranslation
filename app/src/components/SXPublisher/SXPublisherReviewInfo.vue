<template>
  <mw-message
    :type="messageType"
    class="sx-publisher__review-info ma-0 pa-4"
    :class="reviewInfoClass"
    :inline="isMessageInline"
  >
    <template #icon>
      <mw-icon
        :icon="reviewIcon"
        class="col shrink mw-ui-message__icon pe-3 items-start"
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
          <mw-col>
            <a
              v-i18n:cx-sx-publisher-review-info-learn-more
              class="sx-publisher__review-info__learn-more-anchor"
              href="#"
            />
          </mw-col>
          <mw-col
            v-if="publishFeedbackMessages.length > 1"
            class="sx-publisher__review-info__navigation-buttons justify-end"
            align="center"
          >
            <mw-button
              class="pa-0 pe-1"
              type="icon"
              :icon="mwIconPrevious"
              @click="goToPreviousMessage"
            />
            <mw-button
              class="pa-0 ps-1"
              type="icon"
              :icon="mwIconArrowForward"
              @click="goToNextMessage"
            />
          </mw-col>
        </mw-row>
      </template>
    </div>
  </mw-message>
</template>

<script>
import { MwIcon, MwMessage, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock,
  mwIconPrevious,
  mwIconArrowForward
} from "@/lib/mediawiki.ui/components/icons";
import { MwRow, MwCol } from "@/lib/mediawiki.ui/components";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton,
    MwCol,
    MwRow,
    MwMessage,
    MwIcon
  },
  setup() {
    const store = useStore();

    const activeMessageIndex = ref(0);
    const publishFeedbackMessages = computed(
      () => store.state.application.publishFeedbackMessages
    );

    const activeMessage = computed(
      () => publishFeedbackMessages.value?.[activeMessageIndex.value]
    );

    const status = computed(() => activeMessage.value?.status || "default");

    const reviewIcon = computed(() => {
      switch (status.value) {
        case "warning":
          return mwIconAlert;
        case "error":
          return mwIconBlock;
        default:
          return mwIconEye;
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
      const messagesLength = publishFeedbackMessages.value.length;
      activeMessageIndex.value =
        (activeMessageIndex.value - 1 + messagesLength) % messagesLength;
    };

    const goToNextMessage = () => {
      activeMessageIndex.value =
        (activeMessageIndex.value + 1) % publishFeedbackMessages.value.length;
    };

    return {
      goToNextMessage,
      goToPreviousMessage,
      isMessageInline,
      messageText,
      messageTitle,
      messageType,
      mwIconAlert,
      mwIconArrowForward,
      mwIconBlock,
      mwIconEye,
      mwIconPrevious,
      reviewIcon,
      reviewInfoClass,
      publishFeedbackMessages,
      status
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-publisher {
  .sx-publisher__review-info {
    border: none;
    border-bottom: @border-width-base @border-style-base @border-color-heading;
    &__content {
      font-weight: normal;
    }
    &__learn-more-anchor {
      font-weight: @font-weight-bold;
      color: @color-primary;
    }
  }
}
</style>
