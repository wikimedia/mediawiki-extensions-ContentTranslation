<template>
  <main class="sx-section-selector-view" :class="classes">
    <sx-section-selector />
  </main>
</template>

<script>
import SxSectionSelector from "@/components/SXSectionSelector";

export default {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector,
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
