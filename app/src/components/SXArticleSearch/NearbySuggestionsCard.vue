<template>
  <mw-card
    v-if="nearbyPages && nearbyPages.length"
    class="sx-article-search__nearby pa-0 mb-0 pa-4"
  >
    <template #header>
      <h5
        v-i18n:cx-sx-article-search-nearby-title
        class="ma-0 pb-1 sx-article-search__nearby-header"
      >
        Nearby
      </h5>
    </template>
    <sx-search-article-suggestion
      v-for="suggestion in nearbyPages"
      :key="suggestion.pageid"
      :suggestion="suggestion"
      @click.native="$emit('suggestion-clicked', suggestion)"
    />
  </mw-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import SxSearchArticleSuggestion from "./SXSearchArticleSuggestion";
import { MwCard } from "@/lib/mediawiki.ui";

export default {
  name: "NearbySuggestionsCard",
  components: { SxSearchArticleSuggestion, MwCard },
  computed: {
    ...mapState({
      sourceLanguage: state => state.application.sourceLanguage
    }),
    ...mapGetters({
      nearbyPages: "mediawiki/getNearbyPages"
    })
  },
  watch: {
    sourceLanguage: {
      handler() {
        this.fetchNearbyPages();
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      fetchNearbyPages: "mediawiki/fetchNearbyPages"
    })
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-article-search__nearby {
  &.mw-ui-card {
    box-shadow: none;
  }
  &-header {
    color: @wmui-color-base30;
  }
}
</style>
