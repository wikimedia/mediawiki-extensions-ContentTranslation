<template>
  <div class="translated-segment-card-header">
    <mw-button-group
      :items="scopeOptions"
      :active="selection"
      @select="updateSelection"
    />
  </div>
</template>

<script>
import { MwButtonGroup } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

export default {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true,
      validator: (value) => ["sentence", "paragraph"].includes(value),
    },
  },
  emits: ["update:selection"],
  setup(props, { emit }) {
    const { isSectionTitleSelected } = useCurrentPageSection();
    const bananaI18n = useI18n();

    const scopeOptions = computed(() => [
      {
        value: "sentence",
        props: {
          label: bananaI18n.i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
        },
      },

      {
        value: "paragraph",
        props: {
          label: bananaI18n.i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: isSectionTitleSelected.value,
        },
      },
    ]);

    const updateSelection = (selection) => emit("update:selection", selection);

    return { scopeOptions, updateSelection };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.translated-segment-card-header {
  width: 100%;
  .mw-ui-button-group {
    background-color: @background-color-interactive-subtle;
    border-bottom: @border-style-base @border-width-base #eaecf0;
  }
}
</style>
