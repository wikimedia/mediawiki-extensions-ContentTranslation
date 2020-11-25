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
      <template v-if="status === 'warning'">
        <!--      TODO: Add warnings -->
      </template>
      <template v-if="status === 'error'">
        <div>
          <h5 v-i18n:cx-sx-publisher-review-info-error />
          <p v-text="infoText" />
          <a
            v-i18n:cx-sx-publisher-review-info-learn-more
            class="sx-publisher__review-info__learn-more-anchor"
            href="#"
          />
        </div>
      </template>
    </div>
  </mw-message>
</template>

<script>
import { MwIcon, MwMessage } from "@/lib/mediawiki.ui";
import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock
} from "@/lib/mediawiki.ui/components/icons";
import PublishResult from "@/wiki/cx/publishResult";

export default {
  name: "SxPublisherReviewInfo",
  components: {
    MwMessage,
    MwIcon
  },
  props: {
    result: {
      type: PublishResult,
      required: true
    }
  },
  data: () => ({
    mwIconEye,
    mwIconAlert,
    mwIconBlock
  }),
  computed: {
    infoText: vm => {
      return vm.result.isSuccessful ? null : vm.result.message;
    },
    status: vm => {
      if (vm.result.isSuccessful) {
        return "default";
      } else {
        // TODO: Case for warning messages not added yet
        return "error";
      }
    },
    reviewIcon: vm => {
      switch (vm.status) {
        case "default":
          return vm.mwIconEye;
        case "warning":
          return vm.mwIconAlert;
        case "error":
          return vm.mwIconBlock;
      }
    },
    reviewInfoClass: vm => `sx-publisher__review-info--${vm.messageType}`,
    isMessageInline: vm => vm.status === "default",
    messageType: vm => (vm.isMessageInline ? "notice" : vm.status)
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
