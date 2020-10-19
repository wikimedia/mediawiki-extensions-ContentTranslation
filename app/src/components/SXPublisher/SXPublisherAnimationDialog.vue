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
        <p class="ma-0" v-text="animationClarification" />
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
      validator: value => ["pending", "success", "failure"].includes(value)
    }
  },
  data: vm => ({
    animations: {
      pending: {
        svg: "publishing-launching.svg",
        title: vm.$i18n("cx-sx-publisher-launching-animation-title"),
        clarification: vm.$i18n(
          "cx-sx-publisher-launching-animation-clarification"
        )
      },
      success: {
        svg: "publishing-success.svg",
        title: vm.$i18n("cx-sx-publisher-success-animation-title"),
        clarification: vm.$i18n(
          "cx-sx-publisher-success-animation-clarification"
        )
      },
      failure: {
        svg: "publishing-failure.svg",
        title: vm.$i18n("cx-sx-publisher-failure-animation-title"),
        clarification: vm.$i18n(
          "cx-sx-publisher-failure-animation-clarification"
        )
      }
    }
  }),
  computed: {
    animationSvg: vm =>
      require(`!html-loader!@/assets/${vm.animations[vm.status].svg}`),
    animationTitle: vm => vm.animations[vm.status].title,
    animationClarification: vm => vm.animations[vm.status].clarification
  }
};
</script>

<style lang="less">
.sx-publisher {
  &__publish-animation {
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
