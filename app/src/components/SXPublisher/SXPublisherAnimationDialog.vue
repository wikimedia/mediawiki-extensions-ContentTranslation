<template>
  <mw-dialog
    v-if="active"
    :overlay-opacity="0.85"
    :header="false"
    class="sx-publisher__publish-animation"
  >
    <mw-row class="ma-4">
      <mw-col>
        <div
          class="sx-publisher__publish-animation-icon mb-4"
          v-html="animationSvg"
        />
        <h2 v-text="animationTitle" />
        <p class="ma-0" v-text="animationSubtitle" />
      </mw-col>
    </mw-row>
  </mw-dialog>
</template>

<script>
import { MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";

export default {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog, MwRow, MwCol },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      required: true,
      validator: value =>
        ["pending", "success", "failure", "warning"].includes(value)
    }
  },
  data: vm => ({
    animations: {
      pending: {
        svg: "publishing-launching.svg",
        title: vm.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: vm.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: "publishing-success.svg",
        title: vm.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-success-message-subtitle")
      },
      failure: {
        svg: "publishing-failure.svg",
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-failure-message-subtitle")
      },
      warning: {
        svg: "publishing-failure.svg",
        title: vm.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: vm.$i18n("cx-sx-publisher-animation-failure-message-subtitle")
      }
    }
  }),
  computed: {
    animationSvg: vm =>
      require(`!html-loader!@/assets/${vm.animations[vm.status].svg}`),
    animationTitle: vm => vm.animations[vm.status].title,
    animationSubtitle: vm => vm.animations[vm.status].subtitle
  }
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
