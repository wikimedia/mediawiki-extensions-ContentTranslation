<template>
  <mw-card class="sx-sentence-selector__proposed-translation col shrink pa-0">
    <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
      <proposed-translation-header
        ref="header"
        :mt-provider="mtProvider"
        v-on="$listeners"
      />
      <mw-col
        class="sx-sentence-selector__proposed-translation__contents px-5"
        :style="contentsStyle"
      >
        <section v-html="translation" />
      </mw-col>
      <mw-col
        ref="footer"
        shrink
        class="sx-sentence-selector__proposed-translation__footer"
      >
        <mw-button
          :icon="mwIconEdit"
          type="text"
          :label="
            $i18n('cx-sx-sentence-selector-edit-translation-button-label')
          "
          class="sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4"
          progressive
          :disabled="!translation"
          @click="$emit('edit-translation')"
        />
        <sx-sentence-selector-action-buttons v-on="$listeners" />
      </mw-col>
    </mw-row>
  </mw-card>
</template>

<script>
import { MwButton, MwRow, MwCol, MwCard } from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis
} from "@/lib/mediawiki.ui/components/icons";
import SxSentenceSelectorActionButtons from "./SXSentenceSelectorActionButtons";
import ProposedTranslationHeader from "./ProposedTranslationHeader";

export default {
  name: "ProposedTranslationCard",
  components: {
    MwCard,
    ProposedTranslationHeader,
    MwRow,
    MwCol,
    MwButton,
    SxSentenceSelectorActionButtons
  },
  props: {
    mtProvider: {
      type: String,
      required: true
    },
    translation: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconEllipsis,
    mwIconEdit,
    /**
     * This data property stores total height
     * for footer and header of card, so that
     * we can calculate max-height for proposed
     * translation contents
     */
    headerAndFooterHeight: 0
  }),
  computed: {
    contentsStyle: vm => ({
      "max-height": `calc(100% - ${vm.headerAndFooterHeight}px)`
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.headerAndFooterHeight =
        this.$refs.header.$el.clientHeight + this.$refs.footer.$el.clientHeight;
    });
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-sentence-selector {
  .sx-sentence-selector__proposed-translation {
    max-height: 50%;
    border-radius: @border-radius-base @border-radius-base 0 0;
    width: 100%;
    // TODO: Fix these with variables(?)
    box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);

    .mw-ui-card__content {
      height: 100%;
    }

    transition: margin-bottom 0.1s;

    &__contents {
      color: @color-base;
      section {
        overflow-y: auto;
        max-height: 100%;
      }
    }

    &__footer {
      width: 100%;
    }
  }
}
</style>