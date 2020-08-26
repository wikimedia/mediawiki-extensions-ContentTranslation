<template>
  <mw-col class="justify-end" align="center">
    <mw-button
      class="pa-0 pe-1"
      type="icon"
      :icon="mwIconPrevious"
      @click="previousSection"
    />
    <mw-button
      class="pa-0 ps-1"
      type="icon"
      :icon="mwIconArrowForward"
      @click="nextSection"
    />
  </mw-col>
</template>

<script>
import { MwCol, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious
} from "@/lib/mediawiki.ui/components/icons";
export default {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol,
    MwButton
  },
  props: {
    sourceSectionTitle: {
      type: String,
      required: true
    },
    sectionSourceTitles: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    mwIconPrevious,
    mwIconArrowForward
  }),
  methods: {
    previousSection() {
      const currentIndex = this.sectionSourceTitles.indexOf(
        this.sourceSectionTitle
      );
      const previousIndex =
        currentIndex === 0
          ? this.sectionSourceTitles.length - 1
          : currentIndex - 1;

      this.$emit(
        "update:sourceSectionTitle",
        this.sectionSourceTitles[previousIndex]
      );
    },
    nextSection() {
      const currentIndex = this.sectionSourceTitles.indexOf(
        this.sourceSectionTitle
      );
      const nextIndex =
        currentIndex === this.sectionSourceTitles.length - 1
          ? 0
          : currentIndex + 1;

      this.$emit(
        "update:sourceSectionTitle",
        this.sectionSourceTitles[nextIndex]
      );
    }
  }
};
</script>
