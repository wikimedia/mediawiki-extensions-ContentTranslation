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
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

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
    const { isSectionTitleSelected } = useApplicationState(useStore());
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
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.translated-segment-card-header {
  width: 100%;
  .mw-ui-button-group {
    background-color: @background-color-framed;
    border-bottom: @border-style-base @border-width-base @wmui-color-base80;
  }
}
</style>
