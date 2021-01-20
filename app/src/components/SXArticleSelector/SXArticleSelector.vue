<template>
  <section class="sx-article-selector">
    <sx-article-selector-header @close="onClose" />
    <sx-article-language-selector />
    <existing-article-body />
    <mw-row justify="center" class="sx-article-selector__license ma-0">
      <p class="pa-3">
        <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
        <small v-i18n-html-safe:cx-license-agreement />
      </p>
    </mw-row>
  </section>
</template>

<script>
import { MwRow } from "@/lib/mediawiki.ui";
import autonymMixin from "@/mixins/autonym";
import ExistingArticleBody from "./ExistingArticleBody";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import SxArticleSelectorHeader from "./SXArticleSelectorHeader";

export default {
  name: "SxArticleSelector",
  components: {
    SxArticleSelectorHeader,
    MwRow,
    SxArticleLanguageSelector,
    ExistingArticleBody
  },
  mixins: [autonymMixin],
  mounted: function() {
    this.$store.dispatch(
      "application/fetchCurrentSectionSuggestionLanguageTitles"
    );
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
