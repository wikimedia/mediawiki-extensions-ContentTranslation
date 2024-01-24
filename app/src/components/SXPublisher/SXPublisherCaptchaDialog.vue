<script setup>
import {
  MwDialog,
  MwRow,
  MwCol,
  MwInput,
  MwButton,
  MwDivider,
} from "@/lib/mediawiki.ui";
import { computed, inject, ref } from "vue";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import CaptchaDetails from "@/wiki/cx/models/captchaDetails";

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
  captchaDetails: {
    type: CaptchaDetails,
    default: null,
  },
});
const emit = defineEmits(["close", "publish"]);

const captchaInput = ref("");
const close = () => emit("close");
const publish = () => emit("publish", captchaInput.value);
const breakpoints = inject("breakpoints");
const fullscreen = computed(() => breakpoints.value.mobile);
</script>

<template>
  <mw-dialog
    v-if="active && captchaDetails"
    :overlay-opacity="0.65"
    :fullscreen="fullscreen"
    class="sx-publisher__captcha-dialog"
  >
    <template #header>
      <mw-row class="mw-ui-dialog__header ma-0" align="stretch">
        <mw-col shrink>
          <mw-button
            class="py-4 ps-6 pe-4"
            type="icon"
            :icon="mwIconClose"
            @click="close"
          />
        </mw-col>
        <!-- eslint-disable vue/no-v-html -->
        <mw-col
          v-i18n:cx-sx-publisher-captcha-dialog-header-title
          grow
          class="sx-publisher__captcha-dialog__header-title items-center justify-start"
        />

        <!--eslint-enable vue/no-v-html -->
        <mw-col shrink class="justify-center">
          <mw-button
            v-i18n:cx-sx-publisher-captcha-dialog-publish-button
            progressive
            @click="publish"
          >
          </mw-button>
        </mw-col>
      </mw-row>
      <mw-divider />
    </template>
    <div class="sx-publisher__captcha-dialog__content pt-4 px-6 pb-6">
      <!--    captchaDetails.type is 'image' for Fancy Captcha-->
      <img
        v-if="captchaDetails.type === 'image'"
        class="sx-publisher__captcha-dialog__puzzle-image"
        :src="captchaDetails.url"
      />
      <p v-else v-text="captchaDetails.question" />
      <p class="mt-0"></p>
      <!--    handling other Captcha cases (simple, questy, math)-->
      <mw-row class="ma-0">
        <mw-col>
          <mw-input v-model:value="captchaInput" class="pa-1" />
        </mw-col>
      </mw-row>
    </div>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher__captcha-dialog {
  &__header-title {
    font-weight: @font-weight-bold;
  }
  &__puzzle-image {
    width: 100%;
  }
}
</style>
