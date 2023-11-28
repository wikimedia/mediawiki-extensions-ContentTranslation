<template>
  <mw-dialog
    :value="active"
    class="sx-block-template-status-dialog"
    :title="$i18n('cx-sx-publisher-preview-options-title')"
    :overlay-opacity="0.7"
    :overlay-color="$mwui.colors.gray700"
    @input="$emit('update:active', $event)"
  >
    <template #header>
      <mw-row justify="center" class="mt-4">
        <mw-col shrink>
          <block-template-status-indicator
            v-if="targetTemplateExists"
            :percentage="adaptationRatio"
            :size="40"
            :is-template-adapted="isTemplateAdapted"
            :stroke-width="3"
          />
          <mw-icon v-else :icon="mwIconInfo" />
        </mw-col>
      </mw-row>
    </template>
    <div class="pa-4">
      <h3 v-text="statusText" />
      <p class="mt-6 text-small" v-text="statusExplanation" />
      <mw-row
        v-for="(note, index) in notes"
        :key="index"
        align="start"
        class="mt-4"
      >
        <mw-col shrink>
          <mw-icon class="me-2" :icon="note.icon" :icon-color="note.color" />
        </mw-col>
        <mw-col v-text="note.text" />
      </mw-row>
    </div>
  </mw-dialog>
</template>

<script>
import {
  mwIconAdd,
  mwIconAlert,
  mwIconEdit,
  mwIconCheck,
  mwIconInfo,
  mwIconLink,
  mwIconClose,
} from "@/lib/mediawiki.ui/components/icons";
import {
  MwButton,
  MwDialog,
  MwDivider,
  MwIcon,
  MwRadio,
  MwRadioGroup,
  MwRow,
  MwCol,
  MwCircleProgressBar,
} from "@/lib/mediawiki.ui";
import colors from "@/lib/mediawiki.ui/variables/colors";

import { useStore } from "vuex";
import { computed } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import BlockTemplateStatusIndicator from "./BlockTemplateStatusIndicator.vue";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol,
    MwRow,
    MwButton,
    MwIcon,
    MwRadioGroup,
    MwRadio,
    MwDivider,
    MwDialog,
    MwCircleProgressBar,
    BlockTemplateStatusIndicator,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    sourceParamsCount: {
      type: Number,
      required: true,
    },
    targetParamsCount: {
      type: Number,
      required: true,
    },
    mandatoryMissingParamsCount: {
      type: Number,
      required: true,
    },
    optionalMissingParamsCount: {
      type: Number,
      required: true,
    },
    isTemplateAdapted: {
      type: Boolean,
      required: true,
    },
    targetTemplateExists: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:active"],
  setup(props) {
    const { targetLanguageAutonym } = useApplicationState(useStore());

    const statusIcon = computed(() =>
      !props.isTemplateAdapted || adaptationRatio.value === 0
        ? mwIconAlert
        : mwIconCheck
    );

    const adaptationRatio = computed(
      () =>
        (props.targetParamsCount /
          (props.sourceParamsCount + props.mandatoryMissingParamsCount)) *
        100
    );
    const bananaI18n = useI18n();

    const statusText = computed(() => {
      let message;

      if (!props.targetTemplateExists) {
        message =
          "cx-sx-block-template-mapping-status-title-no-target-template";
      } else if (!props.isTemplateAdapted) {
        message =
          "cx-sx-block-template-mapping-status-title-unadapted-template";
      } else if (adaptationRatio.value < 100) {
        message =
          "cx-sx-block-template-mapping-status-title-partially-template";
      } else {
        message = "cx-sx-block-template-mapping-status-title-fully-template";
      }

      return bananaI18n.i18n(message);
    });

    const statusExplanation = computed(() => {
      let message;

      if (!props.targetTemplateExists || !props.isTemplateAdapted) {
        message = "cx-sx-block-template-mapping-status-explanation-no-mapping";
      } else if (adaptationRatio.value < 100) {
        message =
          "cx-sx-block-template-mapping-status-explanation-partial-mapping";
      } else {
        message =
          "cx-sx-block-template-mapping-status-explanation-full-mapping";
      }

      return bananaI18n.i18n(message);
    });

    const notes = computed(() => {
      let notes = [];

      if (!props.targetTemplateExists) {
        notes.push({
          text: bananaI18n.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            targetLanguageAutonym.value
          ),
          icon: mwIconLink,
          color: colors.gray500,
        });
      } else if (!props.isTemplateAdapted) {
        notes.push({
          text: bananaI18n.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            props.sourceParamsCount
          ),
          icon: mwIconClose,
          color: colors.gray500,
        });
      } else if (adaptationRatio.value < 100) {
        notes.push({
          text: bananaI18n.i18n(
            "cx-sx-block-template-mapped-params-text",
            props.targetParamsCount,
            props.sourceParamsCount
          ),
          icon: mwIconCheck,
          color: colors.blue600,
        });
      } else {
        let message;

        if (props.sourceParamsCount) {
          message = bananaI18n.i18n(
            "cx-sx-block-template-mapped-params-text",
            props.targetParamsCount,
            props.sourceParamsCount
          );
        } else {
          message = bananaI18n.i18n(
            "cx-sx-block-template-no-source-params-text"
          );
        }
        notes.push({
          text: message,
          icon: mwIconCheck,
          color: colors.blue600,
        });
      }

      if (props.mandatoryMissingParamsCount) {
        notes.push({
          text: bananaI18n.i18n(
            "cx-sx-block-template-missing-mandatory-params-text",
            props.mandatoryMissingParamsCount,
            targetLanguageAutonym.value
          ),
          icon: mwIconEdit,
          color: colors.gray500,
        });
      } else if (
        props.targetTemplateExists &&
        props.isTemplateAdapted &&
        props.optionalMissingParamsCount
      ) {
        notes.push({
          text: bananaI18n.i18n(
            "cx-sx-block-template-missing-optional-params-text",
            props.optionalMissingParamsCount,
            targetLanguageAutonym.value
          ),
          icon: mwIconAdd,
          color: colors.gray500,
        });
      }

      return notes;
    });

    return {
      adaptationRatio,
      statusIcon,
      statusExplanation,
      statusText,
      mwIconCheck,
      mwIconInfo,
      notes,
    };
  },
};
</script>
