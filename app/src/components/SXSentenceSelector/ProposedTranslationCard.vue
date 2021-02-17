<template>
  <mw-card class="sx-sentence-selector__proposed-translation col shrink pa-0">
    <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
      <proposed-translation-header ref="header" v-on="$listeners" />
      <mw-col
        class="sx-sentence-selector__proposed-translation__contents px-5"
        :class="{
          'sx-sentence-selector__proposed-translation__contents--empty': !hasProposedTranslation
        }"
        :style="contentsStyle"
      >
        <section v-if="hasProposedTranslation" v-html="proposedTranslation" />
        <mw-spinner v-else />
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
          :disabled="!hasProposedTranslation"
          @click="$emit('edit-translation', proposedTranslation)"
        />
        <proposed-translation-action-buttons v-on="$listeners" />
      </mw-col>
    </mw-row>
  </mw-card>
</template>

<script>
import { MwButton, MwRow, MwCol, MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis
} from "@/lib/mediawiki.ui/components/icons";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons";
import ProposedTranslationHeader from "./ProposedTranslationHeader";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ProposedTranslationCard",
  components: {
    MwSpinner,
    MwCard,
    ProposedTranslationHeader,
    MwRow,
    MwCol,
    MwButton,
    ProposedTranslationActionButtons
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
    ...mapState({ mtProvider: state => state.application.currentMTProvider }),
    ...mapGetters({
      proposedTranslation: "application/getCurrentProposedTranslation"
    }),
    proposedTranslation: vm =>
      vm.$store.getters["application/getCurrentProposedTranslation"],
    contentsStyle: vm => ({
      "max-height": `calc(100% - ${vm.headerAndFooterHeight}px)`
    }),
    hasProposedTranslation: vm =>
      !!vm.proposedTranslation ||
      vm.mtProvider === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
  },
  watch: {
    // Card title can take different number of text lines
    // depending on MT provider's name length in smaller screens.
    // Watch mtProvider to update headerAndFooterHeight when needed,
    // since Element.clientHeight property is not reactive
    mtProvider() {
      this.setHeaderAndFooterHeight();
    }
  },
  mounted() {
    this.setHeaderAndFooterHeight();
  },
  methods: {
    setHeaderAndFooterHeight() {
      this.$nextTick(() => {
        this.headerAndFooterHeight =
          this.$refs.header.$el.clientHeight +
          this.$refs.footer.$el.clientHeight;
      });
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-sentence-selector {
  .sx-sentence-selector__proposed-translation {
    a {
      pointer-events: none;
    }
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
      // When contents are empty align spinner to the middle (horizontally)
      &--empty {
        align-self: center;
      }
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
