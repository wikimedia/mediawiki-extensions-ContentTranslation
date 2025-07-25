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
import useURLHandler from "@/composables/useURLHandler";
import useInitializeSegmentSelection from "./useInitializeSegmentSelection";
import useMTProvidersInitialize from "./useMTProvidersInitialize";
import useSelectedContentTranslationUnitScroll from "./useSelectedContentTranslationUnitScroll";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import useProposedTranslationApply from "./useProposedTranslationApply";
import usePendingSaveRequestsClear from "./usePendingSaveRequestsClear";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useTranslationUnitTranslate from "./useTranslationUnitTranslate";
import { CdxButton, CdxIcon, CdxMessage } from "@wikimedia/codex";
import { cdxIconArrowPrevious } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useEditorInstrument from "@/composables/useEditorInstrument";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useDraftTranslationStart from "./useDraftTranslationStart";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import usePublishTarget from "@/composables/usePublishTarget";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import canUserPublish from "@/utils/userPublishingPermissions";
import usePermissionWarningDismiss from "@/composables/usePermissionWarningDismiss";

const isTranslationOptionsActive = ref(false);
const shouldProposedTranslationBounce = ref(false);
const screenHeight = ref("100%");

const store = useStore();

const { currentMTProvider, previousRoute } = useApplicationState(store);
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  pageURLParameter: sourceTitle,
  sectionURLParameter: sectionTitle,
} = useURLHandler();

const { resetPublishTarget, target } = usePublishTarget();
const loadSuggestion = useSuggestionLoad();

if (!target.value) {
  loadSuggestion(
    sourceLanguage.value,
    targetLanguage.value,
    sourceTitle.value
  ).then(() => resetPublishTarget());
}

const { sourceSection: currentPageSection, selectedContentTranslationUnit } =
  useCurrentPageSection();

const translationDataStatus = ref({
  pageContent: false,
  pageMetadata: false,
  draftRestored: false,
  mtProviders: false,
});

