<template>
  <ul class="sx-section-selector__sections-list ma-0 pa-0">
    <mw-row
      v-for="(targetSection, sourceSection) in sections"
      :key="sourceSection"
      tag="li"
      class="ma-0"
    >
      <mw-button
        class="col justify-between py-3 px-4"
        :label="sourceSection"
        type="text"
        :outlined="false"
        @click="$emit('select-section', sourceSection)"
      >
        <slot :targetSection="targetSection" :sourceSection="sourceSection">
        </slot>
        <mw-icon :icon="mwIconArrowForward" class="mw-ui-button__indicator" />
      </mw-button>
    </mw-row>
  </ul>
</template>

<script>
import { mwIconArrowForward } from "@/lib/mediawiki.ui/components/icons";
import { MwRow, MwButton, MwIcon } from "@/lib/mediawiki.ui";

export default {
  name: "SxSectionSelectorSectionList",
  components: {
    MwRow,
    MwButton,
    MwIcon
  },
  props: {
    sections: {
      type: Object,
      required: true
    }
  },
  data: () => ({ mwIconArrowForward })
};
</script>

<style scoped></style>
