import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getLanguage: "mediawiki/getLanguage"
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
      return this.getLanguage(lang)?.autonym || displayName?.of(lang) || lang;
    },
    getDirection(lang) {
      return this.getLanguage(lang)?.dir || "auto";
    }
  }
};
