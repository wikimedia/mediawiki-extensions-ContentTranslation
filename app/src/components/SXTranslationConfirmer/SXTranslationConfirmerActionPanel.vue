<template>
  <section class="sx-translation-confirmer-body pb-4">
    <section
      v-if="!!preFilledSectionTitle"
      class="sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
    >
      <h6 v-i18n:cx-sx-translation-confirmer-prefilled-section-heading />
      <h5 class="ma-0" v-text="preFilledSectionTitle" />
    </section>
    <section v-else-if="translationExists" class="mt-1 px-4 pt-4">
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
      class="sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4"
      :justify="!!preFilledSectionTitle ? 'between' : 'center'"
    >
      <mw-col v-if="preFilledSectionTitle" shrink>
        <mw-button
          v-i18n:cx-sx-translation-confirmer-more-sections-button-label
          large
          progressive
          type="text"
          :label="actionButtonLabel"
          @click="onMoreSectionsClick"
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
import { computed, ref } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { getUrl, siteMapper } from "@/utils/mediawikiHelper";
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
    const router = context.root.$router;

    const sectionSuggestion = computed(
      () => store.state.application.currentSectionSuggestion
    );

    const translationExists = computed(
      () => !!sectionSuggestion.value?.translationExists
    );

    const urlParams = new URLSearchParams(location.search);
    const preFilledSectionTitle = ref(urlParams.get("section"));

    const actionButtonLabel = computed(() => {
      return context.root.$i18n(
        getActionButtonLabel(
          sectionSuggestion.value,
          !!preFilledSectionTitle.value
        )
      );
    });

    const onSectionSelectorClick = async () => {
      if (!!preFilledSectionTitle.value) {
        const section = await store.dispatch(
          "application/selectPageSectionByTitle",
          preFilledSectionTitle.value
        );

        if (section) {
          router.push({
            name: "sx-content-comparator",
            params: { force: true }
          });
        } else {
          preFilledSectionTitle.value = null;
          const urlParams = new URLSearchParams(location.search);
          urlParams.delete("section");

          history.replaceState(
            {},
            document.title,
            getUrl("Special:ContentTranslation", Object.fromEntries(urlParams))
          );
        }
      } else if (translationExists.value) {
        router.push({ name: "sx-section-selector" });
      } else {
        await store.dispatch("application/selectPageSectionByIndex", 0);
        router.push({ name: "sx-quick-tutorial", params: { force: true } });
      }
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
        !translationExists.value ||
        sectionSuggestion.value?.missingSectionsCount > 0
    );

    const onMoreSectionsClick = () => {
      router.push({ name: "sx-section-selector" });
      store.dispatch("application/setTranslationURLParams");
    };

    return {
      actionButtonLabel,
      actionInformationMessage,
      firstMissingSection,
      isProgressiveButton,
      mwIconLinkExternal,
      onMoreSectionsClick,
      onSectionSelectorClick,
      preFilledSectionTitle,
      targetArticlePath,
      targetLanguageAutonym,
      translationExists
    };
  }
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
