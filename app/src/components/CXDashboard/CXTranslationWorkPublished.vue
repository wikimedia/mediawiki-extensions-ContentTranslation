<script setup>
import CxTranslationWork from "./CXTranslationWork.vue";
import {
  mwIconEdit,
  mwIconAdd,
  mwIconEllipsis,
} from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwRow, MwSpinner } from "@/lib/mediawiki.ui";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import PublishedTranslation from "@/wiki/cx/models/publishedTranslation";
import MwButton from "@/lib/mediawiki.ui/components/MWButton/MWButton.vue";
import { useRouter } from "vue-router";
import useCXRedirect from "@/composables/useCXRedirect";
import useDevice from "@/composables/useDevice";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";

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

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string} sourceTitle
 * @return {Promise<SectionSuggestion|null>}
 */
const findOrFetchNonLeadSectionSuggestion = async (
  sourceLanguage,
  targetLanguage,
  sourceTitle
) => {
  let suggestion = store.getters["suggestions/getSectionSuggestionsForArticle"](
    sourceLanguage,
    targetLanguage,
    sourceTitle
  );

  if (!suggestion) {
    /** @type {SectionSuggestion|null} */
    suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      sourceLanguage,
      sourceTitle,
      targetLanguage
    );
  }

  return suggestion;
};

findOrFetchNonLeadSectionSuggestion(
  props.translation.sourceLanguage,
  props.translation.targetLanguage,
  props.translation.sourceTitle
)
  .then((sectionSuggestion) => (suggestion.value = sectionSuggestion))
  .catch((error) => console.log(error))
  .finally(() => (suggestionLoading.value = false));

const router = useRouter();

const redirectToCX = useCXRedirect();
const { isDesktop } = useDevice();

const editTranslation = () => {
  if (isDesktop.value) {
    redirectToCX(
      props.translation.sourceLanguage,
      props.translation.targetLanguage,
      props.translation.sourceTitle
    );
  }
};

const translateNewSection = () => {
  store.dispatch("application/initializeSectionTranslation", suggestion.value);
  router.push({ name: "sx-section-selector", query: { force: true } });
};

const openTargetPage = () => {
  window.open(props.translation.targetUrl, "_blank");
};
</script>

<template>
  <cx-translation-work
    class="cx-published-translation"
    :translation="translation"
    :action-icon="isDesktop ? mwIconEdit : ''"
    @action-icon-clicked="editTranslation"
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
      <mw-row class="ma-0 py-2">
        <mw-col>
          <mw-spinner v-if="suggestionLoading" />
          <div v-else-if="!!missingSections">
            <mw-button
              class="cx-published-translation__missing-sections-button pa-0"
              :icon="mwIconAdd"
              type="text"
              :label="firstMissingSection"
              progressive
              @click.stop="translateNewSection"
            />
            <mw-button
              class="cx-published-translation__missing-sections-button pa-0 ms-4"
              :icon="mwIconEllipsis"
              type="icon"
              progressive
              @click.stop="translateNewSection"
            />
          </div>
        </mw-col>
      </mw-row>
    </template>
  </cx-translation-work>
</template>

<style lang="less">
@import "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

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

  & &__missing-sections-button {
    .mw-ui-button__label {
      margin-left: 0;
    }
  }
}
</style>
