<template>
  <mw-card class="translated-segment-card col shrink pa-0 mb-0">
    <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
      <translated-segment-card-header :selection.sync="scopeSelection" />
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
                mtScore
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
        <translated-segment-card-action-buttons v-on="$listeners" />
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
  MwProgressBar
} from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis,
  mwIconRobot,
  mwIconUserAvatar
} from "@/lib/mediawiki.ui/components/icons";
import { mapGetters, mapState } from "vuex";
import TranslatedSegmentCardHeader from "./TranslatedSegmentCardHeader";
import TranslatedSegmentCardActionButtons from "./TranslatedSegmentCardActionButtons";
import mtValidator from "@/utils/mtValidator";
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
    MwButton
  },
  data: () => ({
    mwIconEllipsis,
    mwIconEdit,
    mwIconRobot,
    mwIconUserAvatar,
    scopeSelection: "sentence"
  }),
  computed: {
    ...mapState({
      mtProvider: state => state.application.currentMTProvider,
      isSectionTitleSelected: state =>
        state.application.isSectionTitleSelectedForTranslation,
      currentPageSection: state => state.application.currentSourceSection
    }),
    ...mapGetters({
      selectedSentence: "application/getCurrentSelectedSentence",
      mtTranslation: "application/getCurrentProposedTranslation"
    }),
    showSentenceTab: vm => vm.scopeSelection === "sentence",
    currentSubSection: vm =>
      vm.currentPageSection.subSections.find(subSection =>
        subSection.sentences.some(
          sentence => sentence.id === vm.selectedSentence.id
        )
      ),
    proposedMTTranslation: vm =>
      vm.showSentenceTab
        ? vm.mtTranslation
        : vm.currentSubSection.getProposedTranslation(vm.mtProvider),
    progressBarBackgroundColor: vm => vm.$mwui.colors.base80,
    errorColor: vm => vm.$mwui.colors.red50,
    userIconColor: vm => vm.iconColors[vm.modificationStatus],
    mtScore: vm =>
      mtValidator.calculateScore(vm.translation, vm.proposedMTTranslation),
    translation: vm => {
      if (vm.isSectionTitleSelected) {
        return vm.currentPageSection.translatedTitle;
      } else if (vm.showSentenceTab) {
        return vm.selectedSentence.translatedContent;
      }

      return vm.currentSubSection.translatedContent;
    },
    modificationStatus: vm => mtValidator.getScoreStatus(vm.mtScore),
    modificationPercentageClass: vm =>
      `translated-segment-card__modification-stats__percentage--${vm.modificationStatus}`,
    iconColors: vm => ({
      failure: vm.mtScore === 0 ? null : vm.$mwui.colors.yellow30,
      warning: vm.$mwui.colors.yellow30,
      success: vm.$mwui.colors.green30
    })
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
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
          color: @wmui-color-yellow30;
        }
      }
      &--warning {
        span {
          color: @wmui-color-yellow30;
        }
      }
      &--success {
        span {
          color: @wmui-color-green30;
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
    color: @wmui-color-base20;
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
