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
  mwIconPrevious,
} from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useURLHandler from "@/composables/useURLHandler";

export default {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol,
    MwButton,
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { sectionURLParameter } = useURLHandler();

    const currentTitleIndex = computed(() =>
      props.sectionSourceTitles.indexOf(sectionURLParameter.value)
    );

    const { selectPageSectionByTitle } = usePageSectionSelect();

    const goToPreviousSection = () => {
      const previousIndex =
        (currentTitleIndex.value - 1 + props.sectionSourceTitles.length) %
        props.sectionSourceTitles.length;

      const previousSectionTitle = props.sectionSourceTitles[previousIndex];
      selectPageSectionByTitle(previousSectionTitle);
    };

    const goToNextSection = () => {
      const nextIndex =
        (currentTitleIndex.value + 1) % props.sectionSourceTitles.length;

      const nextSectionTitle = props.sectionSourceTitles[nextIndex];
      selectPageSectionByTitle(nextSectionTitle);
    };

    return {
      goToNextSection,
      goToPreviousSection,
      mwIconPrevious,
      mwIconArrowForward,
    };
  },
};
</script>
