<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { siteMapper } from "@/utils/mediawikiHelper";
import { computed } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import { useStore } from "vuex";
import useSuggestionsBookmark from "@/composables/useSuggestionsBookmark";
import {
  cdxIconBookmark,
  cdxIconBookmarkOutline,
  cdxIconLanguage,
  cdxIconLinkExternal,
} from "@wikimedia/codex-icons";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPages from "@/composables/useCurrentPages";

const store = useStore();

const { currentSourcePage: sourceArticle } = useCurrentPages();
const {
  sourceLanguageURLParameter: sourceLanguage,
  targetLanguageURLParameter: targetLanguage,
  pageURLParameter: sourceTitle,
} = useURLHandler();
const favorites = computed(() => store.state.suggestions.favorites || []);

const isFavorite = computed(() =>
  favorites.value.some(
    (favorite) =>
      sourceTitle.value === favorite.title &&
      sourceLanguage.value === favorite.sourceLanguage &&
      targetLanguage.value === favorite.targetLanguage
  )
);

const { markFavoriteSuggestion, removeFavoriteSuggestion } =
  useSuggestionsBookmark();

const markSuggestionAsFavorite = () =>
  markFavoriteSuggestion(
    sourceTitle.value,
    sourceLanguage.value,
    targetLanguage.value
  );

const unmarkSuggestionAsFavorite = () =>
  removeFavoriteSuggestion(
    new FavoriteSuggestion({
      title: sourceTitle.value,
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
    })
  );

const bookmarkIcon = computed(() =>
  isFavorite.value ? cdxIconBookmark : cdxIconBookmarkOutline
);

const toggleFavorite = computed(() =>
  isFavorite.value ? unmarkSuggestionAsFavorite : markSuggestionAsFavorite
);

const sourceArticlePath = computed(() =>
  siteMapper.getPageUrl(sourceLanguage.value || "", sourceTitle.value || "")
);

const langLinksCount = computed(() => sourceArticle.value?.langLinksCount);

const weeklyViews = computed(() =>
  Object.values(sourceArticle.value?.pageviews || {}).reduce(
    (sum, dayViews) => sum + dayViews,
    0
  )
);
</script>

<template>
  <mw-row
    class="sx-translation-confirmer__article-information ma-0 pa-4"
    align="stretch"
    justify="start"
  >
    <mw-col>
      <mw-row
        justify="between"
        class="sx-translation-confirmer__article-information__header ma-0 mb-2"
      >
        <mw-col
          class="pa-0 pe-4 flex sx-translation-confirmer__article-information__title"
          tag="a"
          :href="sourceArticlePath"
          target="_blank"
        >
          <h5 class="ma-0 me-1" v-text="sourceTitle"></h5>
          <cdx-icon size="x-small" :icon="cdxIconLinkExternal" />
        </mw-col>
        <mw-col shrink align="start">
          <cdx-button
            class="px-0"
            weight="quiet"
            :action="isFavorite ? 'progressive' : 'default'"
            @click="toggleFavorite"
          >
            <cdx-icon :icon="bookmarkIcon" />
          </cdx-button>
        </mw-col>
      </mw-row>
      <p
        class="complementary sx-translation-confirmer__article-information__stats ma-0 flex"
      >
        <cdx-icon :icon="cdxIconLanguage" size="small" class="me-1" />
        <span class="pe-3" v-text="langLinksCount" />
        <span v-i18n:cx-sx-translation-confirmer-views-count="[weeklyViews]" />
      </p>
    </mw-col>
  </mw-row>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-confirmer__article-information {
  color: @color-base;
  &__title.col.col {
    max-width: fit-content;
    align-items: baseline;
    text-decoration: none;
    color: inherit;
    .cdx-icon {
      color: @color-placeholder;
    }
  }
  &__stats {
    color: @color-subtle;
    .cdx-icon {
      color: @color-subtle;
      margin-block: auto;
    }
  }
}
</style>
