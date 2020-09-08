<template>
  <section>
    <mw-row
      class="sx-article-selector__translation-status pa-4 ma-0"
      justify="between"
    >
      <!-- Font weight bold -->
      <mw-col
        v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
      />
      <mw-col shrink>
        <a v-i18n:cx-sx-view-translation-anchor :href="targetArticlePath" />
      </mw-col>
    </mw-row>
    <mw-row class="pa-4 pb-0 ma-0">
      <mw-col>
        <span
          v-i18n:cx-sx-existing-translation-additional-info="[
            targetLanguageAutonym
          ]"
        />
        &nbsp;
        <a v-i18n:cx-sx-existing-translation-learn-more href="#" />
      </mw-col>
    </mw-row>
  </section>
</template>

<script>
import { MwCol, MwRow } from "@/lib/mediawiki.ui";
import autonymMixin from "@/mixins/autonym";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
const sitemapper = new mw.cx.SiteMapper();

export default {
  name: "SxArticleSelectorExistingTranslationBanner",
  components: {
    MwRow,
    MwCol
  },
  mixins: [autonymMixin],
  props: {
    sectionSuggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  computed: {
    targetArticlePath() {
      return sitemapper.getPageUrl(
        this.sectionSuggestion.targetLanguage,
        this.sectionSuggestion.targetTitle
      );
    },
    targetLanguageAutonym() {
      return this.getAutonym(this.sectionSuggestion.targetLanguage);
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-article-selector__translation-status {
  background-color: @background-color-warning--framed;
}
</style>
