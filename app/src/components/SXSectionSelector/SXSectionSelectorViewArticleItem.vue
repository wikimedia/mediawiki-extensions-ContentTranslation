<script setup>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";

defineProps({
  path: {
    type: String,
    required: true,
  },
  autonym: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <mw-row tag="li" class="ma-0">
    <mw-button
      :href="path"
      target="_blank"
      class="col justify-between py-3 px-4"
      :indicator="mwIconLinkExternal"
      :label="
        $i18n('cx-sx-section-selector-view-article-button-label', autonym)
      "
      type="text"
    />
  </mw-row>
</template>
