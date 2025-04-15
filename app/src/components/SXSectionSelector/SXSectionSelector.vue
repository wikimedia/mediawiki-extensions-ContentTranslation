<script setup>
import { MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconRobot,
  mwIconLabFlask,
} from "@/lib/mediawiki.ui/components/icons";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector.vue";
import SxSectionSelectorViewArticleItem from "./SXSectionSelectorViewArticleItem.vue";
import SxSectionSelectorHeader from "./SXSectionSelectorHeader.vue";
import SxSectionSelectorSectionListMissing from "./SXSectionSelectorSectionListMissing.vue";
import SxSectionSelectorSectionListPresent from "./SXSectionSelectorSectionListPresent.vue";
import { siteMapper } from "@/utils/mediawikiHelper";
import useURLHandler from "@/composables/useURLHandler";
import { computed, inject } from "vue";
import { useRouter } from "vue-router";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useEditorNavigation from "@/composables/useEditorNavigation";
import useDashboardTranslationContinueInstrument from "@/composables/useDashboardTranslationContinueInstrument";
import { getAutonym } from "@wikimedia/language-data";

const breakpoints = inject("breakpoints");
const isDesktop = computed(() => breakpoints.value.desktopAndUp);

const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  clearTranslationURLParameters,
  setSectionURLParam,
} = useURLHandler();
const sourceLanguageAutonym = computed(() => getAutonym(sourceLanguage.value));
const targetLanguageAutonym = computed(() => getAutonym(targetLanguage.value));

const sourceArticlePath = computed(() =>
  siteMapper.getPageUrl(sourceLanguage.value, suggestion.value?.sourceTitle)
);

const targetArticlePath = computed(() =>
  siteMapper.getPageUrl(targetLanguage.value, suggestion.value?.targetTitle)
);

const router = useRouter();

const goToDashboard = () => {
  // Remove URL params so that section translation doesn't restart, leading to endless loop
  clearTranslationURLParameters();
  router.push({ name: "dashboard" });
};

const { currentTranslation: currentDraftTranslation } =
  useCurrentDraftTranslation();
const navigateToEditor = useEditorNavigation();
const logDashboardTranslationContinueEvent =
  useDashboardTranslationContinueInstrument();
const { selectPageSectionByTitle } = usePageSectionSelect();

const selectSection = (sourceSectionTitle) => {
  setSectionURLParam(sourceSectionTitle);

  // if a draft translation exists for the current selected page and section, restore it
  if (!!currentDraftTranslation.value) {
    logDashboardTranslationContinueEvent();
    navigateToEditor();
  } else {
    selectPageSectionByTitle(sourceSectionTitle);
    router.push({ name: "sx-content-comparator" });
  }
};
</script>

<template>
  <section
    class="sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto"
  >
    <sx-section-selector-header @close="goToDashboard" />
    <sx-article-language-selector />
    <mw-row class="ma-0" align="stretch">
      <mw-col cols="12" desktop="8" class="ma-0 pa-0">
        <sx-section-selector-section-list-missing
          @select-section="selectSection"
          @close="goToDashboard"
        />
        <sx-section-selector-section-list-present
          v-if="!isDesktop"
          @select-section="selectSection"
        />
        <section
          class="py-2"
          :class="{ 'sx-section-selector__more-details--desktop': isDesktop }"
        >
          <h4
            v-i18n:cx-sx-section-selector-more-details-title="[
              targetLanguageAutonym,
            ]"
            class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
          />
          <mw-row class="ma-0" align="start" justify="start">
            <mw-col cols="12" tablet="6" class="pa-0">
              <sx-section-selector-view-article-item
                :path="sourceArticlePath"
                :autonym="sourceLanguageAutonym"
              />
            </mw-col>
            <mw-col cols="12" tablet="6" class="pa-0">
              <sx-section-selector-view-article-item
                :path="targetArticlePath"
                :autonym="targetLanguageAutonym"
              />
            </mw-col>
          </mw-row>
        </section>
        <mw-row
          class="sx-section-selector__additional-considerations ma-0"
          align="stretch"
        >
          <mw-col cols="12" tablet="6" class="px-4 pt-5 pb-4">
            <h6 class="sx-section-selector__additional-consideration-title">
              <mw-icon :icon="mwIconRobot" class="pe-2" />
              {{
                $i18n("cx-sx-section-selector-automatic-section-matching-title")
              }}
            </h6>
            <p
              v-i18n:cx-sx-section-selector-automatic-section-matching-description
            />
            <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
          </mw-col>
          <mw-col cols="12" tablet="6" class="px-4 py-5">
            <h6 class="sx-section-selector__additional-consideration-title">
              <mw-icon :icon="mwIconLabFlask" class="pe-2" />
              {{ $i18n("cx-sx-section-selector-unsupported-sections-title") }}
            </h6>
            <p v-i18n:cx-sx-section-selector-unsupported-sections-description />
            <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
          </mw-col>
        </mw-row>
      </mw-col>
      <mw-col v-if="isDesktop" desktop="4" class="ma-0 pa-0">
        <sx-section-selector-section-list-present
          class="sx-section-selector-section-list-present--sidebar fill-height p-0"
          @select-section="selectSection"
        />
      </mw-col>
    </mw-row>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector {
  background-color: @background-color-base;

  &__list-title {
    color: #72777d;
  }

  &__more-details--desktop {
    border-top: @border-width-base @border-style-base #eaecf0;
  }

  &__additional-considerations {
    border-top: @border-width-base @border-style-base #eaecf0;
    .sx-section-selector__additional-consideration-title {
      .mw-ui-icon {
        display: inline;
      }
    }
  }

  &-section-list-present--sidebar {
    box-sizing: @box-sizing-base;
    border-inline-start: @border-width-base @border-style-base #eaecf0;
  }
}
</style>
