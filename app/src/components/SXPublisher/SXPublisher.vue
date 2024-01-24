<script setup>
import {
  mwIconSettings,
  mwIconEdit,
} from "@/lib/mediawiki.ui/components/icons";
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import SxPublisherHeader from "./SXPublisherHeader.vue";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog.vue";
import SxPublisherCaptchaDialog from "./SXPublisherCaptchaDialog.vue";
import SxPublishOptionSelector from "./SXPublishOptionSelector.vue";
import SxPublisherReviewInfo from "./SXPublisherReviewInfo.vue";
import { computed, onMounted } from "vue";
import usePublishTranslation from "./usePublishTranslation";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import useEditTranslation from "./useEditTranslation";

const store = useStore();
const { currentSourceSection: currentPageSection } = useApplicationState(store);

const translatedTitle = computed(() => currentPageSection.value?.title);
const bananaI18n = useI18n();

const panelResult = computed(() => {
  const isSandboxTarget = store.getters["application/isSandboxTarget"];

  // if the publish target is the user sandbox, always show
  // the sandbox publishing result message
  if (isSandboxTarget) {
    return bananaI18n.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    );
  } else if (currentPageSection.value.isLeadSection) {
    return bananaI18n.i18n("cx-sx-publisher-publish-panel-lead-section-result");
  } else {
    return bananaI18n.i18n("cx-sx-publisher-publish-panel-new-section-result");
  }
});

const {
  captchaDetails,
  captchaDialogOn,
  configureTranslationOptions,
  doPublish,
  isPublishDialogActive,
  isPublishingDisabled,
  onCaptchaDialogClose,
  publishOptionsOn,
  publishFeedbackMessages,
  publishStatus,
} = usePublishTranslation(store);

onMounted(async () => {
  const mtValidationMessage = await store.dispatch("translator/validateMT");

  if (mtValidationMessage) {
    publishFeedbackMessages.value.push(mtValidationMessage);
  }
});

const editTranslation = useEditTranslation();
</script>

<template>
  <section class="sx-publisher">
    <sx-publisher-header
      :is-publishing-disabled="isPublishingDisabled"
      @publish-translation="doPublish"
    />
    <div class="sx-publisher__publish-panel pa-4">
      <h5
        v-i18n:cx-sx-publisher-publish-panel-new-section-status
        class="mb-2"
      />
      <!-- eslint-disable vue/no-v-html -->
      <h6 class="mb-2" v-html="panelResult" />
      <!-- eslint-enable vue/no-v-html -->
      <mw-row justify="end" class="ma-0">
        <mw-col shrink>
          <mw-button
            type="icon"
            :icon="mwIconSettings"
            class="pa-0 mx-1"
            @click="configureTranslationOptions"
          />
        </mw-col>
      </mw-row>
    </div>
    <sx-publisher-review-info
      :publish-feedback-messages="publishFeedbackMessages"
    />
    <section class="sx-publisher__section-preview pa-5">
      <mw-row class="pb-5 ma-0">
        <!--eslint-disable vue/no-v-html -->
        <mw-col
          tag="h2"
          grow
          class="sx-publisher__section-preview__title ma-0"
          v-html="translatedTitle"
        />
        <!--eslint-enable vue/no-v-html -->
        <mw-col shrink>
          <mw-button :icon="mwIconEdit" type="icon" @click="editTranslation" />
        </mw-col>
      </mw-row>
      <!--eslint-disable vue/no-v-html -->
      <div v-html="currentPageSection.translationHtml" />
      <!--eslint-enable vue/no-v-html -->
    </section>
    <sx-publish-option-selector v-model:active="publishOptionsOn" />
    <sx-publisher-captcha-dialog
      :active="captchaDialogOn"
      :captcha-details="captchaDetails"
      @close="onCaptchaDialogClose"
      @publish="doPublish($event)"
    />
    <sx-publisher-animation-dialog
      :active="isPublishDialogActive"
      :status="publishStatus"
    />
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher {
  &__publish-panel {
    background-color: @background-color-interactive-subtle;
    border-bottom: @border-width-base @border-style-base @border-color-subtle;
  }

  &__section-preview__title {
    border-bottom: none;
    font-family: @font-family-heading-main;
  }
}
</style>
