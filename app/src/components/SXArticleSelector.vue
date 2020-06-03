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
      <sx-article-language-selector />
      <div
        v-if="translationExists"
        class="sx-article-selector__translation-status row pa-4 ma-0"
      >
        <!-- Font weight bold -->
        <div
          class="col-8"
          v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
        ></div>
        <div class="col-4 justify-end">
          <a v-i18n:cx-sx-view-translation-anchor href="#"></a>
        </div>
      </div>
      <div v-if="translationExists" class="row pa-4 pb-0 ma-0">
        <div class="col-12">
          <span
            v-i18n:cx-sx-existing-translation-additional-info="[
              targetLanguageAutonym
            ]"
          ></span>
          <a v-i18n:cx-sx-existing-translation-learn-more href="#"></a>
        </div>
      </div>
      <div class="row sx-article-selector__action justify-center pt-4 pb-3">
        <mw-button
          v-if="translationExists"
          :large="true"
          :progressive="true"
          :disabled="missingSectionsCount === 0"
          @click="onSectionSelectorClick()"
          :label="$i18n('cx-sx-select-section')"
        ></mw-button>
        <mw-button
          v-else
          :large="true"
          :progressive="true"
          @click="onSectionSelectorClick()"
          :label="$i18n('cx-sx-start-translation-button-label')"
        ></mw-button>
      </div>
      <div
        class="row sx-article-selector__action justify-center pb-2 mb-4"
        v-if="missingSectionsCount"
        v-i18n:cx-sx-missing-section-stats="[
          missingSectionsCount,
          targetLanguageAutonym
        ]"
      ></div>
      <div class="row sx-article-selector__license justify-center ma-0">
        <p class="pa-3" v-i18n-html:cx-license-agreement />
      </div>
    </div>
    <sx-section-selector
      v-if="currentSectionSuggestion"
      :active="showSectionTranslation"
      :suggestion="currentSectionSuggestion"
      @close="onSectionSelectorDialogClose"
    />
  </mw-dialog>
</template>

<script>
import { mapState } from "vuex";
import SxSectionSelector from "./SXSectionSelector";
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwThumbnail from "../lib/mediawiki.ui/components/MWThumbnail";
import MwIcon from "../lib/mediawiki.ui/components/MWIcon";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import SxArticleLanguageSelector from "./SXArticleLanguageSelector";
import {
  mwIconClose,
  mwIconExpand,
  mwIconLanguage,
  mwIconBookmarkOutline,
  mwIconArrowNext
} from "../lib/mediawiki.ui/components/icons";
import autonymMixin from "../lib/mediawiki.ui/mixins/autonym";

export default {
  name: "sx-article-selector",
  mixins: [autonymMixin],
  components: {
    MwDialog,
    MwIcon,
    MwThumbnail,
    SxSectionSelector,
    SxArticleLanguageSelector,
    MwButton
  },
  data: () => ({
    mwIconClose,
    mwIconExpand,
    mwIconLanguage,
    mwIconBookmarkOutline,
    mwIconArrowNext,
    showSectionTranslation: false
  }),
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.suggestions.currentSectionSuggestion
    }),
    targetLanguageAutonym() {
      return this.getAutonym(this.targetLanguage);
    },
    translationExists() {
      return this.currentSectionSuggestion?.presentSectionsCount;
    },
    langLinksCount() {
      return this.sourceArticle?.langLinksCount;
    },
    sourceArticle() {
      return this.$store.getters["mediawiki/getPage"](
        this.sourceLanguage,
        this.sourceTitle
      );
    },
    sourceLanguage() {
      return this.currentSectionSuggestion?.sourceLanguage;
    },
    sourceTitle() {
      return this.currentSectionSuggestion?.sourceTitle;
    },
    targetLanguage() {
      return this.currentSectionSuggestion?.targetLanguage;
    },
    missingSectionsCount() {
      return this.currentSectionSuggestion?.missingSectionsCount;
    },
    sourceArticleThumbnail() {
      return this.sourceArticle?.thumbnail;
    }
  },
  methods: {
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
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-article-selector {
  .sx-article-selector__header {
    border-bottom: @border-width-base @border-style-base @border-color-base;
    font-size: 2rem;
    color: @color-base;
    .sx-article-selector__langLinksCount {
      font-size: 1rem;
    }
  }

  .sx-article-selector__translation-status {
    background-color: @background-color-warning--framed;
  }

  .sx-article-selector__license {
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
    background-color: @background-color-base--hover;
  }
}
</style>
