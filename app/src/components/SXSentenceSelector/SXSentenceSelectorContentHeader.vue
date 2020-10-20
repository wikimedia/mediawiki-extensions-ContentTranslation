<template>
  <mw-col shrink class="sx-sentence-selector__section-header pa-5">
    <a
      :href="sourceArticlePath"
      target="_blank"
      class="sx-sentence-selector__section-article-title mb-1"
    >
      <strong v-text="suggestion.sourceTitle" />
      <mw-icon :icon="mwIconLinkExternal" class="ms-1" size="12" />
    </a>
    <h2
      class="sx-sentence-selector__section-title pa-0 ma-0"
      v-text="sourceSectionTitle"
    />
  </mw-col>
</template>

<script>
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { MwIcon, MwCol } from "@/lib/mediawiki.ui";
import { mapState } from "vuex";
const sitemapper = new mw.cx.SiteMapper();

export default {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon, MwCol },
  data: () => ({
    mwIconLinkExternal
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection
    }),
    sourceSectionTitle() {
      return this.currentPageSection?.title;
    },
    sourceArticlePath() {
      return sitemapper.getPageUrl(
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-sentence-selector__section-header {
  .sx-sentence-selector__section-article-title {
    // TODO: Use UI typography here instead of hardcoding font-size values in px.
    // "Complementary" class cannot be applied here, as it only applies to paragraphs (<p>)
    font-size: 14px;
    // TODO: Fix this to be @base20 color - currently base30
    color: @color-base--subtle;
    // Set display to inline-block so that mb-1 class will be respected
    display: inline-block;
  }
  .sx-sentence-selector__section-title {
    border-bottom: none;
    font-family: @font-family-heading-main;
  }
}
</style>