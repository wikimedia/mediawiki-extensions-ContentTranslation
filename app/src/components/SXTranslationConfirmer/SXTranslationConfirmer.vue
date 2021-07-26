<template>
  <section class="sx-translation-confirmer">
    <mw-row
      class="sx-translation-confirmer__header ma-0 py-3"
      align="stretch"
      justify="start"
    >
      <mw-col grow class="px-4" align="center">
        <h5 v-i18n:cx-sx-translation-confirmer-title class="mb-0" />
      </mw-col>
      <mw-col shrink align="start" class="pe-4">
        <mw-button
          class="pa-0"
          type="icon"
          :icon="mwIconClose"
          :icon-size="20"
          @click="onClose"
        />
      </mw-col>
    </mw-row>
    <div class="sx-translation-confirmer__article-image flex justify-center">
      <img v-if="articleImageSource" :src="articleImageSource" />
      <mw-icon
        v-else
        size="120"
        :icon="mwIconArticle"
        :icon-color="$mwui.colors.primary"
      />
    </div>
    <sx-translation-confirmer-article-information />
    <sx-article-language-selector />
    <sx-translation-confirmer-action-panel />
    <mw-row justify="center" class="sx-translation-confirmer__license ma-0">
      <p class="ma-3">
        <!--          TODO: Fix font-size to be 12px. Probably needs UI Typography-->
        <small v-i18n-html:cx-license-agreement />
      </p>
    </mw-row>
  </section>
</template>

<script>
import { MwRow, MwCol, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel";
import SxArticleLanguageSelector from "../SXArticleLanguageSelector";
import SxTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { getUrl } from "@/utils/mediawikiHelper";
import {
  mwIconClose,
  mwIconArticle
} from "@/lib/mediawiki.ui/components/icons";
import { loadVEModules } from "@/plugins/ve";
import { computed, onMounted } from "@vue/composition-api";

export default {
  name: "SxTranslationConfirmer",
  components: {
    MwIcon,
    SxTranslationConfirmerArticleInformation,
    MwRow,
    MwCol,
    MwButton,
    SxArticleLanguageSelector,
    SxTranslationConfirmerActionPanel
  },
  setup(props, context) {
    const store = context.root.$store;
    const articleImageSource = computed(() => {
      const sourceArticle = store.getters["application/getCurrentPage"];

      return sourceArticle?.image?.source;
    });

    onMounted(() => {
      store.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles");
      // Start loading VE in background. Don't wait for it though.
      // We anticipate that user is going to use editor in next step.
      loadVEModules();
    });

    const onClose = () => {
      store.dispatch("application/clearCurrentSectionSuggestion");
      // Remove URL params so that section translation doesn't restart, leading to endless loop
      history.replaceState(
        {},
        document.title,
        getUrl("Special:ContentTranslation")
      );
      context.root.$router.push({ name: "dashboard" });
    };

    return {
      articleImageSource,
      mwIconArticle,
      mwIconClose,
      onClose
    };
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-translation-confirmer {
  &__article-image {
    background-color: @background-color-primary;
    height: 192px;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: 50% 33%;
    }
  }
  &__license {
    border-top: @border-width-base @border-style-base
      @border-color-base--disabled;
    background-color: @background-color-framed;
  }
}
</style>
