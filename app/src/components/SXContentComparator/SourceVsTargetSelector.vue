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
import { getAutonym } from "@wikimedia/language-data";
import { mapState } from "vuex";
import { MwButtonGroup } from "@/lib/mediawiki.ui";

export default {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup },
  props: {
    selection: {
      type: String,
      required: true
    },
    isMappedSection: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion
    }),
    listSelector() {
      const sourceSelectorItem = {
        value: "source_section",
        props: {
          label: this.$i18n(
            "cx-sx-content-comparator-source-selector-title",
            getAutonym(this.suggestion.sourceLanguage)
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      };

      let targetSelectorItem;

      switch (true) {
        case this.isMappedSection:
          targetSelectorItem = {
            value: "target_section",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-target-section-title",
                getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text",
              class: "px-0 py-4 mx-4"
            }
          };
          break;
        default:
          targetSelectorItem = {
            value: "target_article",
            props: {
              label: this.$i18n(
                "cx-sx-content-comparator-target-selector-full-article-title",
                getAutonym(this.suggestion.targetLanguage)
              ),
              type: "text",
              class: "px-0 py-4 mx-4"
            }
          };
      }

      return [sourceSelectorItem, targetSelectorItem];
    }
  },
  watch: {
    /**
     * Watch for isMappedSection prop so that we can update
     * sourceVsTarget selection accordingly, when isMappedSection
     * is updated and previous sourceVsTarget selection is no
     * longer a valid option.
     */
    isMappedSection() {
      if (!this.listSelector.map(item => item.value).includes(this.selection)) {
        this.updateSelection(this.listSelector[0].value);
      }
    }
  },
  methods: {
    updateSelection(selection) {
      this.$emit("update:selection", selection);
    },
    optionClass(option) {
      return {
        "sx-content-comparator__source-target-selector__option--selected":
          this.selection === option
      };
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-content-comparator__content-header {
  .sx-content-comparator__source-target-selector {
    background: @background-color-framed;
    color: @color-base;
    // Color should be base80
    border-top: @border-style-base @border-width-base
      @border-color-base--disabled;
    border-bottom: @border-style-base @border-width-base
      @border-color-base--disabled;
  }
}
</style>
