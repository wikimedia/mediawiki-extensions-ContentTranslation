<template>
  <div class="mt-retry-body">
    <mw-row class="retry-body__action-buttons">
      <mw-col cols="12">
        <mw-icon :icon="mwIconAlert" />
        <span v-i18n:cx-sx-proposed-translation-not-available-message />
      </mw-col>
    </mw-row>
    <mw-row class="retry-body__action-buttons">
      <mw-col cols="6">
        <mw-button
          :icon="mwIconRefresh"
          type="text"
          :label="$i18n('cx-sx-proposed-translation-retry-button')"
          class="retry-button pa-5 pt-4"
          progressive
          @click="$emit('retry-translation')"
        />
      </mw-col>
      <mw-col cols="6">
        <mw-button
          :icon="mwIconMenu"
          type="text"
          :label="$i18n('cx-sx-proposed-translation-other-options-button')"
          class="other-options-button pa-5 pt-4"
          progressive
          @click="$emit('configure-options')"
        />
      </mw-col>
    </mw-row>
  </div>
</template>

<script>
import { MwIcon, MwButton, MwGrid, MwCol, MwRow } from "@/lib/mediawiki.ui";
import {
  mwIconAlert,
  mwIconRefresh,
  mwIconMenu,
} from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "RetryMtCard",
  components: { MwButton, MwIcon, MwGrid, MwCol, MwRow },
  emits: ["configure-options", "retry-translation"],
  setup() {
    return {
      mwIconAlert,
      mwIconRefresh,
      mwIconMenu,
    };
  },
};
</script>
