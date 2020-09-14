<template>
  <div class="sx-sentence-selector__proposed-translation-body pa-5">
    <mw-row class="sx-sentence-selector__proposed-translation-header ma-0 pb-4">
      <mw-col
        tag="h6"
        grow
        class="sx-sentence-selector__proposed-translation-title pa-0 ma-0 pe-4"
        v-text="mtOptionLabel"
      />
      <mw-col shrink>
        <mw-button
          :icon="mwIconEllipsis"
          type="icon"
          class="sx-sentence-selector__translation-more-options-button pa-0"
          @click="$emit('configure-options')"
        />
      </mw-col>
    </mw-row>
    <div
      class="sx-sentence-selector__proposed-translation-contents pb-4"
      v-html="translation"
    />
    <!--    Edit translation only when translation exists-->
    <mw-button
      v-if="translation"
      :icon="mwIconEdit"
      type="text"
      :label="$i18n('cx-sx-sentence-selector-edit-translation-button-label')"
      class="sx-sentence-selector__translation-edit-button pa-0"
      @click="$emit('edit-translation')"
    />
  </div>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis
} from "@/lib/mediawiki.ui/components/icons";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";

export default {
  name: "SxSentenceSelectorProposedTranslationBody",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    mtProvider: {
      type: String,
      required: true
    },
    translation: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconEllipsis,
    mwIconEdit
  }),
  computed: {
    extraMTOptionLabels() {
      return {
        [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: this.$i18n(
          "cx-sx-sentence-selector-translation-options-original-card-title"
        ),
        [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: this.$i18n(
          "cx-sx-sentence-selector-translation-options-empty-card-title"
        )
      };
    },
    mtOptionLabel() {
      if (Object.keys(this.extraMTOptionLabels).includes(this.mtProvider)) {
        return this.extraMTOptionLabels[this.mtProvider];
      }

      return this.$i18n(
        "cx-sx-sentence-selector-proposed-translation-title",
        this.mtProvider
      );
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector__proposed-translation-body {
  .sx-sentence-selector__proposed-translation-title {
    // TODO: Fix this to be base20 (currently base30)
    color: @color-base--subtle;
  }
  .sx-sentence-selector__translation-more-options-button {
    color: @color-base--subtle;
  }
  .sx-sentence-selector__proposed-translation-contents {
    color: @color-base;
  }
  .sx-sentence-selector__translation-edit-button {
    color: @color-primary;
  }
}
</style>
