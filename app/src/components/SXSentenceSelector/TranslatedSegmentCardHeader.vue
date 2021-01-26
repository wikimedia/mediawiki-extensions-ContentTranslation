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

export default {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true
    }
  },
  computed: {
    scopeOptions: vm => [
      {
        value: "sentence",
        props: {
          label: vm.$i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },
      /**
       * This options doesn't work at the moment. Functionality will be added in following
       * patches
       */
      {
        value: "paragraph",
        props: {
          label: vm.$i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      }
    ]
  },
  methods: {
    updateSelection(selection) {
      this.$emit("update:selection", selection);
    }
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