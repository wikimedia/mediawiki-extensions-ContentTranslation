import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      languageInfo: state => state.mediawiki.languageInfo
    })
  },
  methods: {
    getAutonym(lang) {
      let displayName;
      try {
        displayName = Intl.DisplayNames && new Intl.DisplayNames(lang);
      } catch {
        // Locales not supported by Intl.DisplayNames will throw error.
        // Skip
      }
      return this.languageInfo[lang]?.autonym || displayName?.of(lang) || lang;
    },
    getDirection(lang) {
      return this.languageInfo[lang]?.dir || "auto";
    }
  }
};
