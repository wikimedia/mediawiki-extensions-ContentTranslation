<script setup>
import { MwRow, MwCol, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel.vue";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector.vue";
import SxTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation.vue";
import useURLHandler from "@/composables/useURLHandler";
import {
  mwIconClose,
  mwIconArticle,
} from "@/lib/mediawiki.ui/components/icons";
import { loadVEModules } from "@/plugins/ve";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useEventLogging } from "../../plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";

const props = defineProps({
  eventSource: {
    type: String,
    default: null,
  },
});

const store = useStore();
const { currentSourcePageFromURL: currentSourcePage, previousRoute } =
  useApplicationState(store);
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  pageURLParameter: sourcePageTitle,
  clearURLParameters,
} = useURLHandler();
const articleImageSource = computed(
  () => currentSourcePage.value?.image?.source
);
const logEvent = useEventLogging();
const fetchLanguageTitles = useLanguageTitlesFetch();
onMounted(() => {
  fetchLanguageTitles(sourceLanguage.value, sourcePageTitle.value);
  logEvent({
    event_type: "dashboard_translation_start",
    event_source: props.eventSource,
    translation_source_language: sourceLanguage.value,
    translation_target_language: targetLanguage.value,
  });

  // Start loading VE in background. Don't wait for it though.
  // We anticipate that user is going to use editor in next step.
  loadVEModules();

  // Fetch appendix section titles, if they have not been fetched during suggestion initialization (e.g. if
  // page title is pre-filled as URL parameter), so that they are always available in "Compare contents"
  // step (for proper positioning of the new section placeholder inside target article preview)
  store.dispatch(
    "suggestions/fetchAppendixSectionTitles",
    targetLanguage.value
  );
});

const router = useRouter();

const onClose = () => {
  store.dispatch("application/clearCurrentSectionSuggestion");
  // Remove URL params so that section translation doesn't restart, leading to endless loop
  clearURLParameters();

  router.push({ name: previousRoute.value });
};
</script>

<template>
  <section class="sx-translation-confirmer">
    <mw-row
      class="sx-translation-confirmer__header ma-0 py-3"
      align="stretch"
      justify="start"
    >
      <mw-col grow class="px-4" align="center">
        <h5 v-i18n:cx-sx-translation-confirmer-title class="mb-0" />
      </mw-col>
      <mw-col shrink align="start" class="pe-4">
        <mw-button
          class="pa-0"
          type="icon"
          :icon="mwIconClose"
          :icon-size="20"
          @click="onClose"
        />
      </mw-col>
    </mw-row>
    <div class="sx-translation-confirmer__article-image flex justify-center">
      <img v-if="articleImageSource" :src="articleImageSource" />
      <mw-icon
        v-else
        size="120"
        :icon="mwIconArticle"
        :icon-color="$mwui.colors.blue600"
      />
    </div>
    <sx-translation-confirmer-article-information />
    <sx-article-language-selector />
    <sx-translation-confirmer-action-panel />
    <mw-row justify="center" class="sx-translation-confirmer__license ma-0">
      <p class="ma-3">
        <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
        <small v-i18n-html:cx-license-agreement />
      </p>
    </mw-row>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-confirmer {
  &__article-image {
    background-color: @background-color-progressive-subtle;
    height: 192px;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: 50% 33%;
    }
  }
  &__license {
    border-top: @border-width-base @border-style-base @border-color-disabled;
    background-color: @background-color-interactive-subtle;
  }
}
</style>
