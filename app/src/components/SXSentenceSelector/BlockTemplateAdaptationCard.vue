<template>
  <mw-card class="block-template-adaptation-card col shrink pa-0 ma-0">
    <div class="block-template-adaptation-card__container pa-4">
      <mw-row class="block-template-adaptation-card__header ma-0 pb-5">
        <mw-col shrink>
          <mw-icon :icon="mwIconPuzzle" class="me-2" />
        </mw-col>
        <mw-col class="ma-0" tag="h5" v-text="sourceTemplateName" />
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
        <mw-button
          class="px-0"
          type="text"
          progressive
          @click="$emit('edit-translation', proposedBlockTranslation)"
        >
          <span v-text="editBlockTranslationButtonLabel" />
        </mw-button>
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
            <mw-icon :icon="mwIconInfo" @click="showTemplateStatus" />
          </mw-col>
        </mw-row>
      </div>
      <mw-spinner v-else />
    </div>
    <proposed-translation-action-buttons v-bind="$attrs" />
  </mw-card>
</template>

<script>
import {
  MwButton,
  MwRow,
  MwCol,
  MwCard,
  MwIcon,
  MwSpinner,
} from "@/lib/mediawiki.ui";
import { mwIconPuzzle, mwIconInfo } from "@/lib/mediawiki.ui/components/icons";
import BlockTemplateStatusIndicator from "./BlockTemplateStatusIndicator.vue";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons.vue";
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "BlockTemplateAdaptationCard",
  components: {
    MwSpinner,
    MwIcon,
    MwCard,
    MwRow,
    MwCol,
    MwButton,
    ProposedTranslationActionButtons,
    BlockTemplateStatusIndicator,
  },
  emits: ["edit-translation"],
  setup() {
    const {
      selectedContentTranslationUnit: selectedSubSection,
      targetLanguageAutonym,
      currentMTProvider,
      proposedTranslation: proposedBlockTranslation,
    } = useApplicationState(useStore());

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
    const translationLoaded = computed(() =>
      selectedSubSection.value.blockTemplateProposedTranslations.hasOwnProperty(
        currentMTProvider.value
      )
    );

    const sourceTemplateName = computed(
      // Strip HTML comments and return
      () =>
        selectedSubSection.value?.sourceBlockTemplateName?.replace(
          /<\!--.*?-->/g,
          ""
        )
    );

    const adaptationInfo = computed(
      () =>
        selectedSubSection.value.blockTemplateAdaptationInfo?.[
          currentMTProvider.value
        ]
    );
    const isTemplateAdapted = computed(
      () =>
        adaptationInfo.value?.adapted || adaptationInfo.value?.partial || false
    );

    const adaptedTemplateCardClass = computed(() => {
      if (!adaptationInfo.value) {
        return null;
      }

      const postfix = isTemplateAdapted.value ? "success" : "warning";

      return "block-template-adaptation-card__body--" + postfix;
    });

    const bananaI18n = useI18n();
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
      () =>
        Object.keys(selectedSubSection.value?.sourceTemplateParams || {}).length
    );

    const targetParamsCount = computed(() => {
      const targetTemplateParams =
        selectedSubSection.value?.getTargetTemplateParamsByProvider(
          currentMTProvider.value
        );

      return Object.keys(targetTemplateParams || {}).length;
    });

    const adaptationRatio = computed(() => {
      if (sourceParamsCount.value === 0) {
        return 100;
      }

      return (targetParamsCount.value / sourceParamsCount.value) * 100 || 0;
    });

    const showTemplateStatus = () => {
      // TODO: Add implementation for displaying block template status
    };

    return {
      adaptationRatio,
      adaptedTemplateCardClass,
      editBlockTranslationButtonLabel,
      isTemplateAdapted,
      mwIconInfo,
      mwIconPuzzle,
      proposedBlockTranslation,
      showTemplateStatus,
      sourceTemplateName,
      targetLanguageAutonym,
      targetTemplateName,
      translationLoaded,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.block-template-adaptation-card {
  &__body {
    &--success {
      background-color: @background-color-primary;
    }
    &--warning,
    &--failure {
      background-color: @background-color-base--hover;
    }
    &__header {
      color: @color-accessory;
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
