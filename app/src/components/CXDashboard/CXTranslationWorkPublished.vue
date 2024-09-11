<script setup>
import CxTranslationWork from "./CXTranslationWork.vue";
import { MwCol, MwRow, MwSpinner } from "@/lib/mediawiki.ui";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import PublishedTranslation from "@/wiki/cx/models/publishedTranslation";
import { useRouter } from "vue-router";
import useDevice from "@/composables/useDevice";
import usePageTranslationStart from "@/components/SXArticleSearch/usePageTranslationStart";
import useApplicationState from "@/composables/useApplicationState";
import { usePublishedTranslationLanguagePairUpdate } from "@/composables/useLanguageHelper";
import useSectionSuggestionForPublishedFetch from "./useSectionSuggestionForPublishedFetch";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconAdd, cdxIconEllipsis } from "@wikimedia/codex-icons";
import useURLHandler from "@/composables/useURLHandler";

const props = defineProps({
  translation: {
    type: PublishedTranslation,
    required: true,
  },
});

const store = useStore();
const suggestionLoading = ref(true);
const suggestion = ref(null);

const missingSections = computed(() => suggestion.value?.missingSections);
const firstMissingSection = computed(
  () => missingSections.value && Object.keys(missingSections.value)[0]
);

const fetchSectionSuggestionForPublished =
  useSectionSuggestionForPublishedFetch();

fetchSectionSuggestionForPublished(
  props.translation.sourceLanguage,
  props.translation.targetLanguage,
  props.translation.sourceTitle
)
  .then((sectionSuggestion) => (suggestion.value = sectionSuggestion))
  .catch((error) => console.log(error))
  .finally(() => (suggestionLoading.value = false));

const router = useRouter();

const { isDesktop } = useDevice();
const { setTranslationURLParams, setSectionURLParam } = useURLHandler();

/**
 * @param {string|null} sectionTitle
 */
const translateNewSection = (sectionTitle) => {
  store.dispatch("application/getCXServerToken");
  setTranslationURLParams(suggestion.value);

  if (sectionTitle) {
    setSectionURLParam(sectionTitle);
  }
  // TODO: Add event source
  router.push({
    name: "sx-translation-confirmer",
  });
};

const openTargetPage = () => {
  window.open(props.translation.targetUrl, "_blank");
};

const { startPublishedTranslation } = usePageTranslationStart();
const { sourceLanguage, targetLanguage } = useApplicationState(store);
const updateLanguagePairByPublishedTranslation =
  usePublishedTranslationLanguagePairUpdate();

const startNewTranslation = () => {
  updateLanguagePairByPublishedTranslation(props.translation);
  startPublishedTranslation(props.translation);
};
</script>

<template>
  <cx-translation-work
    class="cx-published-translation"
    :translation="translation"
    @click="openTargetPage"
  >
    <template #title>
      <a
        class="cx-published-translation__source-page-title"
        :lang="translation.sourceLanguage"
        :href="translation.targetUrl"
        target="_blank"
        @click.stop
        v-text="translation.sourceTitle"
      />
    </template>
    <template #mid-content>
      <mw-row class="ma-0">
        <mw-col>
          <mw-spinner v-if="suggestionLoading" />
          <div v-else-if="!!missingSections" class="flex">
            <cdx-button
              class="cx-published-translation__start-new-translation-button flex items-center px-0"
              weight="quiet"
              action="progressive"
              @click.stop="translateNewSection(firstMissingSection)"
            >
              <cdx-icon class="me-1" :icon="cdxIconAdd" />
              <span>
                {{ firstMissingSection }}
              </span>
            </cdx-button>
            <cdx-button
              class="cx-published-translation__start-new-translation-button pa-0 ms-4"
              weight="quiet"
              action="progressive"
              :aria-label="
                $i18n(
                  'sx-published-translation-start-section-translation-button-aria-label'
                )
              "
              @click.stop="translateNewSection(null)"
            >
              <cdx-icon :icon="cdxIconEllipsis" />
            </cdx-button>
          </div>
          <div v-else>
            <cdx-button
              class="cx-published-translation__start-new-translation-button flex items-center pa-0"
              weight="quiet"
              action="progressive"
              @click.stop="startNewTranslation"
            >
              <cdx-icon class="me-1" :icon="cdxIconAdd" />
              <span>
                {{
                  $i18n("sx-published-translation-new-translation-button-label")
                }}
              </span>
            </cdx-button>
          </div>
        </mw-col>
      </mw-row>
    </template>
  </cx-translation-work>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-published-translation {
  cursor: pointer;

  &__source-page-title {
    text-decoration: none;
    color: inherit;
    &:hover,
    &:focus {
      text-decoration: none;
    }
    font-weight: @font-weight-bold;
    font-size: @font-size-medium;
  }

  & &__start-new-translation-button {
    span {
      line-height: normal;
    }
  }
}
</style>
