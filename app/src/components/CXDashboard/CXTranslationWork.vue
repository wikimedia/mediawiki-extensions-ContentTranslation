<template>
  <div
    v-if="translation"
    class="row cx-translation pa-4 ma-0"
    @click.stop="$emit('click')"
  >
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
            <slot name="title"></slot>
          </div>
          <div class="col shrink ps-2">
            <mw-icon
              class="cx-translation__action-icon"
              :icon="actionIcon"
              @click.stop="$emit('action-icon-clicked')"
            >
            </mw-icon>
          </div>
        </div>
        <slot name="mid-content"></slot>

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
import { MwThumbnail, MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import Translation from "@/wiki/cx/models/translation";
import {
  mwIconArrowForward,
  mwIconArrowNext,
} from "@/lib/mediawiki.ui/components/icons";
import { useStore } from "vuex";
import { computed } from "vue";
import { timeago } from "@/utils/dateHelper";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "CxTranslationWork",
  components: { MwRow, MwCol, MwThumbnail, MwIcon },
  props: {
    translation: {
      type: Translation,
      required: true,
    },
    actionIcon: {
      type: String,
      default: null,
    },
  },
  emits: ["click", "action-icon-clicked"],
  setup(props) {
    const store = useStore();

    const getImage = (language, title) => {
      const page = store.getters["mediawiki/getPage"](language, title);

      return page?.thumbnail;
    };

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
      mwIconArrowForward,
      mwIconArrowNext,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-translation {
  border-top: @border-subtle;
  min-height: 100px;
  transition: background-color @transition-duration-base;

  &:hover {
    background-color: @background-color-progressive-subtle;
  }

  &__details {
    height: @size-full;
  }

  &__action-icon {
    &:hover {
      color: @color-progressive--hover;
    }
  }

  &__progress-bar {
    border: none;
  }

  &__footer {
    font-size: 14px;
    color: #72777d;
    line-height: 1;
  }

  &__days-since-started {
    min-width: fit-content;
  }
}
</style>
