<script setup>
import { MwRow, MwCol, MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import BlockTemplateStatusIndicator from "./BlockTemplateStatusIndicator.vue";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons.vue";
import useApplicationState from "@/composables/useApplicationState";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import SxBlockTemplateStatusDialog from "./SXBlockTemplateStatusDialog.vue";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconPuzzle, cdxIconInfo } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

defineEmits(["edit-translation"]);

const store = useStore();
const { targetLanguageAutonym, currentMTProvider } = useApplicationState(store);
const {
  selectedContentTranslationUnit: selectedSubSection,
  currentProposedTranslation: blockProposedTranslation,
} = useCurrentPageSection();

const blockEditableContent = computed(() => {
  const blockTranslation =
    selectedSubSection.value?.blockTemplateTranslatedContent;

  return blockTranslation || blockProposedTranslation.value;
});

const targetTemplateName = computed(() =>
  selectedSubSection.value?.getTargetBlockTemplateNameByProvider(
    currentMTProvider.value
  )
);

/**
 * This computed property is true while the proposed
 * block translation is not yet available, or while
 * the target template data are being parsed to get
 * the target template name.
 *
 * @type {ComputedRef<boolean>}
 */
const translationLoaded = computed(
  () =>
    !store.state.application.mtRequestsPending?.includes(
      selectedSubSection.value.id
    )
);

const bananaI18n = useI18n();
const sourceTemplateName = computed(
  // Strip HTML comments and return
  () =>
    selectedSubSection.value?.sourceBlockTemplateName?.replace(
      /<\!--.*?-->/g,
      ""
    ) || bananaI18n.i18n("sx-block-template-adaptation-card-title-placeholder")
);

const adaptationInfo = computed(
  () =>
    selectedSubSection.value.blockTemplateAdaptationInfo?.[
      currentMTProvider.value
    ]
);
const isTemplateAdapted = computed(
  () => adaptationInfo.value?.adapted || !!adaptationInfo.value?.partial
);

const adaptedTemplateCardClass = computed(() => {
  if (!adaptationInfo.value) {
    return null;
  }

  const postfix = isTemplateAdapted.value ? "success" : "warning";

  return "block-template-adaptation-card__body--" + postfix;
});

const editBlockTranslationButtonLabel = computed(() => {
  if (!adaptationInfo.value) {
    return null;
  }

  return isTemplateAdapted.value
    ? bananaI18n.i18n("sx-block-template-adaptation-card-edit-button-label")
    : bananaI18n.i18n(
        "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
      );
});

const sourceParamsCount = computed(
  () => Object.keys(selectedSubSection.value?.sourceTemplateParams || {}).length
);

const targetParamNames = computed(() => {
  const targetTemplateParams =
    selectedSubSection.value?.getTargetTemplateParamsByProvider(
      currentMTProvider.value
    );

  return Object.keys(targetTemplateParams || {});
});
const targetParamsCount = computed(() => targetParamNames.value.length);

const adaptationRatio = computed(() => {
  const missingMandatoryCount = mandatoryMissingTargetParamsCount.value;

  if (sourceParamsCount.value + missingMandatoryCount === 0) {
    return 100;
  }

  return (
    (targetParamsCount.value /
      (sourceParamsCount.value + missingMandatoryCount)) *
      100 || 0
  );
});

const templateStatusDialogOn = ref(false);

const showTemplateStatus = () => {
  templateStatusDialogOn.value = true;
};

const getMissingParams = (allParams) =>
  allParams.filter((param) => !targetParamNames.value.includes(param));

const mandatoryMissingTargetParamsCount = computed(() => {
  const mandatoryParams = adaptationInfo.value?.mandatoryTargetParams || [];

  return getMissingParams(mandatoryParams).length;
});

const optionalMissingTargetParamsCount = computed(() => {
  const optionalParams = adaptationInfo.value?.optionalTargetParams || [];

  return getMissingParams(optionalParams).length;
});
</script>

<template>
  <mw-card class="block-template-adaptation-card col shrink pa-0 ma-0">
    <div class="block-template-adaptation-card__container pa-4">
      <mw-row class="block-template-adaptation-card__header ma-0 pb-5">
        <mw-col shrink>
          <cdx-icon :icon="cdxIconPuzzle" class="me-2" />
        </mw-col>
        <mw-col class="ma-0" tag="h5">{{ sourceTemplateName }}</mw-col>
      </mw-row>
      <div
        v-if="!!targetTemplateName"
        class="pa-4 mb-4"
        :class="adaptedTemplateCardClass"
      >
        <mw-row
          class="block-template-adaptation-card__body__header ma-0 pb-1"
          align="start"
        >
          <mw-col
            v-i18n:sx-block-template-adaptation-card-body-header-success
            tag="h5"
          />
          <mw-col shrink>
            <block-template-status-indicator
              :percentage="adaptationRatio"
              :size="20"
              :is-template-adapted="isTemplateAdapted"
              :stroke-width="2"
              @click="showTemplateStatus"
            />
          </mw-col>
        </mw-row>
        <h5
          class="block-template-adaptation-card__body__template-title pb-2"
          v-text="targetTemplateName"
        />
        <cdx-button
          class="px-0"
          action="progressive"
          weight="quiet"
          @click="$emit('edit-translation', blockEditableContent)"
        >
          {{ editBlockTranslationButtonLabel }}
        </cdx-button>
      </div>
      <div
        v-else-if="translationLoaded"
        class="block-template-adaptation-card__body--failure pa-4 mb-4"
      >
        <mw-row
          class="block-template-adaptation-card__body__header pb-0 mb-0"
          align="start"
        >
          <mw-col
            v-i18n:sx-block-template-adaptation-card-body-header-failure="[
              targetLanguageAutonym,
            ]"
            tag="h5"
          />
          <mw-col shrink>
            <cdx-button weight="quiet">
              <cdx-icon :icon="cdxIconInfo" @click="showTemplateStatus" />
            </cdx-button>
          </mw-col>
        </mw-row>
      </div>
      <mw-spinner v-else />
    </div>
    <proposed-translation-action-buttons v-bind="$attrs" />
    <sx-block-template-status-dialog
      v-model:active="templateStatusDialogOn"
      :source-params-count="sourceParamsCount"
      :target-params-count="targetParamsCount"
      :mandatory-missing-params-count="mandatoryMissingTargetParamsCount"
      :optional-missing-params-count="optionalMissingTargetParamsCount"
      :is-template-adapted="isTemplateAdapted"
      :target-template-exists="!!targetTemplateName"
    />
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
.block-template-adaptation-card {
  &__body {
    &--success {
      background-color: @background-color-progressive-subtle;
    }
    &--warning,
    &--failure {
      background-color: @background-color-interactive;
    }
    &__header {
      color: @color-subtle;
      font-weight: @font-weight-bold;
    }
    &__template-title {
      color: @color-base;
      font-weight: @font-weight-bold;
    }
  }
  border-radius: @border-radius-base @border-radius-base 0 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);
}
</style>
