<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { computed, inject, ref, watchEffect } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import useActionPanel from "./useActionPanel";
import useApplicationState from "@/composables/useApplicationState";
import useConfirmationButtonClickHandlers from "./useConfirmationButtonClickHandlers";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import useDevice from "@/composables/useDevice";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconLinkExternal } from "@wikimedia/codex-icons";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import translator from "@/wiki/cx/api/translator";
import UnreviewedTranslationDialog from "./UnreviewedTranslationDialog.vue";

const router = useRouter();
const store = useStore();
const colors = inject("colors");
const { sectionSuggestion } = useCurrentSectionSuggestion();
const { targetLanguageAutonym } = useApplicationState(store);
const { sectionURLParameter: preFilledSectionTitle } = useURLHandler();

const {
  startNewTranslation,
  handlePrimaryButtonClick,
  translationConfirmationDialogOn,
} = useConfirmationButtonClickHandlers();

const unreviewedTranslationDialogOn = ref(false);
const unreviewedTranslationTargetURL = ref(null);

const checkForUnreviewedTranslations = async () => {
  const checkResult = await translator.checkUnreviewedTranslations();

  if (checkResult === true) {
    return;
  }
  unreviewedTranslationDialogOn.value = true;
  unreviewedTranslationTargetURL.value = checkResult.targetUrl;
};

const onStartNewTranslationClick = async () => {
  await checkForUnreviewedTranslations();

  if (unreviewedTranslationDialogOn.value) {
    return;
  }
  startNewTranslation();
};

const onPrimaryButtonClick = async () => {
  await checkForUnreviewedTranslations();

  if (unreviewedTranslationDialogOn.value) {
    return;
  }
  handlePrimaryButtonClick();
};

const emit = defineEmits(["open-translation-confirmation-dialog"]);
watchEffect(() => {
  if (translationConfirmationDialogOn.value) {
    emit("open-translation-confirmation-dialog");
    translationConfirmationDialogOn.value = false;
  }
});
const {
  actionInformationMessageArgs,
  getActionButtonLabel,
  isProgressiveButton,
  targetArticlePath,
} = useActionPanel();

const bananaI18n = useI18n();

const actionButtonLabel = computed(() =>
  bananaI18n.i18n(getActionButtonLabel(!!preFilledSectionTitle.value))
);

const { isDesktop } = useDevice();

const actionInformationMessage = computed(() =>
  bananaI18n.i18n(...actionInformationMessageArgs.value)
);

const onMoreSectionsClick = async () => {
  await checkForUnreviewedTranslations();

  if (unreviewedTranslationDialogOn.value) {
    return;
  }
  router.push({ name: "sx-section-selector" });
};

const shouldDisplayMoreSectionsButton = computed(() => {
  return (
    preFilledSectionTitle.value &&
    !!sectionSuggestion.value?.sourceSections?.length
  );
});
const { targetPageExists } = useLanguageTitleGroup();
</script>

<template>
  <section class="sx-translation-confirmer-body pb-4">
    <section
      v-if="!!preFilledSectionTitle"
      class="sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
    >
      <h6 v-i18n:cx-sx-translation-confirmer-prefilled-section-heading />
      <h5 class="ma-0" v-text="preFilledSectionTitle" />
    </section>
    <section v-else-if="targetPageExists" class="mt-1 px-4 pt-4">
      <mw-row
        class="sx-translation-confirmer__translation-status ma-0 pb-2"
        justify="between"
      >
        <mw-col
          v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
          tag="h5"
          class="ma-0 pe-2"
        />
        <mw-col shrink>
          <a :href="targetArticlePath" target="_blank">
            <cdx-icon
              class="sx-translation-confirmer__existing-target-article-link-icon"
              size="small"
              :icon="cdxIconLinkExternal"
            />
          </a>
        </mw-col>
      </mw-row>
      <mw-row class="ma-0">
        <mw-col>
          <span v-text="actionInformationMessage" />
        </mw-col>
      </mw-row>
    </section>
    <mw-row
      class="sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4"
      justify="center"
    >
      <mw-col v-if="shouldDisplayMoreSectionsButton" shrink class="me-4">
        <cdx-button
          size="large"
          weight="quiet"
          action="progressive"
          @click.stop="onMoreSectionsClick"
        >
          {{ $i18n("cx-sx-translation-confirmer-more-sections-button-label") }}
        </cdx-button>
      </mw-col>
      <mw-col v-if="targetPageExists && isDesktop" shrink class="me-4">
        <cdx-button size="large" @click="onStartNewTranslationClick">
          {{
            $i18n(
              "cx-sx-translation-confirmer-new-desktop-translation-button-label"
            )
          }}
        </cdx-button>
      </mw-col>
      <mw-col shrink>
        <cdx-button
          weight="primary"
          size="large"
          :action="isProgressiveButton ? 'progressive' : 'default'"
          @click="onPrimaryButtonClick"
        >
          {{ actionButtonLabel }}
        </cdx-button>
      </mw-col>
    </mw-row>
  </section>
  <unreviewed-translation-dialog
    v-model="unreviewedTranslationDialogOn"
    :target-url="unreviewedTranslationTargetURL"
  />
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-confirmer {
  &-body__pre-filled-banner {
    background-color: @background-color-progressive-subtle;
    h6 {
      font-weight: @font-weight-bold;
      color: @color-subtle;
      // TODO: Should we have typography helper for this one?
      font-size: 14px;
    }
  }

  &__existing-target-article-link-icon {
    color: @color-placeholder;
  }
}
</style>
