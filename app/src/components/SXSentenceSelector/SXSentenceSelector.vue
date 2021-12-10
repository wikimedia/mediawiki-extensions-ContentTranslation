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
        v-if="isSelectedTranslationUnitTranslated"
        @edit-translation="editTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
      />
      <!--      MwCard has a margin-bottom: 1em by default. Since this is -->
      <!--      the margin that the card jumps to when bouncing, we control-->
      <!--      card bounce through mb-0 class-->
      <proposed-translation-card
        v-else
        :class="{ 'mb-0': !shouldProposedTranslationBounce }"
        @configure-options="configureTranslationOptions"
        @edit-translation="editTranslation"
        @apply-translation="applyTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousTranslationUnit"
      />
    </mw-row>
    <sx-translation-selector :active.sync="isTranslationOptionsActive" />
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";
import { getDir } from "@wikimedia/language-data";

import SxTranslationSelector from "./SXTranslationSelector";
import SxSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader";
import ProposedTranslationCard from "./ProposedTranslationCard";
import SubSection from "./SubSection";

import TranslatedSegmentCard from "./TranslatedSegmentCard";
import { computed, onMounted, ref, watch } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "SxSentenceSelector",
  components: {
    TranslatedSegmentCard,
    ProposedTranslationCard,
    SubSection,
    SxSentenceSelectorContentHeader,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton
  },
  setup(props, context) {
    const isTranslationOptionsActive = ref(false);
    const shouldProposedTranslationBounce = ref(false);
    const screenHeight = ref("100%");

    const store = context.root.$store;

    const {
      currentSectionSuggestion: suggestion,
      currentSourceSection: currentPageSection,
      isSectionTitleSelected,
      selectedSentence
    } = useApplicationState();

    const isSelectedTranslationUnitTranslated = computed(
      () => store.getters["application/isSelectedTranslationUnitTranslated"]
    );

    const subSections = computed(() => currentPageSection.value?.subSections);

    const originalSegmentContent = computed(() =>
      isSectionTitleSelected.value
        ? currentPageSection.value.originalTitle
        : selectedSentence.value.originalContent
    );

    const sentenceSelectorStyle = computed(() =>
      isNaN(screenHeight.value) ? screenHeight.value : `${screenHeight.value}px`
    );

    onMounted(async () => {
      // When user returns to "Pick a sentence" step from "Preview and publish"
      // publishing warnings and errors should be cleared.
      store.commit("application/clearPublishFeedbackMessages");
      await store.dispatch("application/initializeMTProviders");

      // If no sentence is selected, select title
      if (!selectedSentence.value) {
        store.dispatch("application/selectTranslationUnitById", 0);
      }
      screenHeight.value = window.innerHeight;
    });

    const skipTranslation = () =>
      store.dispatch("application/selectNextSentence");
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
    const router = context.root.$router;

    const goToContentComparator = () =>
      router.push({ name: "sx-content-comparator" });

    const configureTranslationOptions = () => {
      isTranslationOptionsActive.value = true;
      store.dispatch(
        "application/translateSelectedTranslationUnitForAllProviders"
      );
    };

    const editTranslation = content =>
      router.push({
        name: "sx-editor",
        params: {
          content,
          sourceLanguage: suggestion.value.sourceLanguage,
          targetLanguage: suggestion.value.targetLanguage,
          originalContent: originalSegmentContent.value,
          title: suggestion.value.targetTitle || suggestion.value.sourceTitle
        }
      });

    const previewTranslation = () => router.push({ name: "sx-publisher" });

    watch(selectedSentence, () => {
      const segmentId = selectedSentence.value.id;
      const segment = document.querySelector(`[data-segmentid='${segmentId}']`);

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
        rect => document.elementFromPoint(rect.x, rect.y) === segment
      );

      if (!selectedSentence.value || isInView) {
        return;
      }
      // Move the current selected sentence to viewport

      segment.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    });

    return {
      applyTranslation,
      bounceTranslation,
      configureTranslationOptions,
      currentPageSection,
      editTranslation,
      getDir,
      goToContentComparator,
      isSelectedTranslationUnitTranslated,
      isTranslationOptionsActive,
      mwIconArrowPrevious,
      previewTranslation,
      selectPreviousTranslationUnit,
      sentenceSelectorStyle,
      shouldProposedTranslationBounce,
      skipTranslation,
      sourceLanguage: suggestion.value.sourceLanguage,
      subSections
    };
  }
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
