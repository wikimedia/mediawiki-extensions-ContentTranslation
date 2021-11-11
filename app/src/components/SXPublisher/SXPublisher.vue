<template>
  <section class="sx-publisher">
    <sx-publisher-header @publish-translation="doPublish" />
    <div class="sx-publisher__publish-panel pa-4">
      <h5
        v-i18n:cx-sx-publisher-publish-panel-new-section-status
        class="mb-2"
      />
      <!-- eslint-disable vue/no-v-html -->
      <h6 class="mb-2" v-html="panelResult" />
      <!-- eslint-enable vue/no-v-html -->
      <mw-row justify="end" class="ma-0">
        <mw-col shrink>
          <mw-button
            type="icon"
            :icon="mwIconSettings"
            class="pa-0 mx-1"
            @click="configureTranslationOptions"
          />
        </mw-col>
      </mw-row>
    </div>
    <sx-publisher-review-info />
    <section class="sx-publisher__section-preview pa-5">
      <mw-row class="pb-5 ma-0">
        <!--eslint-disable vue/no-v-html -->
        <mw-col
          tag="h2"
          grow
          class="sx-publisher__section-preview__title ma-0"
          v-html="translatedTitle"
        />
        <!--eslint-enable vue/no-v-html -->
        <mw-col shrink>
          <mw-button :icon="mwIconEdit" type="icon" @click="editTranslation" />
        </mw-col>
      </mw-row>
      <!--eslint-disable vue/no-v-html -->
      <div v-html="currentPageSection.translationHtml" />
      <!--eslint-enable vue/no-v-html -->
    </section>
    <sx-publish-option-selector :active.sync="publishOptionsOn" />
    <sx-publisher-animation-dialog
      :active="isPublishDialogActive"
      :status="publishStatus"
    />
  </section>
</template>

<script>
import {
  mwIconSettings,
  mwIconEdit
} from "@/lib/mediawiki.ui/components/icons";
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import SxPublisherHeader from "./SXPublisherHeader";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog";
import SxPublishOptionSelector from "./SXPublishOptionSelector";
import SxPublisherReviewInfo from "./SXPublisherReviewInfo";
import { computed, onMounted } from "@vue/composition-api";
import usePublishTranslation from "./usePublishTranslation";
import useApplicationState from "@/composables/useApplicationState";

export default {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo,
    SxPublishOptionSelector,
    SxPublisherAnimationDialog,
    MwButton,
    SxPublisherHeader,
    MwRow,
    MwCol
  },
  setup(props, context) {
    const {
      currentSourceSection: currentPageSection,
      currentSectionSuggestion
    } = useApplicationState();
    const applicationState = context.root.$store.state.application;

    const publishTarget = computed(() => applicationState.publishTarget);
    const translatedTitle = computed(() => currentPageSection.value?.title);

    const panelResult = computed(() =>
      publishTarget.value === "NEW_SECTION"
        ? context.root.$i18n("cx-sx-publisher-publish-panel-new-section-result")
        : context.root.$i18n(
            "cx-sx-publisher-publish-panel-sandbox-section-result"
          )
    );

    onMounted(() => context.root.$store.dispatch("translator/validateMT"));

    const editTranslation = () => {
      const router = context.root.$router;
      router.push({
        name: "sx-editor",
        params: {
          content: currentPageSection.value.translationHtml,
          language: currentSectionSuggestion.value.targetLanguage,
          isFinalEdit: true
        }
      });
    };

    const {
      configureTranslationOptions,
      doPublish,
      isPublishDialogActive,
      publishOptionsOn,
      publishStatus
    } = usePublishTranslation();

    return {
      configureTranslationOptions,
      currentPageSection,
      doPublish,
      editTranslation,
      isPublishDialogActive,
      mwIconEdit,
      mwIconSettings,
      panelResult,
      publishOptionsOn,
      publishStatus,
      translatedTitle
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-publisher {
  &__publish-panel {
    background-color: @background-color-framed;
    border-bottom: @border-width-base @border-style-base @border-color-heading;
  }

  &__section-preview__title {
    border-bottom: none;
    font-family: @font-family-heading-main;
  }
}
</style>
