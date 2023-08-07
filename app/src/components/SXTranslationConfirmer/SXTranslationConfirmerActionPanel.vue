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
            <mw-icon
              :icon="mwIconLinkExternal"
              size="16"
              :icon-color="colors.base30"
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
      <mw-col v-if="preFilledSectionTitle" shrink class="me-4">
        <mw-button
          v-i18n:cx-sx-translation-confirmer-more-sections-button-label
          large
          progressive
          type="text"
          @click="onMoreSectionsClick"
        />
      </mw-col>
      <mw-col v-if="targetPageExists && isDesktop" shrink class="me-4">
        <mw-button
          v-i18n:cx-sx-translation-confirmer-new-desktop-translation-button-label
          large
          @click="startNewTranslation"
        />
      </mw-col>
      <mw-col shrink>
        <mw-button
          large
          :progressive="isProgressiveButton"
          :label="actionButtonLabel"
          @click="onSectionSelectorClick"
        />
      </mw-col>
    </mw-row>
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol, MwIcon } from "@/lib/mediawiki.ui";
import { computed, inject, onMounted } from "vue";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { setTranslationURLParams } from "@/utils/urlHandler";
import useActionPanel from "./useActionPanel";
import useApplicationState from "@/composables/useApplicationState";
import useSectionSelectorClickHandler from "./useSectionSelectorClickHandler";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";
import useDevice from "@/composables/useDevice";

export default {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwIcon,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const colors = inject("colors");
    const { targetLanguageAutonym, currentSectionSuggestion } =
      useApplicationState(store);

    const {
      clearPreFilledSection,
      startNewTranslation,
      onSectionSelectorClick,
      preFilledSectionTitle,
    } = useSectionSelectorClickHandler();

    const {
      actionInformationMessageArgs,
      getActionButtonLabel,
      isProgressiveButton,
      targetArticlePath,
      targetPageExists,
    } = useActionPanel(currentSectionSuggestion);

    const bananaI18n = useI18n();

    const actionButtonLabel = computed(() =>
      bananaI18n.i18n(getActionButtonLabel(!!preFilledSectionTitle.value))
    );

    const { isDesktop } = useDevice();

    const actionInformationMessage = computed(() =>
      bananaI18n.i18n(...actionInformationMessageArgs.value)
    );

    const onMoreSectionsClick = () => {
      router.push({ name: "sx-section-selector" });
      setTranslationURLParams(currentSectionSuggestion.value);
    };

    onMounted(() => {
      const preFilledSection = preFilledSectionTitle.value;

      if (
        !!preFilledSection &&
        !currentSectionSuggestion.value.hasSectionTitle(preFilledSection)
      ) {
        clearPreFilledSection();
      }
    });

    return {
      actionButtonLabel,
      actionInformationMessage,
      isProgressiveButton,
      mwIconLinkExternal,
      onMoreSectionsClick,
      startNewTranslation,
      onSectionSelectorClick,
      preFilledSectionTitle,
      targetArticlePath,
      targetLanguageAutonym,
      targetPageExists,
      colors,
      isDesktop,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-translation-confirmer-body__pre-filled-banner {
  background-color: @background-color-primary;
  h6 {
    font-weight: @font-weight-bold;
    color: @wmui-color-base20;
    // TODO: Should we have typography helper for this one?
    font-size: 14px;
  }
}
</style>
