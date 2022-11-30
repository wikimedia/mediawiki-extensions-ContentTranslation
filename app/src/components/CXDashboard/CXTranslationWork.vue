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
              class="cx-translation__source-title pb-2"
              :lang="translation.sourceLanguage"
            >
              {{ translation.sourceTitle }}
            </h5>
            <h6
              class="cx-translation__target-title"
              :lang="translation.targetLanguage"
            >
              {{ translation.targetTitle }}
            </h6>
          </div>
          <div class="col shrink ps-2">
            <mw-icon
              :size="24"
              :icon="
                translation.status === 'published' ? mwIconEdit : mwIconTrash
              "
            >
            </mw-icon>
          </div>
        </div>
        <div class="row ma-0 text-small">
          <div class="cx-translation__languages col grow">
            <span
              class="mw-ui-autonym"
              :dir="getDir(translation.sourceLanguage)"
              v-text="getAutonym(translation.sourceLanguage)"
            ></span>
            <mw-icon :icon="mwIconArrowNext" class="mx-1" />
            <span
              class="mw-ui-autonym"
              :dir="getDir(translation.targetLanguage)"
              v-text="getAutonym(translation.targetLanguage)"
            ></span>
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
import { siteMapper } from "@/utils/mediawikiHelper";
import { useStore } from "vuex";

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
    const startTranslation = () => {
      // Set CX token as cookie.
      siteMapper.setCXToken(
        props.translation.sourceLanguage,
        props.translation.targetLanguage,
        props.translation.sourceTitle
      );
      location.href = siteMapper.getCXUrl(
        props.translation.sourceTitle,
        props.translation.targetTitle,
        props.translation.sourceLanguage,
        props.translation.targetLanguage,
        { campaign: new mw.Uri().query.campaign }
      );
    };

    const store = useStore();

    const getImage = (language, title) => {
      const page = store.getters["mediawiki/getPage"](language, title);

      return page?.thumbnail;
    };

    const onClick = (event) => {
      emit("click", event);
      startTranslation();
    };

    return {
      getAutonym,
      getDir,
      getImage,
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

  .cx-translation__details {
    height: 100%;
  }
}
</style>
