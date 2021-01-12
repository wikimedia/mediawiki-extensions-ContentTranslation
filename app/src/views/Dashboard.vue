<template>
  <main class="cx-translation-dashboard">
    <cx-dashboard
      class="col-xs-12 col-md-8 col-lg-7 col-offset-lg-1 mb-4 pb-12"
    />
  </main>
</template>

<script>
import CxDashboard from "@/components/CXDashboard";

export default {
  name: "DashboardView",
  components: { CxDashboard }
};
</script>
