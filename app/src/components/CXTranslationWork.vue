<template>
  <div
    class="row cx-translation pa-4"
    v-if="translation"
    v-show="translation"
    @click="onClick"
  >
    <div class="col-2 pa-2">
      <mw-thumbnail
        :thumbnail="
          getImage(translation.sourceLanguage, translation.sourceTitle)
        "
      ></mw-thumbnail>
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
          <span
            class="mw-ui-autonym"
            :dir="getDirection(translation.sourceLanguage)"
            v-text="getAutonym(translation.sourceLanguage)"
          ></span>
          <mw-icon :icon="mwIconArrowForward" />
          <span
            class="mw-ui-autonym"
            :dir="getDirection(translation.targetLanguage)"
            v-text="getAutonym(translation.targetLanguage)"
          ></span>
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
import autonym from '../lib/mediawiki.ui/mixins/autonym';
import Translation from "../wiki/cx/models/translation";
import {
  mwIconEdit,
  mwIconTrash,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "cx-translation-work",
  components: { MwThumbnail, MwIcon },
  mixins: [ autonym ],
  props: {
    translation: {
      type: Translation,
      required: true
    }
  },
  data: () => ({ mwIconEdit, mwIconTrash, mwIconArrowForward }),
  methods: {
    onClick(e) {
      this.$emit("click", e);
      this.startTranslation(this.translation);
    },
    /**
     * Start the translation editor
     * @param {Translation} translation
     */
    startTranslation(translation) {
      const sitemapper = new mw.cx.SiteMapper();
      // Set CX token as cookie.
      sitemapper.setCXToken(
        translation.sourceLanguage,
        translation.targetLanguage,
        translation.sourceTitle
      );
      location.href = sitemapper.getCXUrl(
        translation.sourceTitle,
        translation.targetTitle,
        translation.sourceLanguage,
        translation.targetLanguage,
        { campaign: new mw.Uri().query.campaign }
      );
    },
    getPage(language, title) {
      return this.$store.getters["mediawiki/getPage"](language, title);
    },
    getImage(language, title) {
      const page = this.getPage(language, title);
      return page?.thumbnail;
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "../lib/mediawiki.ui/mixins/common.less";

.cx-translation {
  border-top: @border-width-base @border-style-base @border-color-base--disabled;
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
    background-color: @background-color-primary;
  }
}
</style>
