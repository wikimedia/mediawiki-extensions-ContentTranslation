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
          @click="goToContentComparator"
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
        @edit-translation="editTranslation"
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
        @edit-translation="editTranslation"
        @apply-translation="applyTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
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
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";
import { getDir } from "@wikimedia/language-data";

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

export default {
  name: "SxSentenceSelector",
  components: {
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
      currentSectionSuggestion: suggestion,
      currentSourceSection: currentPageSection,
      selectedContentTranslationUnit,
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

    onMounted(async () => {
      // When user returns to "Pick a sentence" step from "Preview and publish"
      // publishing warnings and errors should be cleared.
      await store.dispatch("application/initializeMTProviders");

      // If no sentence is selected, select title
      if (!selectedContentTranslationUnit.value) {
        store.dispatch("application/selectTranslationUnitById", 0);
      }
      screenHeight.value = window.innerHeight;
    });

    const skipTranslation = () =>
      store.dispatch("application/selectNextTranslationUnit");
    const selectPreviousTranslationUnit = () =>
      store.dispatch("application/selectPreviousTranslationUnit");
    const applyTranslation = () =>
      store.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );

    const bounceTranslation = () => {
      shouldProposedTranslationBounce.value = true;
      setTimeout(() => {
        shouldProposedTranslationBounce.value = false;
      }, 100);
    };
    const router = useRouter();

    const goToContentComparator = () =>
      router.push({ name: "sx-content-comparator" });

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

    const editTranslation = (content) =>
      router.push({
        name: "sx-editor",
        params: {
          content,
          sourceLanguage: suggestion.value.sourceLanguage,
          targetLanguage: suggestion.value.targetLanguage,
          originalContent: originalSegmentContent.value,
          title: suggestion.value.targetTitle || suggestion.value.sourceTitle,
        },
      });

    const previewTranslation = () => router.push({ name: "sx-publisher" });

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

    return {
      applyTranslation,
      bounceTranslation,
      configureTranslationOptions,
      currentPageSection,
      editTranslation,
      getDir,
      goToContentComparator,
      isBlockTemplateSelected,
      isSelectedTranslationUnitTranslated,
      isTranslationOptionsActive,
      mwIconArrowPrevious,
      previewTranslation,
      selectPreviousTranslationUnit,
      sentenceSelectorStyle,
      shouldProposedTranslationBounce,
      skipTranslation,
      sourceLanguage: suggestion.value.sourceLanguage,
      subSections,
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
