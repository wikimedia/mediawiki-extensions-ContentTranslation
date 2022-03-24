<template>
  <mw-dialog
    v-if="active"
    :overlay-opacity="0.85"
    :header="false"
    class="sx-publisher__publish-animation"
  >
    <mw-row class="ma-4">
      <mw-col>
        <!--eslint-disable vue/no-v-html -->
        <div
          class="sx-publisher__publish-animation-icon mb-4"
          v-html="animationSvg"
        />
        <!--eslint-enable vue/no-v-html -->
        <h2 v-text="animationTitle" />
        <p class="ma-0" v-text="animationSubtitle" />
      </mw-col>
    </mw-row>
  </mw-dialog>
</template>

<script>
import { MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import publishingLaunchingSVG from "../../assets/publishing-launching.svg?raw";
import publishingSuccessSVG from "../../assets/publishing-success.svg?raw";
import publishingFailureSVG from "../../assets/publishing-failure.svg?raw";

export default {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog, MwRow, MwCol },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validator: (value) =>
        ["pending", "success", "failure", "warning"].includes(value),
    },
  },
  data: (vm) => ({
    animations: {
      pending: {
        svg: publishingLaunchingSVG,
        title: vm.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: vm.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        ),
      },
      success: {
        svg: publishingSuccessSVG,
        title: vm.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: vm.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        ),
      },
      failure: {
        svg: publishingFailureSVG,
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        ),
      },
      warning: {
        svg: publishingFailureSVG,
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        ),
      },
    },
  }),
  computed: {
    animationSvg: (vm) => vm.animations[vm.status].svg,
    animationTitle: (vm) => vm.animations[vm.status].title,
    animationSubtitle: (vm) => vm.animations[vm.status].subtitle,
  },
};
</script>

<style lang="less">
.sx-publisher {
  .sx-publisher__publish-animation {
    text-align: center;
    .mw-ui-dialog__shell {
      max-width: 100%;
      width: 100%;
      background: none;
      border: none;
      box-shadow: none;
    }
    &-icon {
      display: inline-flex;
    }
  }
}
</style>
