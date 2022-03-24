<template>
  <section
    class="sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7"
  >
    <!-- eslint-disable vue/no-v-html -->
    <h5 v-html="placeholderTitle" />
    <!-- eslint-enable vue/no-v-html -->
    <p
      v-if="isMappedSection"
      v-i18n:cx-sx-content-comparator-present-section-placeholder-subtitle
    />
  </section>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    isMappedSection: {
      type: Boolean,
      required: true,
    },
    i18n: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const placeholderTitle = computed(() =>
      props.isMappedSection
        ? props.i18n(
            "cx-sx-content-comparator-present-section-placeholder-title"
          )
        : props.i18n(
            "cx-sx-content-comparator-missing-section-placeholder-title"
          )
    );

    return { placeholderTitle };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "@/styles/page.less";

.sx-content-comparator__new-section-placeholder--present {
  background-color: @background-color-primary;
  color: @color-primary--active;
  // To revert parent padding = 1rem
  margin-left: -1rem;
  margin-right: -1rem;
  // No color for accent-50 with 0.5 opacity present in UI library
  box-shadow: 0 1px 3px rgba(51, 102, 204, 0.5),
    0 -1px 3px rgba(51, 102, 204, 0.5);
  h5 {
    color: @color-primary--active;
  }
}
</style>
