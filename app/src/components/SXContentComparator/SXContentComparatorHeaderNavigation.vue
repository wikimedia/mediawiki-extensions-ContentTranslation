<template>
  <mw-col class="justify-end" align="center">
    <mw-button
      class="pa-0 pe-1"
      type="icon"
      :icon="mwIconPrevious"
      @click="goToPreviousSection"
    />
    <mw-button
      class="pa-0 ps-1"
      type="icon"
      :icon="mwIconArrowForward"
      @click="goToNextSection"
    />
  </mw-col>
</template>

<script>
import { MwCol, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious
} from "@/lib/mediawiki.ui/components/icons";
import { computed } from "@vue/composition-api";
import useCompareContents from "./useCompareContents";

export default {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol,
    MwButton
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const store = context.root.$store;
    const { sourceSectionTitle } = useCompareContents();
    const currentTitleIndex = computed(() =>
      props.sectionSourceTitles.indexOf(sourceSectionTitle.value)
    );

    const goToPreviousSection = () => {
      const previousIndex =
        (currentTitleIndex.value - 1 + props.sectionSourceTitles.length) %
        props.sectionSourceTitles.length;

      store.dispatch("application/selectPageSectionByIndex", previousIndex);
    };

    const goToNextSection = () => {
      const nextIndex =
        (currentTitleIndex.value + 1) % props.sectionSourceTitles.length;

      store.dispatch("application/selectPageSectionByIndex", nextIndex);
    };

    return {
      goToNextSection,
      goToPreviousSection,
      mwIconPrevious,
      mwIconArrowForward
    };
  }
};
</script>
