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
    <sx-publish-option-selector v-model:active="publishOptionsOn" />
    <sx-publisher-animation-dialog
      :active="isPublishDialogActive"
      :status="publishStatus"
    />
  </section>
</template>

<script>
import {
  mwIconSettings,
  mwIconEdit,
} from "@/lib/mediawiki.ui/components/icons";
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import SxPublisherHeader from "./SXPublisherHeader.vue";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog.vue";
import SxPublishOptionSelector from "./SXPublishOptionSelector.vue";
import SxPublisherReviewInfo from "./SXPublisherReviewInfo.vue";
import { computed, onMounted } from "vue";
import usePublishTranslation from "./usePublishTranslation";
import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import useEditTranslation from "./useEditTranslation";

export default {
  name: "SxPublisher",
  components: {
    SxPublisherReviewInfo,
    SxPublishOptionSelector,
    SxPublisherAnimationDialog,
    MwButton,
    SxPublisherHeader,
    MwRow,
    MwCol,
  },
  setup() {
    const store = useStore();
    const { currentSourceSection: currentPageSection } =
      useApplicationState(store);

    const translatedTitle = computed(() => currentPageSection.value?.title);
    const bananaI18n = useI18n();

    const panelResult = computed(() => {
      const isSandboxTarget = store.getters["application/isSandboxTarget"];

      if (currentPageSection.value.isLeadSection) {
        return bananaI18n.i18n(
          "cx-sx-publisher-publish-panel-lead-section-result"
        );
      } else if (isSandboxTarget.value) {
        return bananaI18n.i18n(
          "cx-sx-publisher-publish-panel-sandbox-section-result"
        );
      } else {
        return bananaI18n.i18n(
          "cx-sx-publisher-publish-panel-new-section-result"
        );
      }
    });

    onMounted(() => store.dispatch("translator/validateMT"));

    const { editTranslation } = useEditTranslation(store, useRouter());
    const {
      configureTranslationOptions,
      doPublish,
      isPublishDialogActive,
      publishOptionsOn,
      publishStatus,
    } = usePublishTranslation(store);

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
      translatedTitle,
    };
  },
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
