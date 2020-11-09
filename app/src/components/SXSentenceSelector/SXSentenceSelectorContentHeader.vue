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
      :class="titleClass"
      @click="selectSectionTitle"
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
      currentPageSection: state => state.application.currentSourceSection,
      isSectionTitleSelected: state =>
        state.application.isSectionTitleSelectedForTranslation
    }),
    sourceSectionTitle: vm => vm.currentPageSection?.title,
    sourceArticlePath: vm =>
      sitemapper.getPageUrl(
        vm.suggestion.sourceLanguage,
        vm.suggestion.sourceTitle
      ),
    isSectionTitleTranslated: vm => !!vm.currentPageSection?.translatedTitle,
    titleClass: vm => ({
      "sx-sentence-selector__section-title--selected":
        vm.isSectionTitleSelected,
      "sx-sentence-selector__section-title--translated":
        vm.isSectionTitleTranslated
    })
  },
  methods: {
    selectSectionTitle() {
      this.$store.commit(
        "application/setIsSectionTitleSelectedForTranslation",
        true
      );
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@padding: 4px;

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
    max-width: max-content;
    &--selected {
      box-decoration-break: clone;
      color: @color-base;
      background-color: @wmui-color-yellow90;
      box-shadow: @padding 0 0 @wmui-color-yellow90,
        -@padding 0 0 @wmui-color-yellow90;
    }
    &--translated {
      box-decoration-break: clone;
      color: @color-base;
      background-color: @background-color-primary;
      box-shadow: @padding 0 0 @background-color-primary,
        -@padding 0 0 @background-color-primary;
    }
  }
}
</style>
