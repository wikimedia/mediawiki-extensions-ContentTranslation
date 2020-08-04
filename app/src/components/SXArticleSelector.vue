<template>
  <mw-dialog
    v-show="active"
    class="sx-article-selector"
    :fullscreen="true"
    @close="onClose()"
  >
    <template slot="header">
      <div class="row sx-article-selector__header ma-0 pa-2">
        <div class="col shrink pe-2">
          <mw-thumbnail
            class="sx-article-selector__header-thumbnail"
            :thumbnail="sourceArticleThumbnail"
            :icon-size="48"
          />
        </div>
        <div class="col">
          <div
            class="sx-article-selector__header-title column justify-between ma-0"
          >
            <h5 class="col pa-0 ma-0">{{ sourceTitle }}</h5>
            <p class="col shrink complementary sx-article-selector__stats">
              <span class="pe-3">
                <mw-icon :icon="mwIconLanguage" />
                {{ langLinksCount }}
              </span>
              <span v-i18n:cx-sx-article-selector-views-count="[weeklyViews]" />
            </p>
          </div>
        </div>
        <div class="col shrink items-start">
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
          v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
          class="col-8"
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
          :label="$i18n('cx-sx-select-section')"
          @click="onSectionSelectorClick()"
        ></mw-button>
        <mw-button
          v-else
          :large="true"
          :progressive="true"
          :label="$i18n('cx-sx-start-translation-button-label')"
          @click="onSectionSelectorClick()"
        ></mw-button>
      </div>
      <div
        v-if="missingSectionsCount"
        v-i18n:cx-sx-missing-section-stats="[
          missingSectionsCount,
          targetLanguageAutonym
        ]"
        class="row sx-article-selector__action justify-center pb-2 mb-4"
      ></div>
      <div class="row sx-article-selector__license justify-center ma-0">
        <p class="pa-3">
          <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
          <small v-i18n-html:cx-license-agreement></small>
        </p>
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
import { MwButton, MwIcon, MwDialog, MwThumbnail } from "../lib/mediawiki.ui";
import SxArticleLanguageSelector from "./SXArticleLanguageSelector";
import {
  mwIconClose,
  mwIconExpand,
  mwIconLanguage,
  mwIconBookmarkOutline,
  mwIconArrowNext
} from "../lib/mediawiki.ui/components/icons";
import autonymMixin from "../mixins/autonym";

export default {
  name: "SxArticleSelector",
  components: {
    MwDialog,
    MwIcon,
    MwThumbnail,
    SxSectionSelector,
    SxArticleLanguageSelector,
    MwButton
  },
  mixins: [autonymMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mwIconClose,
    mwIconExpand,
    mwIconLanguage,
    mwIconBookmarkOutline,
    mwIconArrowNext,
    showSectionTranslation: false
  }),
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
    },
    weeklyViews() {
      const pageViews = this.sourceArticle?.pageviews || {};
      return Object.values(pageViews).reduce(
        (sum, dayViews) => sum + dayViews,
        0
      );
    }
  },
  mounted: function() {
    this.$store.dispatch("mediawiki/fetchLanguageTitles", {
      language: this.sourceLanguage,
      title: this.sourceTitle
    });
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
    color: @color-base;
    .sx-article-selector__header-thumbnail {
      height: 48px;
      width: 48px;
    }
    .sx-article-selector__header-title {
      height: 100%;
    }
    .sx-article-selector__stats {
      // TODO: Fix this to be @base20 color - currently base30
      color: @color-base--subtle;
    }
  }

  .sx-article-selector__translation-status {
    background-color: @background-color-warning--framed;
  }

  .sx-article-selector__license {
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
    background-color: @background-color-framed;
  }
}
</style>
