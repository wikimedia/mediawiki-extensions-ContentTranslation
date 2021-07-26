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
          <mw-col v-if="publishResult.isWarning" shrink>
            <mw-button
              class="sx-publisher__review-info__suppress-warning-button"
              type="icon"
              :icon="mwIconCheck"
              @click="suppressWarning"
            />
          </mw-col>
        </mw-row>
      </template>
    </div>
  </mw-message>
</template>

<script>
import { mapState } from "vuex";
import { MwIcon, MwMessage } from "@/lib/mediawiki.ui";
import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock,
  mwIconCheck
} from "@/lib/mediawiki.ui/components/icons";
import { MwRow, MwCol, MwButton } from "@/lib/mediawiki.ui/components";

export default {
  name: "SxPublisherReviewInfo",
  components: {
    MwButton,
    MwCol,
    MwRow,
    MwMessage,
    MwIcon
  },
  data: () => ({
    mwIconEye,
    mwIconAlert,
    mwIconBlock,
    mwIconCheck,
    activeMessageIndex: 0
  }),
  computed: {
    ...mapState({
      publishResult: state => state.application.currentPublishResult
    }),
    infoText: vm => {
      return vm.publishResult.isSuccessful
        ? null
        : vm.publishResult.messages?.[0]?.text;
    },
    // Currently activeMessage doesn't change. Introduced so that we can
    // easily implement message navigation
    activeMessage: vm =>
      vm.publishResult.messages.filter(message => !message.suppressed)?.[
        vm.activeMessageIndex
      ],
    status: vm => vm.publishResult.reviewInfoStatus,
    reviewIcon: vm => {
      switch (vm.status) {
        case "warning":
          return vm.mwIconAlert;
        case "error":
          return vm.mwIconBlock;
        default:
          return vm.mwIconEye;
      }
    },
    reviewInfoClass: vm => `sx-publisher__review-info--${vm.messageType}`,
    isMessageInline: vm => vm.status === "default",
    messageType: vm => (vm.isMessageInline ? "notice" : vm.status),
    messageText: vm => vm.activeMessage?.text,
    messageTitle: vm =>
      vm.activeMessage?.title || vm.$i18n("cx-sx-publisher-review-info-error")
  },
  methods: {
    suppressWarning() {
      this.activeMessage.suppressed = true;
    }
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
      .sx-publisher__review-info__suppress-warning-button {
        .mw-ui-icon {
          color: @color-primary;
        }
      }
    }
    &__learn-more-anchor {
      font-weight: @font-weight-bold;
      color: @color-primary;
    }
  }
}
</style>
