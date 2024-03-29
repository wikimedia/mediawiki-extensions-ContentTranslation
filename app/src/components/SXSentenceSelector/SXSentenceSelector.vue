<script setup>
import { MwRow, MwCol, MwSpinner } from "@/lib/mediawiki.ui";
import { getDir } from "@wikimedia/language-data";
import SxConfirmBackNavigationDialog from "./SXConfirmBackNavigationDialog.vue";
import SxTranslationSelector from "./SXTranslationSelector.vue";
import SxSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader.vue";
import ProposedTranslationCard from "./ProposedTranslationCard.vue";
import SubSection from "./SubSection.vue";
import BlockTemplateAdaptationCard from "./BlockTemplateAdaptationCard.vue";
import TranslatedSegmentCard from "./TranslatedSegmentCard.vue";
import SubSectionModel from "@/wiki/cx/models/subSection";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";
import useURLHandler from "@/composables/useURLHandler";
import useInitializeSegmentSelection from "./useInitializeSegmentSelection";
import useMTProvidersInitialize from "./useMTProvidersInitialize";
import useSelectedContentTranslationUnitScroll from "./useSelectedContentTranslationUnitScroll";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import useProposedTranslationApply from "./useProposedTranslationApply";
import usePendingSaveRequestsClear from "./usePendingSaveRequestsClear";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useTranslationUnitTranslate from "./useTranslationUnitTranslate";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconArrowPrevious } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";

const isTranslationOptionsActive = ref(false);
const shouldProposedTranslationBounce = ref(false);
const screenHeight = ref("100%");

const store = useStore();

const { currentMTProvider, sourceLanguage, targetLanguage } =
  useApplicationState(store);

const { sourceSection: currentPageSection, selectedContentTranslationUnit } =
  useCurrentPageSection();

const translationDataReady = computed(
  () => store.state.application.translationDataLoadingCounter === 0
);

const isSelectedTranslationUnitTranslated = computed(
  () => currentPageSection.value?.isSelectedTranslationUnitTranslated
);

const subSections = computed(() => currentPageSection.value?.subSections);

const originalSegmentContent = computed(
  () => currentPageSection.value?.selectedTranslationUnitOriginalContent
);

const sentenceSelectorStyle = computed(() =>
  isNaN(screenHeight.value) ? screenHeight.value : `${screenHeight.value}px`
);
const logEvent = useEventLogging();
const initializeSegmentSelection = useInitializeSegmentSelection();
const initializeMTProviders = useMTProvidersInitialize();
initializeMTProviders();

const scrollToTranslationUnit = useSelectedContentTranslationUnitScroll();

onMounted(() => {
  watch(
    translationDataReady,
    async () => {
      if (translationDataReady.value) {
        // wait for next tick, so that page contents are rendered
        await nextTick();
        initializeSegmentSelection();

        // scroll to already selected translation unit if any
        scrollToTranslationUnit();
      }
    },
    { immediate: true }
  );
  screenHeight.value = window.innerHeight;
});

watch(selectedContentTranslationUnit, scrollToTranslationUnit);

const {
  selectNextTranslationUnit: skipTranslation,
  selectPreviousTranslationUnit,
} = useTranslationUnitSelect();

const applyProposedTranslationToSelectedTranslationUnit =
  useProposedTranslationApply();

const applyTranslation = () => {
  logEvent({
    event_type: "editor_segment_add",
    translation_source_language: sourceLanguage.value,
    translation_target_language: targetLanguage.value,
  });
  applyProposedTranslationToSelectedTranslationUnit();
};

const bounceTranslation = () => {
  shouldProposedTranslationBounce.value = true;
  setTimeout(() => {
    shouldProposedTranslationBounce.value = false;
  }, 100);
};
const router = useRouter();

const goToDashboard = () => {
  const { autoSavePending } = store.state.application;

  if (autoSavePending) {
    verifyBackNavigationDialogOn.value = true;

    return;
  }

  doGoToDashboard();
};

const { fetchTranslationsByStatus } = useTranslationsFetch();
const clearPendingSaveRequests = usePendingSaveRequestsClear();
const { clearURLParameters } = useURLHandler();

const doGoToDashboard = async () => {
  fetchTranslationsByStatus("draft");
  currentPageSection.value.reset();
  // Remove URL params so that section translation doesn't restart, leading to endless loop
  clearURLParameters();
  clearPendingSaveRequests();
  // wait for the redirection to dashboard before resetting variables needed in this route
  await router.push({ name: "dashboard" });

  const { currentTranslation } = store.state.application;

  if (!currentTranslation) {
    return;
  }

  store.commit("application/setCurrentTranslationRestored", false);
  // always clear current translation, if any, when going back to dashboard
  store.commit("application/setCurrentTranslation", null);
};
const {
  translateTranslationUnitById,
  translateSelectedTranslationUnitForAllProviders,
} = useTranslationUnitTranslate();