const translationDataReady = computed(() =>
  Object.values(translationDataStatus.value).every(Boolean)
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

const {
  logEditorOpenEvent,
  logEditorCloseEvent,
  logEditorCloseWarnEvent,
  logEditorSegmentAddEvent,
  logEditorSegmentSkipEvent,
} = useEditorInstrument();

/**
 * Check if the user is beginning to edit based on workflow step progression.
 * @returns {boolean}
 */
const isBeginningToEdit = () => {
  const currentWorkflowStep = router.currentRoute.value.meta.workflowStep;
  const routes = router.getRoutes();

  const previousRouteObject = routes.find(
    (route) => route.name === previousRoute.value
  );
  const previousRouteStep = previousRouteObject?.meta?.workflowStep || 0;

  return currentWorkflowStep > previousRouteStep;
};

const initializeSegmentSelection = useInitializeSegmentSelection();
const initializeMTProviders = useMTProvidersInitialize();
initializeMTProviders().then(() => {
  if (isBeginningToEdit()) {
    logEditorOpenEvent();
  }
  translationDataStatus.value.mtProviders = true;
});

const scrollToTranslationUnit = useSelectedContentTranslationUnitScroll();
const { fetchTranslationsByStatus, translationsFetched } =
  useTranslationsFetch();
const startDraftTranslation = useDraftTranslationStart();

const { currentTranslation } = useCurrentDraftTranslation();
const { selectPageSectionByTitle, selectPageSectionByIndex } =
  usePageSectionSelect();
const fetchLanguageTitles = useLanguageTitlesFetch();
const fetchPageMetadata = usePageMetadataFetch();

onMounted(async () => {
  // if user has just been redirected to the target mobile editor from a different wiki
  if (!translationsFetched.value.draft) {
    const promises = [
      // required to get current draft translation (if exists)
      fetchTranslationsByStatus("draft"),
      // required to get target page title for template adaptation (useTranslationUnitTranslate)
      fetchLanguageTitles(sourceLanguage.value, sourceTitle.value),
      // user has just been redirected here from another wiki, and page metadata have not yet been fetched
      fetchPageMetadata(sourceLanguage.value, [sourceTitle.value]),
    ];

    await Promise.all(promises);
  }
  translationDataStatus.value.pageMetadata = true;

  if (sectionTitle.value) {
    await selectPageSectionByTitle(sectionTitle.value);
  } else {
    await selectPageSectionByIndex(0);
  }
  translationDataStatus.value.pageContent = true;

  if (!!currentTranslation.value) {
    await startDraftTranslation(currentTranslation.value);
  }
  translationDataStatus.value.draftRestored = true;

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

const { selectNextTranslationUnit, selectPreviousTranslationUnit } =
  useTranslationUnitSelect();

/**
 * @returns {Promise}
 */
const skipTranslation = () => {
  logEditorSegmentSkipEvent();

  return selectNextTranslationUnit();
};

const applyProposedTranslationToSelectedTranslationUnit =
  useProposedTranslationApply();

const applyTranslation = () => {
  logEditorSegmentAddEvent();
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
    logEditorCloseWarnEvent();

    return;
  }

  doGoToDashboard();
};

const clearPendingSaveRequests = usePendingSaveRequestsClear();
const { clearTranslationURLParameters } = useURLHandler();

const doGoToDashboard = async () => {
  fetchTranslationsByStatus("draft");

  if (currentTranslation.value) {
    currentPageSection.value.reset();
    // reset "restored" status for draft translation
    currentTranslation.value.restored = false;
  }
  // Log the "editor_close" event before clearing URL params
  logEditorCloseEvent();
  // Remove URL params so that section translation doesn't restart, leading to endless loop
  clearTranslationURLParameters();
  clearPendingSaveRequests();
  await router.push({ name: "dashboard" });
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

const editTranslation = (content) => {
  router.push({
    name: "sx-editor",
    state: {
      content,
      originalContent: originalSegmentContent.value,
      title: getCurrentTitleByLanguage(
        targetLanguage.value,
        sourceLanguage.value
      ),
      isInitialEdit: !isSelectedTranslationUnitTranslated.value || null,
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

const {
  isDismissed: isPermissionWarningDismissed,
  dismiss: dismissPermissionWarning,
  reset: resetPermissionWarningDismissed,
} = usePermissionWarningDismiss();

if (isBeginningToEdit()) {
  resetPermissionWarningDismissed();
}
const showPermissionWarning = computed(
  () => !canUserPublish() && !isPermissionWarningDismissed.value
);
</script>

<template>
  <section
    class="sx-sentence-selector fill-height column ma-0 no-wrap"
    :style="sentenceSelectorStyle"
  >
    <mw-row class="sx-sentence-selector__header ma-0 py-2">
      <mw-col shrink>
        <cdx-button
          weight="quiet"
          class="px-3"
          :aria-label="
            $i18n('cx-sx-sentence-selector-header-close-button-aria-label')
          "
          @click="goToDashboard"
        >
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
        <cdx-message
          v-if="showPermissionWarning"
          type="warning"
          :allow-user-dismiss="true"
          class="mx-4 mt-4"
          @user-dismissed="dismissPermissionWarning"
        >
          <p>{{ $i18n("cx-publish-permission-warning") }}</p>
          <p>
            <strong>
              <a
                href="https://www.mediawiki.org/wiki/Help:Content_translation/Publishing"
                target="_blank"
                >{{ $i18n("cx-publish-permission-warning-link-label") }}</a
              >
            </strong>
          </p>
        </cdx-message>
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
        @edit-translation="editTranslation"
        @select-next-segment="selectNextTranslationUnit"
        @select-previous-segment="selectPreviousTranslationUnit"
      />
      <!--      MwCard has a margin-bottom: 1em by default. Since this is -->
      <!--      the margin that the card jumps to when bouncing, we control-->
      <!--      card bounce through mb-0 class-->
      <proposed-translation-card
        v-else-if="!isBlockTemplateSelected"
        :class="{ 'mb-0': !shouldProposedTranslationBounce }"
        @configure-options="configureTranslationOptions"
        @edit-translation="editTranslation"
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
        @select-next-segment="selectNextTranslationUnit"
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
