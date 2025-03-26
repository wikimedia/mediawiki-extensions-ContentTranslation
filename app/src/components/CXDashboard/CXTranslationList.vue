<script setup>
import CxTranslationWorkDraft from "./CXTranslationWorkDraft.vue";
import CxTranslationWorkPublished from "./CXTranslationWorkPublished.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import SxConfirmTranslationDeletionDialog from "./SXConfirmTranslationDeletionDialog.vue";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import { ref, computed, inject } from "vue";
import { useStore } from "vuex";
import CxListEmptyPlaceholder from "@/components/CXDashboard/CXListEmptyPlaceholder.vue";
import useTranslationsFetch from "@/composables/useTranslationsFetch";

const props = defineProps({
  activeStatus: {
    type: String,
    required: true,
    validator: (value) => {
      // The value must match one of these strings
      return ["suggestions", "published", "draft"].indexOf(value) !== -1;
    },
  },
  translationStatus: {
    type: String,
    required: true,
    validator: (value) => {
      // The value must match one of these strings
      return ["published", "draft"].indexOf(value) !== -1;
    },
  },
});

const selectedSourceLanguage = ref("all");
const selectedTargetLanguage = ref("all");

const store = useStore();
const { translationsFetched } = useTranslationsFetch();
const loaded = computed(
  () => translationsFetched.value[props.translationStatus]
);

const deletionDialogOn = ref(false);
const translationToDelete = ref(null);
const isDraftTranslationList = computed(
  () => props.translationStatus === "draft"
);
const translations = computed(() =>
  store.getters["translator/getTranslationsByStatus"](props.translationStatus)
);

const isActiveForAllSourceLanguages = computed(
  () => selectedSourceLanguage.value === "all"
);
const isActiveForAllTargetLanguages = computed(
  () => selectedTargetLanguage.value === "all"
);

// sort translations, so that latest translations always show up on top
const activeTranslations = computed(() =>
  translations.value
    .filter(
      (translation) =>
        (isActiveForAllSourceLanguages.value ||
          translation.sourceLanguage === selectedSourceLanguage.value) &&
        (isActiveForAllTargetLanguages.value ||
          translation.targetLanguage === selectedTargetLanguage.value)
    )
    .sort((a, b) => a.lastUpdatedTimestamp < b.lastUpdatedTimestamp)
);

const availableTargetLanguages = computed(() => {
  const translationTargetLanguages = translations.value.map(
    (translation) => translation.targetLanguage
  );

  return [...new Set(translationTargetLanguages)];
});

/**
 * @type {ComputedRef<string[]>} array of language codes
 */
const availableSourceLanguages = computed(() => {
  const translationSourceLanguages = translations.value.map(
    (translation) => translation.sourceLanguage
  );

  return [...new Set(translationSourceLanguages)];
});

const askDeletionConfirmation = (translation) => {
  translationToDelete.value = translation;
  deletionDialogOn.value = true;
};

const isActive = computed(() => props.activeStatus === props.translationStatus);

const breakpoints = inject("breakpoints");
const isMobile = computed(() => breakpoints.value.mobile);

const headerWrapperClass = computed(() =>
  isMobile.value ? "pt-3" : "pb-2 flex justify-between items-center"
);
</script>

<template>
  <mw-card
    v-if="isActive"
    class="px-0"
    :class="`cx-translation-list--${translationStatus}`"
  >
    <template #header>
      <div class="cx-translation-list__header" :class="headerWrapperClass">
        <h3
          class="px-4 mw-ui-card__title mb-0"
          :class="{ 'pb-4': isMobile }"
          v-text="$i18n(`cx-translation-label-${translationStatus}`)"
        />
        <sx-translation-list-language-selector
          v-if="activeTranslations.length"
          v-model:selected-source-language="selectedSourceLanguage"
          v-model:selected-target-language="selectedTargetLanguage"
          :source-languages="availableSourceLanguages"
          :target-languages="availableTargetLanguages"
          all-option-enabled
        />
      </div>
    </template>
    <cx-list-empty-placeholder
      v-if="loaded && !activeTranslations.length"
      :title="$i18n('cx-sx-translation-list-empty-title')"
      :description="$i18n('cx-sx-translation-list-empty-description')"
    />
    <mw-spinner v-if="!loaded" />
    <div v-if="isDraftTranslationList" class="cx-translation-list-wrapper">
      <cx-translation-work-draft
        v-for="translation in activeTranslations"
        :key="`${translationStatus}-${translation.key}`"
        :translation="translation"
        @delete-translation="askDeletionConfirmation(translation)"
      />
    </div>
    <div v-else class="cx-translation-list-wrapper">
      <cx-translation-work-published
        v-for="translation in activeTranslations"
        :key="`${translationStatus}-${translation.key}`"
        :translation="translation"
        @delete-translation="askDeletionConfirmation(translation)"
      />
    </div>
    <sx-confirm-translation-deletion-dialog
      v-model="deletionDialogOn"
      :translation="translationToDelete"
    />
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-translation-list__header {
  border-bottom: @border-style-base @border-width-base @border-color-subtle;
  border-radius: @border-radius-sharp;
}
</style>
