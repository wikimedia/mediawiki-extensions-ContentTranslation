<template>
  <div class="row cx-suggestion pa-4" v-if="suggestion" @click="handleClick">
    <div class="col-2 pa-2">
      <mw-thumbnail :thumbnail="page && page.thumbnail"> </mw-thumbnail>
    </div>
    <div class="col-9 pa-2">
      <div class="row ma-0">
        <span
          class="col-12 cx-suggestion__source-title"
          :lang="suggestion.sourceLanguage"
        >
          {{ suggestion.sourceTitle }}
        </span>
        <span
          class="col-12 cx-suggestion__source-description"
          :lang="suggestion.sourceLanguage"
        >
          {{ page && page.description }}
        </span>
        <span class="col-12 mt-2 cx-suggestion__languages text-small">
          <span
            class="mw-ui-autonym"
            :dir="getDirection(suggestion.sourceLanguage)"
            v-text="getAutonym(suggestion.sourceLanguage)"
          ></span>
          <mw-icon :icon="mwIconArrowForward" />
          <span
            class="mw-ui-autonym"
            :dir="getDirection(suggestion.targetLanguage)"
            v-text="getAutonym(suggestion.targetLanguage)"
          ></span>
        </span>
      </div>
    </div>
    <div class="col-1 pa-2">
      <mw-icon :icon="mwIconStar" :size="24" />
    </div>
  </div>
</template>

<script>
import MwThumbnail from "../lib/mediawiki.ui/components/MWThumbnail";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import autonym from "../lib/mediawiki.ui/mixins/autonym";
import {
  mwIconStar,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";
import ArticleSuggestion from "../wiki/cx/models/articleSuggestion";

export default {
  name: "cx-translation-suggestion",
  components: { MwThumbnail, MwIcon },
  mixins: [autonym],
  props: {
    suggestion: {
      type: ArticleSuggestion
    }
  },
  data: () => ({ mwIconStar, mwIconArrowForward }),
  computed: {
    page: function() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "../lib/mediawiki.ui/mixins/common.less";

.cx-suggestion {
  border-top: @border-width-base @border-style-base @border-color-base;
  cursor: pointer;
  min-height: 100px;
  .transition(
    "background-color 100ms, border-color 100ms, transform 1s, opacity 1s"
  );
  &:hover {
    background-color: @background-color-primary;
  }
  .cx-suggestion__source-title {
    font-weight: bold;
    font-size: 1.2em;
  }
  .cx-suggestion__source-description {
    font-weight: normal;
    white-space: nowrap;
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
