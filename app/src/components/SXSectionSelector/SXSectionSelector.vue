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
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useEditorNavigation from "@/composables/useEditorNavigation";
import useDashboardTranslationContinueInstrument from "@/composables/useDashboardTranslationContinueInstrument";

const store = useStore();
const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
const {
  sourceLanguage,
  targetLanguage,
  sourceLanguageAutonym,
  targetLanguageAutonym,
} = useApplicationState(store);

const sourceArticlePath = computed(() =>
  siteMapper.getPageUrl(sourceLanguage.value, suggestion.value?.sourceTitle)
);

const targetArticlePath = computed(() =>
  siteMapper.getPageUrl(targetLanguage.value, suggestion.value?.targetTitle)
);
/**
 * @type {ComputedRef<[{path: string, autonym: string}, {path: string, autonym: string}]>}
 */
const viewArticleItems = computed(() => [
  { path: sourceArticlePath.value, autonym: sourceLanguageAutonym.value },
  { path: targetArticlePath.value, autonym: targetLanguageAutonym.value },
]);

const router = useRouter();

const { clearTranslationURLParameters, setSectionURLParam } = useURLHandler();

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
  <section class="sx-section-selector">
    <sx-section-selector-header @close="goToDashboard" />
    <section class="sx-section-selector__body">
      <sx-article-language-selector />
      <sx-section-selector-section-list-missing
        @select-section="selectSection"
        @close="goToDashboard"
      />
      <sx-section-selector-section-list-present
        @select-section="selectSection"
      />
      <section class="py-2">
        <h4
          v-i18n:cx-sx-section-selector-more-details-title="[
            targetLanguageAutonym,
          ]"
          class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
        />
        <ul class="ma-0 pa-0">
          <sx-section-selector-view-article-item
            v-for="(item, index) in viewArticleItems"
            :key="`view-article-item-${index}`"
            :path="item.path"
            :autonym="item.autonym"
          />
        </ul>
      </section>
      <mw-row class="sx-section-selector__additional-considerations ma-0">
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
    </section>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector {
  .sx-section-selector__body {
    .sx-section-selector__list-title {
      color: #72777d;
    }
  }
  .sx-section-selector__additional-considerations {
    border-top: @border-width-base @border-style-base #eaecf0;
    .sx-section-selector__additional-consideration-title {
      .mw-ui-icon {
        display: inline;
      }
    }
  }
}
</style>
