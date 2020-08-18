<template>
  <mw-dialog v-if="active" class="sx-sentence-selector__translation-options">
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
      <p v-html="sentence.originalContent" />
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
      <p v-html="sentence.proposedTranslations[mtProvider]" />
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
      <mw-input type="textarea" />
    </mw-card>
  </mw-dialog>
</template>

<script>
import { MwDialog, MwButton, MwCard, MwInput } from "../../lib/mediawiki.ui";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import SectionSentence from "@/wiki/cx/models/sectionSentence";

export default {
  name: "SxTranslationSelector",
  components: { MwCard, MwButton, MwDialog, MwInput },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    provider: {
      type: String,
      required: true
    },
    sentence: {
      type: SectionSentence,
      required: true
    },
    sourceLanguage: {
      type: String,
      required: true
    },
    targetLanguage: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconClose,
    originalTextProviderKey: MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY,
    emptyTextProviderKey: MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
  }),
  computed: {
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
    }
  },
  methods: {
    close() {
      this.$emit("update:active", false);
    },
    selectProvider(selectedProvider) {
      this.$emit("update:provider", selectedProvider);
      this.close();
    }
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector__translation-options {
  .mw-ui-dialog__header {
    h6 {
      color: @color-base;
    }
  }
  .mw-ui-dialog__shell {
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
</style>
