<template>
  <main class="cx-translation-dashboard">
    <mw-row>
      <mw-button
        progressive
        large
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-md-4 col-xs-12 col-lg-3 col-offset-lg-1 mb-4 mt-4"
      />
    </mw-row>
    <mw-row>
      <cx-dashboard
        class="col-xs-12 col-md-8 col-lg-7 col-offset-lg-1 mb-4 pb-12"
      />
    </mw-row>
  </main>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import CxDashboard from "@/components/CXDashboard";
import { mwIconAdd } from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "DashboardView",
  components: { MwButton, MwRow, CxDashboard },
  data: () => ({ mwIconAdd })
};
</script>
