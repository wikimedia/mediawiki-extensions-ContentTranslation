<template>
  <section class="sx-publisher">
    <sx-publisher-header @publish-translation="publishTranslation" />
    <div class="sx-publisher__publish-panel pa-4">
      <h5
        v-i18n:cx-sx-publisher-publish-panel-new-section-status
        class="mb-2"
      />
      <h6 class="mb-2" v-html="panelResult" />
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
    <sx-publisher-review-info :result="publishResult" />
    <section class="sx-publisher__section-preview pa-5">
      <mw-row class="pb-5 ma-0">
        <mw-col
          tag="h2"
          grow
          class="sx-publisher__section-preview__title ma-0"
          v-text="translatedTitle"
        />
        <mw-col shrink>
          <mw-button :icon="mwIconEdit" type="icon" @click="editTranslation" />
        </mw-col>
      </mw-row>
      <div v-html="currentPageSection.translationHtml" />
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
import { mapState } from "vuex";
import SxPublisherHeader from "./SXPublisherHeader";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog";
import SxPublishOptionSelector from "./SXPublishOptionSelector";
import SxPublisherReviewInfo from "./SXPublisherReviewInfo";
import PublishResult from "@/wiki/cx/publishResult";
import { getUrl } from "@/utils/articleUrlFactory";
import { getTitleForPublishOption } from "@/utils/publishTitleFactory";

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
  data: () => ({
    mwIconSettings,
    mwIconEdit,
    isPublishDialogActive: false,
    publishStatus: "pending",
    publishOptionsOn: false,
    publishResult: new PublishResult()
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection,
      publishTarget: state => state.application.publishTarget
    }),
    translatedTitle: vm => vm.currentPageSection?.title,
    panelResult: vm =>
      vm.publishTarget === "NEW_SECTION"
        ? vm.$i18n("cx-sx-publisher-publish-panel-new-section-result")
        : vm.$i18n("cx-sx-publisher-publish-panel-sandbox-section-result")
  },
  methods: {
    configureTranslationOptions() {
      this.publishOptionsOn = true;
    },
    /**
     * @param {PublishResult} publishResult
     */
    handlePublishResult(publishResult) {
      if (!publishResult.isSuccessful) {
        this.publishResult = publishResult;
        return;
      }
      const articleTitle = getTitleForPublishOption(
        this.suggestion.targetTitle,
        this.publishTarget
      );
      /** Remove warning about leaving SX */
      window.removeEventListener("beforeunload");
      window.location.href = getUrl(`${articleTitle}#${this.translatedTitle}`);
    },
    async publishTranslation() {
      /**
       * Set initial publish status to "pending" before
       * publish request
       */
      this.publishStatus = "pending";
      this.isPublishDialogActive = true;
      /** @type PublishResult **/
      const publishResult = await this.$store.dispatch(
        "translator/publishTranslation"
      );

      this.publishStatus = publishResult.result;
      /**
       * Show feedback animation to user for 1 second
       * before closing the dialog and handling the
       * publishing result
       */
      setTimeout(() => {
        this.isPublishDialogActive = false;
        this.handlePublishResult(publishResult);
      }, 1000);
    },
    editTranslation() {
      this.$router.push({
        name: "sx-editor",
        params: {
          content: this.currentPageSection.translationHtml,
          language: this.suggestion.targetLanguage,
          isFinalEdit: true
        }
      });
    }
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
