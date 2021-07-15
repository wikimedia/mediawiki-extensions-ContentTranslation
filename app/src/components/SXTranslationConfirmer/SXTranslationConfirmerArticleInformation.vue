<template>
  <mw-row
    class="sx-translation-confirmer__article-information ma-0 pa-4"
    align="stretch"
    justify="start"
  >
    <mw-col>
      <mw-row
        justify="between"
        class="sx-translation-confirmer__article-information__header ma-0 mb-2"
      >
        <mw-col
          class="pa-0 pe-4 flex sx-translation-confirmer__article-information__title"
          tag="a"
          :href="sourceArticlePath"
          target="_blank"
        >
          <h5 class=" ma-0  me-1" v-text="sourceTitle"></h5>
          <mw-icon
            :icon="mwIconLinkExternal"
            size="10"
            :icon-color="$mwui.colors.base30"
          />
        </mw-col>
        <!--        TODO: Support "bookmarking article" functionality -->
        <mw-col shrink align="start">
          <mw-button class="pa-0" type="icon" :icon="mwIconBookmarkOutline" />
        </mw-col>
      </mw-row>
      <p
        class="complementary sx-translation-confirmer__article-information__stats ma-0 flex"
      >
        <mw-icon :icon="mwIconLanguage" size="16" class="me-1" />
        <span class="pe-3" v-text="langLinksCount" />
        <span v-i18n:cx-sx-translation-confirmer-views-count="[weeklyViews]" />
      </p>
    </mw-col>
  </mw-row>
</template>

<script>
import { MwButton, MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconBookmarkOutline,
  mwIconLanguage,
  mwIconLinkExternal
} from "@/lib/mediawiki.ui/components/icons";
import { siteMapper } from "@/utils/mediawikiHelper";
import { computed } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";
export default {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwButton
  },
  setup(props, context) {
    const store = context.root.$store;

    const {
      currentSectionSuggestion: sectionSuggestion
    } = useApplicationState();

    const sourceArticle = computed(
      () => store.getters["application/getCurrentPage"]
    );
    const sourceTitle = computed(() => sectionSuggestion.value?.sourceTitle);
    const sourceArticlePath = computed(() =>
      siteMapper.getPageUrl(
        sectionSuggestion.value?.sourceLanguage || "",
        sourceTitle.value || ""
      )
    );

    const langLinksCount = computed(() => sourceArticle.value?.langLinksCount);

    const weeklyViews = computed(() =>
      Object.values(sourceArticle.value?.pageviews || {}).reduce(
        (sum, dayViews) => sum + dayViews,
        0
      )
    );

    return {
      langLinksCount,
      mwIconBookmarkOutline,
      mwIconLanguage,
      mwIconLinkExternal,
      sourceArticle,
      sourceArticlePath,
      sourceTitle,
      weeklyViews
    };
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-translation-confirmer__article-information {
  color: @color-base;
  &__title.col.col {
    max-width: fit-content;
    align-items: baseline;
    text-decoration: none;
    color: inherit;
  }
  &__stats {
    color: @wmui-color-base20;
  }
}
</style>
