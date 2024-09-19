<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { siteMapper } from "@/utils/mediawikiHelper";
import { computed } from "vue";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import useSuggestionsBookmark from "@/composables/useSuggestionsBookmark";
import useTranslationSize from "@/composables/useTranslationSize";
import {
  cdxIconBookmark,
  cdxIconBookmarkOutline,
  cdxIconLanguage,
  cdxIconClock,
  cdxIconLinkExternal,
  cdxIconChart,
} from "@wikimedia/codex-icons";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentPages from "@/composables/useCurrentPages";

const store = useStore();
const bananaI18n = useI18n();

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

const { translationSizeMessageArgs } = useTranslationSize();

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

const formatPageViews = (views) => {
  // Define thresholds and corresponding units
  const units = [
    { value: 1e9, suffix: "B" }, // 1 billion
    { value: 1e6, suffix: "M" }, // 1 million
    { value: 1e3, suffix: "K" }, // 1 thousand
  ];

  // Loop through the units to find the appropriate one
  for (let i = 0; i < units.length; i++) {
    if (views >= units[i].value) {
      // Divide by the unit's value and format the result
      return (
        (views / units[i].value).toFixed(1).replace(/\.0$/, "") +
        units[i].suffix
      );
    }
  }

  // If no units match, return the number as a string
  return views.toString();
};

const weeklyViews = computed(() => {
  const views = Object.values(sourceArticle.value?.pageviews || {}).reduce(
    (sum, dayViews) => sum + dayViews,
    0
  );

  return formatPageViews(views);
});

const timeEstimateMessage = computed(() => {
  if (translationSizeMessageArgs.value) {
    return bananaI18n.i18n(...translationSizeMessageArgs.value);
  }

  return "";
});

const isQuickTranslation = computed(() => {
  // according to the specifications, a translation is considered  quick, if it takes less than 15 minutes (T360570)
  if (translationSizeMessageArgs.value) {
    const calculatedMinutesEstimate = translationSizeMessageArgs.value[2];

    return calculatedMinutesEstimate < 15;
  }

  return false;
});
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
      <div
        class="complementary sx-translation-confirmer__article-information__stats ma-0 flex"
      >
        <div>
          <span>
            <cdx-icon :icon="cdxIconLanguage" size="small" class="me-1" />
            <span class="pe-3" v-text="langLinksCount" />
          </span>
          <span>
            <cdx-icon :icon="cdxIconChart" size="small" class="me-1" />
            <span
              v-i18n:cx-sx-translation-confirmer-views-count="[weeklyViews]"
              class="pe-3"
            />
          </span>
        </div>
        <span
          class="sx-translation-confirmer__article-information__stats__time-estimate"
          :class="{
            'sx-translation-confirmer__article-information__stats__time-estimate--quick':
              isQuickTranslation,
          }"
        >
          <cdx-icon :icon="cdxIconClock" size="small" class="me-1" />
          <span v-text="timeEstimateMessage" />
        </span>
      </div>
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
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: @spacing-50;
    .cdx-icon {
      color: @color-subtle;
      margin-block: auto;
    }

    &__time-estimate--quick {
      color: @color-success;
      .cdx-icon {
        color: @color-success;
        margin-block: auto;
      }
    }
  }
}
</style>
