<template>
  <div class="sx-content-comparator__source-target-selector">
    <mw-button-group
      :items="listSelector"
      :active="selection"
      @select="updateSelection"
    />
  </div>
</template>

<script>
import { MwButtonGroup } from "@/lib/mediawiki.ui";
import { watch } from "vue";
import useListSelector from "@/components/SXContentComparator/useListSelector";

export default {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true,
    },
    isMappedSection: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:selection"],
  setup(props, { emit }) {
    const updateSelection = (selection) => emit("update:selection", selection);

    const listSelector = useListSelector(props);

    /**
     * Watch for isMappedSection prop so that we can update
     * sourceVsTarget selection accordingly, when isMappedSection
     * is updated and previous sourceVsTarget selection is no
     * longer a valid option.
     */
    watch(
      () => props.isMappedSection,
      () => {
        if (
          !listSelector.value
            .map((item) => item.value)
            .includes(props.selection)
        ) {
          updateSelection(listSelector.value[0].value);
        }
      }
    );

    return {
      listSelector,
      updateSelection,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator__content-header {
  .sx-content-comparator__source-target-selector {
    background: @background-color-interactive-subtle;
    color: @color-base;
    // Border color should be Gray200 `#eaecf0`
    border-top: @border-style-base @border-width-base @border-color-disabled;
    border-bottom: @border-style-base @border-width-base @border-color-disabled;
  }
}
</style>
