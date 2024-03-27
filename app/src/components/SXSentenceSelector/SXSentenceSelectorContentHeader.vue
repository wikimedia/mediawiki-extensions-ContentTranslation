<template>
  <mw-col shrink class="sx-sentence-selector__section-header pa-5">
    <a
      :href="sourceArticlePath"
      target="_blank"
      class="sx-sentence-selector__section-article-title mb-1"
    >
      <strong v-text="sourceArticleTitle" />
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
import { computed } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import useTranslationUnitSelect from "./useTranslationUnitSelect";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentPages from "@/composables/useCurrentPages";

export default {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon, MwCol },
  setup() {
    const store = useStore();
    const { sourceSection, isSectionTitleSelected } = useCurrentPageSection();
    const titleClass = "sx-sentence-selector__section-title";
    const { currentSourcePage: currentPage } = useCurrentPages();
    const { sourceLanguage } = useApplicationState(store);

    const sourceArticleTitle = computed(() => currentPage.value?.title);
    const sourceSectionTitle = computed(
      () => sourceSection.value?.title || sourceArticleTitle.value
    );

    const sourceArticlePath = computed(() =>
      siteMapper.getPageUrl(sourceLanguage.value, sourceArticleTitle.value)
    );

    const isSectionTitleTranslated = computed(
      () => !!sourceSection.value?.translatedTitle
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

    const { selectTranslationUnitById } = useTranslationUnitSelect();
    const selectSectionTitle = () => selectTranslationUnitById(0);

    return {
      mwIconLinkExternal,
      selectSectionTitle,
      sourceArticlePath,
      sourceArticleTitle,
      sourceSectionTitle,
      titleClasses,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@padding: 4px;

.sx-sentence-selector__section-header {
  .sx-sentence-selector__section-article-title {
    // TODO: Use UI typography here instead of hardcoding font-size values in px.
    // "Complementary" class cannot be applied here, as it only applies to paragraphs (<p>)
    font-size: 14px;
    color: @color-subtle;
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
      // TODO: `@background-color-warning-subtle` is not the right token here.
      background-color: #fef6e7;
      box-shadow: @padding 0 0 #fef6e7, -@padding 0 0 #fef6e7;
    }
    &--translated {
      box-decoration-break: clone;
      color: @color-base;
      background-color: @background-color-progressive-subtle;
      box-shadow: @padding 0 0 #eaf3ff, -@padding 0 0 #eaf3ff;
    }
  }
}
</style>
