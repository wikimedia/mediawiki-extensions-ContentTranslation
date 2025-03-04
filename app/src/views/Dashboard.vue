<template>
  <main class="cx-translation-dashboard">
    <!-- Set "inline" padding for dashboard equal to the header's inline padding -->
    <cx-dashboard class="mb-4 pb-12 px-3 px-tablet-10" />
  </main>
</template>

<script>
import CxDashboard from "@/components/CXDashboard";

export default {
  name: "DashboardView",
  components: { CxDashboard },
};
</script>
