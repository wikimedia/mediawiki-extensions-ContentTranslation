<template>
  <mw-row
    v-if="sourceArticle"
    class="sx-translation-confirmer__article-information ma-0 pa-4"
    align="stretch"
    justify="start"
  >
    <mw-col>
      <mw-row
        justify="between"
        align="start"
        class="sx-translation-confirmer__article-information__title ma-0 mb-2"
      >
        <mw-col class="pa-0 pe-4 flex">
          <h5 class=" ma-0  me-1" v-text="sourceTitle"></h5>
          <a :href="sourceArticlePath" target="_blank">
            <mw-icon
              :icon="mwIconLinkExternal"
              size="10"
              :icon-color="$mwui.colors.base30"
            />
          </a>
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
        <span class="pe-3">
          {{ langLinksCount }}
        </span>
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
import { mapGetters, mapState } from "vuex";
import { siteMapper } from "@/utils/mediawikiHelper";
export default {
  name: "SxTranslationConfirmerArticleInformation",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwButton
  },
  data: () => ({
    mwIconBookmarkOutline,
    mwIconLanguage,
    mwIconLinkExternal
  }),
  computed: {
    ...mapState({
      sectionSuggestion: state => state.application.currentSectionSuggestion
    }),
    ...mapGetters({
      sourceArticle: "application/getCurrentPage"
    }),
    sourceArticlePath: vm =>
      siteMapper.getPageUrl(
        vm.sectionSuggestion.sourceLanguage || "",
        vm.sourceTitle || ""
      ),
    sourceTitle: vm => vm.sectionSuggestion?.sourceTitle,
    sourceArticleThumbnail: vm => vm.sourceArticle?.thumbnail,
    langLinksCount: vm => vm.sourceArticle?.langLinksCount,
    weeklyViews: vm =>
      Object.values(vm.sourceArticle?.pageviews || {}).reduce(
        (sum, dayViews) => sum + dayViews,
        0
      )
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-translation-confirmer__article-information {
  color: @color-base;
  &__stats {
    color: @wmui-color-base20;
  }
}
</style>
