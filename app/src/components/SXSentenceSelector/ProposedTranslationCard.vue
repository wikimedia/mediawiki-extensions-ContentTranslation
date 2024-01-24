<script setup>
import { MwButton, MwRow, MwCol, MwCard, MwSpinner } from "@/lib/mediawiki.ui";
import {
  mwIconEdit,
  mwIconEllipsis,
} from "@/lib/mediawiki.ui/components/icons";
import { getDir } from "@wikimedia/language-data";
import ProposedTranslationActionButtons from "./ProposedTranslationActionButtons.vue";
import ProposedTranslationHeader from "./ProposedTranslationHeader.vue";
import RetryMtCard from "./RetryMtCard.vue";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { ref, onMounted, computed, watch, nextTick } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";

defineEmits(["edit-translation", "configure-options", "retry-translation"]);

const headerAndFooterHeight = ref(0);
const header = ref(null);
const footer = ref(null);
const store = useStore();
const {
  currentMTProvider,
  targetLanguage,
  proposedTranslation,
  currentSourceSection,
} = useApplicationState(store);

const mtRequestPending = computed(() =>
  store.state.application.mtRequestsPending?.includes(
    currentSourceSection.value.selectedTranslationUnitId
  )
);

const contentsStyle = computed(() => ({
  "max-height": `calc(100% - ${headerAndFooterHeight.value}px)`,
}));

const hasProposedTranslation = computed(
  () =>
    !!proposedTranslation.value ||
    currentMTProvider.value === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
);

const setHeaderAndFooterHeight = () => {
  headerAndFooterHeight.value =
    header.value.$el.clientHeight + footer.value.$el.clientHeight;
};

// Card title can take different number of text lines
// depending on MT provider's name length in smaller screens.
// Watch currentMTProvider to update headerAndFooterHeight when needed,
// since Element.clientHeight property is not reactive
watch(currentMTProvider, setHeaderAndFooterHeight);

onMounted(async () => {
  await nextTick();
  setHeaderAndFooterHeight();
});
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
          'sx-sentence-selector__proposed-translation__contents--empty':
            !hasProposedTranslation,
        }"
        :style="contentsStyle"
      >
        <!--eslint-disable vue/no-v-html -->
        <section
          v-if="hasProposedTranslation"
          :lang="targetLanguage"
          :dir="getDir(targetLanguage)"
          v-html="proposedTranslation"
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
        <mw-button
          v-if="hasProposedTranslation || mtRequestPending"
          :icon="mwIconEdit"
          type="text"
          :label="
            $i18n('cx-sx-sentence-selector-edit-translation-button-label')
          "
          class="sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4"
          progressive
          :disabled="!hasProposedTranslation"
          @click="$emit('edit-translation', proposedTranslation)"
        />
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
      // When contents are empty align spinner to the middle (horizontally)
      &--empty {
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