const configureTranslationOptions = () => {
  // Disable MT provider change when block template is selected
  if (isBlockTemplateSelected.value) {
    return;
  }
  isTranslationOptionsActive.value = true;
  translateSelectedTranslationUnitForAllProviders();
};

const { getCurrentTitleByLanguage } = useLanguageTitleGroup();

const editTranslation = (content, isInitialEdit) => {
  router.push({
    name: "sx-editor",
    state: {
      content,
      originalContent: originalSegmentContent.value,
      title: getCurrentTitleByLanguage(
        targetLanguage.value,
        sourceLanguage.value
      ),
      isInitialEdit: isInitialEdit || null,
    },
  });
};

const previewTranslation = () => router.push({ name: "sx-publisher" });

const retryTranslation = async () => {
  if (!selectedContentTranslationUnit.value) {
    await translateTranslationUnitById(0, currentMTProvider.value);
  } else {
    await translateTranslationUnitById(
      selectedContentTranslationUnit.value.id,
      currentMTProvider.value
    );
  }
};

const isBlockTemplateSelected = computed(
  () => selectedContentTranslationUnit.value instanceof SubSectionModel
);

const verifyBackNavigationDialogOn = ref(false);
</script>

<template>
  <section
    class="sx-sentence-selector fill-height column ma-0 no-wrap"
    :style="sentenceSelectorStyle"
  >
    <mw-row class="sx-sentence-selector__header ma-0 py-2">
      <mw-col shrink>
        <cdx-button weight="quiet" class="px-3" @click="goToDashboard">
          <cdx-icon :icon="cdxIconArrowPrevious" />
        </cdx-button>
      </mw-col>
      <mw-col grow class="px-1">
        <h4
          v-i18n:cx-sx-sentence-selector-header-title
          class="sx-sentence-selector__header-title mb-0"
        />
      </mw-col>
      <mw-col shrink class="px-3">
        <cdx-button
          :disabled="!(currentPageSection && currentPageSection.isTranslated)"
          @click="previewTranslation"
        >
          {{ $i18n("cx-sx-sentence-selector-done-button-label") }}
        </cdx-button>
      </mw-col>
    </mw-row>
    <mw-row
      v-if="translationDataReady"
      tag="section"
      direction="column"
      align="start"
      justify="between"
      class="sx-sentence-selector__body fill-height ma-0"
    >
      <mw-col
        :dir="getDir(sourceLanguage)"
        :lang="sourceLanguage"
        class="sx-sentence-selector__section"
      >
        <sx-sentence-selector-content-header />
        <div class="sx-sentence-selector__section-contents px-4">
          <sub-section
            v-for="subSection in subSections"
            :id="subSection.id"
            :key="`sub-section-${subSection.id}`"
            :sub-section="subSection"
            @bounce-translation="bounceTranslation"
          />
        </div>
      </mw-col>
      <translated-segment-card
        v-if="!isBlockTemplateSelected && isSelectedTranslationUnitTranslated"
        @edit-translation="editTranslation($event, false)"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
      />
      <!--      MwCard has a margin-bottom: 1em by default. Since this is -->
      <!--      the margin that the card jumps to when bouncing, we control-->
      <!--      card bounce through mb-0 class-->
      <proposed-translation-card
        v-else-if="!isBlockTemplateSelected"
        :class="{ 'mb-0': !shouldProposedTranslationBounce }"
        @configure-options="configureTranslationOptions"
        @edit-translation="editTranslation($event, true)"
        @apply-translation="applyTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
        @retry-translation="retryTranslation"
      />
      <block-template-adaptation-card
        v-else
        @edit-translation="editTranslation"
        @apply-translation="applyTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
      />
    </mw-row>
    <mw-row v-else column class="grow">
      <mw-spinner class="mt-0" />
    </mw-row>

    <sx-translation-selector v-model:active="isTranslationOptionsActive" />
    <sx-confirm-back-navigation-dialog
      v-model="verifyBackNavigationDialogOn"
      @discard-translation="doGoToDashboard"
    />
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import "@/styles/page.less";

.sx-sentence-selector {
  &__header {
    background-color: @background-color-disabled-subtle;
    box-shadow: 0 @border-width-base @border-color-disabled;
    &-title {
      color: @color-base;
    }
    button {
      line-height: normal;
    }
  }
  &__body {
    min-height: 80vh;
  }
  &__section {
    overflow: auto;
    &-contents {
      a {
        pointer-events: none;
      }
    }
  }
}
</style>
