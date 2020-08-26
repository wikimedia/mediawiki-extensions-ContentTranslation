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
      :outlined="false"
    />
  </mw-row>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "SxSectionSelectorViewArticleItem",
  components: {
    MwRow,
    MwButton
  },
  props: {
    path: {
      type: String,
      required: true
    },
    autonym: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconLinkExternal
  })
};
</script>
