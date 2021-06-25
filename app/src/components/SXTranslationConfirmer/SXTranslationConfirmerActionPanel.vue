<template>
  <section class="sx-translation-confirmer__body pa-4">
    <section v-if="translationExists" class="mt-1">
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
              :icon-color="$mwui.colors.base30"
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
      class="sx-translation-confirmer__action pt-5 pb-2 ma-0"
      justify="center"
    >
      <mw-button
        large
        :progressive="isProgressiveButton"
        :label="actionButtonLabel"
        @click="onSectionSelectorClick"
      />
    </mw-row>
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol, MwIcon } from "@/lib/mediawiki.ui";
import { computed } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { siteMapper } from "@/utils/mediawikiHelper";
import getActionInformationMessageArgs from "./getActionInformationMessageArgs";
import getActionButtonLabel from "./getActionButtonLabel";

export default {
  name: "SxTranslationConfirmerActionPanel",
  components: {
    MwButton,
    MwRow,
    MwCol,
    MwIcon
  },
  setup(props, context) {
    const store = context.root.$store;

    const sectionSuggestion = computed(
      () => store.state.application.currentSectionSuggestion
    );

    const translationExists = computed(
      () => sectionSuggestion.value.translationExists
    );

    const actionButtonLabel = computed(() => {
      return context.root.$i18n(getActionButtonLabel(sectionSuggestion.value));
    });

    const onSectionSelectorClick = () => {
      context.root.$router.push({ name: "sx-section-selector" });
      store.dispatch("application/setTranslationURLParams");
    };

    const targetArticlePath = computed(() =>
      siteMapper.getPageUrl(
        sectionSuggestion.value?.targetLanguage || "",
        sectionSuggestion.value?.targetTitle || ""
      )
    );

    const targetLanguageAutonym = computed(() =>
      getAutonym(sectionSuggestion.value?.targetLanguage)
    );

    const firstMissingSection = computed(
      () => Object.keys(sectionSuggestion.value?.missingSections || {})?.[0]
    );

    const actionInformationMessage = computed(() =>
      context.root.$i18n(
        ...getActionInformationMessageArgs(sectionSuggestion.value)
      )
    );

    const isProgressiveButton = computed(
      () =>
        !sectionSuggestion.value.translationExists ||
        sectionSuggestion.value?.missingSectionsCount > 0
    );

    return {
      actionButtonLabel,
      actionInformationMessage,
      firstMissingSection,
      isProgressiveButton,
      mwIconLinkExternal,
      onSectionSelectorClick,
      targetArticlePath,
      targetLanguageAutonym,
      translationExists
    };
  }
};
</script>
