<template>
  <mw-select
    v-model="languages"
    class="mw-ui-language-selector"
    :icon="mwIconSearch"
    optionLabel="name"
    optionValue="code"
    :placeholder="placeholder"
  >
    <template v-slot:option="slotProps">
      <div class="row">
        <span class="mw-ui-language-selector__result-name col-10">{{
          slotProps.option.label
        }}</span>
        <span class="mw-ui-language-selector__result-code col-2 justify-end">{{
          slotProps.option.value
        }}</span>
      </div>
    </template>
  </mw-select>
</template>

<script>
import MwUiIcon from "./MWIcon";
import { mwIconSearch } from "./icons";
import MwSelect from "./MWSelect";
export default {
  name: "mw-language-selector",
  data: () => ({
    mwIconSearch
  }),
  components: {
    MwSelect
  },
  props: {
    placeholder: String,
    languages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    classes() {
      return {
        "mw-ui-language-selector": true
      };
    },
    suggestion() {
      const suggestions = this.languages.filter(result => {
        return result.name.substring(0, this.search.length) === this.search;
      });
      if (suggestions?.length) {
        return suggestions[0].name;
      }
      return null;
    },
    results() {
      const query = this.search.toLowerCase();
      return this.languages.filter(
        result =>
          result.code.toLowerCase().substring(0, query.length) === query ||
          result.name.toLowerCase().substring(0, query.length) === query
      );
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    onQueryUpdate(value) {
      this.search = value || "";
    }
  }
};
</script>

<style lang="less">
@import "../variables/wikimedia-ui-base.less";

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
