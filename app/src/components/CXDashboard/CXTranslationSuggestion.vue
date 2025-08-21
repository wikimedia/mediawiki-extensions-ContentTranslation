<script setup>
import { MwThumbnail, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { CdxIcon } from "@wikimedia/codex";
import {
  cdxIconClose,
  cdxIconBookmark,
  cdxIconBookmarkOutline,
  cdxIconArrowNext,
  cdxIconArticles,
} from "@wikimedia/codex-icons";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import { computed, inject } from "vue";
import { getDir } from "@wikimedia/language-data";
import { useStore } from "vuex";
import useApplicationState from "../../composables/useApplicationState";
import { isQuickTranslationByBytes } from "@/utils/translationTimeEstimator";
import CollectionArticleSuggestion from "@/wiki/cx/models/collectionArticleSuggestion";
import CollectionSectionSuggestion from "@/wiki/cx/models/collectionSectionSuggestion";
import CustomInfoChip from "@/components/CXDashboard/CustomInfoChip.vue";

const props = defineProps({
  suggestion: {
    type: [ArticleSuggestion, SectionSuggestion, FavoriteSuggestion],
    required: true,
  },
});

const store = useStore();
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

const easyMissingSectionsCount = computed(
  () => suggestion.value?.easyMissingSectionsCount
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
  isFavoriteSuggestion.value ? cdxIconBookmark : cdxIconBookmarkOutline
);

const colors = inject("colors");
const bookmarkIconColor = computed(() =>
  isFavoriteSuggestion.value ? colors.blue600 : "currentColor"
);

const isQuickTranslation = computed(() =>
  isQuickTranslationByBytes(page.value?.articleSize)
);

const isCollectionSuggestion = computed(
  () =>
    suggestion.value instanceof CollectionArticleSuggestion ||
    suggestion.value instanceof CollectionSectionSuggestion
);

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
            class="ma-0 cx-suggestion__source-description"
            :lang="suggestion.sourceLanguage"
            :dir="getDir(suggestion.sourceLanguage)"
            v-text="description"
          />
        </mw-col>
        <mw-col
          v-if="
            isQuickTranslation &&
            !isSectionSuggestion &&
            !isCollectionSuggestion
          "
          shrink
          class="cx-suggestion__information-panel__quick-translation mt-auto"
        >
          <small v-i18n:cx-sx-translation-suggestion-quick />
        </mw-col>
        <mw-col
          v-if="isSectionSuggestion"
          class="cx-suggestion__information-panel__bottom"
          shrink
        >
          <small
            v-i18n:cx-sx-translation-suggestion-info="[missingSectionsCount]"
            class="cx-suggestion__missing-sections"
          />
          <small
            v-if="easyMissingSectionsCount"
            class="cx-suggestion__easy-sections"
          >
            (<span
              v-i18n:cx-sx-translation-suggestion-easy-sections="[
                easyMissingSectionsCount,
              ]"
            />)</small
          >
        </mw-col>
        <mw-col
          v-else-if="isFavoriteSuggestion"
          class="cx-suggestion__information-panel__bottom cx-suggestion__language-pair"
          shrink
        >
          <mw-row justify="between" class="ma-0">
            <mw-col grow>
              <small v-text="sourceLanguageAutonym" />
              <cdx-icon :icon="cdxIconArrowNext" size="small" class="mx-1" />
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
        <mw-col
          v-if="isCollectionSuggestion"
          shrink
          class="cx-suggestion__information-panel__collection mt-auto"
        >
          <custom-info-chip
            :icon="cdxIconArticles"
            :content="suggestion.collection.name"
          >
          </custom-info-chip>
        </mw-col>
      </mw-row>
      <mw-col shrink>
        <cdx-icon
          v-if="!isFavoriteSuggestion"
          :icon="cdxIconClose"
          class="cx-suggestion__discard-button mb-4"
          @click.stop="$emit('close')"
        />
        <cdx-icon
          class="cx-suggestion__favorite-button"
          :icon="bookmarkIcon"
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

  & &__information-panel {
    width: auto;
    flex-wrap: nowrap;
    &.row.col {
      max-width: calc(@size-full - 100px);
    }

    &__main-body.column.col {
      height: @size-full;
      max-width: calc(@size-full - @spacing-125);

      .cx-suggestion__source-description {
        color: @color-subtle;
        font-size: @font-size-small;
      }
    }
    &__quick-translation {
      color: @color-success;
    }
    &__collection {
      .cdx-info-chip {
        background-color: @background-color-progressive-subtle;
        border-color: @border-color-progressive;
        .cdx-icon {
          color: @color-progressive;
        }

        .cdx-info-chip--text {
          color: @color-progressive;
        }
      }
    }
    &__bottom {
      margin-top: auto;
    }
  }
  &__missing-sections {
    color: #72777d;
  }
  &__easy-sections {
    color: @color-success;
    font-weight: @font-weight-bold;
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
