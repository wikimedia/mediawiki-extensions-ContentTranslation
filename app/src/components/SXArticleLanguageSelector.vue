<template>
  <div class="row sx-article-language-selector ma-0 justify-center">
    <div class="col-5 justify-end">
      <mw-button
        :indicator="mwIconExpand"
        :outlined="false"
        class="pa-3 sx-article-language-selector__button"
        type="text"
        @click.stop="openSourceLanguageDialog"
      >
        <span
          class="mw-ui-autonym"
          :dir="getDirection(sourceLanguage)"
          v-text="getAutonym(sourceLanguage)"
        ></span>
      </mw-button>
      <mw-dialog
        v-show="sourceLanguageSelectOn"
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        animation="slide-up"
        :fullscreen="true"
        @close="onSourceLanguageDialogClose"
      >
        <div class="row">
          <mw-language-selector
            v-if="sourceLanguageSelectOn"
            class="sx-article-language-selector__widget col-12"
            :languages="availableSourceLanguages"
            @select="onSourceLanguageSelected"
          ></mw-language-selector>
        </div>
      </mw-dialog>
    </div>
    <div class="sx-article-language-selector__arrow col-2 justify-center">
      <mw-icon :icon="mwIconArrowNext" />
    </div>
    <div class="col-5 justify-start">
      <mw-button
        :indicator="mwIconExpand"
        :outlined="false"
        class="pa-3 sx-article-language-selector__button"
        type="text"
        @click.stop="targetLanguageSelectOn = true"
      >
        <span
          class="mw-ui-autonym"
          :dir="getDirection(targetLanguage)"
          v-text="getAutonym(targetLanguage)"
        ></span>
      </mw-button>
      <mw-dialog
        v-show="targetLanguageSelectOn"
        :title="$i18n('cx-sx-language-selector-dialog-title')"
        animation="slide-up"
        :fullscreen="true"
        @close="targetLanguageSelectOn = false"
      >
        <div class="row">
          <mw-language-selector
            v-if="targetLanguageSelectOn"
            class="sx-article-language-selector__widget col-12"
            :languages="targetLanguages"
            @select="onTargetLanguageSelected"
          ></mw-language-selector>
        </div>
      </mw-dialog>
    </div>
  </div>
</template>

<script>
import {
  MwLanguageSelector,
  MwDialog,
  MwIcon,
  MwButton
} from "../lib/mediawiki.ui";
import {
  mwIconArrowNext,
  mwIconExpand
} from "../lib/mediawiki.ui/components/icons";
import { mapState, mapGetters } from "vuex";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";
import autonymMixin from "../mixins/autonym";

export default {
  name: "SxArticleLanguageSelector",
  components: {
    MwLanguageSelector,
    MwDialog,
    MwIcon,
    MwButton
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconArrowNext,
    mwIconExpand,
    sourceLanguageSelectOn: false,
    targetLanguageSelectOn: false
  }),
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.suggestions.currentSectionSuggestion,
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || []
    }),
    ...mapGetters({
      titleExistsInLanguageForGroup: "mediawiki/titleExistsInLanguageForGroup",
      getTitleByLanguageForGroup: "mediawiki/getTitleByLanguageForGroup"
    }),
    availableSourceLanguages() {
      // titles are provided in the following format: { lang: "en", title: "Animal" }
      // so title.lang contains language code
      return this.currentLanguageTitleGroup.titles
        .filter(title => title.lang !== this.sourceLanguage)
        .map(title => ({
          name: this.getAutonym(title.lang),
          code: title.lang
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
            { name: this.getAutonym(languageCode), code: languageCode }
          ],
          []
        );
    },
    currentLanguageTitleGroup() {
      return this.$store.getters["mediawiki/getLanguageTitleGroup"](
        this.sourceLanguage,
        this.sourceTitle
      );
    },
    currentWikidataId() {
      return this.currentLanguageTitleGroup.wikidataId;
    }
  },
  methods: {
    openSourceLanguageDialog() {
      this.sourceLanguageSelectOn = true;
    },
    onSourceLanguageSelected(sourceLanguage) {
      this.sourceLanguageSelectOn = false;
      const targetLanguage =
        sourceLanguage === this.targetLanguage ? null : this.targetLanguage;
      const sourceTitle = this.getTitleByLanguageForGroup(
        this.currentWikidataId,
        sourceLanguage
      );

      this.updateSectionSuggestion(sourceLanguage, targetLanguage, sourceTitle);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.targetLanguageSelectOn = false;
      const { sourceLanguage, sourceTitle } = this.currentSectionSuggestion;
      this.updateSectionSuggestion(sourceLanguage, targetLanguage, sourceTitle);
    },
    updateSectionSuggestion(sourceLanguage, targetLanguage, sourceTitle) {
      const suggestion = new SectionSuggestion({
        sourceLanguage,
        targetLanguage,
        sourceTitle,
        missing: {}
      });

      if (
        this.titleExistsInLanguageForGroup(
          this.currentWikidataId,
          targetLanguage
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
