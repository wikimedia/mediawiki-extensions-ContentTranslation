<template>
  <div v-if="suggestion" class="row cx-suggestion pa-4 ma-0">
    <div class="col shrink pe-4">
      <mw-thumbnail
        class="cx-suggestion__thumbnail"
        :thumbnail="page && page.thumbnail"
        :width="84"
      />
    </div>
    <div class="col cx-suggestion__information-panel">
      <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
        <mw-col shrink class="cx-suggestion__information-panel__top pb-2">
          <mw-row class="ma-0" align="start" justify="between">
            <mw-col grow class="pe-2">
              <mw-row direction="column" class="ma-0" align="start">
                <mw-col shrink class="mb-2">
                  <h5
                    class="my-0 cx-suggestion__source-title"
                    :lang="suggestion.sourceLanguage"
                    v-text="title"
                  />
                </mw-col>
                <mw-col shrink>
                  <p
                    class="ma-0 cx-suggestion__source-description complementary"
                    :lang="suggestion.sourceLanguage"
                    v-text="description"
                  />
                </mw-col>
              </mw-row>
            </mw-col>
            <mw-col shrink>
              <mw-icon
                v-if="!isFavoriteSuggestion"
                :icon="mwIconClose"
                size="24"
                class="mb-4"
                @click.stop="$emit('close')"
              />
              <mw-icon
                :icon="bookmarkIcon"
                size="24"
                :icon-color="bookmarkIconColor"
                @click.stop="$emit('bookmark')"
              />
            </mw-col>
          </mw-row>
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
                  missingSectionsCount
                ]"
              />
            </mw-col>
          </mw-row>
        </mw-col>
      </mw-row>
    </div>
  </div>
</template>

<script>
import { MwIcon, MwThumbnail, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconClose,
  mwIconBookmark,
  mwIconBookmarkOutline,
  mwIconArrowNext
} from "@/lib/mediawiki.ui/components/icons";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import { computed } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";

export default {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail, MwIcon, MwRow, MwCol },
  props: {
    suggestion: {
      type: [ArticleSuggestion, SectionSuggestion, FavoriteSuggestion],
      required: true
    }
  },
  setup(props, context) {
    const store = context.root.$store;
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

    const sourceLanguageAutonym = computed(() =>
      getAutonym(suggestion.value.sourceLanguage)
    );

    const targetLanguageAutonym = computed(() =>
      getAutonym(suggestion.value.targetLanguage)
    );

    const bookmarkIcon = computed(() =>
      isFavoriteSuggestion.value ? mwIconBookmark : mwIconBookmarkOutline
    );

    const bookmarkIconColor = computed(() =>
      isFavoriteSuggestion.value
        ? context.root.$mwui.colors.primary
        : "currentColor"
    );

    return {
      bookmarkIcon,
      bookmarkIconColor,
      description,
      isFavoriteSuggestion,
      isSectionSuggestion,
      missingSectionsCount,
      mwIconArrowNext,
      mwIconClose,
      page,
      sourceLanguageAutonym,
      targetLanguageAutonym,
      title
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-suggestion {
  // Not sure if @background-color-notice-frame variable is ok to use here
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
  cursor: pointer;
  min-height: 100px;
  line-height: normal;
  transition: background-color 100ms, border-color 100ms, transform 1s,
    opacity 1s;
  &:hover {
    background-color: @background-color-primary;
  }

  &__information-panel {
    &__top {
      width: 100%;
    }
  }
  &__thumbnail.mw-ui-thumbnail {
    height: 84px;
    width: 84px;
  }
  &__source-description {
    color: @wmui-color-base20;
  }
  &__missing-sections {
    margin-top: auto;
    color: @color-base--subtle;
  }
  &__favorite-missing-sections {
    color: @color-base--subtle;
    min-width: fit-content;
  }
  &__language-pair {
    width: 100%;
    margin-top: auto;
    color: @color-base--subtle;
  }
}
</style>
