<template>
  <mw-message
    :type="messageType"
    class="sx-publisher__review-info ma-0 pa-4"
    :class="reviewInfoClass"
    :inline="isMessageInline"
  >
    <template slot="icon">
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
        </mw-row>
      </template>
    </div>
  </mw-message>
</template>

<script>
import { MwIcon, MwMessage } from "@/lib/mediawiki.ui";
import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock,
  mwIconCheck
} from "@/lib/mediawiki.ui/components/icons";
import { MwRow, MwCol } from "@/lib/mediawiki.ui/components";
import { computed, ref } from "@vue/composition-api";

export default {
  name: "SxPublisherReviewInfo",
  components: {
    MwCol,
    MwRow,
    MwMessage,
    MwIcon
  },
  setup(props, context) {
    const store = context.root.$store;

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

    const messageText = computed(() => activeMessage.value?.text);
    const messageTitle = computed(
      () =>
        activeMessage.value?.title ||
        context.root.$i18n("cx-sx-publisher-review-info-error")
    );

    return {
      isMessageInline,
      messageText,
      messageTitle,
      messageType,
      mwIconEye,
      mwIconAlert,
      mwIconBlock,
      mwIconCheck,
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
