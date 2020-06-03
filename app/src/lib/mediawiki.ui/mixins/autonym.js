import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      languageInfo: state => state.mediawiki.languageInfo
    })
  },
  methods: {
    getAutonym(lang) {
      const displayName = Intl.DisplayNames && new Intl.DisplayNames(lang);
      return this.languageInfo[lang]?.autonym || displayName?.of(lang) || lang;
    },
    getDirection(lang) {
      return this.languageInfo[lang]?.dir || "auto";
    },
  }
};
