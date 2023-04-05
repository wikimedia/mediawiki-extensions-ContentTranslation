<template>
  <section
    class="sx-sentence-selector fill-height column ma-0 no-wrap"
    :style="sentenceSelectorStyle"
  >
    <mw-row class="sx-sentence-selector__header ma-0 py-2">
      <mw-col shrink>
        <mw-button
          class="px-3"
          type="icon"
          :icon="mwIconArrowPrevious"
          @click="goToDashboard"
        />
      </mw-col>
      <mw-col grow class="px-1">
        <h4
          v-i18n:cx-sx-sentence-selector-header-title
          class="sx-sentence-selector__header-title"
        />
      </mw-col>
      <mw-col shrink class="px-3">
        <mw-button
          :label="$i18n('cx-sx-sentence-selector-done-button-label')"
          :disabled="!currentPageSection.isTranslated"
          @click="previewTranslation"
        />
      </mw-col>
    </mw-row>
    <mw-row
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
    <sx-translation-selector v-model:active="isTranslationOptionsActive" />
    <sx-confirm-back-navigation-dialog
      v-model="verifyBackNavigationDialogOn"
      @discard-translation="doGoToDashboard"
    />
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";
import { getDir } from "@wikimedia/language-data";

import SxConfirmBackNavigationDialog from "./SXConfirmBackNavigationDialog.vue";
import SxTranslationSelector from "./SXTranslationSelector.vue";
import SxSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader.vue";
import ProposedTranslationCard from "./ProposedTranslationCard.vue";
import SubSection from "./SubSection.vue";
import BlockTemplateAdaptationCard from "./BlockTemplateAdaptationCard.vue";
import TranslatedSegmentCard from "./TranslatedSegmentCard.vue";
import SubSectionModel from "@/wiki/cx/models/subSection";
import { computed, onMounted, ref, watch } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";
import translator from "../../wiki/cx/api/translator";
import { replaceUrl } from "@/utils/urlHandler";
import useInitializeSegmentSelection from "./useInitializeSegmentSelection";

export default {
  name: "SxSentenceSelector",
  components: {
    SxConfirmBackNavigationDialog,
    BlockTemplateAdaptationCard,
    TranslatedSegmentCard,
    ProposedTranslationCard,
    SubSection,
    SxSentenceSelectorContentHeader,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton,
  },
  setup() {
    const isTranslationOptionsActive = ref(false);
    const shouldProposedTranslationBounce = ref(false);
    const screenHeight = ref("100%");

    const store = useStore();

    const {
      currentSourcePage,
      currentTargetPage,
      currentSourceSection: currentPageSection,
      selectedContentTranslationUnit,
      currentMTProvider,
      sourceLanguage,
      targetLanguage,
    } = useApplicationState(store);

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

    onMounted(async () => {
      const currentPage = store.getters["application/getCurrentPage"];
      const { currentTranslation } = store.state.application;

      const promises = [];

      if (currentTranslation && !currentTranslation.restored) {
        const restorationPromise = translator
          .fetchTranslationUnits(currentTranslation.id)
          .then((translationUnits) => {
            currentPage.restoreCorporaDraft(translationUnits);
            currentTranslation.restored = true;
          });
        promises.push(restorationPromise);
      }

      promises.push(store.dispatch("application/initializeMTProviders"));
      Promise.all(promises).then(() => initializeSegmentSelection());

      screenHeight.value = window.innerHeight;
    });

    const skipTranslation = () =>
      store.dispatch("application/selectNextTranslationUnit");
    const selectPreviousTranslationUnit = () =>
      store.dispatch("application/selectPreviousTranslationUnit");

    const applyTranslation = () => {
      logEvent({
        event_type: "editor_segment_add",
        translation_source_language: sourceLanguage.value,
        translation_target_language: targetLanguage.value,
      });
      store.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
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

    const doGoToDashboard = () => {
      store.dispatch("translator/fetchTranslations");
      // Remove URL params so that section translation doesn't restart, leading to endless loop
      replaceUrl(null);
      store.dispatch("application/clearPendingSaveTranslationRequests");
      router.push({ name: "dashboard" });
      currentPageSection.value.reset();
    };

    const configureTranslationOptions = () => {
      // Disable MT provider change when block template is selected
      if (isBlockTemplateSelected.value) {
        return;
      }
      isTranslationOptionsActive.value = true;
      store.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      );
    };

    const editTranslation = (content, isInitialEdit) => {
      router.push({
        name: "sx-editor",
        state: {
          content,
          originalContent: originalSegmentContent.value,
          title:
            currentTargetPage.value?.title || currentSourcePage.value.title,
          isInitialEdit: isInitialEdit || null,
        },
      });
    };

    const previewTranslation = () => router.push({ name: "sx-publisher" });

    const retryTranslation = async () => {
      if (!selectedContentTranslationUnit.value) {
        await store.dispatch("application/translateTranslationUnitById", {
          id: 0,
          provider: currentMTProvider.value,
        });
      } else {
        await store.dispatch("application/translateTranslationUnitById", {
          id: selectedContentTranslationUnit.value.id,
          provider: currentMTProvider.value,
        });
      }
    };

    watch(selectedContentTranslationUnit, () => {
      if (!selectedContentTranslationUnit.value) {
        return;
      }
      const segmentId = selectedContentTranslationUnit.value.id;

      const segment = isBlockTemplateSelected.value
        ? document.getElementById(segmentId)
        : document.querySelector(`[data-segmentid='${segmentId}']`);
      // "segment" variable refers to multi-line inline elements (<span>).
      // Such elements have multiple border boxes (one around each line).
      // For this reason we need to check if all these border boxes are
      // visible or not, and we need to use "getClientRects" method instead
      // of "getBoundingClientRect" method
      const isInView = Array.from(segment.getClientRects()).every(
        // use "elementFromPoint" method to get the topmost element
        // at the coordinates of the border box of each line.
        // If the line of the segment is inside the viewport and not
        // hidden by another element (e.g. the proposed translation card),
        // the returned element should match the "segment" element.
        // Note that we only check for the top-left corner of the rectangle, so
        // if a small portion of a line is hidden, the line is still considered
        // to be visible.
        (rect) => document.elementFromPoint(rect.x, rect.y) === segment
      );

      if (isInView) {
        return;
      }
      // Move the current selected translation unit to viewport
      segment.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });

    const isBlockTemplateSelected = computed(
      () => selectedContentTranslationUnit.value instanceof SubSectionModel
    );

    const verifyBackNavigationDialogOn = ref(false);

    return {
      applyTranslation,
      bounceTranslation,
      configureTranslationOptions,
      currentPageSection,
      doGoToDashboard,
      editTranslation,
      getDir,
      goToDashboard,
      isBlockTemplateSelected,
      isSelectedTranslationUnitTranslated,
      isTranslationOptionsActive,
      mwIconArrowPrevious,
      previewTranslation,
      retryTranslation,
      selectPreviousTranslationUnit,
      sentenceSelectorStyle,
      shouldProposedTranslationBounce,
      skipTranslation,
      sourceLanguage,
      subSections,
      verifyBackNavigationDialogOn,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "@/styles/page.less";

.sx-sentence-selector {
  &__header {
    background-color: @background-color-base--disabled;
    box-shadow: 0 @border-width-base @border-color-base--disabled;
    &-title {
      color: @color-base;
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
