<script setup>
import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import { MwDialog, MwRow, MwCol } from "@/lib/mediawiki.ui";
import publishingLaunchingSVG from "../../assets/publishing-launching.svg?raw";
import publishingSuccessSVG from "../../assets/publishing-success.svg?raw";
import publishingFailureSVG from "../../assets/publishing-failure.svg?raw";

const bananaI18n = useI18n();

const props = defineProps({
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
});

const animations = {
  pending: {
    svg: publishingLaunchingSVG,
    title: bananaI18n.i18n(
      "cx-sx-publisher-animation-publishing-indicator-title"
    ),
    subtitle: bananaI18n.i18n(
      "cx-sx-publisher-animation-publishing-indicator-subtitle"
    ),
  },
  success: {
    svg: publishingSuccessSVG,
    title: bananaI18n.i18n("cx-sx-publisher-animation-success-message-title"),
    subtitle: bananaI18n.i18n(
      "cx-sx-publisher-animation-success-message-subtitle"
    ),
  },
  failure: {
    svg: publishingFailureSVG,
    title: bananaI18n.i18n("cx-sx-publisher-animation-failure-message-title"),
    subtitle: bananaI18n.i18n(
      "cx-sx-publisher-animation-failure-message-subtitle"
    ),
  },
  warning: {
    svg: publishingFailureSVG,
    title: bananaI18n.i18n("cx-sx-publisher-animation-failure-message-title"),
    subtitle: bananaI18n.i18n(
      "cx-sx-publisher-animation-failure-message-subtitle"
    ),
  },
};

const animationSvg = computed(() => animations[props.status].svg);
const animationTitle = computed(() => animations[props.status].title);
const animationSubtitle = computed(() => animations[props.status].subtitle);
</script>

<template>
  <mw-dialog
    v-if="active"
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

<style lang="less">
.sx-publisher {
  .sx-publisher__publish-animation {
    text-align: center;
    .mw-ui-dialog__overlay {
      background-color: rgba(255, 255, 255, 0.95);
    }

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
