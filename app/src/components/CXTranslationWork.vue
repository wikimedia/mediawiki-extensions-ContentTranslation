<template>
  <div v-if="translation" class="row cx-translation pa-4 ma-0" @click="onClick">
    <div class="col shrink pe-4">
      <mw-thumbnail
        class="cx-translation__thumbnail"
        :thumbnail="
          getImage(translation.sourceLanguage, translation.sourceTitle)
        "
        :width="84"
      />
    </div>
    <div class="col">
      <div class="cx-translation__details column justify-between ma-0">
        <div class="row ma-0">
          <div class="col grow">
            <div
              class="cx-translation__source-title pb-2"
              :lang="translation.sourceLanguage"
            >
              {{ translation.sourceTitle }}
            </div>
            <div
              class="cx-translation__target-title"
              :lang="translation.targetLanguage"
            >
              {{ translation.targetTitle }}
            </div>
          </div>
          <div class="col shrink ps-2">
            <mw-icon
              :size="24"
              :icon="
                translation.status === 'published' ? mwIconEdit : mwIconTrash
              "
            >
            </mw-icon>
          </div>
        </div>
        <div class="row ma-0 text-small">
          <div class="cx-translation__languages col grow">
            <span
              class="mw-ui-autonym"
              :dir="getDirection(translation.sourceLanguage)"
              v-text="getAutonym(translation.sourceLanguage)"
            ></span>
            <mw-icon :icon="mwIconArrowNext" class="mx-1" />
            <span
              class="mw-ui-autonym"
              :dir="getDirection(translation.targetLanguage)"
              v-text="getAutonym(translation.targetLanguage)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MwThumbnail from "../lib/mediawiki.ui/components/MWThumbnail";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import autonym from "../lib/mediawiki.ui/mixins/autonym";
import Translation from "../wiki/cx/models/translation";
import {
  mwIconEdit,
  mwIconTrash,
  mwIconArrowForward,
  mwIconArrowNext
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "CxTranslationWork",
  components: { MwThumbnail, MwIcon },
  mixins: [autonym],
  props: {
    translation: {
      type: Translation,
      required: true
    }
  },
  data: () => ({
    mwIconEdit,
    mwIconTrash,
    mwIconArrowForward,
    mwIconArrowNext
  }),
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
  /* TODO: Fix border color to be base80*/
  border-top: @border-width-base @border-style-base @border-color-base--disabled;
  cursor: pointer;
  min-height: 100px;
  .transition(
    "background-color 100ms, border-color 100ms, transform 1s, opacity 1s"
  );
  &:hover {
    background-color: @background-color-primary;
  }
  .cx-translation__thumbnail {
    height: 84px;
    width: 84px;
  }
  .cx-translation__details {
    height: 100%;

    .cx-translation__source-title {
      font-weight: bold;
      font-size: 1.2em;
    }
  }
}
</style>
