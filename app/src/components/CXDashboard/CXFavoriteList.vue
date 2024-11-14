<script setup>
import CxTranslationSuggestion from "./CXTranslationSuggestion.vue";
import { MwCard } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import useSuggestionsBookmark from "@/composables/useSuggestionsBookmark";
import { useStore } from "vuex";
import useTranslationStart from "@/composables/useTranslationStart";

const store = useStore();
const favorites = computed(() => store.state.suggestions.favorites || []);
const startTranslation = useTranslationStart();

/**
 * @param {FavoriteSuggestion} suggestion
 */
const startFavoriteTranslation = (suggestion) =>
  startTranslation(
    suggestion.title,
    suggestion.sourceLanguage,
    suggestion.targetLanguage,
    "for_later"
  );

const { removeFavoriteSuggestion } = useSuggestionsBookmark();
</script>

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
      @bookmark="removeFavoriteSuggestion(suggestion)"
    />
  </mw-card>
</template>
