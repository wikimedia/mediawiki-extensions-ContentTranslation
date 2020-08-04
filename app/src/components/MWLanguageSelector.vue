<template>
  <mw-select
    ref="selectElement"
    v-model="languageOptions"
    class="mw-ui-language-selector"
    :icon="mwIconSearch"
    :placeholder="placeholder"
    :filter-by="languageSearch"
    @select="onSelect"
  >
    <template v-slot:option="slotProps">
      <div class="row">
        <span class="mw-ui-language-selector__result-name col-10">{{
          slotProps.option.label.autonym
        }}</span>
        <span class="mw-ui-language-selector__result-code col-2 justify-end">{{
          slotProps.option.value
        }}</span>
      </div>
    </template>
  </mw-select>
</template>

<script>
import { mwIconSearch } from "../lib/mediawiki.ui/components/icons";
import { MwSelect } from "../lib/mediawiki.ui";
import { mapGetters } from "vuex";

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
    },
    ...mapGetters({
      getLanguage: "mediawiki/getLanguage"
    }),
    languageOptions() {
      const options = {};
      return this.languages.reduce(
        (options, language) => ({
          ...options,
          [language.code]: this.getLanguage(language.code)
        }),
        {}
      );
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
    },
    languageSearch({ value, label }, query) {
      return (
        (label.autonym + "").toLowerCase().startsWith(query.toLowerCase()) ||
        // Search by language name in current user language
        (label.name + "").toLowerCase().startsWith(query.toLowerCase()) ||
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
