<template>
  <mw-row class="cx-search-suggestion pt-3 ma-0" align="normal">
    <mw-col shrink>
      <mw-thumbnail
        v-if="suggestion.thumbnail"
        class="cx-search-suggestion__thumbnail"
        :thumbnail="suggestion.thumbnail"
        :width="56"
      />
      <div
        v-else
        class="cx-search-suggestion__thumbnail-placeholder justify-center"
      >
        <mw-icon size="30" :icon="mwIconArticle" />
      </div>
    </mw-col>
    <mw-col class="ms-4">
      <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
        <mw-col shrink class="mb-1">
          <h5
            class="my-0 cx-search-suggestion__source-title"
            v-text="suggestion.title"
          />
        </mw-col>
        <mw-col shrink class="mb-1">
          <p
            class="ma-0 cx-search-suggestion__source-description complementary"
            v-text="suggestion.description"
          />
        </mw-col>
        <mw-col class="cx-search-suggestion__languages" shrink align="center">
          <mw-icon :icon="mwIconLanguage" :size="16" class="me-2" />
          <small v-text="suggestion.langLinksCount" />
        </mw-col>
      </mw-row>
    </mw-col>
  </mw-row>
</template>

<script>
import { MwRow, MwCol, MwIcon, MwThumbnail } from "@/lib/mediawiki.ui";
import Page from "@/wiki/mw/models/page";

import {
  mwIconStar,
  mwIconLanguage,
  mwIconArticle
} from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail, MwIcon, MwRow, MwCol },
  props: {
    suggestion: {
      type: Page,
      required: true
    }
  },
  data: () => ({ mwIconStar, mwIconLanguage, mwIconArticle })
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-search-suggestion {
  cursor: pointer;
  line-height: normal;
  &__thumbnail.mw-ui-thumbnail {
    height: 56px;
    width: 56px;
  }
  &__thumbnail-placeholder {
    height: 56px;
    width: 56px;
    background-color: @wmui-color-base80;
  }
  &__source-title {
    line-height: 1;
  }
  &__source-description {
    color: @wmui-color-base20;
  }
  &__languages {
    color: @color-base--subtle;
    margin-top: auto;
  }
}
</style>
