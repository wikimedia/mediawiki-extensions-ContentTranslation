<template>
  <div class="row sx-article-language-selector ma-0 justify-center">
    <div class="col-5 justify-end">
      <mw-button
        :indicator="mwIconExpand"
        :large="true"
        :outlined="false"
        @click="openSourceLanguageDialog"
        class="pa-3 sx-article-language-selector__button"
        type="text"
      >
        <mw-autonym :lang="sourceLanguage" />
      </mw-button>
      <mw-dialog
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        v-show="sourceLanguageSelectOn"
        animation="slide-up"
        :fullscreen="true"
        @close="onSourceLanguageDialogClose"
      >
        <div class="row">
          <div class="col-12">
            <mw-language-selector
              v-if="sourceLanguageSelectOn"
              class="sx-article-language-selector__widget"
              :languages="availableSourceLanguages"
              @select="onSourceLanguageSelected"
            ></mw-language-selector>
          </div>
        </div>
      </mw-dialog>
    </div>
    <div class="sx-article-language-selector__arrow col-2 justify-center">
      <mw-icon :icon="mwIconArrowNext" />
    </div>
    <div class="col-5 justify-start">
      <mw-button
        :indicator="mwIconExpand"
        :large="true"
        :outlined="false"
        @click="targetLanguageSelectOn = true"
        class="pa-3 sx-article-language-selector__button"
        type="text"
      >
        <mw-autonym :lang="targetLanguage" />
      </mw-button>
      <mw-dialog
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        v-show="targetLanguageSelectOn"
        animation="slide-up"
        :fullscreen="true"
        @close="targetLanguageSelectOn = false"
      >
        <mw-language-selector
          v-if="targetLanguageSelectOn"
          class="sx-article-language-selector__widget"
          :languages="targetLanguages"
          @select="onTargetLanguageSelected"
        ></mw-language-selector>
      </mw-dialog>
    </div>
  </div>
</template>

<script>
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import MwAutonym from "../lib/mediawiki.ui/components/MWAutonym";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import {
  mwIconArrowNext,
  mwIconExpand
} from "../lib/mediawiki.ui/components/icons";
import MwLanguageSelector from "../lib/mediawiki.ui/components/MWLanguageSelector";
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import { mapState } from "vuex";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";

export default {
  name: "sx-article-language-selector",
  components: {
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwAutonym,
    MwButton
  },
  data: () => ({
    mwIconArrowNext,
    mwIconExpand,
    sourceLanguageSelectOn: false,
    targetLanguageSelectOn: false
  }),
  computed: {
    ...mapState({
      languageInfo: state => state.mediawiki.languageInfo,
      currentSectionSuggestion: state =>
        state.suggestions.currentSectionSuggestion,
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || []
    }),
    availableSourceLanguages() {
      return this.currentSectionSuggestion?.availableSourceLanguages
        .filter(languageCode => languageCode !== this.sourceLanguage)
        .map(languageCode => ({
          name: this.autonym(languageCode),
          code: languageCode
        }));
    },
    sourceLanguage() {
      return this.currentSectionSuggestion?.sourceLanguage;
    },
    targetLanguage() {
      return this.currentSectionSuggestion?.targetLanguage;
    },
    sourceTitle() {
      return this.currentSectionSuggestion?.sourceTitle;
    },
    targetLanguages() {
      return this.supportedLanguageCodes
        .filter(languageCode => languageCode !== this.sourceLanguage)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            { name: this.autonym(languageCode), code: languageCode }
          ],
          []
        );
    }
  },
  created() {
    this.$store.dispatch(
      "suggestions/getAvailableSourceLanguagesForSectionSuggestion"
    );
  },
  methods: {
    openSourceLanguageDialog() {
      this.sourceLanguageSelectOn = true;
    },
    autonym: function(lang) {
      return this.languageInfo[lang]?.autonym || lang;
    },
    onSourceLanguageSelected(newLanguage) {
      this.$store.commit(
        "suggestions/setCurrentSectionSuggestionSourceLanguage",
        newLanguage
      );
      if (newLanguage === this.targetLanguage) {
        this.$store.commit(
          "suggestions/setCurrentSectionSuggestionTargetLanguage",
          null
        );
      }
      this.sourceLanguageSelectOn = false;
    },
    onTargetLanguageSelected(newLanguage) {
      this.targetLanguageSelectOn = false;

      const suggestion = new SectionSuggestion({
        sourceLanguage: this.currentSectionSuggestion.sourceLanguage,
        targetLanguage: newLanguage,
        sourceTitle: this.currentSectionSuggestion.sourceTitle,
        targetTitle: this.currentSectionSuggestion.targetTitle,
        present: {},
        missing: {},
        availableSourceLanguages: this.currentSectionSuggestion
          .availableSourceLanguages
      });

      if (
        this.currentSectionSuggestion.availableSourceLanguages.includes(
          newLanguage
        )
      ) {
        this.$store.dispatch("suggestions/loadSectionSuggestion", suggestion);
        return;
      }

      this.$store.commit("suggestions/setCurrentSectionSuggestion", suggestion);
    },
    onSourceLanguageDialogClose() {
      this.sourceLanguageSelectOn = false;
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-article-language-selector {
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
