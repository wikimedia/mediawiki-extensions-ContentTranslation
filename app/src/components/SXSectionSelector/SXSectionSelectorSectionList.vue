<script setup>
import { MwRow } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconNext } from "@wikimedia/codex-icons";

defineProps({
  /**
   * @type {{targetTitle: string, sourceTitle: string}[]}
   */
  sections: {
    type: Array,
    required: true,
  },
});

defineEmits(["select-section"]);
</script>

<template>
  <ul class="sx-section-selector__sections-list ma-0 pa-0">
    <mw-row
      v-for="section in sections"
      :key="section.sourceTitle"
      tag="li"
      class="ma-0"
    >
      <cdx-button
        weight="quiet"
        class="col justify-between items-center py-3 px-4"
        @click="$emit('select-section', section.sourceTitle)"
      >
        <slot
          :target-section="section.targetTitle"
          :source-section="section.sourceTitle"
        >
        </slot>
        <cdx-icon :icon="cdxIconNext" />
      </cdx-button>
    </mw-row>
  </ul>
</template>
