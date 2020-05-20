<template>
  <span
    :class="classes"
    v-text="autonym(lang)"
    :lang="lang"
    :dir="getDir(lang)"
    @click="handleClick"
  >
  </span>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "mw-autonym",
  props: {
    lang: String
  },
  computed: {
    ...mapState({
      languageInfo: state => state.mediawiki.languageInfo
    }),
    classes() {
      return {
        "mw-ui-autonym": true
      };
    }
  },
  methods: {
    autonym: function(lang) {
      const displayName = Intl.DisplayNames && new Intl.DisplayNames(lang);
      return this.languageInfo[lang]?.autonym || displayName?.of(lang) || lang;
    },
    getDir: function(lang) {
      return this.languageInfo[lang]?.dir || "auto";
    },
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
