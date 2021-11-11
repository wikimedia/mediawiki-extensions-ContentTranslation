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
    <!--eslint-disable vue/no-v-html -->
    <h2
      class="pa-0 ma-0"
      :class="titleClasses"
      @click="selectSectionTitle"
      v-html="sourceSectionTitle"
    />
    <!--eslint-enable vue/no-v-html -->
  </mw-col>
</template>

<script>
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { MwIcon, MwCol } from "@/lib/mediawiki.ui";
import { siteMapper } from "@/utils/mediawikiHelper";
import { computed } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon, MwCol },
  setup(props, context) {
    const store = context.root.$store;

    const titleClass = "sx-sentence-selector__section-title";
    const currentPage = computed(
      () => store.getters["application/getCurrentPage"]
    );

    const {
      currentSectionSuggestion: suggestion,
      currentSourceSection: currentPageSection,
      isSectionTitleSelected
    } = useApplicationState();

    const sourceSectionTitle = computed(
      () => currentPageSection.value?.title || currentPage.value.title
    );

    const sourceArticlePath = computed(() =>
      siteMapper.getPageUrl(
        suggestion.value.sourceLanguage,
        suggestion.value.sourceTitle
      )
    );

    const isSectionTitleTranslated = computed(
      () => !!currentPageSection.value?.translatedTitle
    );

    const highLightClassPostfix = computed(() =>
      isSectionTitleTranslated.value ? "translated" : "selected"
    );

    const titleClasses = computed(() => {
      const classes = [titleClass];

      if (isSectionTitleSelected.value) {
        classes.push(`${titleClass}--${highLightClassPostfix.value}`);
      }

      return classes;
    });

    const selectSectionTitle = () =>
      store.dispatch("application/selectSectionTitleForTranslation");

    return {
      mwIconLinkExternal,
      selectSectionTitle,
      sourceArticlePath,
      sourceSectionTitle,
      suggestion,
      titleClasses
    };
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
