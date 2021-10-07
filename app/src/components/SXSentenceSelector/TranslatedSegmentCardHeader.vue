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
import useApplicationState from "@/composables/useApplicationState";
import { computed } from "@vue/composition-api";

export default {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true,
      validator: value => ["sentence", "paragraph"].includes(value)
    }
  },
  setup(props, context) {
    const { isSectionTitleSelected } = useApplicationState();
    const scopeOptions = computed(() => [
      {
        value: "sentence",
        props: {
          label: context.root.$i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },

      {
        value: "paragraph",
        props: {
          label: context.root.$i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: isSectionTitleSelected.value
        }
      }
    ]);

    const updateSelection = selection =>
      context.emit("update:selection", selection);

    return { scopeOptions, updateSelection };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.translated-segment-card-header {
  width: 100%;
  .mw-ui-button-group {
    background-color: @background-color-framed;
    border-bottom: @border-style-base @border-width-base @wmui-color-base80;
  }
}
</style>
