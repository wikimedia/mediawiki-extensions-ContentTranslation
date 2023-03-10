<template>
  <mw-card v-show="active" :class="`cx-translation-list--${translationStatus}`">
    <template #header>
      <h3
        class="mw-ui-card__title pa-4 pt-5 mb-0"
        v-text="$i18n(`cx-translation-label-${translationStatus}`)"
      />
    </template>
    <sx-translation-list-language-selector
      v-model:selected-source-language="selectedSourceLanguage"
      v-model:selected-target-language="selectedTargetLanguage"
      :source-languages="availableSourceLanguages"
      :target-languages="availableTargetLanguages"
      all-option-enabled
    />
    <mw-spinner v-if="!loaded" />
    <cx-translation-work
      v-for="translation in activeTranslations"
      :key="`${translationStatus}-translation-${translation.id}`"
      :translation="translation"
    />
  </mw-card>
</template>

<script>
import CxTranslationWork from "./CXTranslationWork.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import { ref, computed } from "vue";
import useMediawikiState from "@/composables/useMediawikiState";
import { useStore } from "vuex";

export default {
  name: "CxTranslationList",
  components: {
    CxTranslationWork,
    MwCard,
    MwSpinner,
    SxTranslationListLanguageSelector,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    translationStatus: {
      type: String,
      required: true,
      validator: (value) => {
        // The value must match one of these strings
        return ["published", "draft"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    const selectedSourceLanguage = ref("all");
    const selectedTargetLanguage = ref("all");

    const store = useStore();

    const loaded = computed(() => store.state.translator.translationsLoaded);

    const { enabledTargetLanguages } = useMediawikiState();

    const translations = computed(() => {
      if (props.translationStatus === "published") {
        return store.getters["translator/getPublishedTranslations"];
      } else {
        return store.getters["translator/getDraftTranslations"];
      }
    });

    const isActiveForAllSourceLanguages = computed(
      () => selectedSourceLanguage.value === "all"
    );
    const isActiveForAllTargetLanguages = computed(
      () => selectedTargetLanguage.value === "all"
    );

    const activeTranslations = computed(() =>
      translations.value.filter(
        (translation) =>
          (isActiveForAllSourceLanguages.value ||
            translation.sourceLanguage === selectedSourceLanguage.value) &&
          (isActiveForAllTargetLanguages.value ||
            translation.targetLanguage === selectedTargetLanguage.value)
      )
    );

    const availableTargetLanguages = computed(() => {
      let translationTargetLanguages = translations.value.map(
        (translation) => translation.targetLanguage
      );

      // If SectionTranslationTargetLanguages configuration parameter is set,
      // target language selection is limited to these languages
      if (!!enabledTargetLanguages.value) {
        translationTargetLanguages = translationTargetLanguages.filter(
          (language) => enabledTargetLanguages.value.includes(language)
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

    return {
      activeTranslations,
      availableSourceLanguages,
      availableTargetLanguages,
      loaded,
      selectedSourceLanguage,
      selectedTargetLanguage,
    };
  },
};
</script>
