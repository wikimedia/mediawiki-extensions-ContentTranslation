<template>
  <mw-row
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
      <mw-button
        class="pa-0"
        type="icon"
        :large="true"
        :icon="mwIconBookmarkOutline"
      />
      <mw-button
        class="pa-0"
        type="icon"
        :large="true"
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
import Page from "@/wiki/mw/models/page";
import {
  mwIconBookmarkOutline,
  mwIconClose,
  mwIconLanguage
} from "@/lib/mediawiki.ui/components/icons";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
export default {
  name: "SxArticleSelectorHeader",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwThumbnail,
    MwButton
  },
  props: {
    sourceArticle: {
      type: Page,
      required: true
    },
    sectionSuggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  data: () => ({
    mwIconBookmarkOutline,
    mwIconClose,
    mwIconLanguage
  }),
  computed: {
    sourceTitle() {
      return this.sectionSuggestion?.sourceTitle;
    },
    sourceArticleThumbnail() {
      return this.sourceArticle?.thumbnail;
    },
    langLinksCount() {
      return this.sourceArticle?.langLinksCount;
    },
    weeklyViews() {
      const pageViews = this.sourceArticle?.pageviews || {};
      return Object.values(pageViews).reduce(
        (sum, dayViews) => sum + dayViews,
        0
      );
    }
  }
};
</script>
