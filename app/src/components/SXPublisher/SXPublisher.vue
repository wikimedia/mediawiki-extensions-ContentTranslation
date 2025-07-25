<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import SxPublisherHeader from "./SXPublisherHeader.vue";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog.vue";
import SxPublisherCaptchaDialog from "./SXPublisherCaptchaDialog.vue";
import SxPublishOptionSelector from "./SXPublishOptionSelector.vue";
import SxPublisherReviewInfo from "./SXPublisherReviewInfo.vue";
import { computed, onMounted, ref, watch } from "vue";
import useTranslationPublish from "./useTranslationPublish";
import { useI18n } from "vue-banana-i18n";
import useEditTranslation from "./useEditTranslation";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import {
  cdxIconSettings,
  cdxIconEdit,
  cdxIconLinkExternal,
} from "@wikimedia/codex-icons";
import usePublishFeedbackMessages from "./usePublishFeedbackMessages";
import usePublishingComplete from "./usePublishingComplete";
import useCaptcha from "./useCaptcha";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import usePublishTarget from "@/composables/usePublishTarget";
import { siteMapper } from "@/utils/mediawikiHelper";

const { sourceSection } = useCurrentPageSection();
const { sectionSuggestion: suggestion, isCurrentSectionPresent } =
  useCurrentSectionSuggestion();
const {
  targetLanguageURLParameter: targetLanguage,
  sectionURLParameter: sourceSectionTitle,
} = useURLHandler();

const translatedTitle = computed(() => sourceSection.value?.title);
const bananaI18n = useI18n();

const { target, PUBLISHING_TARGETS } = usePublishTarget();

const expectedPanelResult = computed(() => {
  // if the publishing target is the user sandbox, always show
  // the sandbox publishing result message
  if (target.value === PUBLISHING_TARGETS.SANDBOX) {
    return bananaI18n.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    );
  } else if (target.value === PUBLISHING_TARGETS.EXPAND) {
    return bananaI18n.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    );
  } else if (sourceSection.value.isLeadSection) {
    return bananaI18n.i18n("cx-sx-publisher-publish-panel-lead-section-result");
  } else {
    return bananaI18n.i18n("cx-sx-publisher-publish-panel-new-section-result");
  }
});

const {
  captchaDetails,
  captchaDialogOn,
  handleCaptchaError,
  onCaptchaDialogClose,
} = useCaptcha();

const {
  publishFeedbackMessages,
  isPublishingDisabled,
  addPublishFeedbackMessage,
  clearPublishFeedbackMessages,
  initializePublishFeedbackMessages,
} = usePublishFeedbackMessages();

const completePublishing = usePublishingComplete();

const { doPublish, isPublishDialogActive, publishStatus, closePublishDialog } =
  useTranslationPublish();

const publishTranslation = async (captchaAnswer = null) => {
  if (isPublishingDisabled.value) {
    return;
  }
  const result = await doPublish(captchaAnswer, captchaDetails.value);

  if (!result) {
    return;
  }

  const { publishFeedbackMessage, targetUrl } = result;

  const isCaptchaError = handleCaptchaError(publishFeedbackMessage);

  if (isCaptchaError) {
    closePublishDialog();

    return;
  } else if (!!publishFeedbackMessage) {
    addPublishFeedbackMessage(publishFeedbackMessage);
  }

  publishStatus.value = isPublishingDisabled.value ? "failure" : "success";
  /**
   * Show feedback animation to user for 1 second
   * before handling the publishing result
   */
  setTimeout(() => {
    if (isPublishingDisabled.value) {
      closePublishDialog();

      return;
    }
    completePublishing(targetUrl);
  }, 1000);
};

onMounted(() => initializePublishFeedbackMessages());

const editTranslation = useEditTranslation();
const publishOptionsOn = ref(false);
const configureTranslationOptions = () => (publishOptionsOn.value = true);

