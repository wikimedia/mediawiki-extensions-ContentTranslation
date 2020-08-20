<template>
  <div
    v-if="suggestion"
    class="row cx-suggestion pa-4 ma-0"
    @click="handleClick"
  >
    <div class="col shrink pe-4">
      <mw-thumbnail
        class="cx-suggestion__thumbnail"
        :thumbnail="page && page.thumbnail"
        :width="84"
      />
    </div>
    <div class="col pe-2">
      <h5
        class="mt-0 mb-2 cx-suggestion__source-title"
        :lang="suggestion.sourceLanguage"
      >
        {{ suggestion.sourceTitle }}
      </h5>
      <p
        class="cx-suggestion__source-description complementary"
        :lang="suggestion.sourceLanguage"
      >
        {{ page && page.description }}
      </p>
      <div class="mt-2 cx-suggestion__languages text-small">
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
      </div>
    </div>
    <div class="col-1">
      <mw-icon :icon="mwIconStar" :size="24" />
    </div>
  </div>
</template>

<script>
import { MwIcon, MwThumbnail } from "@/lib/mediawiki.ui";
import autonym from "@/mixins/autonym";
import {
  mwIconStar,
  mwIconArrowForward
} from "@/lib/mediawiki.ui/components/icons";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";

export default {
  name: "CxTranslationSuggestion",
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
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-suggestion {
  // Not sure if @background-color-notice-frame variable is ok to use here
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
  cursor: pointer;
  min-height: 100px;
  transition: background-color 100ms, border-color 100ms, transform 1s,
    opacity 1s;
  &:hover {
    background-color: @background-color-primary;
  }
  .cx-suggestion__thumbnail {
    height: 84px;
    width: 84px;
  }
}
</style>
