<template>
  <section class="sx-translation-confirmer__body pa-4">
    <existing-article-banner />
    <mw-row
      class="sx-translation-confirmer__action pt-5 pb-2 ma-0"
      justify="center"
    >
      <mw-button
        :large="true"
        :progressive="true"
        :disabled="missingSectionsCount === 0"
        :label="actionButtonLabel"
        @click="onSectionSelectorClick()"
      />
    </mw-row>
  </section>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import ExistingArticleBanner from "./ExistingArticleBanner";
import { mapState } from "vuex";
import { getAutonym } from "@wikimedia/language-data";

export default {
  name: "ExistingArticleBody",
  components: {
    ExistingArticleBanner,
    MwButton,
    MwRow
  },
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.application.currentSectionSuggestion
    }),
    translationExists: vm => vm.currentSectionSuggestion?.presentSectionsCount,
    actionButtonLabel: vm =>
      vm.translationExists
        ? vm.$i18n("cx-sx-select-section")
        : vm.$i18n("cx-sx-start-translation-button-label"),
    missingSectionsCount: vm =>
      vm.currentSectionSuggestion?.missingSectionsCount,
    targetLanguage: vm => vm.currentSectionSuggestion?.targetLanguage,
    targetLanguageAutonym: vm => getAutonym(vm.targetLanguage)
  },
  methods: {
    onSectionSelectorClick() {
      this.$router.push({ name: "sx-section-selector" });
      this.$store.dispatch("application/setTranslationURLParams");
    }
  }
};
</script>
