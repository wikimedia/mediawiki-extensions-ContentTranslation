<template>
  <mw-select
    ref="selectElement"
    v-model="languages"
    class="mw-ui-language-selector"
    :icon="mwIconSearch"
    option-label="name"
    option-value="code"
    :placeholder="placeholder"
    @select="onSelect"
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
import { mwIconSearch } from "./icons";
import MwSelect from "./MWSelect";
export default {
  name: "MwLanguageSelector",
  components: {
    MwSelect
  },
  props: {
    placeholder: {
      type: String
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
    onSelect(event) {
      this.$emit("select", event);
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
