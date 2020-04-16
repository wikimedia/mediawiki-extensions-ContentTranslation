<template>
  <div class="mw-ui-language-selector row">
    <mw-input
      :value="search"
      type="search"
      tabindex="0"
      class="mw-ui-language-selector__input col-12"
      :icon="mwIconSearch"
      :suggestion="suggestion"
      @update="onQueryUpdate"
      :placeholder="placeholder"
    />
    <div class="mw-ui-language-selector__results col-12">
      <div
        v-for="result in results"
        v-bind:key="result.code"
        class="mw-ui-language-selector__result row"
        @click="$emit('select', result.code)"
      >
        <span class="mw-ui-language-selector__result-name col-10">{{
          result.name
        }}</span>
        <span class="mw-ui-language-selector__result-code col-2">{{
          result.code
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MwUiIcon from "./MWIcon";
import { mwIconSearch } from "./icons";
import MwInput from "./MWInput";
export default {
  name: "mw-language-selector",
  data: () => ({
    search: "",
    mwIconSearch
  }),
  components: {
    MwInput
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
@import "../variables/colors.less";

.mw-ui-language-selector {
  &__results {
    padding: 1em;
    overflow-y: auto;
    border: 1px solid @colorGray12;
  }
  &__result {
    cursor: pointer;
    &:hover {
      background-color: @colorGray15;
    }
    &-code {
      color: @colorGray7;
    }
  }
}
</style>
