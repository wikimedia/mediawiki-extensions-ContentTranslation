<template>
  <mw-dialog
    class="sx-article-selector"
    v-show="active"
    @close="onClose()"
    :fullscreen="true"
  >
    <template slot="header">
      <div class="row justify-end sx-article-selector__header">
        <div class="col-1">
          <mw-thumbnail :thumbnail="sourceArticleThumbnail" />
        </div>
        <div class="col-9">
          <div class>{{ sourceTitle }}</div>
          <div class="sx-article-selector__langLinksCount">
            <mw-icon :icon="mwIconLanguage" />
            {{ langLinksCount }}
          </div>
        </div>
        <div class="col-2 justify-center items-start">
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
            @click="onClose()"
          />
        </div>
      </div>
    </template>
    <div class="sx-article-selector__body">
      <div class="row sx-article-selector__languages">
        <div class="col-5 justify-end">
          <mw-button
            :indicator="mwIconExpand"
            type="text"
            :outlined="false"
            :large="true"
          >
            <mw-autonym :lang="sourceLanguage" />
          </mw-button>
        </div>
        <div class="col-2 justify-center">
          <mw-icon :icon="mwIconArrowNext" />
        </div>
        <div class="col-5 justify-start">
          <mw-button
            :indicator="mwIconExpand"
            type="text"
            :outlined="false"
            :large="true"
          >
            <mw-autonym :lang="targetLanguage" />
          </mw-button>
        </div>
      </div>
      <mw-divider />
      <div class="row sx-article-selector__action justify-center mt-8 mb-8">
        <mw-button
          class="col-8"
          :large="true"
          :progressive="true"
          :disabled="missingSectionsCount === 0"
          @click="onSectionSelectorClick()"
          :label="$i18n('cx-sx-select-section')"
        ></mw-button>
      </div>
      <div
        class="row sx-article-selector__action justify-center mt-8 mb-8"
        v-if="missingSectionsCount"
        v-i18n="{
          msg: 'cx-sx-missing-section-stats',
          params: [missingSectionsCount, getAutonym(this.targetLanguage)]
        }"
      ></div>
      <div class="row sx-article-selector__license justify-center ma-0">
        <p class="pa-2" v-html="$i18n('cx-license-agreement')" />
      </div>
    </div>
    <sx-section-selector
      v-if="suggestion"
      :active="showSectionTranslation"
      :suggestion="suggestion"
      @close="onSectionSelectorDialogClose"
    />
  </mw-dialog>
</template>

<script>
import { mapState } from "vuex";
import SxSectionSelector from "./SXSectionSelector";
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwThumbnail from "../lib/mediawiki.ui/components/MWThumbnail";
import MwDivider from "../lib/mediawiki.ui/components/MWDivider";
import MwAutonym from "../lib/mediawiki.ui/components/MWAutonym";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import {
  mwIconClose,
  mwIconExpand,
  mwIconLanguage,
  mwIconBookmarkOutline,
  mwIconArrowNext
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "sx-article-selector",
  components: {
    MwDialog,
    MwDivider,
    MwAutonym,
    MwIcon,
    MwThumbnail,
    SxSectionSelector,
    MwButton
  },
  data: () => ({
    mwIconClose,
    mwIconExpand,
    mwIconLanguage,
    mwIconBookmarkOutline,
    MwDivider,
    mwIconArrowNext,
    showSectionTranslation: false
  }),
  props: {
    active: {
      type: Boolean,
      default: false
    },
    sourceLanguage: String,
    sourceTitle: String,
    targetLanguage: String
  },
  computed: {
    ...mapState({
      languageInfo: state => state.mediawiki.languageInfo
    }),
    langLinksCount() {
      return this.sourceArticle?.langLinksCount;
    },
    sourceArticle() {
      return this.$store.getters["mediawiki/getPage"](
        this.sourceLanguage,
        this.sourceTitle
      );
    },
    suggestion() {
      return this.$store.getters["suggestions/getSectionSuggestionsForArticle"](
        this.sourceLanguage,
        this.targetLanguage,
        this.sourceTitle
      );
    },
    missingSectionsCount() {
      return this.suggestion?.missingSectionsCount;
    },
    sourceArticleThumbnail() {
      return this.sourceArticle?.thumbnail;
    }
  },
  methods: {
    getAutonym(lang) {
      const displayName = Intl.DisplayNames && new Intl.DisplayNames(lang);
      return this.languageInfo[lang]?.autonym || displayName?.of(lang) || lang;
    },
    onClose() {
      this.$emit("close");
    },
    setURLParams() {
      if (!history.pushState) {
        return;
      }
      let url = new URL(location.href);
      const params = new URLSearchParams(location.search);
      params.set("page", this.sourceTitle);
      params.set("from", this.sourceLanguage);
      params.set("to", this.targetLanguage);
      params.set("sx", true);
      url.search = params;
      url = url.toString();
      history.replaceState({ url: url }, null, url);
    },
    onSectionSelectorClick() {
      this.$emit("section-translation-article-select");
      this.showSectionTranslation = true;
      this.setURLParams();
      this.$emit("section-listing-open");
    },
    onSectionSelectorDialogClose() {
      this.showSectionTranslation = false;
      this.$emit("section-listing-close");
      this.$emit("close");
    }
  }
};
</script>
<style lang="less">
@import "../lib/mediawiki.ui/variables/colors.less";

.sx-article-selector {
  .sx-article-selector__header {
    border-bottom: 1px solid @colorGray12;
    font-size: 2rem;
    color: @colorGray1;
    .sx-article-selector__langLinksCount {
      font-size: 1rem;
    }
  }
  .sx-article-selector__license {
    border-top: 1px solid @colorGray12;
    background-color: @colorGray14;
    overflow: hidden;
    p {
      font-size: 1em;
      overflow: hidden;
    }
  }
}
</style>
