<script setup>
import { MwRow, MwCol, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel.vue";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector.vue";
import SxTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation.vue";
import SxConfirmTranslationStartDialog from "./SXConfirmTranslationStartDialog.vue";
import useURLHandler from "@/composables/useURLHandler";
import {
  mwIconClose,
  mwIconArticle,
} from "@/lib/mediawiki.ui/components/icons";
import { loadVEModules } from "@/plugins/ve";
import { computed, inject, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";
import useCurrentPages from "@/composables/useCurrentPages";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import useAppendixSectionTitlesFetch from "@/composables/useAppendixSectionTitlesFetch";
import useCXServerToken from "@/composables/useCXServerToken";

const store = useStore();
const { currentSourcePage } = useCurrentPages();
const { previousRoute } = useApplicationState(store);
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  pageURLParameter: sourcePageTitle,
  sectionURLParameter: sectionTitle,
  clearTranslationURLParameters,
} = useURLHandler();

const breakpoints = inject("breakpoints");
const nextBreakpoint = computed(() => breakpoints.value.nextBreakpoint);

const articleImageSource = computed(() =>
  currentSourcePage.value?.getImage(nextBreakpoint.value)
);
const { fetchTranslationsByStatus } = useTranslationsFetch();
const fetchLanguageTitles = useLanguageTitlesFetch();

// to support draft translation start
fetchTranslationsByStatus("draft");

fetchLanguageTitles(sourceLanguage.value, sourcePageTitle.value);

// Start loading VE in background. Don't wait for it though.
// We anticipate that user is going to use editor in next step.
loadVEModules();

// Start fetching CXServer token. Don't wait for it though.
// We anticipate that user is going to use editor in next step.
const getCXServerToken = useCXServerToken();
getCXServerToken();

// Fetch appendix section titles, if they have not been fetched during suggestion initialization (e.g. if
// page title is pre-filled as URL parameter), so that they are always available in "Compare contents"
// step (for proper positioning of the new section placeholder inside target article preview)
const fetchAppendixSectionTitles = useAppendixSectionTitlesFetch();
fetchAppendixSectionTitles(targetLanguage.value);

const router = useRouter();

const onClose = () => {
  if (!previousRoute.value) {
    // If coming to confirmer from an external link, go to dashboard directly
    router.push({ name: "dashboard" });
  } else {
    router.push({ name: previousRoute.value });
  }
};

onBeforeUnmount(() => {
  const navigatingTo = router.currentRoute.value.name;

  if (navigatingTo === "dashboard" || navigatingTo === "sx-article-search") {
    // Remove translation URL params so that section translation doesn't restart, leading to endless loop
    clearTranslationURLParameters();
  }
});

const translationConfirmationDialogOn = ref(false);
</script>

<template>
  <section
    class="sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto"
  >
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
    <sx-translation-confirmer-action-panel
      @open-translation-confirmation-dialog="
        translationConfirmationDialogOn = true
      "
    />
    <mw-row justify="center" class="sx-translation-confirmer__license ma-0">
      <p class="ma-3">
        <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
        <small v-i18n-html:cx-license-agreement />
      </p>
    </mw-row>
    <sx-confirm-translation-start-dialog
      v-model="translationConfirmationDialogOn"
    />
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-confirmer {
  background-color: @background-color-base;

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
