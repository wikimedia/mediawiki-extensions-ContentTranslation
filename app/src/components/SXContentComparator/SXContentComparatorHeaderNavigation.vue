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
import { mapGetters, mapState } from "vuex";
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
  data: () => ({
    mwIconPrevious,
    mwIconArrowForward
  }),
  computed: {
    ...mapGetters({
      sourceSectionTitle: "application/getCurrentSourceSectionTitle"
    }),
    currentTitleIndex() {
      return this.sectionSourceTitles.indexOf(this.sourceSectionTitle);
    }
  },
  methods: {
    previousSection() {
      const previousIndex =
        (this.currentTitleIndex - 1 + this.sectionSourceTitles.length) %
        this.sectionSourceTitles.length;

      this.$store.dispatch(
        "application/selectPageSectionByIndex",
        previousIndex
      );
    },
    nextSection() {
      const nextIndex =
        (this.currentTitleIndex + 1) % this.sectionSourceTitles.length;

      this.$store.dispatch("application/selectPageSectionByIndex", nextIndex);
    }
  }
};
</script>
