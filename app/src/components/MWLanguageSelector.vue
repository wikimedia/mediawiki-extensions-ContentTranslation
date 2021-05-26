<template>
  <mw-select
    ref="selectElement"
    :value="languages"
    class="mw-ui-language-selector"
    :icon="mwIconSearch"
    :placeholder="placeholder"
    :filter-by="languageSearch"
    @select="onSelect"
  >
    <template #option="slotProps">
      <div class="row">
        <span
          class="mw-ui-language-selector__result-name col-10"
          :dir="getDir(slotProps.option.value)"
          >{{ getAutonym(slotProps.option.value) }}</span
        >
        <span class="mw-ui-language-selector__result-code col-2 justify-end">{{
          slotProps.option.label
        }}</span>
      </div>
    </template>
  </mw-select>
</template>

<script>
import { mwIconSearch } from "../lib/mediawiki.ui/components/icons";
import { MwSelect } from "../lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";

export default {
  name: "MwLanguageSelector",
  components: {
    MwSelect
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    languages: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    mwIconSearch
  }),
  computed: {
    classes() {
      return {
        "mw-ui-language-selector": true
      };
    }
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.selectElement.focus();
    }
  },
  methods: {
    getAutonym,
    getDir,
    onSelect(event) {
      this.$emit("select", event);
    },
    languageSearch({ value, label }, query) {
      return (
        getAutonym(value)
          .toLowerCase()
          .startsWith(query.toLowerCase()) ||
        // Search by language code
        (value + "").toLowerCase().startsWith(query.toLowerCase())
      );
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.mw-ui-language-selector {
  &__results {
    padding: 1em;
    overflow-y: auto;
    border: @border-width-base @border-style-base @border-color-base;
  }
  &__result {
    cursor: pointer;
    &:hover {
      background-color: @background-color-code;
    }
    &-code {
      color: @color-base--subtle;
    }
  }
}
</style>
