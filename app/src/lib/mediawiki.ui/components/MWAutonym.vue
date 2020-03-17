<template>
  <component
    :class="classes"
    :is="component"
    v-text="autonym(lang)"
    :lang="lang"
    :dir="getDir(lang)"
    :href="href"
    @click="handleClick"
  >
  </component>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "mw-autonym",
  props: {
    id: String,
    lang: String,
    href: String
  },
  computed: {
    ...mapState({
      languageInfo: state => state.wikipedia.languageInfo
    }),
    component() {
      if (this.href) {
        return "a";
      } else {
        return "span";
      }
    },
    classes() {
      return {
        "mw-ui-autonym": true
      };
    }
  },
  methods: {
    autonym: function(lang) {
      return this.languageInfo[lang]?.autonym || lang;
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
