<template>
  <mw-col
    class="sx-sentence-selector__proposed-translation__header pt-5 shrink"
  >
    <mw-row class="ma-0 ps-5 pb-4">
      <mw-col
        tag="h6"
        grow
        class="sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4"
        v-text="mtOptionLabel"
      />
      <mw-col shrink class="pe-5">
        <mw-button
          :icon="mwIconEllipsis"
          type="icon"
          class="sx-sentence-selector__proposed-translation__header-settings-button pa-0"
          @click="$emit('configure-options')"
        />
      </mw-col>
    </mw-row>
  </mw-col>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconEllipsis } from "@/lib/mediawiki.ui/components/icons";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { mapState } from "vuex";

export default {
  name: "ProposedTranslationHeader",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  data: () => ({
    mwIconEllipsis
  }),
  computed: {
    ...mapState({
      mtProvider: state => state.application.currentMTProvider
    }),
    extraMTOptionLabels: vm => ({
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: vm.$i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: vm.$i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    }),
    mtOptionLabel: vm =>
      vm.extraMTOptionLabels[vm.mtProvider] ||
      vm.$i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        vm.mtProvider
      )
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-sentence-selector__proposed-translation__header {
  width: 100%;
  &-title {
    color: @wmui-color-base20;
    font-weight: @font-weight-bold;
  }
  &-settings-button {
    color: @wmui-color-base20;
  }
}
</style>
