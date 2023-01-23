<template>
  <div v-if="translation" class="row cx-translation pa-4 ma-0" @click="onClick">
    <div class="col shrink pe-4">
      <mw-thumbnail
        class="cx-translation__thumbnail"
        :thumbnail="
          getImage(translation.sourceLanguage, translation.sourceTitle)
        "
      />
    </div>
    <div class="col">
      <div class="cx-translation__details column justify-between ma-0">
        <div class="row ma-0">
          <div class="col grow">
            <h5
              class="cx-translation__source-page-title"
              :class="{
                'cx-translation__primary-title':
                  !translation.sourceSectionTitle,
              }"
              :lang="translation.sourceLanguage"
              v-text="translation.sourceTitle"
            />
            <h6
              v-if="translation.sourceSectionTitle"
              class="cx-translation__source-section-title cx-translation__primary-title"
              :lang="translation.sourceLanguage"
              v-text="translation.sourceSectionTitle"
            />
          </div>
          <div class="col shrink ps-2">
            <mw-icon
              :icon="
                translation.status === 'published' ? mwIconEdit : mwIconTrash
              "
              @click.stop="handleActionIconClick"
            >
            </mw-icon>
          </div>
        </div>
        <div class="row cx-translation__footer ma-0">
          <div class="cx-translation__languages col grow">
            <span
              class="mw-ui-autonym"
              :dir="getDir(translation.sourceLanguage)"
              v-text="getAutonym(translation.sourceLanguage)"
            />
            <mw-icon :icon="mwIconArrowNext" class="mx-1" :size="14" />
            <span
              class="mw-ui-autonym ma-0"
              :dir="getDir(translation.targetLanguage)"
              v-text="getAutonym(translation.targetLanguage)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MwThumbnail, MwIcon } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import Translation from "@/wiki/cx/models/translation";
import {
  mwIconEdit,
  mwIconTrash,
  mwIconArrowForward,
  mwIconArrowNext,
} from "@/lib/mediawiki.ui/components/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getSuggestionListLanguagePairUpdater } from "@/composables/useLanguageHelper";
import useApplicationState from "@/composables/useApplicationState";
import { loadVEModules } from "@/plugins/ve";
import { computed } from "vue";

export default {
  name: "CxTranslationWork",
  components: { MwThumbnail, MwIcon },
  props: {
    translation: {
      type: Translation,
      required: true,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const { currentSourcePage, sourceLanguage, targetLanguage } =
      useApplicationState(store);

    const startTranslation = async () => {
      const {
        sourceLanguage: translationSourceLanguage,
        targetLanguage: translationTargetLanguage,
        sourceTitle,
        pageRevision,
      } = props.translation;

      if (
        sourceLanguage.value !== translationSourceLanguage ||
        targetLanguage.value !== translationTargetLanguage
      ) {
        const updateLanguagePair = getSuggestionListLanguagePairUpdater(store);
        updateLanguagePair(
          translationSourceLanguage,
          translationTargetLanguage
        );
      }
      store.dispatch(
        "application/restoreSectionTranslation",
        props.translation
      );

      await store.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: sourceLanguage.value,
        targetLanguage: targetLanguage.value,
        sourceTitle,
        revision: pageRevision,
      });

      // Asynchronously resolve references and update page sections to
      // include this resolved references
      await loadVEModules();
      await store.dispatch("mediawiki/resolvePageContentReferences", {
        sourceLanguage: sourceLanguage.value,
        sourceTitle,
      });

      const section = currentSourcePage.value.getSectionByTitle(
        props.translation.sourceSectionTitle
      );

      store.commit("application/setCurrentSourceSection", section);
      router.push({ name: "sx-sentence-selector", params: { force: true } });
    };

    const getImage = (language, title) => {
      const page = store.getters["mediawiki/getPage"](language, title);

      return page?.thumbnail;
    };

    const handleActionIconClick = computed(() =>
      props.translation.status === "published"
        ? editTranslation
        : deleteTranslation
    );

    const onClick = (event) => {
      emit("click", event);
      startTranslation();
    };

    // TODO: Implement "edit published translation" functionality
    const editTranslation = () => {};

    const deleteTranslation = () =>
      store.dispatch("translator/deleteTranslation", props.translation);

    return {
      getAutonym,
      getDir,
      getImage,
      handleActionIconClick,
      mwIconEdit,
      mwIconTrash,
      mwIconArrowForward,
      mwIconArrowNext,
      onClick,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-translation {
  /* TODO: Fix border color to be base80*/
  border-top: @border-width-base @border-style-base @border-color-base--disabled;
  cursor: pointer;
  min-height: 100px;
  transition: background-color 100ms, border-color 100ms, transform 1s,
    opacity 1s;

  &:hover {
    background-color: @background-color-primary;
  }

  &__details {
    height: 100%;
  }

  &__source-page-title {
    font-size: 14px;
    font-weight: @font-weight-normal;
  }

  &__primary-title {
    font-weight: @font-weight-bold;
    font-size: 1rem;
  }

  &__footer {
    font-size: 14px;
    color: @color-base--subtle;
    line-height: 1;
  }
}
</style>
