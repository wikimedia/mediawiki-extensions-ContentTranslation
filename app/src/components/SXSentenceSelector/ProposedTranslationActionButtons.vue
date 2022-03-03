<template>
  <mw-row class="sx-sentence-selector__translation-action-buttons ma-0">
    <mw-button
      :icon="mwIconPrevious"
      type="icon"
      class="sx-sentence-selector__previous-sentence-button col shrink pa-4"
      :disabled="isSectionTitleSelected"
      @click="$emit('select-previous-segment')"
    />
    <mw-button
      type="text"
      :label="$i18n('cx-sx-sentence-selector-apply-translation-button-label')"
      class="sx-sentence-selector__apply-translation-button col grow pa-4"
      :disabled="!proposedTranslation"
      @click="$emit('apply-translation')"
    />
    <mw-button
      type="text"
      :indicator="mwIconArrowForward"
      :label="$i18n('cx-sx-sentence-selector-skip-translation-button-label')"
      class="sx-sentence-selector__skip-translation-button col shrink pa-4"
      :disabled="isLastTranslationUnit"
      @click="$emit('skip-translation')"
    />
  </mw-row>
</template>

<script>
import { MwRow, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious
} from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";

export default {
  name: "ProposedTranslationActionButtons",
  components: {
    MwRow,
    MwButton
  },
  emits: ["select-previous-segment", "apply-translation", "skip-translation"],
  setup() {
    const {
      currentSourceSection,
      proposedTranslation,
      isSectionTitleSelected
    } = useApplicationState(useStore());

    const isLastTranslationUnit = computed(
      () => currentSourceSection.value.isSelectedTranslationUnitLast
    );

    return {
      isLastTranslationUnit,
      isSectionTitleSelected,
      mwIconPrevious,
      mwIconArrowForward,
      proposedTranslation
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector {
  &__translation-action-buttons {
    border-top: @border-style-base @border-width-base
      @border-color-base--disabled;
  }

  button&__apply-translation-button&__apply-translation-button {
    border-inline: @border-style-base @border-width-base @wmui-color-base80;
  }

  & button&__previous-sentence-button,
  & button&__skip-translation-button {
    min-width: max-content;
  }
}
</style>
