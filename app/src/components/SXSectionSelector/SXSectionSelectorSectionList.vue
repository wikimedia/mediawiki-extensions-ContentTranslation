<template>
  <ul class="sx-section-selector__sections-list ma-0 pa-0">
    <mw-row
      v-for="section in sections"
      :key="section.sourceTitle"
      tag="li"
      class="ma-0"
    >
      <mw-button
        class="col justify-between py-3 px-4"
        :label="section.sourceTitle"
        type="text"
        @click="$emit('select-section', section.sourceTitle)"
      >
        <slot
          :target-section="section.targetTitle"
          :source-section="section.sourceTitle"
        >
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
    MwIcon,
  },
  props: {
    /**
     * @type {{targetTitle: string, sourceTitle: string}[]}
     */
    sections: {
      type: Array,
      required: true,
    },
  },
  emits: ["select-section"],
  data: () => ({ mwIconArrowForward }),
};
</script>
