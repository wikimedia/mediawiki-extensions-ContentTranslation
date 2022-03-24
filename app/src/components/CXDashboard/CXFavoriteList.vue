<template>
  <mw-card
    v-if="!!favorites.length"
    class="cx-translation-list--favorites pa-0 mb-4"
  >
    <template #header>
      <h3
        v-i18n:cx-suggestion-list-favorites-division
        class="mw-ui-card__title pa-4 pt-5 mb-0"
      />
    </template>
    <cx-translation-suggestion
      v-for="(suggestion, index) in favorites"
      :key="`favorite-${index}`"
      :suggestion="suggestion"
      @click="startFavoriteTranslation(suggestion)"
      @bookmark="unmarkFavoriteSectionSuggestion(suggestion)"
    />
  </mw-card>
</template>

<script>
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import { MwCard } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import { unmarkFavoriteSectionSuggestion } from "./useFavorites";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion,
    MwCard,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const favorites = computed(() => store.state.suggestions.favorites || []);

    const startFavoriteTranslation = async (suggestion) => {
      await store.dispatch(
        "application/startFavoriteSectionTranslation",
        suggestion
      );
      router.push({
        name: "sx-translation-confirmer",
        params: { previousRoute: "dashboard" },
      });
    };

    return {
      favorites,
      startFavoriteTranslation,
      unmarkFavoriteSectionSuggestion,
    };
  },
};
</script>
