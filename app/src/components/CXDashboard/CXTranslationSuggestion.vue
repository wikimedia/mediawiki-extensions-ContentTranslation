<script setup>
import { MwIcon, MwThumbnail, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconClose,
  mwIconBookmark,
  mwIconBookmarkOutline,
  mwIconArrowNext,
} from "@/lib/mediawiki.ui/components/icons";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import { computed, inject } from "vue";
import { getDir } from "@wikimedia/language-data";
import { useStore } from "vuex";
import useApplicationState from "../../composables/useApplicationState";
import useTranslationSize from "@/composables/useTranslationSize";

const props = defineProps({
  suggestion: {
    type: [ArticleSuggestion, SectionSuggestion, FavoriteSuggestion],
    required: true,
  },
});

const store = useStore();
const { bytesToMinutes } = useTranslationSize();
const suggestion = computed(() => props.suggestion);
const title = computed(
  () => suggestion.value.sourceTitle || suggestion.value.title
);

const page = computed(() =>
  store.getters["mediawiki/getPage"](
    suggestion.value.sourceLanguage,
    title.value
  )
);

const missingSectionsCount = computed(
  () => suggestion.value?.missingSectionsCount
);

const description = computed(() => page.value?.description);

const isSectionSuggestion = computed(
  () => suggestion.value instanceof SectionSuggestion
);

const isFavoriteSuggestion = computed(
  () => suggestion.value instanceof FavoriteSuggestion
);

const { sourceLanguageAutonym, targetLanguageAutonym } =
  useApplicationState(store);

const bookmarkIcon = computed(() =>
  isFavoriteSuggestion.value ? mwIconBookmark : mwIconBookmarkOutline
);

const colors = inject("colors");
const bookmarkIconColor = computed(() =>
  isFavoriteSuggestion.value ? colors.blue600 : "currentColor"
);

const isQuickTranslation = computed(() => {
  // according to the specifications, a translation is considered  quick, if it takes less than 15 minutes (T360570)
  return bytesToMinutes(page.value?.articleSize) < 15;
});

defineEmits(["close", "bookmark"]);
</script>

<template>
  <div v-if="suggestion" class="row cx-suggestion pa-4 ma-0">
    <div class="col shrink pe-4">
      <mw-thumbnail
        class="cx-suggestion__thumbnail"
        :thumbnail="page && page.thumbnail"
      />
    </div>
    <mw-row class="col cx-suggestion__information-panel ma-0" align="start">
      <mw-row
        direction="column"
        class="ma-0 col cx-suggestion__information-panel__main-body pe-2"
        align="start"
      >
        <mw-col shrink class="mb-2">
          <h5
            class="my-0 cx-suggestion__source-title"
            :lang="suggestion.sourceLanguage"
            :dir="getDir(suggestion.sourceLanguage)"
            v-text="title"
          />
        </mw-col>
        <mw-col shrink>
          <p
            class="ma-0 cx-suggestion__source-description complementary"
            :lang="suggestion.sourceLanguage"
            :dir="getDir(suggestion.sourceLanguage)"
            v-text="description"
          />
        </mw-col>
        <mw-col
          v-if="isQuickTranslation && !isSectionSuggestion"
          shrink
          class="cx-suggestion__information-panel__quick-translation mt-auto"
        >
          <small v-i18n:cx-sx-translation-suggestion-quick />
        </mw-col>
        <mw-col
          v-if="isSectionSuggestion"
          class="cx-suggestion__information-panel__bottom cx-suggestion__missing-sections"
          shrink
        >
          <small
            v-i18n:cx-sx-translation-suggestion-info="[missingSectionsCount]"
          />
        </mw-col>
        <mw-col
          v-else-if="isFavoriteSuggestion"
          class="cx-suggestion__information-panel__bottom cx-suggestion__language-pair"
          shrink
        >
          <mw-row justify="between" class="ma-0">
            <mw-col grow>
              <small v-text="sourceLanguageAutonym" />
              <mw-icon :icon="mwIconArrowNext" size="14" class="mx-1" />
              <small v-text="targetLanguageAutonym" />
            </mw-col>
            <mw-col
              v-if="!!missingSectionsCount"
              shrink
              class="cx-suggestion__favorite-missing-sections"
            >
              <small
                v-i18n:cx-sx-translation-suggestion-info="[
                  missingSectionsCount,
                ]"
              />
            </mw-col>
          </mw-row>
        </mw-col>
      </mw-row>
      <mw-col shrink>
        <mw-icon
          v-if="!isFavoriteSuggestion"
          :icon="mwIconClose"
          size="24"
          class="cx-suggestion__discard-button mb-4"
          @click.stop="$emit('close')"
        />
        <mw-icon
          class="cx-suggestion__favorite-button"
          :icon="bookmarkIcon"
          size="24"
          :icon-color="bookmarkIconColor"
          @click.stop="$emit('bookmark')"
        />
      </mw-col>
    </mw-row>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-suggestion {
  border-top: @border-width-base @border-style-base #eaecf0;
  cursor: pointer;
  min-height: 100px;
  line-height: normal;
  transition: background-color 100ms, border-color 100ms, transform 1s,
    opacity 1s;
  &:hover {
    background-color: @background-color-progressive-subtle;
  }

  &__information-panel {
    &__main-body {
      height: @size-full;
    }
    &__quick-translation {
      color: @color-success;
    }
  }
  &__source-description {
    color: @color-subtle;
  }
  &__missing-sections {
    margin-top: auto;
    color: #72777d;
  }
  &__favorite-missing-sections {
    color: #72777d;
    min-width: fit-content;
  }
  &__language-pair {
    width: 100%;
    margin-top: auto;
    color: #72777d;
  }
}
</style>
