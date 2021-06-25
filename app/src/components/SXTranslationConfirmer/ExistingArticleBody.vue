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
        @click="onSectionSelectorClick"
      />
    </mw-row>
  </section>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import ExistingArticleBanner from "./ExistingArticleBanner";
import { mapState } from "vuex";
import { getAutonym } from "@wikimedia/language-data";
import { computed } from "@vue/composition-api";

export default {
  name: "ExistingArticleBody",
  components: {
    ExistingArticleBanner,
    MwButton,
    MwRow
  },
  setup(props, context) {
    const store = context.root.$store;

    const missingSectionsCount = computed(() => {
      const { currentSectionSuggestion } = store.state.application;

      return currentSectionSuggestion?.missingSectionsCount;
    });

    const actionButtonLabel = computed(() => {
      const { currentSectionSuggestion } = store.state.application;
      const translationExists = currentSectionSuggestion?.presentSectionsCount;

      return translationExists
        ? context.root.$i18n("cx-sx-select-section")
        : context.root.$i18n("cx-sx-start-translation-button-label");
    });

    const onSectionSelectorClick = () => {
      context.root.$router.push({ name: "sx-section-selector" });
      store.dispatch("application/setTranslationURLParams");
    };

    return {
      actionButtonLabel,
      missingSectionsCount,
      onSectionSelectorClick
    };
  }
};
</script>
