<template>
  <mw-row
    v-if="sourceArticle"
    class="sx-article-selector__header ma-0 pa-2"
    align="stretch"
    justify="start"
  >
    <mw-col shrink class="pe-2">
      <mw-thumbnail
        class="sx-article-selector__header-thumbnail"
        :thumbnail="sourceArticleThumbnail"
        :icon-size="48"
      />
    </mw-col>
    <mw-col>
      <mw-row
        direction="column"
        justify="between"
        align="start"
        class="sx-article-selector__header-title ma-0"
      >
        <mw-col tag="h5" class="pa-0 ma-0" v-text="sourceTitle" />
        <mw-col
          tag="p"
          shrink
          class="complementary sx-article-selector__stats ma-0"
        >
          <span class="pe-3">
            <mw-icon :icon="mwIconLanguage" />
            {{ langLinksCount }}
          </span>
          <span v-i18n:cx-sx-article-selector-views-count="[weeklyViews]" />
        </mw-col>
      </mw-row>
    </mw-col>
    <mw-col shrink align="start">
      <mw-button class="pa-0" type="icon" :icon="mwIconBookmarkOutline" />
      <mw-button
        class="pa-0"
        type="icon"
        :icon="mwIconClose"
        @click="$emit('close')"
      />
    </mw-col>
  </mw-row>
</template>

<script>
import {
  MwButton,
  MwIcon,
  MwThumbnail,
  MwRow,
  MwCol
} from "@/lib/mediawiki.ui";
import {
  mwIconBookmarkOutline,
  mwIconClose,
  mwIconLanguage
} from "@/lib/mediawiki.ui/components/icons";
import { mapGetters, mapState } from "vuex";
export default {
  name: "SxArticleSelectorHeader",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwThumbnail,
    MwButton
  },
  data: () => ({
    mwIconBookmarkOutline,
    mwIconClose,
    mwIconLanguage
  }),
  computed: {
    ...mapState({
      sectionSuggestion: state => state.application.currentSectionSuggestion
    }),
    ...mapGetters({
      sourceArticle: "application/getCurrentPage"
    }),
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
