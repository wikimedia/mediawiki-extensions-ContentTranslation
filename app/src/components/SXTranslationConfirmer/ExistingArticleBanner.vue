<template>
  <section v-if="!!missingSectionsCount" class="mt-1">
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
        <span
          v-i18n:cx-sx-existing-translation-additional-info="[
            `&quot;${firstMissingSection}&quot;`,
            missingSectionsCount - 1
          ]"
        />
      </mw-col>
    </mw-row>
  </section>
</template>

<script>
import { MwCol, MwRow, MwIcon } from "@/lib/mediawiki.ui";
import { getAutonym } from "@wikimedia/language-data";
import { siteMapper } from "@/utils/mediawikiHelper";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";
import { computed } from "@vue/composition-api";

export default {
  name: "ExistingArticleBanner",
  components: { MwRow, MwCol, MwIcon },
  setup(props, context) {
    const store = context.root.$store;

    const sectionSuggestion = computed(
      () => store.state.application.currentSectionSuggestion
    );

    const targetArticlePath = computed(() =>
      siteMapper.getPageUrl(
        sectionSuggestion.value?.targetLanguage || "",
        sectionSuggestion.value?.targetTitle || ""
      )
    );

    const targetLanguageAutonym = computed(() =>
      getAutonym(sectionSuggestion.value?.targetLanguage)
    );

    const missingSectionsCount = computed(
      () => sectionSuggestion.value?.missingSectionsCount
    );
    const firstMissingSection = computed(
      () => Object.keys(sectionSuggestion.value?.missingSections || {})?.[0]
    );

    return {
      firstMissingSection,
      missingSectionsCount,
      mwIconLinkExternal,
      sectionSuggestion,
      targetArticlePath,
      targetLanguageAutonym
    };
  }
};
</script>
