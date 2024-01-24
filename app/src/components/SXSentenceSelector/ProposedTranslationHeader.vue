<script setup>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconEllipsis } from "@/lib/mediawiki.ui/components/icons";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

defineEmits(["configure-options"]);
const store = useStore();

const mtProvider = computed(() => store.state.application.currentMTProvider);
const bananaI18n = useI18n();

const extraMTOptionLabels = computed(() => ({
  [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: bananaI18n.i18n(
    "cx-sx-sentence-selector-translation-options-original-card-title"
  ),
  [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: bananaI18n.i18n(
    "cx-sx-sentence-selector-translation-options-empty-card-title"
  ),
}));

const mtOptionLabel = computed(
  () =>
    extraMTOptionLabels.value[mtProvider.value] ||
    bananaI18n.i18n(
      "cx-sx-sentence-selector-suggested-translation-title",
      MTProviderGroup.getMTProviderLabel(mtProvider.value)
    )
);
</script>

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

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-sentence-selector__proposed-translation__header {
  width: 100%;

  &-title {
    color: @color-subtle;
    font-weight: @font-weight-bold;
  }

  &-settings-button {
    color: @color-subtle;
  }
}
</style>
