<template>
  <section
    class="sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7"
  >
    <h5 v-text="placeholderTitle" />
    <p v-if="placeholderSubtitle" v-text="placeholderSubtitle" />
  </section>
</template>

<script>
export default {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    placeholderTitle: {
      type: String,
      required: true,
    },
    placeholderSubtitle: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import "@/styles/page.less";

.sx-content-comparator__new-section-placeholder--present {
  background-color: @background-color-progressive-subtle;
  color: @color-progressive--active;
  // To revert parent padding = 1rem
  margin-left: -1rem;
  margin-right: -1rem;
  // No color for accent-50 with 0.5 opacity present in UI library
  box-shadow: 0 1px 3px rgba(51, 102, 204, 0.5),
    0 -1px 3px rgba(51, 102, 204, 0.5);
  h5 {
    color: @color-progressive--active;
  }
}
</style>
