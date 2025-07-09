<script setup>
import { MwDialog, MwDivider } from "@/lib/mediawiki.ui";
import { CdxField, CdxRadio } from "@wikimedia/codex";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import { computed } from "vue";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconArrowPrevious } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import usePublishTarget from "@/composables/usePublishTarget";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:active"]);

const store = useStore();
const { target, PUBLISHING_TARGETS } = usePublishTarget();
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
    description: optionDetails.value,
    value: PUBLISHING_TARGETS.NEW_SECTION,
    disabled: false,
  },
  {
    label: bananaI18n.i18n("cx-sx-publisher-sandbox-option-label"),
    description: bananaI18n.i18n("cx-sx-publisher-sandbox-option-details"),
    value: PUBLISHING_TARGETS.SANDBOX,
    disabled: isAnon.value,
  },
]);

const onPublishOptionsClose = () => emit("update:active", false);
</script>

<template>
  <mw-dialog
    :value="active"
    class="sx-publisher__publish-options"
    :title="$i18n('cx-sx-publisher-preview-options-title')"
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
              :aria-label="
                $i18n('cx-sx-publisher-preview-options-back-button-aria-label')
              "
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
      <cdx-field is-fieldset>
        <cdx-radio
          v-for="(radio, index) in publishOptions"
          :key="'publish-options-radio-' + radio.value"
          v-model="target"
          :class="index < publishOptions.length - 1 ? 'mb-4' : 'mb-0'"
          :input-value="radio.value"
          :disabled="radio.disabled"
          name="publish-options"
          @update:model-value="onPublishOptionsClose"
        >
          {{ radio.label }}
          <template #description>
            {{ radio.description }}
          </template>
        </cdx-radio>
      </cdx-field>
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

    .cdx-radio__label {
      .cdx-label__label__text {
        font-weight: @font-weight-bold;
      }
    }
  }
}
</style>
