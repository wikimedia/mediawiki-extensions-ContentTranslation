<template>
  <div
    class="row cx-translation pa-4"
    v-if="translation"
    v-show="translation"
    @click="handleClick"
  >
    <div class="col-2 pa-2">
      <mw-thumbnail
        :thumbnail="
          getImage(translation.sourceLanguage, translation.sourceTitle)
        "
      >
      </mw-thumbnail>
    </div>
    <div class="col-9 pa-2">
      <div class="row">
        <span
          class="col-12 cx-translation__source-title"
          :lang="translation.sourceLanguage"
          >{{ translation.sourceTitle }}</span
        >
        <span
          class="col-12 cx-translation__target-title"
          :lang="translation.targetLanguage"
          >{{ translation.targetTitle }}</span
        >
        <span class="col-12 mt-2 cx-translation__languages text-small">
          <mw-autonym :lang="translation.sourceLanguage" />
          <mw-icon :icon="mwIconArrowForward" />
          <mw-autonym :lang="translation.targetLanguage" />
        </span>
      </div>
    </div>
    <div class="col-1 pa-2">
      <mw-icon
        :size="24"
        :icon="translation.status === 'published' ? mwIconEdit : mwIconTrash"
      >
      </mw-icon>
    </div>
  </div>
</template>

<script>
import MwThumbnail from "../lib/mediawiki.ui/components/MWThumbnail";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import MwAutonym from "../lib/mediawiki.ui/components/MWAutonym";

import { mapState } from "vuex";
import {
  mwIconEdit,
  mwIconTrash,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "cx-translation-work",
  data: () => ({ mwIconEdit, mwIconTrash, mwIconArrowForward }),
  props: {
    translation: {
      type: Object,
      required: true
    }
  },
  components: { MwThumbnail, MwAutonym, MwIcon },
  computed: {
    ...mapState({
      articles: state => state.mediawiki.articles
    })
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    getMetadata(language, title) {
      return this.$store.getters["mediawiki/getMetadata"](language, title);
    },
    getImage(language, title) {
      const metadata = this.getMetadata(language, title);
      return metadata && metadata.thumbnail;
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/colors.less";
@import "../lib/mediawiki.ui/mixins/common.less";

.cx-translation {
  border-top: 1px solid @colorGray12;
  cursor: pointer;
  min-height: 100px;
  .transition(
    "background-color 100ms, border-color 100ms, transform 1s, wopacity 1s"
  );
  .cx-translation__source-title {
    font-weight: bold;
    font-size: 1.2em;
  }
  &:hover {
    background-color: #eaf3ff;
  }
}
</style>
