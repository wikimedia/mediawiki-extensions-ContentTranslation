<template>
  <div class="row cx-suggestion pa-4" :if="suggestion" @click="handleClick">
    <div class="col-2 pa-2">
      <mw-thumbnail :thumbnail="thumbnail"> </mw-thumbnail>
    </div>
    <div class="col-9 pa-2">
      <div class="row ma-0" :if="suggestion">
        <span class="col-12 cx-suggestion__source-title" :lang="from">{{
          displayTitle
        }}</span>
        <span class="col-12 cx-suggestion__source-description" :lang="from">{{
          description
        }}</span>
        <span class="col-12 mt-2 cx-suggestion__languages text-small">
          <mw-autonym :lang="from" /> <mw-icon :icon="mwIconArrowForward" />
          <mw-autonym :lang="to" />
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
import MwAutonym from "../lib/mediawiki.ui/components/MWAutonym";
import {
  mwIconStar,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "TranslationSuggestion",
  data: () => ({ mwIconStar, mwIconArrowForward }),
  props: {
    suggestion: {
      type: Object,
      default: null
    },
    from: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  components: { MwThumbnail, MwAutonym, MwIcon },
  computed: {
    description: function() {
      return this.metadata && this.metadata.description;
    },
    thumbnail: function() {
      return this.metadata && this.metadata.thumbnail;
    },
    metadata: function() {
      return this.$store.getters["mediawiki/getMetadata"](
        this.from,
        this.displayTitle
      );
    },
    displayTitle: function() {
      return this.suggestion.title.replace(/_/g, " ");
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    autonym: function(lang) {
      return languagedata.getAutonym(lang);
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/colors.less";
@import "../lib/mediawiki.ui/mixins/common.less";

.cx-suggestion {
  border-top: 1px solid @colorGray12;
  cursor: pointer;
  min-height: 100px;
  .transition(
    "background-color 100ms, border-color 100ms, transform 1s, opacity 1s"
  );
  &:hover {
    background-color: #eaf3ff;
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
