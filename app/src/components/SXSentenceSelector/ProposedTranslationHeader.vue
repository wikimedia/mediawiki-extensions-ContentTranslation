<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconEllipsis } from "@wikimedia/codex-icons";

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
    <!--eslint-disable vue/no-v-text-v-html-on-component -->
    <mw-row class="ma-0 ps-5 pb-4">
      <mw-col
        tag="h6"
        grow
        class="sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4"
        v-text="mtOptionLabel"
      />
      <!--eslint-enable vue/no-v-text-v-html-on-component -->
      <mw-col shrink class="pe-5">
        <cdx-button
          class="sx-sentence-selector__proposed-translation__header-settings-button"
          weight="quiet"
          :aria-label="
            $i18n('cx-sx-sentence-selector-mt-settings-button-aria-label')
          "
          @click="$emit('configure-options')"
        >
          <cdx-icon class="pa-0" :icon="cdxIconEllipsis" />
        </cdx-button>
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

  & &-settings-button {
    color: @color-subtle;
  }
}
</style>
