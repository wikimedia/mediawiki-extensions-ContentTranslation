<template>
  <section class="sx-section-selector">
    <sx-section-selector-header
      :suggestion="suggestion"
      @close="goToArticleSelector"
    />
    <section class="sx-section-selector__body">
      <sx-article-language-selector />
      <sx-section-selector-section-list-missing
        :suggestion="suggestion"
        @select-section="selectSection"
        @close="goToArticleSelector"
      />
      <sx-section-selector-section-list-present
        :suggestion="suggestion"
        @select-section="selectSection"
      />
      <section class=" py-2">
        <h4
          v-i18n:cx-sx-section-selector-more-details-title="[
            targetLanguageAutonym
          ]"
          class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
        />
        <ul class="ma-0 pa-0">
          <sx-section-selector-view-article-item
            v-for="(item, index) in viewArticleItems"
            :key="`view-article-item-${index}`"
            :path="item.path"
            :autonym="item.autonym"
          />
        </ul>
      </section>
      <mw-row class="sx-section-selector__additional-considerations ma-0">
        <mw-col cols="12" md="6" class="px-4 pt-5 pb-4">
          <h6 class="sx-section-selector__additional-consideration-title">
            <mw-icon :icon="mwIconRobot" class="pe-2" />
            {{
              $i18n("cx-sx-section-selector-automatic-section-matching-title")
            }}
          </h6>
          <p
            v-i18n:cx-sx-section-selector-automatic-section-matching-description
          />
          <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
        </mw-col>
        <mw-col cols="12" md="6" class="px-4 py-5">
          <h6 class="sx-section-selector__additional-consideration-title">
            <mw-icon :icon="mwIconLabFlask" class="pe-2" />
            {{ $i18n("cx-sx-section-selector-unsupported-sections-title") }}
          </h6>
          <p v-i18n:cx-sx-section-selector-unsupported-sections-description />
          <a v-i18n:cx-sx-section-selector-learn-more-anchor-label href="#" />
        </mw-col>
      </mw-row>
    </section>
  </section>
</template>

<script>
import { MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconRobot,
  mwIconLabFlask
} from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "@/mixins/autonym";
import { mapState } from "vuex";

import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import SxSectionSelectorViewArticleItem from "./SXSectionSelectorViewArticleItem";
import SxSectionSelectorHeader from "./SXSectionSelectorHeader";
import SxSectionSelectorSectionListMissing from "./SXSectionSelectorSectionListMissing";
import SxSectionSelectorSectionListPresent from "./SXSectionSelectorSectionListPresent";
const sitemapper = new mw.cx.SiteMapper();

export default {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent,
    SxSectionSelectorSectionListMissing,
    SxSectionSelectorHeader,
    SxSectionSelectorViewArticleItem,
    MwRow,
    MwCol,
    MwIcon,
    SxArticleLanguageSelector
  },
  mixins: [autonymMixin],
  data: () => ({
    mwIconRobot,
    mwIconLabFlask
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion
    }),
    sourceLanguageAutonym() {
      return this.getAutonym(this.suggestion.sourceLanguage);
    },
    targetLanguageAutonym() {
      return this.getAutonym(this.suggestion.targetLanguage);
    },
    sourceArticlePath() {
      return sitemapper.getPageUrl(
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    },
    targetArticlePath() {
      return sitemapper.getPageUrl(
        this.suggestion.targetLanguage,
        this.suggestion.targetTitle
      );
    },
    viewArticleItems() {
      return [
        {
          path: this.sourceArticlePath,
          autonym: this.sourceLanguageAutonym
        },
        {
          path: this.targetArticlePath,
          autonym: this.targetLanguageAutonym
        }
      ];
    }
  },
  methods: {
    goToArticleSelector() {
      this.$router.push({ name: "sx-article-selector" });
    },
    selectSection(sourceSectionTitle) {
      this.$store.dispatch("application/selectPageSection", {
        language: this.suggestion.sourceLanguage,
        title: this.suggestion.sourceTitle,
        sectionTitle: sourceSectionTitle
      });
      this.$router.push({ name: "sx-content-comparator" });
    }
  }
};
</script>
<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-section-selector {
  .sx-section-selector__body {
    .sx-section-selector__list-title {
      color: @color-base--subtle;
    }
  }
  .sx-section-selector__additional-considerations {
    // TODO: fix border color to be base80
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
    .sx-section-selector__additional-consideration-title {
      .mw-ui-icon {
        display: inline;
      }
    }
  }
}
</style>
