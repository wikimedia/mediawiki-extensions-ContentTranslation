<script setup>
import CxTranslationWork from "./CXTranslationWork.vue";
import { MwCol, MwRow, MwSpinner } from "@/lib/mediawiki.ui";
import { computed, ref } from "vue";
import PublishedTranslation from "@/wiki/cx/models/publishedTranslation";
import { useRouter } from "vue-router";
import useSectionSuggestionForPublishedFetch from "./useSectionSuggestionForPublishedFetch";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconAdd, cdxIconEllipsis } from "@wikimedia/codex-icons";
import useURLHandler from "@/composables/useURLHandler";
import useTranslationStart from "@/composables/useTranslationStart";

const props = defineProps({
  translation: {
    type: PublishedTranslation,
    required: true,
  },
});

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

const { setSectionURLParam } = useURLHandler();

const openTargetPage = () => {
  window.open(props.translation.targetUrl, "_blank");
};

const doStartTranslation = useTranslationStart();

/**
 * @param {string|null} sectionTitle
 */
const startTranslation = (sectionTitle) => {
  doStartTranslation(
    props.translation.sourceTitle,
    props.translation.sourceLanguage,
    props.translation.targetLanguage,
    "continue_published"
  );

  if (sectionTitle) {
    setSectionURLParam(sectionTitle);
  }
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
              @click.stop="startTranslation(firstMissingSection)"
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
              @click.stop="startTranslation(null)"
            >
              <cdx-icon :icon="cdxIconEllipsis" />
            </cdx-button>
          </div>
          <div v-else>
            <cdx-button
              class="cx-published-translation__start-new-translation-button flex items-center pa-0"
              weight="quiet"
              action="progressive"
              @click.stop="startTranslation(null)"
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
