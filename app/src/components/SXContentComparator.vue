<template>
  <mw-dialog
    v-if="active"
    class="sx-content-comparator"
    animation="slide-left"
    :fullscreen="true"
  >
    <template slot="header">
      <div class="sx-content-comparator__header pa-4">
        <mw-button
          class="py-2 pa-0"
          :icon="mwIconArrowPrevious"
          :label="
            $i18n('cx-sx-content-comparator-back-to-sections-button-label')
          "
          type="text"
          :outlined="false"
          @click="$emit('update:active', false)"
        />
        <div class="row my-1 py-2 mx-0">
          <div class="col-xs-9 col-lg-8 px-0">
            <h4 class="pa-0 sx-content-comparator-header__article-title">
              {{ suggestion.sourceTitle }}
            </h4>
            <h2 class="sx-content-comparator-header__section-title pa-0 ma-0">
              {{ activeMissingSectionKey }}
            </h2>
          </div>
          <div class="col-xs-3 col-lg-1">
            <mw-button
              class="pa-0 pe-1"
              type="icon"
              :icon="mwIconPrevious"
            ></mw-button>
            <mw-button
              class="pa-0 ps-1"
              type="icon"
              :icon="mwIconArrowForward"
            ></mw-button>
          </div>
        </div>
        <div class="col-xs-12 col-lg-3 py-2 mb-1">
          <mw-button
            :icon="mwIconEdit"
            :progressive="true"
            :label="
              $i18n('cx-sx-content-comparator-translation-section-button-label')
            "
          ></mw-button>
        </div>
        <div class="flex py-2">
          <div class="shrink pe-2">
            <m-w-icon :icon="mwIconEye"></m-w-icon>
          </div>
          <div>
            <p
              class="ma-0 sx-content-comparator-header__additional-considerations"
            >
              <span
                class="sx-content-comparator-header__additional-considerations-title"
                v-i18n:cx-sx-content-comparator-additional-considerations-title
              ></span>
              <span
                v-i18n:cx-sx-content-comparator-additional-considerations-content
              ></span>
            </p>
          </div>
        </div>
      </div>
    </template>
    <div class="sx-content-comparator__source-target-selector">
      <mw-button-group
        :items="listSelector"
        :active="sourceVsTargetSelection"
        v-on:select="sourceVsTargetSelection = $event"
      />
    </div>
    <div
      class="sx-content-comparator__source-content pa-4"
      v-if="sourceVsTargetSelection === 'source_section'"
    >
      <h2>{{ activeMissingSectionKey }}</h2>
      <p v-html="content"></p>
    </div>
    <div v-else>
      <mw-spinner v-if="!targetPage.content" />
      <p v-html="targetPage.content"></p>
    </div>
  </mw-dialog>
</template>

<script>
import {
  mwIconPrevious,
  mwIconArrowForward,
  mwIconArrowPrevious,
  mwIconEdit,
  mwIconEye
} from "../lib/mediawiki.ui/components/icons";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MWIcon from "../lib/mediawiki.ui/components/MWIcon";
import MwButtonGroup from "../lib/mediawiki.ui/components/MWButtonGroup";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import autonymMixin from "../lib/mediawiki.ui/mixins/autonym";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";

export default {
  name: "sx-content-comparator",
  components: {
    MwButtonGroup,
    MWIcon,
    MwButton,
    MwDialog,
    MwSpinner
  },
  mixins: [autonymMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    activeMissingSectionKey: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconEye,
    mwIconEdit,
    mwIconPrevious,
    mwIconArrowForward,
    mwIconArrowPrevious,
    contentComparatorActive: false,
    sourceVsTargetSelection: "source_section"
  }),
  watch: {
    sourcePage() {
      this.$store.dispatch("mediawiki/fetchPageSections", {
        language: this.suggestion.sourceLanguage,
        title: this.suggestion.sourceTitle
      });
    },
    // watch for target title as it is not provided when the proxy suggestion object is created
    // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
    targetTitle() {
      this.$store.dispatch("mediawiki/fetchPageContent", {
        language: this.suggestion.targetLanguage,
        title: this.suggestion.targetTitle
      });
    }
  },
  computed: {
    /**
     * @return {PageSection[]}
     */
    sections() {
      return this.sourcePage?.sections;
    },
    sourcePage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    },
    targetPage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.targetLanguage,
        this.suggestion.targetTitle
      );
    },
    content() {
      return (this.sections || []).find(
        section => section.line === this.activeMissingSectionKey
      )?.text;
    },
    listSelector() {
      return [
        {
          value: "source_section",
          props: {
            label: this.$i18n(
              "cx-sx-content-comparator-source-selector-title",
              this.getAutonym(this.suggestion.sourceLanguage)
            ),
            type: "text"
          }
        },
        {
          value: "target_article",
          props: {
            label: this.$i18n(
              "cx-sx-content-comparator-target-selector-title",
              this.getAutonym(this.suggestion.targetLanguage)
            ),
            type: "text"
          }
        }
      ];
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-content-comparator {
  .sx-content-comparator-header__section-title {
    line-height: 1.6;
    border: none;
  }

  .sx-content-comparator-header__additional-considerations {
    line-height: 1.6;
    color: @color-base;
    .sx-content-comparator-header__additional-considerations-title {
      font-weight: bold;
    }
  }
  .sx-content-comparator__source-target-selector {
    .mw-ui-button-group {
      background: @background-color-framed;
      color: @color-base;
    }
  }
  .sx-content-comparator__source-content {
    line-height: 1.6;
  }
}
</style>
