<script setup>
import CxTranslationWorkDraft from "./CXTranslationWorkDraft.vue";
import CxTranslationWorkPublished from "./CXTranslationWorkPublished.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import SxConfirmTranslationDeletionDialog from "./SXConfirmTranslationDeletionDialog.vue";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import { ref, computed } from "vue";
import useMediaWikiState from "@/composables/useMediaWikiState";
import { useStore } from "vuex";
import { CdxIcon } from "@wikimedia/codex";
import { cdxIconLanguage } from "@wikimedia/codex-icons";

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

const loaded = computed(
  () => store.state.translator.translationsLoaded[props.translationStatus]
);

const { enabledTargetLanguages } = useMediaWikiState();

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
  let translationTargetLanguages = translations.value.map(
    (translation) => translation.targetLanguage
  );

  // If SectionTranslationTargetLanguages configuration parameter is set,
  // target language selection is limited to these languages
  if (!!enabledTargetLanguages.value) {
    translationTargetLanguages = translationTargetLanguages.filter((language) =>
      enabledTargetLanguages.value.includes(language)
    );
  }

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
</script>

<template>
  <mw-card v-if="isActive" :class="`cx-translation-list--${translationStatus}`">
    <template #header>
      <h3
        class="mw-ui-card__title pa-4 pt-5 mb-0"
        v-text="$i18n(`cx-translation-label-${translationStatus}`)"
      />
    </template>
    <sx-translation-list-language-selector
      v-if="activeTranslations.length"
      v-model:selected-source-language="selectedSourceLanguage"
      v-model:selected-target-language="selectedTargetLanguage"
      :source-languages="availableSourceLanguages"
      :target-languages="availableTargetLanguages"
      all-option-enabled
    />
    <div
      v-if="loaded && !activeTranslations.length"
      class="cx-translation-list-empty-placeholder pa-4"
    >
      <div class="cx-translation-list-empty-placeholder__icon-container">
        <div class="cx-translation-list-empty-placeholder__icon">
          <cdx-icon :icon="cdxIconLanguage" />
        </div>
      </div>
      <p
        v-i18n:cx-sx-translation-list-empty-title
        class="cx-translation-list-empty-placeholder__title mt-5"
      ></p>
      <p
        v-i18n:cx-sx-translation-list-empty-description
        class="cx-translation-list-empty-placeholder__description mt-2"
      ></p>
    </div>
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

.cx-translation-list-empty-placeholder {
  text-align: center;
  color: @color-subtle;

  &__icon-container {
    display: flex;
    justify-content: center;
  }
  &__icon {
    padding: @spacing-100;
    background-color: @background-color-disabled;
    border-radius: @border-radius-circle;
    line-height: 1;
    .cdx-icon {
      height: @size-300;
      width: @size-300;
      color: @color-inverted;
    }
  }
  &__title {
    font-weight: @font-weight-bold;
    font-size: @size-125;
    color: @color-subtle;
  }
}
</style>
