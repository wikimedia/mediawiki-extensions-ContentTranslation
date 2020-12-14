<template>
  <section class="sx-article-selector">
    <sx-article-selector-header
      v-if="sourceArticle"
      :section-suggestion="currentSectionSuggestion"
      :source-article="sourceArticle"
      @close="onClose"
    />
    <section class="sx-article-selector__body">
      <sx-article-language-selector />
      <existing-article-banner />
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
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import {
  mwIconExpand,
  mwIconArrowNext
} from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "@/mixins/autonym";
import SxArticleSelectorHeader from "./SXArticleSelectorHeader";
import ExistingArticleBanner from "./ExistingArticleBanner";

export default {
  name: "SxArticleSelector",
  components: {
    ExistingArticleBanner,
    SxArticleSelectorHeader,
    MwRow,
    SxArticleLanguageSelector,
    MwButton
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconExpand,
    mwIconArrowNext
  }),
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.application.currentSectionSuggestion
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
      /**
       * This won't actually redirect to dashboard, as URL params
       * stay the same and will force re-redirection to article
       * selector screen. Should be revisited once other entry
       * points to the application are added (currently only
       * available through URL params)
       */
      this.$router.push({ name: "dashboard" });
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

  .sx-article-selector__license {
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
    background-color: @background-color-framed;
  }
}
</style>