watch(publishOptionsOn, (newValue) => {
  if (!newValue) {
    clearPublishFeedbackMessages();
    initializePublishFeedbackMessages();
  }
});

const targetSectionTitle = computed(
  () => suggestion.value?.presentSections?.[sourceSectionTitle.value]
);

const targetArticlePath = computed(() => {
  const articlePath = siteMapper.getPageUrl(
    targetLanguage.value,
    suggestion.value?.targetTitle
  );

  const targetSectionAnchor = (targetSectionTitle.value || "").replace(
    / /g,
    "_"
  );

  return `${articlePath}#${targetSectionAnchor}`;
});
</script>

<template>
  <section class="sx-publisher">
    <sx-publisher-header
      :is-publishing-disabled="isPublishingDisabled"
      @publish-translation="publishTranslation"
    />
    <div
      class="sx-publisher__publish-panel"
      :class="isCurrentSectionPresent ? 'py-4' : 'pa-4'"
    >
      <template v-if="!isCurrentSectionPresent">
        <h5
          v-i18n:cx-sx-publisher-publish-panel-new-section-status
          class="mb-2"
        />
      </template>
      <template v-else>
        <div
          class="sx-publisher__publish-panel__existing-target-section px-4 pb-4"
        >
          <h5 v-i18n:cx-sx-publisher-publish-panel-existing-section-notice />
          <a
            class="sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4"
            :href="targetArticlePath"
            target="_blank"
          >
            {{ targetSectionTitle }}
            <cdx-icon :icon="cdxIconLinkExternal" />
          </a>
        </div>
      </template>
      <div :class="{ 'px-4 mt-4': isCurrentSectionPresent }">
        <!-- eslint-disable vue/no-v-html -->
        <h6
          class="sx-publisher__publish-panel__expected-publishing-result mb-2"
          v-html="expectedPanelResult"
        />
        <!-- eslint-enable vue/no-v-html -->
        <mw-row justify="end" class="ma-0">
          <mw-col shrink>
            <cdx-button
              weight="quiet"
              :aria-label="$i18n('cx-sx-publisher-configure-button-aria-label')"
              @click="configureTranslationOptions"
            >
              <cdx-icon :icon="cdxIconSettings" />
            </cdx-button>
          </mw-col>
        </mw-row>
      </div>
    </div>
    <sx-publisher-review-info
      :publish-feedback-messages="publishFeedbackMessages"
    />
    <section class="sx-publisher__section-preview pa-5">
      <mw-row class="pb-5 ma-0">
        <!--eslint-disable vue/no-v-text-v-html-on-component vue/no-v-html -->
        <mw-col
          tag="h2"
          grow
          class="sx-publisher__section-preview__title ma-0"
          v-text="translatedTitle"
        />
        <!--eslint-enable vue/no-v-text-v-html-on-component vue/no-v-html -->
        <mw-col shrink>
          <cdx-button
            weight="quiet"
            :aria-label="$i18n('cx-sx-publisher-edit-button-aria-label')"
            @click="editTranslation"
          >
            <cdx-icon :icon="cdxIconEdit" />
          </cdx-button>
        </mw-col>
      </mw-row>
      <!--eslint-disable vue/no-v-html -->
      <div v-html="sourceSection.translationHtml" />
      <!--eslint-enable vue/no-v-html -->
    </section>
    <sx-publish-option-selector v-model:active="publishOptionsOn" />
    <sx-publisher-captcha-dialog
      :active="captchaDialogOn"
      :captcha-details="captchaDetails"
      @close="onCaptchaDialogClose"
      @publish="publishTranslation($event)"
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

    &__existing-target-section {
      border-bottom: @border-width-base @border-style-base @border-color-subtle;
      &-link {
        display: flex;
        justify-content: space-between;
        background-color: @background-color-neutral;
        font-weight: @font-weight-bold;
        color: @color-base;
      }
    }
  }

  &__section-preview__title {
    border-bottom: none;
    font-family: @font-family-heading-main;
  }
}
</style>
