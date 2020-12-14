<template>
  <section class="sx-article-selector__body">
    <existing-article-banner />
    <mw-row class="sx-article-selector__action pt-4 pb-3" justify="center">
      <mw-button
        :large="true"
        :progressive="true"
        :disabled="missingSectionsCount === 0"
        :label="actionButtonLabel"
        @click="onSectionSelectorClick()"
      />
    </mw-row>
    <mw-row
      v-if="missingSectionsCount"
      v-i18n:cx-sx-missing-section-stats="[
        missingSectionsCount,
        targetLanguageAutonym
      ]"
      justify="center"
      class="sx-article-selector__action pb-2 mb-4"
    />
  </section>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import ExistingArticleBanner from "./ExistingArticleBanner";
import { mapState } from "vuex";
import autonymMixin from "@/mixins/autonym";

export default {
  name: "ExistingArticleBody",
  components: {
    ExistingArticleBanner,
    MwButton,
    MwRow
  },
  mixins: [autonymMixin],
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
    targetLanguageAutonym: vm => vm.getAutonym(vm.targetLanguage)
  },
  methods: {
    onSectionSelectorClick() {
      this.$router.push({ name: "sx-section-selector" });
      this.$store.dispatch("application/setTranslationURLParams");
    }
  }
};
</script>
