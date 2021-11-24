<template>
  <mw-row class="sx-sentence-selector__translation-action-buttons ma-0">
    <mw-button
      :icon="mwIconPrevious"
      type="icon"
      class="sx-sentence-selector__previous-sentence-button col pa-4"
      :disabled="isSectionTitleSelected"
      @click="$emit('select-previous-segment')"
    />
    <mw-button
      type="icon"
      :icon="mwIconArrowForward"
      class="sx-sentence-selector__skip-translation-button col pa-4 items-start"
      :disabled="isLastSentence"
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
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "@vue/composition-api";

export default {
  name: "TranslatedSegmentCardActionButtons",
  components: {
    MwRow,
    MwButton
  },
  emits: ["select-previous-segment", "skip-translation"],
  setup() {
    const {
      currentSourceSection,
      isSectionTitleSelected
    } = useApplicationState();

    const isLastSentence = computed(
      () => currentSourceSection.value.isSelectedSentenceLast
    );

    return {
      mwIconArrowForward,
      mwIconPrevious,
      isLastSentence,
      isSectionTitleSelected
    };
  }
};
</script>
