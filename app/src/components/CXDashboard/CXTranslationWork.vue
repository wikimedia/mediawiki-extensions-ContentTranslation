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
                  translation.isLeadSectionTranslation,
              }"
              :lang="translation.sourceLanguage"
              v-text="translation.sourceTitle"
            />
            <h6
              v-if="!translation.isLeadSectionTranslation"
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
        <mw-row v-if="!!translation.progress" class="ma-0 py-2">
          <mw-col>
            <mw-progress-bar
              class="cx-translation__progress-bar"
              :value="translationProgress"
              height="4px"
              width="64px"
              :background="progressBarBackgroundColor"
            />
          </mw-col>
        </mw-row>
        <mw-row class="cx-translation__footer ma-0">
          <mw-col class="cx-translation__languages" grow>
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
          </mw-col>
          <mw-col class="cx-translation__days-since-started" shrink>
            <span v-text="timeagoMessage" />
          </mw-col>
        </mw-row>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MwThumbnail,
  MwIcon,
  MwRow,
  MwCol,
  MwProgressBar,
} from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import Translation from "@/wiki/cx/models/translation";
import {
  mwIconEdit,
  mwIconTrash,
  mwIconArrowForward,
  mwIconArrowNext,
} from "@/lib/mediawiki.ui/components/icons";
import { useStore } from "vuex";
import { computed, inject } from "vue";
import useDraftTranslationStart from "./useDraftTranslationStart";
import { timeago } from "@/utils/dateHelper";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "CxTranslationWork",
  components: { MwRow, MwProgressBar, MwCol, MwThumbnail, MwIcon },
  props: {
    translation: {
      type: Translation,
      required: true,
    },
  },
  emits: ["click", "delete-translation"],
  setup(props, { emit }) {
    const store = useStore();

    const getImage = (language, title) => {
      const page = store.getters["mediawiki/getPage"](language, title);

      return page?.thumbnail;
    };
    const startTranslation = useDraftTranslationStart();

    const handleActionIconClick = computed(() =>
      props.translation.status === "published"
        ? editTranslation
        : deleteTranslation
    );

    const onClick = (event) => {
      emit("click", event);
      startTranslation(props.translation);
    };

    // TODO: Implement "edit published translation" functionality
    const editTranslation = () => {};

    const deleteTranslation = () => emit("delete-translation");

    const colors = inject("colors");
    const progressBarBackgroundColor = colors.base80;
    const translationProgress = computed(
      () => props.translation.progress?.any * 100 || 0
    );

    const bananaI18n = useI18n();
    const timeagoMessage = computed(() => {
      const timeagoMessages = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started",
      };

      const timeagoObject = timeago(props.translation.startTimestamp);

      return bananaI18n.i18n(
        timeagoMessages[timeagoObject.postfix],
        timeagoObject.value
      );
    });

    return {
      timeagoMessage,
      getAutonym,
      getDir,
      getImage,
      handleActionIconClick,
      mwIconEdit,
      mwIconTrash,
      mwIconArrowForward,
      mwIconArrowNext,
      onClick,
      progressBarBackgroundColor,
      translationProgress,
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

  &__progress-bar {
    border: none;
  }

  &__footer {
    font-size: 14px;
    color: @color-base--subtle;
    line-height: 1;
  }

  &__days-since-started {
    min-width: fit-content;
  }
}
</style>
