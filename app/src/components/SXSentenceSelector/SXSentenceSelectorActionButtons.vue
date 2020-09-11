<template>
  <mw-row class="sx-sentence-selector__translation-action-buttons ma-0">
    <mw-button
      :icon="mwIconPrevious"
      type="icon"
      class="sx-sentence-selector__previous-sentence-button col shrink pa-4"
      :disabled="isStartingSentence"
      @click="selectPreviousSentence"
    />
    <mw-button
      type="text"
      :label="$i18n('cx-sx-sentence-selector-apply-translation-button-label')"
      class="sx-sentence-selector__apply-translation-button col grow pa-4"
      @click="applyTranslation"
    />
    <mw-button
      type="text"
      :indicator="mwIconArrowForward"
      :label="$i18n('cx-sx-sentence-selector-skip-translation-button-label')"
      class="sx-sentence-selector__skip-translation-button col shrink pa-4"
      @click="skipTranslation"
    />
  </mw-row>
</template>

<script>
import { MwRow, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious
} from "@/lib/mediawiki.ui/components/icons";
import { mapGetters } from "vuex";
export default {
  name: "SxSentenceSelectorActionButtons",
  components: {
    MwRow,
    MwButton
  },
  props: {
    translation: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconPrevious,
    mwIconArrowForward
  }),
  computed: {
    ...mapGetters({
      isStartingSentence: "application/isCurrentSentenceFirst"
    })
  },
  methods: {
    applyTranslation() {
      this.$store.dispatch("application/applyTranslationToSelectedSentence", {
        translation: this.translation
      });
    },
    skipTranslation() {
      this.$store.dispatch("application/selectNextSentence");
    },
    selectPreviousSentence() {
      this.$store.dispatch("application/selectPreviousSentence");
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector__translation-action-buttons {
  border-top: @border-style-base @border-width-base @border-color-base--disabled;
  button {
    // Icon and text buttons have a minimum width of 0. Not sure if there is any reason for that rule or we can remove it.
    min-width: max-content;
    &.sx-sentence-selector__apply-translation-button {
      // TODO: Fix these to be base80. Currently base70.
      border-left: @border-style-base @border-width-base @wmui-color-base80;
      border-right: @border-style-base @border-width-base @wmui-color-base80;
    }
  }
}
</style>
