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
        class="block-template-adaptation-card__body--success pa-4 mb-4"
      >
        <mw-row class="block-template-adaptation-card__body__header ma-0 pb-1">
          <mw-col
            v-i18n:sx-block-template-adaptation-card-body-header-success
            tag="h5"
          />
          <mw-col shrink>
            <mw-icon :icon="mwIconCheck" />
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
          <span v-i18n:sx-block-template-adaptation-card-edit-button-label />
        </mw-button>
      </div>
      <div
        v-else-if="translationLoaded"
        class="block-template-adaptation-card__body--failure pa-4 mb-4"
      >
        <h5
          v-i18n:sx-block-template-adaptation-card-body-header-failure="[
            targetLanguageAutonym,
          ]"
          class="block-template-adaptation-card__body__header pb-0 mb-0"
        />
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
import { mwIconPuzzle, mwIconCheck } from "@/lib/mediawiki.ui/components/icons";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons.vue";
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";
import { useStore } from "vuex";

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
    const translationLoaded = computed(
      () =>
        typeof proposedBlockTranslation.value === "string" &&
        typeof targetTemplateName.value === "string"
    );

    const sourceTemplateName = computed(
      () => selectedSubSection.value?.sourceBlockTemplateName
    );

    return {
      mwIconCheck,
      mwIconPuzzle,
      proposedBlockTranslation,
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
