<template>
  <mw-card class="translated-segment-card col shrink pa-0 mb-0">
    <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
      <translated-segment-card-header v-model:selection="scopeSelection" />
      <mw-col tag="section" class="translated-segment-card__body pa-5">
        <mw-row class="ma-0">
          <mw-col class="translated-segment-card__modification-stats" grow>
            <h5
              v-i18n:cx-sx-sentence-selector-translated-segment-modification-percentage-header
            />
            <p
              v-if="mtScore === 0"
              v-i18n:cx-sx-sentence-selector-translated-segment-no-edits-label
              :style="{ color: errorColor }"
            />
            <p
              v-else
              v-i18n-html:cx-sx-sentence-selector-translated-segment-modification-percentage="[
                mtScore,
              ]"
              :class="modificationPercentageClass"
            />
          </mw-col>
          <mw-col shrink class="translated-segment-card__animated-stats">
            <mw-row class="ma-0 ms-2">
              <mw-col shrink align="center">
                <mw-icon :icon="mwIconUserAvatar" :icon-color="userIconColor" />
              </mw-col>
              <mw-col shrink class="px-3">
                <mw-progress-bar
                  :value="mtScore"
                  height="4px"
                  width="64px"
                  :color="userIconColor"
                  :background="progressBarBackgroundColor"
                />
              </mw-col>
              <mw-col shrink>
                <mw-icon :icon="mwIconRobot" />
              </mw-col>
            </mw-row>
          </mw-col>
        </mw-row>
        <mw-button
          v-if="showSentenceTab"
          :icon="mwIconEdit"
          type="text"
          :label="
            $i18n('cx-sx-sentence-selector-edit-translation-button-label')
          "
          class="sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4"
          progressive
          @click="$emit('edit-translation', translation)"
        />
      </mw-col>
      <mw-col class="translated-segment-card__actions">
        <translated-segment-card-action-buttons v-bind="$attrs" />
      </mw-col>
    </mw-row>
  </mw-card>
</template>

<script>
import {
  MwButton,
  MwCard,
  MwCol,
  MwRow,
  MwIcon,
  MwProgressBar,
} from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis,
  mwIconRobot,
  mwIconUserAvatar,
} from "@/lib/mediawiki.ui/components/icons";
import TranslatedSegmentCardHeader from "./TranslatedSegmentCardHeader.vue";
import TranslatedSegmentCardActionButtons from "./TranslatedSegmentCardActionButtons.vue";
import mtValidator from "@/utils/mtValidator";
import { computed, ref, inject } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";

export default {
  name: "TranslatedSegmentCard",
  components: {
    TranslatedSegmentCardActionButtons,
    MwProgressBar,
    MwIcon,
    TranslatedSegmentCardHeader,
    MwCard,
    MwRow,
    MwCol,
    MwButton,
  },
  emits: ["edit-translation"],
  setup() {
    const scopeSelection = ref("sentence");

    const {
      isSectionTitleSelected,
      currentSourceSection: currentPageSection,
      selectedContentTranslationUnit,
      targetLanguage,
    } = useApplicationState(useStore());

    const showSentenceTab = computed(() => scopeSelection.value === "sentence");

    const currentSubSection = computed(() =>
      currentPageSection.value.subSections.find((subSection) =>
        subSection.sentences.some(
          (sentence) => sentence.id === selectedContentTranslationUnit.value?.id
        )
      )
    );

    const proposedMTTranslation = computed(() => {
      if (isSectionTitleSelected.value) {
        return currentPageSection.value.mtProposedTranslationUsedForTitle;
      } else if (showSentenceTab.value) {
        return selectedContentTranslationUnit.value?.mtProposedTranslationUsed;
      }

      return currentSubSection.value.proposedContentForMTValidation;
    });

    const colors = inject("colors");

    const progressBarBackgroundColor = colors.gray200;
    const errorColor = colors.red600;

    const translation = computed(() => {
      if (isSectionTitleSelected.value) {
        return currentPageSection.value.translatedTitle;
      } else if (showSentenceTab.value) {
        return selectedContentTranslationUnit.value.translatedContent;
      }

      return currentSubSection.value.translatedContent;
    });
    const mtScore = computed(() =>
      mtValidator.calculateScore(
        translation.value,
        proposedMTTranslation.value,
        targetLanguage.value
      )
    );
    const modificationStatus = computed(() =>
      mtValidator.getScoreStatus(mtScore.value)
    );

    const modificationPercentageClass = computed(
      () =>
        `translated-segment-card__modification-stats__percentage--${modificationStatus.value}`
    );

    const iconColors = computed(() => ({
      failure: mtScore.value === 0 ? null : colors.yellow700,
      warning: colors.yellow700,
      success: colors.green600,
    }));

    const userIconColor = computed(
      () => iconColors.value[modificationStatus.value]
    );

    return {
      errorColor,
      modificationPercentageClass,
      mtScore,
      mwIconEdit,
      mwIconEllipsis,
      mwIconRobot,
      mwIconUserAvatar,
      progressBarBackgroundColor,
      scopeSelection,
      showSentenceTab,
      translation,
      userIconColor,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
.translated-segment-card {
  width: 100%;
  box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);
  &__body {
    box-sizing: border-box;
    width: 100%;
  }
  &__modification-stats {
    &__percentage {
      &--failure {
        span {
          color: @color-error;
        }
      }
      &--warning {
        span {
          color: @color-warning;
        }
      }
      &--success {
        span {
          color: @color-success;
        }
      }
    }
  }
  // Repeat col class to increase specificity so that flex-basis rule from "grid.scss"
  // will get overwritten
  &__animated-stats.col.col.shrink {
    flex-basis: auto;
  }
  &__edit-stats {
    color: @color-subtle;
  }
  .mw-progress-bar {
    border: none;
    box-shadow: none;
  }
  &__actions {
    width: 100%;
  }
}
</style>
