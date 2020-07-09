<template>
  <mw-card v-show="active" :class="`cx-translation-list--${translationStatus}`">
    <template slot="header">
      <h3
        class="mw-ui-card__title pa-4 pt-5 mb-0"
        v-text="$i18n(`cx-translation-label-${translationStatus}`)"
      />
    </template>
    <mw-spinner v-if="!loaded" />
    <cx-translation-work
      v-for="(translation, index) in translations"
      :key="`${translationStatus}-${index}`"
      :translation="translation"
    />
  </mw-card>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationWork from "./CXTranslationWork";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import { mapState } from "vuex";

export default {
  name: "CxTranslationList",
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
    targetLanguage: {
      type: String
    }
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    translations() {
      if (this.translationStatus === "published") {
        return this.$store.getters["translator/getPublishedTranslations"]();
      } else {
        return this.$store.getters["translator/getDraftTranslations"]();
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

<style lang="less">
.cx-translation-list--draft,
.cx-translation-list--published {
  // Override the card title style to adjust height
  &.mw-ui-card > .mw-ui-card__title {
    height: auto;
  }
}
</style>
