<template>
  <section class="sx-article-selector">
    <mw-row
      class="sx-article-selector__header ma-0 pa-2"
      align="stretch"
      justify="start"
    >
      <mw-col shrink class="pe-2">
        <mw-thumbnail
          class="sx-article-selector__header-thumbnail"
          :thumbnail="sourceArticleThumbnail"
          :icon-size="48"
        />
      </mw-col>
      <mw-col>
        <mw-row
          direction="column"
          justify="between"
          align="start"
          class="sx-article-selector__header-title ma-0"
        >
          <mw-col tag="h5" class="pa-0 ma-0" v-text="sourceTitle" />
          <mw-col
            tag="p"
            shrink
            class="complementary sx-article-selector__stats ma-0"
          >
            <span class="pe-3">
              <mw-icon :icon="mwIconLanguage" />
              {{ langLinksCount }}
            </span>
            <span v-i18n:cx-sx-article-selector-views-count="[weeklyViews]" />
          </mw-col>
        </mw-row>
      </mw-col>
      <mw-col shrink align="start">
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
      </mw-col>
    </mw-row>
    <section class="sx-article-selector__body">
      <sx-article-language-selector />
      <mw-row
        v-if="translationExists"
        class="sx-article-selector__translation-status pa-4 ma-0"
        justify="between"
      >
        <!-- Font weight bold -->
        <mw-col
          v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
        />
        <mw-col shrink>
          <a v-i18n:cx-sx-view-translation-anchor href="#" />
        </mw-col>
      </mw-row>
      <mw-row v-if="translationExists" class="pa-4 pb-0 ma-0">
        <mw-col>
          <span
            v-i18n:cx-sx-existing-translation-additional-info="[
              targetLanguageAutonym
            ]"
          />
          &nbsp;
          <a v-i18n:cx-sx-existing-translation-learn-more href="#" />
        </mw-col>
      </mw-row>
      <mw-row class="sx-article-selector__action pt-4 pb-3" justify="center">
        <mw-button
          :large="true"
          :progressive="true"
          :disabled="missingSectionsCount === 0"
          :label="actionButtonLabel"
          @click="onSectionSelectorClick()"
        />
      </mw-row>
      <mw-row
        v-if="missingSectionsCount"
        v-i18n:cx-sx-missing-section-stats="[
          missingSectionsCount,
          targetLanguageAutonym
        ]"
        justify="center"
        class="sx-article-selector__action pb-2 mb-4"
      />
      <mw-row justify="center" class="sx-article-selector__license ma-0">
        <p class="pa-3">
          <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
          <small v-i18n-html:cx-license-agreement />
        </p>
      </mw-row>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import {
  MwButton,
  MwIcon,
  MwThumbnail,
  MwRow,
  MwCol
} from "@/lib/mediawiki.ui";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import {
  mwIconClose,
  mwIconExpand,
  mwIconLanguage,
  mwIconBookmarkOutline,
  mwIconArrowNext
} from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "../../mixins/autonym";

export default {
  name: "SxArticleSelector",
  components: {
    MwRow,
    MwCol,
    MwIcon,
    MwThumbnail,
    SxArticleLanguageSelector,
    MwButton
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconClose,
    mwIconExpand,
    mwIconLanguage,
    mwIconBookmarkOutline,
    mwIconArrowNext
  }),
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.suggestions.currentSectionSuggestion
    }),
    actionButtonLabel() {
      return this.translationExists
        ? this.$i18n("cx-sx-select-section")
        : this.$i18n("cx-sx-start-translation-button-label");
    },
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
      this.$router.go(-1);
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
      this.$router.push({ name: "sx-section-selector" });
      this.setURLParams();
      this.$emit("section-listing-open");
    }
  }
};
</script>
<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

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
