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
    />
    <mw-spinner v-if="!loaded" />
    <cx-translation-work
      v-for="(translation, index) in activeTranslations"
      :key="`${translationStatus}-${index}`"
      :translation="translation"
    />
  </mw-card>
</template>

<script>
import CxTranslationWork from "./CXTranslationWork.vue";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import { getAutonym } from "@wikimedia/language-data";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import { ref, computed } from "vue";
import useMediawikiState from "@/composables/useMediawikiState";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

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
    const bananaI18n = useI18n();

    const labelForAllTranslations = bananaI18n.i18n(
      "cx-translation-list-all-languages-option-label"
    );
    const selectedSourceLanguage = ref(labelForAllTranslations);
    const selectedTargetLanguage = ref(labelForAllTranslations);

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
      () => selectedSourceLanguage.value === labelForAllTranslations
    );
    const isActiveForAllTargetLanguages = computed(
      () => selectedTargetLanguage.value === labelForAllTranslations
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

    // If SectionTranslationTargetLanguages configuration parameter is set,
    // target language selection is limited to these languages
    const availableTargetLanguages = computed(() => {
      let translationLanguages = translations.value.map(
        (translation) => translation.targetLanguage
      );

      if (!!enabledTargetLanguages.value) {
        translationLanguages = translationLanguages.filter((language) =>
          enabledTargetLanguages.value.includes(language)
        );
      }

      return [...new Set(translationLanguages)].reduce(
        (languages, languageCode) => [
          ...languages,
          { name: getAutonym(languageCode), code: languageCode },
        ],
        [{ name: labelForAllTranslations, code: labelForAllTranslations }]
      );
    });

    const availableSourceLanguages = computed(() =>
      translations.value
        .map((translation) => translation.sourceLanguage)
        .filter((language, index, self) => self.indexOf(language) === index)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            { name: getAutonym(languageCode), code: languageCode },
          ],
          [{ name: labelForAllTranslations, code: labelForAllTranslations }]
        )
    );

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
