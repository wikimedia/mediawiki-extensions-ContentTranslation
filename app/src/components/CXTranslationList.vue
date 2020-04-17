<template>
  <mw-card
    :class="`cx-translation-list--${translationStatus}`"
    v-show="active"
    :title="$i18n(`cx-translation-label-${translationStatus}`)"
  >
    <mw-spinner v-if="!loaded" />
    <div
      class="row pa-0 ma-0"
      :key="`${translationStatus}-${index}`"
      v-for="(item, index) in translations"
    >
      <cx-translation-work
        class="col-12 pa-0 ma-0"
        :translation="item.translation"
      />
    </div>
  </mw-card>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationWork from "./CXTranslationWork";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import { mapState } from "vuex";

export default {
  name: "cx-translation-list",
  components: {
    CxTranslationWork,
    MwCard,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    translationStatus: {
      type: String,
      validator: value => {
        // The value must match one of these strings
        return ["published", "draft"].indexOf(value) !== -1;
      }
    },
    sourceLanguage: {
      type: String,
      default: "en"
    },
    targetLangauge: {
      type: String
    }
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    translations() {
      if (this.translationStatus === "published") {
        return this.$store.state.translator.publishedTranslations;
      } else {
        return this.$store.state.translator.draftTranslations;
      }
    }
  },
  watch: {
    translations: function() {
      this.loaded = true;
    }
  }
};
</script>
