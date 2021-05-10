<template>
  <mw-dialog
    v-if="active"
    class="sx-sentence-selector__translation-options"
    fullscreen
  >
    <template slot="header">
      <div class="mw-ui-dialog__header pa-4">
        <div class="row ma-0 py-2">
          <div
            class="col grow items-center mw-ui-dialog__header-title justify-start pe-2"
          >
            <h4
              v-i18n:cx-sx-sentence-selector-translation-options-header-title
              class="mb-0"
            />
          </div>
          <div class="col shrink justify-center">
            <mw-button
              type="icon"
              :icon="mwIconClose"
              class="pa-0"
              @click="close"
            />
          </div>
        </div>
        <h6
          v-i18n:cx-sx-sentence-selector-translation-options-header-text
          class="pb-2 mb-0"
        />
      </div>
    </template>
    <mw-card
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click.native="selectProvider(originalTextProviderKey)"
    >
      <template slot="header">
        <h5
          v-i18n:cx-sx-sentence-selector-translation-options-original-card-title
          class="sx-sentence-selector__translation-options-card-title mb-4"
        />
      </template>
      <p v-html="proposedTranslations[originalTextProviderKey]" />
    </mw-card>
    <mw-card
      v-for="mtProvider in apiMtProviders"
      :key="mtProvider"
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click.native="selectProvider(mtProvider)"
    >
      <template slot="header">
        <h5
          class="sx-sentence-selector__translation-options-card-title mb-4"
          v-text="mtProvider"
        />
      </template>
      <p v-html="proposedTranslations[mtProvider]" />
    </mw-card>
    <mw-card
      class="sx-sentence-selector__mt-provider-option-card mx-4 pa-5"
      role="button"
      @click.native="selectProvider(emptyTextProviderKey)"
    >
      <template slot="header">
        <h5
          v-i18n:cx-sx-sentence-selector-translation-options-empty-card-title
          class="sx-sentence-selector__translation-options-card-title mb-4"
        />
      </template>
      <p class="sx-sentence-selector__empty-sentence-option__cursor">|</p>
    </mw-card>
  </mw-dialog>
</template>

<script>
import { MwDialog, MwButton, MwCard } from "@/lib/mediawiki.ui";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import { mapGetters, mapState } from "vuex";

export default {
  name: "SxTranslationSelector",
  components: { MwCard, MwButton, MwDialog },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    mwIconClose,
    originalTextProviderKey: MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY,
    emptyTextProviderKey: MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
  }),
  computed: {
    ...mapState({
      sourceLanguage: state =>
        state.application.currentSectionSuggestion?.sourceLanguage,
      targetLanguage: state =>
        state.application.currentSectionSuggestion?.targetLanguage,
      currentPageSection: state => state.application.currentSourceSection,
      isSectionTitleSelected: state =>
        state.application.isSectionTitleSelectedForTranslation,
      provider: state => state.application.currentMTProvider
    }),
    ...mapGetters({
      selectedSentence: "application/getCurrentSelectedSentence"
    }),
    mtProviders() {
      return this.$store.getters["mediawiki/getSupportedMTProviders"](
        this.sourceLanguage,
        this.targetLanguage
      );
    },
    apiMtProviders() {
      const ignoredProviders = [
        this.originalTextProviderKey,
        this.emptyTextProviderKey
      ];

      return this.mtProviders.filter(
        provider => !ignoredProviders.includes(provider)
      );
    },
    proposedTranslations: vm =>
      vm.isSectionTitleSelected
        ? vm.currentPageSection.proposedTitleTranslations
        : vm.selectedSentence.proposedTranslations,
    originalContent: vm =>
      vm.currentPageSection?.proposedTitleTranslations[vm.selectedProvider]
  },
  methods: {
    close() {
      this.$emit("update:active", false);
    },
    selectProvider(selectedProvider) {
      this.$store.dispatch("application/updateMTProvider", {
        provider: selectedProvider
      });
      this.close();
    }
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector__translation-options {
  a {
    pointer-events: none;
  }
  .mw-ui-dialog__header {
    h6 {
      color: @color-base;
    }
  }
  // Use class twice to increase specificity so that dialog's
  // default background color is overwritten.
  .mw-ui-dialog__shell.mw-ui-dialog__shell {
    background-color: @background-color-base--disabled;
    .sx-sentence-selector__translation-options-card-title {
      // Should we create a variable for this one?
      color: @wmui-color-base20;
    }
  }
}
.sx-sentence-selector__mt-provider-option-card {
  cursor: pointer;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.sx-sentence-selector__empty-sentence-option__cursor {
  opacity: 0;
  animation: blink 1s infinite;
}
</style>
