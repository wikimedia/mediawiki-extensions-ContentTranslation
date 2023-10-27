<template>
  <mw-row
    class="cx-search-suggestion pt-3 ma-0"
    align="normal"
    :lang="suggestion.language"
    :dir="getDir(suggestion.language)"
  >
    <mw-col shrink>
      <mw-thumbnail
        class="cx-search-suggestion__thumbnail"
        :thumbnail="suggestion.thumbnail"
        :thumbnail-size="56"
        :placeholder-icon-size="30"
      />
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
import { MwRow, MwCol, MwIcon, MwThumbnail } from "../../lib/mediawiki.ui";
import { getDir } from "@wikimedia/language-data";
import Page from "../../wiki/mw/models/page";

import {
  mwIconStar,
  mwIconLanguage,
  mwIconArticle,
} from "../../lib/mediawiki.ui/components/icons";

export default {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail, MwIcon, MwRow, MwCol },
  props: {
    suggestion: {
      type: Page,
      required: true,
    },
  },
  setup(props) {
    return { mwIconStar, mwIconLanguage, mwIconArticle, getDir };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-search-suggestion {
  cursor: pointer;
  line-height: normal;
  &__source-title {
    line-height: 1;
  }
  &__source-description {
    color: @color-subtle;
  }
  &__languages {
    color: #72777d;
    margin-top: auto;
  }
}
</style>
