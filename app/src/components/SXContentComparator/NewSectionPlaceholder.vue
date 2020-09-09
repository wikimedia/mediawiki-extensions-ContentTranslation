<template>
  <section
    class="sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7"
  >
    <h5 v-html="placeholderTitle" />
    <p
      v-if="isMappedSection"
      v-i18n:cx-sx-content-comparator-present-section-placeholder-subtitle
    />
  </section>
</template>

<script>
export default {
  name: "SxContentComparatorNewSectionPlaceholder",
  props: {
    isMappedSection: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    placeholderTitle() {
      return this.isMappedSection
        ? this.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-title"
          )
        : this.$i18n(
            "cx-sx-content-comparator-missing-section-placeholder-title"
          );
    }
  }
};
</script>
