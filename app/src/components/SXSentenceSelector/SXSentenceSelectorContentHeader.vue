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
      class="pa-0 ma-0"
      :class="titleClasses"
      @click="selectSectionTitle"
      v-html="sourceSectionTitle"
    />
  </mw-col>
</template>

<script>
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { MwIcon, MwCol } from "@/lib/mediawiki.ui";
import { mapActions, mapGetters, mapState } from "vuex";
import { siteMapper } from "@/utils/mediawikiHelper";

export default {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon, MwCol },
  data: () => ({
    mwIconLinkExternal,
    titleClass: "sx-sentence-selector__section-title"
  }),
  computed: {
    ...mapGetters({
      currentPage: "application/getCurrentPage"
    }),
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection,
      isSectionTitleSelected: state =>
        state.application.isSectionTitleSelectedForTranslation
    }),
    sourceSectionTitle: vm =>
      vm.currentPageSection?.title || vm.currentPage.title,
    sourceArticlePath: vm =>
      siteMapper.getPageUrl(
        vm.suggestion.sourceLanguage,
        vm.suggestion.sourceTitle
      ),
    isSectionTitleTranslated: vm => !!vm.currentPageSection?.translatedTitle,
    highLightClassPostfix: vm =>
      vm.isSectionTitleTranslated ? "translated" : "selected",
    titleClasses: vm => {
      const classes = [vm.titleClass];

      if (vm.isSectionTitleSelected) {
        classes.push(`${vm.titleClass}--${vm.highLightClassPostfix}`);
      }

      return classes;
    }
  },
  methods: {
    ...mapActions({
      selectSectionTitle: "application/selectSectionTitleForTranslation"
    })
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
