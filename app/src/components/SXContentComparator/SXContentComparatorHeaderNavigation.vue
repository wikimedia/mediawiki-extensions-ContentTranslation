<script setup>
import { MwCol, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious,
} from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useURLHandler from "@/composables/useURLHandler";

const props = defineProps({
  sectionSourceTitles: {
    type: Array,
    required: true,
  },
});

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
</script>

<template>
  <div class="sx-content-comparator__header-navigation flex items-center">
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
  </div>
</template>
