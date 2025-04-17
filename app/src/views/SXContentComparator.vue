<template>
  <main class="sx-content-comparator-view" :class="classes">
    <sx-content-comparator />
  </main>
</template>

<script>
import SxContentComparator from "@/components/SXContentComparator";

export default {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator,
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile,
      };
    },
  },
};
</script>
