<template>
  <mw-card v-show="active" :class="`cx-translation-list--${translationStatus}`">
    <template slot="header">
      <h3
        class="mw-ui-card__title pa-4 pt-5 mb-0"
        v-text="$i18n(`cx-translation-label-${translationStatus}`)"
      />
    </template>
    <sx-translation-list-language-selector
      :selected-source-language.sync="selectedSourceLanguage"
      :selected-target-language.sync="selectedTargetLanguage"
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
import CxTranslationWork from "./CXTranslationWork";
import { MwSpinner, MwCard } from "@/lib/mediawiki.ui";
import { getAutonym } from "@wikimedia/language-data";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector";
import { mapState } from "vuex";

export default {
  name: "CxTranslationList",
  components: {
    CxTranslationWork,
    MwCard,
    MwSpinner,
    SxTranslationListLanguageSelector
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    translationStatus: {
      type: String,
      required: true,
      validator: value => {
        // The value must match one of these strings
        return ["published", "draft"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      labelForAllTranslationsOption: this.$i18n(
        "cx-translation-list-all-languages-option-label"
      ),
      selectedSourceLanguage: this.$i18n(
        "cx-translation-list-all-languages-option-label"
      ),
      selectedTargetLanguage: this.$i18n(
        "cx-translation-list-all-languages-option-label"
      )
    };
  },
  computed: {
    ...mapState({
      loaded: state => state.translator.translationsLoaded,
      enabledTargetLanguages: state => state.mediawiki.enabledTargetLanguages
    }),
    availableSourceLanguages() {
      return this.translations
        .map(translation => translation.sourceLanguage)
        .filter((language, index, self) => self.indexOf(language) === index)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            { name: getAutonym(languageCode), code: languageCode }
          ],
          [
            {
              name: this.labelForAllTranslationsOption,
              code: this.labelForAllTranslationsOption
            }
          ]
        );
    },
    // If SectionTranslationTargetLanguages configuration parameter is set,
    // target language selection is limited to these languages
    availableTargetLanguages() {
      let translationLanguages = this.translations.map(
        translation => translation.targetLanguage
      );

      const defaultTargetLanguage = this.enabledTargetLanguages?.[0];

      if (!!defaultTargetLanguage) {
        translationLanguages = translationLanguages.filter(
          language => language === defaultTargetLanguage
        );
      }

      return [...new Set(translationLanguages)].reduce(
        (languages, languageCode) => [
          ...languages,
          { name: getAutonym(languageCode), code: languageCode }
        ],
        [
          {
            name: this.labelForAllTranslationsOption,
            code: this.labelForAllTranslationsOption
          }
        ]
      );
    },
    translations() {
      if (this.translationStatus === "published") {
        return this.$store.getters["translator/getPublishedTranslations"]();
      } else {
        return this.$store.getters["translator/getDraftTranslations"]();
      }
    },
    activeTranslations() {
      return this.translations.filter(
        translation =>
          (this.isActiveForAllSourceLanguages ||
            translation.sourceLanguage === this.selectedSourceLanguage) &&
          (this.isActiveForAllTargetLanguages ||
            translation.targetLanguage === this.selectedTargetLanguage)
      );
    },
    isActiveForAllSourceLanguages() {
      return this.selectedSourceLanguage === this.labelForAllTranslationsOption;
    },
    isActiveForAllTargetLanguages() {
      return this.selectedTargetLanguage === this.labelForAllTranslationsOption;
    }
  }
};
</script>
