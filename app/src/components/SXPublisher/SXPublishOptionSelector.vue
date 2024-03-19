<script setup>
import { MwDialog, MwDivider, MwRadio, MwRadioGroup } from "@/lib/mediawiki.ui";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import { computed } from "vue";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconArrowPrevious } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:active"]);

const store = useStore();
const selectedOption = computed(() => store.state.application.publishTarget);
const isAnon = computed(() => store.state.translator.isAnon);
const bananaI18n = useI18n();
const { sourceSection } = useCurrentPageSection();

const optionLabel = computed(() =>
  sourceSection.value.isLeadSection
    ? bananaI18n.i18n("cx-sx-publisher-lead-section-option-label")
    : bananaI18n.i18n("cx-sx-publisher-new-section-option-label")
);
const optionDetails = computed(() =>
  sourceSection.value.isLeadSection
    ? bananaI18n.i18n("cx-sx-publisher-lead-section-option-details")
    : bananaI18n.i18n("cx-sx-publisher-new-section-option-details")
);

const publishOptions = computed(() => [
  {
    label: optionLabel.value,
    details: optionDetails.value,
    value: "NEW_SECTION",
    disabled: false,
  },
  {
    label: bananaI18n.i18n("cx-sx-publisher-sandbox-option-label"),
    details: bananaI18n.i18n("cx-sx-publisher-sandbox-option-details"),
    value: "SANDBOX_SECTION",
    disabled: isAnon.value,
  },
]);

const getMarginBottomClassByOptionIndex = (index) => {
  const isLastOption = index === publishOptions.value.length - 1;

  return isLastOption ? "mb-1" : "mb-4";
};

const onPublishOptionsClose = () => emit("update:active", false);

const updateOption = (event) => {
  const selectedOption = event.target.value;
  store.commit("application/setPublishTarget", selectedOption);
  onPublishOptionsClose();
};
</script>

<template>
  <mw-dialog
    :value="active"
    class="sx-publisher__publish-options"
    :title="$i18n('cx-sx-publisher-preview-options-title')"
    :overlay-opacity="0.7"
    :overlay-color="$mwui.colors.gray700"
    @input="$emit('update:active', $event)"
    @close="onPublishOptionsClose"
  >
    <template #header>
      <div class="mw-ui-dialog__header">
        <div class="row ma-0 px-4 py-3">
          <div class="col shrink justify-center">
            <cdx-button
              class="pa-0"
              weight="quiet"
              @click="onPublishOptionsClose"
            >
              <cdx-icon :icon="cdxIconArrowPrevious" />
            </cdx-button>
          </div>
          <div
            class="col grow items-center mw-ui-dialog__header-title justify-start ps-2"
          >
            <h4 v-i18n:cx-sx-publisher-preview-options-title class="mb-0" />
          </div>
        </div>
        <mw-divider />
      </div>
    </template>
    <div class="pa-4">
      <mw-radio-group
        :value="selectedOption"
        name="publish-options"
        @input="updateOption"
      >
        <template v-for="(option, index) in publishOptions" :key="option.label">
          <mw-radio
            class="pa-0 my-1"
            :label="option.label"
            :input-value="option.value"
            :disabled="option.disabled"
          />
          <p
            class="complementary ms-7 mt-0"
            :class="getMarginBottomClassByOptionIndex(index)"
            v-text="option.details"
          />
        </template>
      </mw-radio-group>
    </div>
  </mw-dialog>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher {
  &__publish-options {
    .mw-ui-dialog__shell {
      max-width: 100%;
      width: 100%;
      margin: 1rem;
    }
    .mw-ui-dialog__header {
      h4 {
        color: @color-base;
      }
      // Set divider width to 1px
      .mw-ui-divider {
        border-bottom: none;
      }
    }
    .mw-ui-radio-group {
      .mw-ui-radio {
        label {
          padding-bottom: 0;
          font-weight: @font-weight-bold;
          line-height: 1.25rem;
        }
      }
    }
  }
}
</style>
