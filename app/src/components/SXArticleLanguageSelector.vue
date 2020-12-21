<template>
  <div
    class="row sx-article-language-selector ma-0 justify-center items-center"
  >
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
        />
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
          />
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
        />
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
          />
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
} from "@/lib/mediawiki.ui/components/icons";
import { mapState, mapGetters } from "vuex";
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
        state.application.currentSectionSuggestion,
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || [],
      sourceLanguage: state => state.application.sourceLanguage,
      targetLanguage: state => state.application.targetLanguage
    }),
    ...mapGetters({
      titleExistsInLanguageForGroup: "mediawiki/titleExistsInLanguageForGroup",
      getTitleByLanguageForGroup: "mediawiki/getTitleByLanguageForGroup",
      currentLanguageTitleGroup: "application/getCurrentLanguageTitleGroup"
    }),
    // titles are provided in the following format: { lang: "en", title: "Animal" }
    // so title.lang contains language code
    availableSourceLanguages: vm =>
      vm.currentLanguageTitleGroup?.titles
        .filter(title => title.lang !== vm.sourceLanguage)
        .map(title => vm.createLanguageOption(title.lang)),
    sourceTitle: vm => vm.currentSectionSuggestion?.sourceTitle,
    targetLanguages: vm =>
      vm.supportedLanguageCodes
        .filter(languageCode => languageCode !== vm.sourceLanguage)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            vm.createLanguageOption(languageCode)
          ],
          []
        )
  },
  methods: {
    createLanguageOption(code) {
      return { name: this.getAutonym(code), code };
    },
    openSourceLanguageDialog() {
      this.sourceLanguageSelectOn = true;
    },
    onSourceLanguageSelected(sourceLanguage) {
      this.sourceLanguageSelectOn = false;
      this.$store.dispatch("application/updateSourceLanguage", sourceLanguage);
    },
    onTargetLanguageSelected(targetLanguage) {
      this.targetLanguageSelectOn = false;
      this.$store.dispatch("application/updateTargetLanguage", targetLanguage);
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
