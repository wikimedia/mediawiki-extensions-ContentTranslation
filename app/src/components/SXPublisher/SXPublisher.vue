<template>
  <section class="sx-publisher">
    <sx-publisher-header @publish-translation="publishDialog = true" />
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
    <mw-row align="start" class="sx-publisher__review-info ma-0 pa-4">
      <mw-col shrink class="pe-3">
        <mw-icon :icon="mwIconEye" />
      </mw-col>
      <mw-col class="ma-0">
        <p v-i18n-html:cx-sx-publisher-review-info class="complementary ma-0" />
      </mw-col>
    </mw-row>
    <section class="sx-publisher__section-preview pa-5">
      <mw-row class="pb-5 ma-0">
        <mw-col
          tag="h2"
          grow
          class="sx-publisher__section-preview__title ma-0"
          v-text="sourceSectionTitle"
        />
        <mw-col shrink>
          <mw-button :icon="mwIconEdit" type="icon" />
        </mw-col>
      </mw-row>
      <div v-html="currentPageSection.translationHtml" />
    </section>
    <sx-publish-option-selector
      :active.sync="publishOptionsOn"
      :selected-option.sync="publishOption"
    />
    <sx-publisher-animation-dialog
      :active="publishDialog"
      :status="publishStatus"
    />
  </section>
</template>

<script>
import {
  mwIconSettings,
  mwIconEye,
  mwIconEdit
} from "@/lib/mediawiki.ui/components/icons";
import { MwButton, MwRow, MwCol, MwIcon } from "@/lib/mediawiki.ui";
import { mapState } from "vuex";
import SxPublisherHeader from "./SXPublisherHeader";
import SxPublisherAnimationDialog from "./SXPublisherAnimationDialog";
import SxPublishOptionSelector from "./SXPublishOptionSelector";

export default {
  name: "SxPublisher",
  components: {
    SxPublishOptionSelector,
    SxPublisherAnimationDialog,
    MwButton,
    SxPublisherHeader,
    MwRow,
    MwCol,
    MwIcon
  },
  data: () => ({
    mwIconSettings,
    mwIconEye,
    mwIconEdit,
    publishDialog: false,
    publishStatus: "pending",
    publishOptionsOn: false,
    publishOption: "new_section"
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection
    }),
    sourceSectionTitle: vm => vm.currentPageSection?.title,
    panelResult: vm =>
      vm.publishOption === "new_section"
        ? vm.$i18n("cx-sx-publisher-publish-panel-new-section-result")
        : vm.$i18n("cx-sx-publisher-publish-panel-sandbox-section-result")
  },
  methods: {
    configureTranslationOptions() {
      this.publishOptionsOn = true;
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
  &__review-info {
    border-bottom: @border-width-base @border-style-base @border-color-heading;
  }
  &__section-preview__title {
    border-bottom: none;
    font-family: @font-family-heading-main;
  }
}
</style>
