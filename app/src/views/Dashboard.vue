<template>
  <main class="cx-translation-dashboard">
    <cx-dashboard
      class="col-mobile-12 col-tablet-12 col-desktop-7 col-offset-desktop-1 mb-4 pb-12"
    />
  </main>
</template>

<script>
import CxDashboard from "@/components/CXDashboard";

export default {
  name: "DashboardView",
  components: { CxDashboard },
};
</script>
