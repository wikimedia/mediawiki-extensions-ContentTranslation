<script setup>
import { MwRow, MwCol, MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import { getDir } from "@wikimedia/language-data";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons.vue";
import ProposedTranslationHeader from "./ProposedTranslationHeader.vue";
import RetryMtCard from "./RetryMtCard.vue";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconEdit } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

defineEmits(["edit-translation", "configure-options", "retry-translation"]);

const headerAndFooterHeight = ref(0);
const header = ref(null);
const footer = ref(null);
const store = useStore();
const { currentMTProvider, targetLanguage } = useApplicationState(store);
const { sourceSection, currentProposedTranslation } = useCurrentPageSection();

const mtRequestPending = computed(() =>
  store.state.application.mtRequestsPending?.includes(
    sourceSection.value?.selectedTranslationUnitId
  )
);

const contentsStyle = computed(() => ({
  "max-height": `calc(100% - ${headerAndFooterHeight.value}px)`,
}));

const hasProposedTranslation = computed(
  () =>
    !!currentProposedTranslation.value ||
    currentMTProvider.value === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
);

const setHeaderAndFooterHeight = () => {
  headerAndFooterHeight.value =
    header.value.$el.clientHeight + footer.value.$el.clientHeight;
};

onMounted(async () => {
  await nextTick();
  setHeaderAndFooterHeight();

  resizeObserver.observe(header.value.$el);
  resizeObserver.observe(footer.value.$el);
});

onBeforeUnmount(() => {
  resizeObserver.unobserve(header.value.$el);
  resizeObserver.unobserve(footer.value.$el);
});

const resizeObserver = new ResizeObserver(() => setHeaderAndFooterHeight());
</script>

<template>
  <mw-card class="sx-sentence-selector__proposed-translation col shrink pa-0">
    <mw-row direction="column" align="start" class="ma-0 no-wrap fill-height">
      <proposed-translation-header
        ref="header"
        @configure-options="$emit('configure-options')"
      />
      <mw-col
        class="sx-sentence-selector__proposed-translation__contents px-5"
        :class="{
          'sx-sentence-selector__proposed-translation__contents--loading':
            !hasProposedTranslation && mtRequestPending,
        }"
        :style="hasProposedTranslation ? contentsStyle : null"
      >
        <!--eslint-disable vue/no-v-html -->
        <section
          v-if="hasProposedTranslation"
          :lang="targetLanguage"
          :dir="getDir(targetLanguage)"
          v-html="currentProposedTranslation"
        />
        <!--eslint-enable vue/no-v-html -->
        <mw-spinner v-else-if="mtRequestPending" />
        <retry-mt-card
          v-else
          @configure-options="$emit('configure-options')"
          @retry-translation="$emit('retry-translation')"
        />
      </mw-col>

      <mw-col
        ref="footer"
        shrink
        class="sx-sentence-selector__proposed-translation__footer"
      >
        <cdx-button
          v-if="hasProposedTranslation || mtRequestPending"
          class="sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5"
          weight="quiet"
          action="progressive"
          :disabled="!hasProposedTranslation"
          @click="$emit('edit-translation', currentProposedTranslation)"
        >
          <cdx-icon class="me-1" :icon="cdxIconEdit" />
          {{ $i18n("cx-sx-sentence-selector-edit-translation-button-label") }}
        </cdx-button>
        <proposed-translation-action-buttons v-bind="$attrs" />
      </mw-col>
    </mw-row>
  </mw-card>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-sentence-selector {
  .sx-sentence-selector__proposed-translation {
    a {
      pointer-events: none;
    }
    max-height: 50%;
    border-radius: @border-radius-base @border-radius-base 0 0;
    width: 100%;
    // TODO: Fix these with variables(?)
    box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);

    .mw-ui-card__content {
      height: 100%;
    }

    transition: margin-bottom 0.1s;

    &__contents {
      color: @color-base;
      box-sizing: @box-sizing-base;
      width: @size-full;
      // When contents are loading align spinner to the middle (horizontally)
      &--loading {
        align-self: center;
      }
      section {
        overflow-y: auto;
        max-height: 100%;
      }
    }

    &__footer {
      width: 100%;
    }
  }
}
</style>
